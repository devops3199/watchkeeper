import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // await prisma.user.create({
  //   data: {
  //     email: "ray-watch@yopmail.com",
  //     name: "ray",
  //     role: "admin",
  //   },
  // });

  const users = await prisma.user.findMany();

  return users;
});
