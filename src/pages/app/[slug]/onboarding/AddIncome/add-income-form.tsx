import { FormEvent } from "react";
import { IUserIncome } from "../interfaces";

type AddincomeProps = {
  income: IUserIncome;
  index: number;
  handleSubmit: (input: FormEvent<HTMLFormElement>) => void;
  handleChange: (value: string, name: string) => void;
};

const AddIncomeForm = (props: AddincomeProps) => {
  const { income, index, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-3">
        <h2>Income Source {index}</h2>
        <div className="col-span-1 sm:col-span-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Income Name
          </label>
          <input
            value={income.name}
            // defaultValue=''
            // value=
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            onChange={(evt) => handleChange(evt.target.value, evt.target.name)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1 sm:col-span-4">
          <label
            htmlFor="ownerName"
            className="block text-sm font-medium text-gray-700"
          >
            Owner Name
          </label>
          <input
            value={income.ownerName}
            type="text"
            name="ownerName"
            id="owner-name"
            autoComplete="given-name"
            onChange={(evt) => handleChange(evt.target.value, evt.target.name)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>
        <div className="col-span-1 sm:col-span-4">
          <label
            htmlFor="payAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount earned each paycheck
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              value={income.payAmount}
              type="number"
              name="payAmount"
              id="payAmount"
              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              aria-describedby="pay-amount-currency"
              onChange={(evt) =>
                handleChange(evt.target.value, evt.target.name)
              }
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span
                className="text-gray-500 sm:text-sm"
                id="pay-amount-currency"
              >
                USD
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-4">
          <label
            htmlFor="payFrequency"
            className="block text-sm font-medium text-gray-700"
          >
            Pay Frequency
          </label>
          <select
            id="payFrequency"
            name="payFrequency"
            autoComplete="pay-frequency"
            onChange={(evt) => handleChange(evt.target.value, evt.target.name)}
            className="focus:ring-cyan-500 focus:border-cyan-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
          >
            <option>Bi-Weekly</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        <div className="col-span-1 sm:col-span-4">
          <label
            htmlFor="incomeType"
            className="block text-sm font-medium text-gray-700"
          >
            Income Type
          </label>
          <select
            // value={income.incomeType}
            id="incomeType"
            name="incomeType"
            autoComplete="income-type"
            onChange={(evt) => handleChange(evt.target.value, evt.target.name)}
            className="focus:ring-cyan-500 focus:border-cyan-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
          >
            <option>Primary</option>
            <option>Secondary</option>
            <option>Spouse</option>
            <option>Side Hustle</option>
          </select>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          // disabled={!name || !email}
          // onClick={() => {
          //   if (!name || !email) return;
          //   toast.promise(
          //     updateUser({
          //       name,
          //       email,
          //       userId: id,
          //     }),
          //     {
          //       loading: `Updating...`,
          //       success: `Saved!`,
          //       error: (err) => err,
          //     }
          //   );
          //   setNextOnboardingTask((prev: number) => prev + 1)
          // }}
          className="bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddIncomeForm;
