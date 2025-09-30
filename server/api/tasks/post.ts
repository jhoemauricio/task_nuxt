import { addTask } from "~~/server/db/memoryTasks";
// Importa a função readBody do h3 (framework HTTP usado pelo Nuxt internamente)
// O readBody lê o corpo (body) de uma requisição POST/PUT
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  // 1. Lê o corpo da requisição (JSON enviado pelo cliente)
  const body = await readBody(event);

   // 2. Cria um novo objeto de tarefa
  //    - copia os dados enviados no body (ex: title, description)
  //    - gera um id único baseado na data atual (Date.now())
  const newTask = { ...body, id: Date.now() };
  // 3. Adiciona a nova tarefa na lista em memória e a retorna como resposta
  return addTask(newTask);
});



