export default defineEventHandler(async (event) => {
  return { processId: process.pid, response: "pong" };
});
