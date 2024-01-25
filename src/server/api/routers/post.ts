import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.number().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  

  getTriangle: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const arr = []
    const str = String(data?.name)
    let temp = `0`
    for (let i = 0; i < str.length; i++) {
      arr.push(`${str[i]}${temp}`)
      temp = temp + `0`
    }
    return {
      data: str,
      result: arr
    }
  }),

  getGanjil: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const maxNumber = Number(data?.name);
    const arr = []
    for (let i = 1; i <= maxNumber; i++) {
      if (i % 2 !== 0) {
        arr.push(i)
      }
    }
    return {
      data: maxNumber,
      result: arr
    }
  }),

  getGenap: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const maxNumber = Number(data?.name);
    const arr = []
    for (let i = 1; i <= maxNumber; i++) {
      if (i % 2 == 0) {
        arr.push(i)
      }
    }
    return {
      data: maxNumber,
      result: arr
    }
  }),

});
