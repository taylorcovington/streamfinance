import { useRouter } from "next/router";
import LayoutLanding from "../client/components/LayoutLanding";

function CheckMailbox() {
  const router = useRouter();
  const email = router.query.e && decodeURIComponent(router.query.e.toString());
  const code = router.query.c && decodeURIComponent(router.query.c.toString());

  return (
    <LayoutLanding>
      <div className="py-20 bg-gray-900 sm:py-10 h-screen">
        <div className="relative sm:py-10">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 "
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-900"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-sky-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-sky-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-sky-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Check your mailbox!
                  </h2>
                  <p className="mt-4 mx-auto max-w-2xl text-lg text-sky-200">
                    We've sent you a magic link to{" "}
                    <strong className="text-white">
                      {email ? email : "your email"}
                    </strong>
                    .
                  </p>
                  <p className="mt-4 mx-auto max-w-2xl text-lg text-sky-200">
                    Click on the link to finish signing in.
                  </p>
                  {code && (
                    <p className="mt-4 mx-auto max-w-2xl text-lg text-sky-200">
                      Make sure the verification code matches{" "}
                      <strong className="text-white">{code}</strong>!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}

export default CheckMailbox;
{
  /* <h1>Check your mailbox!</h1>
<p>We've sent you a magic link to {email ? email : "your email"}.</p>
<p>Click on the link to finish signing in.</p>
{code && <p>Make sure the verification code matches {code}!</p>} */
}
