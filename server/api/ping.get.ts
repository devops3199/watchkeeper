// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineEventHandler((event) => {
  return {processId: process.pid, response: 'pong'};
});
