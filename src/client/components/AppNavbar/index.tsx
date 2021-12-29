import Link from "next/link";
import { useGetCurrentUserQuery } from "../../graphql/getCurrentUser.generated";
import logoNoIcon from "../../../../public/logo-noicon.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

function AppNavbar() {
  const [{ data }] = useGetCurrentUserQuery();
  const isAuthenticated = !!data?.currentUser;

  return <></>;
}

export default AppNavbar;

// <div style={{ display: `flex`, justifyContent: `space-between` }}>
//   <Link href={isAuthenticated ? `/app` : `/`}>Stream Finance</Link>
//   {isAuthenticated && <Link href="/api/auth/logout">Logout</Link>}
// </div>
