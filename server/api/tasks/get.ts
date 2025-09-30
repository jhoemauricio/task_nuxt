// Importa a função getTasks que está definida em "server/db/memoryTasks"
// Essa função devolve todas as tarefas que estão salvas em memória
import { getTasks } from "~~/server/db/memoryTasks";
// defineEventHandler para lidar com as requisições e devolver uma resposta ao cliente.
export default defineEventHandler(() => {
  // retornamos a lista de tarefas
  return getTasks();
});
