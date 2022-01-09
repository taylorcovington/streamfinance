import {
  extendType,
  inputObjectType,
  nonNull,
  objectType,
  stringArg,
  enumType,
  booleanArg,
} from "nexus";
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

export const AccountStatusInputType = inputObjectType({
  name: "AccountStatusInputType",
  definition(t) {
    t.nonNull.string("userId");
    t.nullable.boolean("onboarding");
    t.nullable.boolean("income");
    t.nullable.boolean("necessities");
    t.nullable.boolean("savings");
    t.nullable.boolean("investments");
  },
});

const mutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.nullable.field("createAccountStatuses", {
      type: "AccountStatuses",
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_, { userId }, ctx) => {
        if (!ctx.user?.id || userId !== ctx.user.id) return null;
        return await prisma.accountStatuses.create({
          data: {
            userId,
          },
        });
      },
    }),
      t.nullable.field("updateAccountStatuses", {
        type: "AccountStatuses",
        args: {
          input: AccountStatusInputType,
        },
        resolve: async (_, { input }, ctx) => {
          // if (!ctx.user?.id || args.userId !== ctx.user.id) return null;

          return await prisma.accountStatuses.update({
            where: { userId: input!.userId },
            // @ts-ignore
            data: input,
          });
        },
      });
  },
});

export default [AccountStatuses, mutations];
