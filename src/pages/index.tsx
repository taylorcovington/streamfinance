import Link from "next/link";
import { useGetCurrentUserQuery } from "../client/graphql/getCurrentUser.generated";

function Homepage() {
  const [{ data }] = useGetCurrentUserQuery();

  return (
    <>
      <h1>Stream Finance</h1>
      <h2>Follow your income streams to wealth.</h2>
      {!data?.currentUser ? (
        <>
          <Link href="/get-started">Get started</Link>
          <Link href="/login">Login</Link>
        </>
      ) : (
        <Link href="/app">Go to dashboard</Link>
      )}
    </>
  );
}

export default Homepage;
