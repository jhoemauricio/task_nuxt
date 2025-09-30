import { deleteTask } from "~~/server/db/memoryTasks";
import { getQuery } from "h3";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const id = Number(query.id);
  return { success: deleteTask(id) };
});