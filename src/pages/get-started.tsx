import Authentication from "../client/components/Authentication";
import LayoutLanding from "../client/components/LayoutLanding";

function Signup() {
  return (
    <LayoutLanding>
      <Authentication heading="Sign up" btnText="Let's go!" />
    </LayoutLanding>
  );
}

export default Signup;
