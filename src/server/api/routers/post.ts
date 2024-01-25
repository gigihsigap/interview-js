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
    .input(z.object({ name: z.number() }))
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

  getTriangle: publicProcedure.query(({ ctx }) => {
    const data = ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
    let arr = []
    let str = String(name)
    let temp = `0`
    for (let i = 0; i < str.length; i++) {
      arr.push(`${str[i]}${temp}`)
      temp = temp + `0`
    }
    return {
      result: arr
    }
  }),
  
  getGanjil: publicProcedure
    .input(z.object({ name: z.number() }))
    .query(({ input }) => {
      console.log("getGanjil")
      return {
        name: input.name + 1000
      }
    }),

  getGenap: publicProcedure
    .input(z.object({ name: z.number() }))
    .query(({ input }) => {
      console.log("getGenap")
      return {
        name: input.name + 100000
      }
    })

});
