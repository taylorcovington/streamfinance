import { useRouter } from "next/router";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

/**
 * Used on the Login and Sign Up screens to handle authentication. Can be shared between those as Passport.js doesn't differentiate between logging in and signing up.
 */

interface AuthenticationFormProps {
  btnText: string;
}

export default function AuthenticationForm(props: AuthenticationFormProps) {
  const { btnText } = props;
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { r } = router.query;
  const redirect = r?.toString();

  return (
    <>
      <form
        className="mt-8 space-y-6"
        onSubmit={(evt) => {
          evt.preventDefault();
          // POST a request with the users email or phone number to the server
          fetch(`/api/auth/magiclink`, {
            method: `POST`,
            body: JSON.stringify({
              redirect,
              destination: email,
            }),
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => res.json())
            .then((json) => {
              if (json.success) {
                // Add the email and security code to the query params so we can show them on the /check-mailbox page
                router.push(
                  `/check-mailbox?e=${encodeURIComponent(email)}&c=${json.code}`
                );
              }
            });
        }}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-slate-100 group-hover:text-slate-200"
                aria-hidden="true"
              />
            </span>
            {btnText}
          </button>
        </div>
      </form>
    </>
  );
}

// <form
//   onSubmit={(evt) => {
//     evt.preventDefault();
//     // POST a request with the users email or phone number to the server
//     fetch(`/api/auth/magiclink`, {
//       method: `POST`,
//       body: JSON.stringify({
//         redirect,
//         destination: email,
//       }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.success) {
//           // Add the email and security code to the query params so we can show them on the /check-mailbox page
//           router.push(
//             `/check-mailbox?e=${encodeURIComponent(email)}&c=${json.code}`
//           );
//         }
//       });
//   }}
// >
//   <input
//     type="email"
//     placeholder="me@hello.com"
//     value={email}
//     onChange={(evt) => setEmail(evt.target.value)}
//   />
//   <button type="submit">Let's go!</button>
// </form>
