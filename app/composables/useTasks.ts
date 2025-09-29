// importa os services
import { taskService } from "~/services/taskService";
// importa o store
import { useTasksStore } from "~/stores/tasks";

export function useTasks(){

  const store = useTasksStore()

  // função que lista as tasks
  const fetchTasks = async () => {
    const tasks = await taskService.list()
    // garante que cada task tenha `done`
    store.tasks = tasks.map(t => ({ ...t, done: t.done ?? false }))
  }

  // função que cria uma nova task
  const addTask = async (task: any) => {
    const newTask = await taskService.create({ ...task, done: false })
    store.tasks.push(newTask)
  }

  // função que atualiza a task
  const updateTask = async (id: number, task: any) => {
    const updated = await taskService.update(id, task)
    // Procura no array tasks a posição da task que tem o id
    const index = store.tasks.findIndex(t => t.id === id)
    // Se não encontrar, retorna -1. Verifica se encontrou a task (ou seja, o índice não é -1).
    if (index !== -1) store.tasks[index] = updated
  }

  // função deleta a task
  const deleteTask = async (id: number) => {
    await taskService.remove(id)
    store.tasks = store.tasks.filter(t => t.id !== id)
  }

  // função que finaliza ou desfaz a task
  const toggleTaskDone = async (id: number) => {
    const task = store.tasks.find(t => t.id === id)
    if (!task) return
    const updated = await taskService.toggleDone(id, !task.done)
    task.done = updated.done // mantém sincronizado
  }

  return {
    fetchTasks,      // Retorna a função que busca todas as tasks do backend e atualiza a store
    addTask,         // Retorna a função que cria uma nova task e adiciona na store
    updateTask,      // Retorna a função que atualiza uma task existente na store e no backend
    deleteTask,      // Retorna a função que remove uma task da store e do backend
    toggleTaskDone   // Retorna a função que alterna o status "done" de uma task na store e no backend
  }
}
