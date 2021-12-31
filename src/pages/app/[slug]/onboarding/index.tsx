import React from "react";
import PersonalInformation from "./personal-information";
import { IUser } from "./interfaces";

type OnboardingProps = {
  user: IUser;
};

export default function Onboarding(props: OnboardingProps) {
  const { user } = props;
  console.log("user 1: ", user);
  // Get all the onboarding stuff here
  return <>{!user.name && <PersonalInformation user={user} />}</>;
}
