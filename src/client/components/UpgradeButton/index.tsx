import { loadStripe } from "@stripe/stripe-js";
import { useCreateStripeCheckoutSessionMutation } from "../../graphql/createStripeCheckoutSession.generated";
import { PaidPlan } from "../../graphql/types.generated";

const PUBLIC_STRIPE_API_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY;

/**
 * When clicked, redirects the user to their a Stripe Checkout session for the to upgrade to the paid plan
 */
// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UpgradeButton({ projectId, isActive }: { projectId: string, isActive?: boolean }) {
  const [
    ,
    createStripeCheckoutSession,
  ] = useCreateStripeCheckoutSessionMutation();

  const redirectToCheckout = () => {
    if (!PUBLIC_STRIPE_API_KEY)
      throw new Error(
        "Please define the NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY env var."
      );

    Promise.all([
      loadStripe(PUBLIC_STRIPE_API_KEY),
      createStripeCheckoutSession({
        plan: PaidPlan.Pro,
        projectId,
      }).then(({ data }) => data?.createStripeCheckoutSession),
    ]).then(([stripe, sessionId]) => {
      if (!stripe || !sessionId) return;

      stripe.redirectToCheckout({
        sessionId,
      });
    });
  };

  return <button className={classNames(
    isActive ? "bg-gray-100" : "",
    "block px-4 py-2 text-sm text-gray-700"
  )} onClick={redirectToCheckout}>Upgrade</button>;
}
