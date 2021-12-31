import { extendType, nonNull, objectType, stringArg, enumType } from "nexus";
import prisma from "../../db/prisma";

const AccountStatuses = objectType({
  name: "AccountStatuses",
  definition(t) {
    t.model.id();
    t.model.user();
    t.model.userId();
    t.model.onboarding();
    t.model.income();
    t.model.necessities();
    t.model.savings();
    t.model.investments();
  },
});

const mutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.nullable.field("updateAccountStatuses", {
      type: "AccountStatuses",
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx) => {
        if (!ctx.user?.id || args.userId !== ctx.user.id) return null;

        return await prisma.accountStatuses.update({
          where: { id: args.userId },
          data: { onboarding: true },
        });
      },
    });
  },
});

export default [AccountStatuses, mutations];
