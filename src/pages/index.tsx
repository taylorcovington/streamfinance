import Link from "next/link";
import Image from "next/image";
import phoneImg from "../../public/phone-mockup.png";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useGetCurrentUserQuery } from "../client/graphql/getCurrentUser.generated";
import { useState } from "react";
import { useRouter } from "next/router";
import LayoutLanding from "../client/components/LayoutLanding";

function Homepage() {
  const [{ data }] = useGetCurrentUserQuery();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { r } = router.query;
  const redirect = r?.toString();

  return (
    <LayoutLanding>
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    {/* <a
                      href="#"
                      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-sky-500 rounded-full">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">Visit our careers page</span>
                      <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                    </a> */}
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">A better way to</span>
                      <span className="block text-sky-400">
                        manage finances
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Building wealth starts with managing your steams of
                      income. We built Stream Finance to start managing your
                      streams!
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form
                        className="sm:max-w-xl sm:mx-auto lg:mx-0"
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
                                  `/check-mailbox?e=${encodeURIComponent(
                                    email
                                  )}&c=${json.code}`
                                );
                              }
                            });
                        }}
                      >
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900"
                              value={email}
                              onChange={(evt) => setEmail(evt.target.value)}
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-sky-500 text-white font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 14-day trial, no credit card
                          necessary. By providing your email, you agree to our{" "}
                          <a href="#" className="font-medium text-white">
                            terms of service
                          </a>
                          .
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <Image
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={phoneImg}
                      alt=""
                      width={3500}
                      height={2500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
    </LayoutLanding>
  );
}

export default Homepage;

// <div className="text-center">
//   <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//     Stream Finance
//   </h1>
//   <Image src={logo} alt=""/>

// </div>
// <h2>Follow your income streams to wealth.</h2>
// {!data?.currentUser ? (
//   <>
//     <Link href="/get-started">Get started</Link>
//     <Link href="/login">Login</Link>
//   </>
// ) : (
//   <Link href="/app">Go to dashboard</Link>
// )}
