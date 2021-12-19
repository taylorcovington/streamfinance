import streamFullLogo from "../../../../public/logo.png";
import logo from "../../../../public/streamLogo.png";
import Image from "next/image";
import AuthenticationForm from "../AuthenticationForm";

/**
 * Used on the Login and Sign Up screens to handle authentication. Can be shared between those as Passport.js doesn't differentiate between logging in and signing up.
 */
interface AuthenticationProps {
  heading: string;
  btnText: string;
}

export default function Authentication(props: AuthenticationProps) {
  const { heading, btnText } = props;
  return (
    <>
      <div className="bg-gray-900 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <Image
              className="h-8 w-auto sm:h-10"
              src={logo}
              alt=""
              width={100}
              height={100}
            />
            <h2 className="mb-12 text-center text-3xl font-extrabold text-white">
              {heading}
            </h2>
            {/* <p className=" mt-2 mb-8 text-center text-sm text-gray-400">
               Or{' '}
               <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                 sign up
               </a>
             </p> */}
          </div>
          <AuthenticationForm btnText={btnText} />
        </div>
      </div>
    </>
  );
}
