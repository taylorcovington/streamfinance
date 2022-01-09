import React from "react";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../../../../client/graphql/updateUser.generated";
import toast from "react-hot-toast";

import { IUser } from "./interfaces";
import OnboardingContainer from "../../../../client/components/OnboardingContainer";

type PersonalInformationProps = {
  user: IUser;
  // @ts-ignore
  setNextOnboardingTask: (number) => void;
};

export default function PersonalInformation(props: PersonalInformationProps) {
  const { user, setNextOnboardingTask } = props;
  const { id, name: usersName, email: usersEmail } = user;
  console.log("user props: ", props);
  const [, updateUser] = useUpdateUserMutation();
  const [name, setName] = useState<string>(usersName ? usersName : "");
  const [email, setEmail] = useState<string>(usersEmail ? usersEmail : "");

  return (
    <>
      <OnboardingContainer>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Hi! Let's get to know each other
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p> */}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              value={name}
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              onChange={(evt) => setName(evt.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            />
          </div>

          <div className="col-span-1 sm:col-span-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              value={email}
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              onChange={(evt) => setEmail(evt.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={!name || !email}
            onClick={() => {
              if (!name || !email) return;
              toast.promise(
                updateUser({
                  name,
                  email,
                  userId: id,
                }),
                {
                  loading: `Updating...`,
                  success: `Saved!`,
                  error: (err) => err,
                }
              );
              setNextOnboardingTask((prev: number) => prev + 1);
            }}
            className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Save
          </button>
        </div>
      </OnboardingContainer>
    </>
  );
}
