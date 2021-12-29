import Authentication from "../client/components/Authentication";
import LayoutLanding from "../client/components/LayoutLanding";

function Login() {
  return (
    <LayoutLanding>
      <Authentication heading="Welcome back!" btnText="Let's go!" />
    </LayoutLanding>
  );
}

export default Login;
