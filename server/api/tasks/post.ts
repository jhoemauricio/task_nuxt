import { addTask } from "~~/server/db/memoryTasks";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newTask = { ...body, id: Date.now() };
  return addTask(newTask);
});



