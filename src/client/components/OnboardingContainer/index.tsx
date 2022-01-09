import React from "react";

export default function OnboardingContainer(props: {
  children?: React.ReactChild | React.ReactChild[];
}) {
  const { children } = props;
  return (
    <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
