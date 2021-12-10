import Link from "next/link";
import { useGetCurrentUserQuery } from "../client/graphql/getCurrentUser.generated";

function Homepage() {
  const [{ data }] = useGetCurrentUserQuery();

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Stream Finance
        </h1>
      </div>
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
