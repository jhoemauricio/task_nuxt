import { deleteTask } from "~~/server/db/memoryTasks";
// Importa do h3 a função getQuery, que lê parâmetros passados na query string (?id=123)
import { getQuery } from "h3";

/**
 * Endpoint responsável por deletar uma tarefa existente.
 *
 * Como o arquivo está em `server/api/tasks.delete.ts`,
 * o Nuxt cria automaticamente a rota:
 *    DELETE /api/tasks?id=123
 */
export default defineEventHandler((event) => {
  // 1. Lê a query string da URL (ex: /api/tasks?id=123)
  const query = getQuery(event);
  // 2. Converte o valor de id (string) para número
  const id = Number(query.id);
    // 3. Chama deleteTask para remover a tarefa
  //    Retorna um objeto { success: true } se conseguiu deletar
  //    ou { success: false } se não encontrou o id
  return { success: deleteTask(id) };
});