import Footer from "../Footer";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

export default function LayoutLanding({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
