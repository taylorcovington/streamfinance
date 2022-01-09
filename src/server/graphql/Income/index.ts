import {
  extendType,
  nonNull,
  objectType,
  stringArg,
  enumType,
  intArg,
} from "nexus";
import prisma from "../../db/prisma";

const Income = objectType({
  name: "Income",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.userId();
    t.model.name();
    t.model.payFrequency();
    t.model.payAmount();
    t.model.incomeType();
  },
});

const mutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.nullable.field("createIncome", {
      type: "Income",
      args: {
        userId: nonNull(stringArg()),
        name: nonNull(stringArg()),
        payFrequency: nonNull(PayFrequencyEnum),
        payAmount: nonNull(intArg()),
        incomeType: nonNull(IncomeTypeEnum),
      },
      resolve: async (_, args, ctx) => {
        if (!ctx.user?.id || args.userId !== ctx.user.id) return null;
        console.log("args: ", args);

        const res = await prisma.income.create({
          data: args,
        });

        console.log("res: ", res);
        return res;
      },
    });
  },
});

const IncomeTypeEnum = enumType({
  name: "IncomeTypeEnum",
  members: ["PRIMARY", "SECONDARY", "SPOUSE", "SIDE_HUSTLE"],
});
const PayFrequencyEnum = enumType({
  name: "PayFrequencyEnum",
  members: ["WEEKLY", "BI_WEEKLY", "MONTHLY"],
});

export default [Income, mutations];
