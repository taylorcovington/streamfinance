import AppNavbar from "../AppNavbar";

interface Props {
  children: React.ReactNode;
}

export default function LayoutApp({ children }: Props) {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  );
}
