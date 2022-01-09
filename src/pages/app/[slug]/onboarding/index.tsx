import { useEffect, useState } from "react";
import PersonalInformation from "./personal-information";
import { IUser } from "./interfaces";
import AddIncome from "./AddIncome";
import AddNecessities from "./AddNecessities";
import AddSavings from "./add-savings";
import AddInvestments from "./add-investments";

type OnboardingProps = {
  user: IUser;
};

export default function Onboarding(props: OnboardingProps) {
  const { user } = props;
  console.log("user 1: ", user);
  const [nextOnboardingTask, setNextOnboardingTask] = useState(0);

  // onboarding
  // income
  // necessities
  // savings
  // investments
  useEffect(() => {
    if (!user.name) {
      setNextOnboardingTask(0);
    } else if (!user.accountStatuses.income) {
      setNextOnboardingTask(1);
    } else if (!user.accountStatuses.necessities) {
      setNextOnboardingTask(2);
    } else if (!user.accountStatuses.savings) {
      setNextOnboardingTask(3);
    } else if (!user.accountStatuses.investments) {
      setNextOnboardingTask(4);
    }
  }, [user]);

  return (
    <>
      {!user.name && (
        <PersonalInformation
          user={user}
          setNextOnboardingTask={setNextOnboardingTask}
        />
      )}
      {nextOnboardingTask === 1 && !user.accountStatuses.income ? (
        <AddIncome user={user} setNextOnboardingTask={setNextOnboardingTask} />
      ) : null}
      {nextOnboardingTask === 2 && !user.accountStatuses.necessities ? (
        <AddNecessities />
      ) : null}
      {nextOnboardingTask === 3 && !user.accountStatuses.savings ? (
        <AddSavings />
      ) : null}
      {nextOnboardingTask === 4 && !user.accountStatuses.investments ? (
        <AddInvestments />
      ) : null}
    </>
  );
}
