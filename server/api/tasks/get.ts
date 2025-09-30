import { getTasks } from "~~/server/db/memoryTasks";

export default defineEventHandler(() => {
  return getTasks();
});
