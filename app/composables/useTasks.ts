// importa os services
import { taskService } from "~/services/taskService";
// importa o store
import { useTasksStore } from "~/stores/tasks";

export function useTasks() {
  const store = useTasksStore();

  // Busca todas as tasks
  const fetchTasks = async () => {
    const tasks = await taskService.list();
     // ...t → copia todas as propriedades da tarefa original (id, title, description, etc.).
    // done: t.done ?? false → garante que exista a propriedade done.
   // Se t.done já existe, mantém o valor.
  // Se t.done for undefined ou null, atribui false.
    store.tasks = tasks.map(t => ({
      ...t,
      done: t.done ?? false, // garante que sempre exista "done"
    }));
  };

  // Cria uma nova task
  const addTask = async (task: any) => {
    const newTask = await taskService.create({
      ...task,
      done: false,
    });
    store.tasks.push(newTask);
  };

  // Atualiza uma task existente
  const updateTask = async (id: number, task: any) => {
    const updated = await taskService.update(id, task);
    if (!updated) return; // se o backend não encontrou a task

    const index = store.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      store.tasks[index] = updated;
    }
  };

  // Deleta uma task
  const deleteTask = async (id: number) => {
    const success = await taskService.remove(id);
    if (success) {
      store.tasks = store.tasks.filter(t => t.id !== id);
    }
  };

  // Alterna status "done"
  const toggleTaskDone = async (id: number) => {
    const task = store.tasks.find(t => t.id === id);
    if (!task) return;

    const updated = await taskService.toggleDone(id, !task.done);
    if (updated) {
      task.done = updated.done;
    }
  };

  return {
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskDone,
  };
}
