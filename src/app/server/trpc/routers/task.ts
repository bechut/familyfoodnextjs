import { z } from "zod";
import { router, publicProcedure } from "@/app/server/trpc/trpc";
import { prisma } from "@/app/prisma/client";

export const taskRouter = router({
  getAll: publicProcedure.query(async () => {
    return prisma.user.findMany();
  }),
  create: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input }) => {
      console.log(input);
      // return prisma.task.create({ data: { title: input.title } });
    }),
  ping: publicProcedure.query(() => "pong"),
});
