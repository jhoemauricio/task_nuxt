import { updateTask } from "~~/server/db/memoryTasks";
// Funções do h3:
// - readBody → lê o corpo (body) da requisição (dados que o cliente enviou)
// - getQuery → lê parâmetros da query string da URL (?id=123 por exemplo)
import { readBody, getQuery } from "h3";


/**
 * Endpoint responsável por atualizar uma tarefa existente.
 * 
 * Como o arquivo está em `server/api/tasks.put.ts`,
 * o Nuxt cria automaticamente a rota:
 *    PUT /api/tasks?id=123
 */
export default defineEventHandler(async (event) => {
  // 1. Lê os dados enviados no body (ex: { title: "Novo título", done: true })
  const body = await readBody(event);
  // 2. Lê a query string da URL (ex: /api/tasks?id=123)
  const query = getQuery(event);
  // 3. Converte o id recebido (string) para número
  const id = Number(query.id);
  // 4. Atualiza a tarefa com o id informado usando os novos dados do body
  return updateTask(id, body);
});
