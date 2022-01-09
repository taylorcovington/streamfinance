import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProjectQuery } from "../../../client/graphql/getProject.generated";
import { useGetCurrentUserQuery } from "../../../client/graphql/getCurrentUser.generated";
import { useCreateAccountStatusesMutation } from "../../../client/graphql/createAccountStatuses.generated";
import Onboarding from "./onboarding";

export default function Dashboard() {
  const router = useRouter();
  const { slug } = router.query;
  const [{ data: userData, fetching, error }] = useGetCurrentUserQuery();
  const [, createAccountStatuses] = useCreateAccountStatusesMutation();

  const [
    { data: projectData, fetching: projectFetching, error: projectError },
  ] = useGetProjectQuery({
    variables: {
      slug: String(slug),
    },
  });

  if (fetching || projectFetching) return <p>Loading...</p>;

  if (error || projectError)
    return <p>{error?.message || projectError?.message}</p>;

  if (!projectData?.project || typeof slug !== "string")
    return <p>Not found.</p>;

  const { project } = projectData;

  if (!userData?.currentUser) {
    if (process.browser) router.push("/login");
    return (
      <p>
        Redirecting to <Link href="/login">/login</Link>
        ...
      </p>
    );
  }

  if (!userData.currentUser.accountStatuses) {
    createAccountStatuses({
      userId: userData.currentUser.id,
    });
  }

  return (
    // if user.onboarding === false - let's start the onboarding process
    <>
      {userData.currentUser.accountStatuses?.onboarding && (
        // @ts-ignore
        <Onboarding user={userData.currentUser} />
      )}
    </>
  );
}

// import Link from "next/link";
// import { useRouter } from "next/router";
// import UpgradeButton from "../../../client/components/UpgradeButton";
// import { useGetProjectQuery } from "../../../client/graphql/getProject.generated";

// function Project() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [{ data, fetching, error }] = useGetProjectQuery({
//     variables: {
//       slug: String(slug),
//     },
//   });

//   if (fetching) return <p>Loading...</p>;

//   if (error) return <p>{error.message}</p>;

//   if (!data?.project || typeof slug !== "string") return <p>Not found.</p>;

//   const { project } = data;

//   return (
//     <>
//       <h1>{project.name}</h1>
//       {!project.paidPlan && <UpgradeButton projectId={project.id} />}
//       <Link href={`/app/${project.slug}/settings`}>Settings</Link>
//     </>
//   );
// }

// export default Project;
