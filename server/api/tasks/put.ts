import { updateTask } from "~~/server/db/memoryTasks";
import { readBody, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const query = getQuery(event);
  const id = Number(query.id);
  return updateTask(id, body);
});
