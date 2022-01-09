export interface IUser {
  id: string;
  email: string;
  name?: string;
  role: IRole;
  accountStatuses: {
    id: string;
    onboarding: boolean;
    income: boolean;
    necessities: boolean;
    savings: boolean;
    investments: boolean;
  };
}

export interface IUserIncome {
  userId: string;
  name: string;
  payFrequency: IPayFrequency;
  payAmount: number;
  ownerName: string;
  incomeType: IIncomeType;
}

export type IRole = "USER" | "ADMIN";
export type IPayFrequency = "BI_WEEKLY" | "WEEKLY" | "MONTHLY";
export type IIncomeType = "PRIMARY" | "SECONDARY" | "SIDE_HUSTLE" | "SPOUSE";
