import React from "react";
import { useEffect, useState } from "react";
import { useCreateIncomeMutation } from "../../../../../client/graphql/createIncome.generated";
import { useUpdateAccountStatusesMutation } from "../../../../../client/graphql/updateAccountStatuses.generated";
import toast from "react-hot-toast";
import { IPayFrequency, IUser, IUserIncome } from "../interfaces";
import OnboardingContainer from "../../../../../client/components/OnboardingContainer";
import AddIncomeForm from "./add-income-form";

type AddIncomeProps = {
  user: IUser;
  // @ts-ignore
  setNextOnboardingTask: (number) => void;
};

export default function AddIncome(props: AddIncomeProps) {
  const { user, setNextOnboardingTask } = props;
  const { id, name } = user;
  const [, createIncome] = useCreateIncomeMutation();
  const [, updateAccountStatuses] = useUpdateAccountStatusesMutation();
  const [addIncomeModal, setAddIncomeModal] = useState(false);
  const [income, setIncome] = useState<IUserIncome>({
    userId: id,
    name: "",
    payFrequency: "BI_WEEKLY",
    payAmount: 0,
    ownerName: "",
    incomeType: "PRIMARY",
  });
  // const [incomes, setIncomes] = useState<Array<IUserIncome>>([{
  //   id: '',
  //   name: '',
  //   payFrequency: 'BI_WEEKLY',
  //   payAmount: 0,
  //   ownerName: '',
  //   incomeType: 'PRIMARY',

  // }])
  console.log("user props: ", props);
  console.log("incomes: ", income);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log("submitted");
    e.preventDefault();
    toast.promise(
      // @ts-ignore
      createIncome(income),
      {
        loading: `Updating...`,
        success: `Saved!`,
        error: (err) => err,
      }
    );
    updateAccountStatuses({ input: { userId: user.id, income: true } });

    setAddIncomeModal(true);
  };

  const handleChange = (value: string, name: string) => {
    console.log("value: ", value);
    console.log("name: ", typeof value);
    let newValue: string | number = value;

    if (name === "payAmount") {
      newValue = Number(value);
    }

    setIncome((income) => {
      return { ...income, [name]: newValue };
      // const newIncomes = incomes.map(income => {
      // })
      // return newIncomes
    });
  };

  return (
    <>
      <OnboardingContainer>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Nice to meet you, {name}!
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Let's add the fun stuff, all that money you're making!
          </p>
        </div>
        {/* @ts-ignore */}
        {/* {incomes.map((income, index) => { */}
        {/* return ( */}
        <AddIncomeForm
          // key={income.id}
          income={income}
          // index={index + 1}
          index={1}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {/* )  */}
        {/* })} */}
        {/* https://tailwindui.com/components/application-ui/overlays/modals */}
        {/* {addIncomeModal &&} */}
      </OnboardingContainer>
    </>
  );
}
