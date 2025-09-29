import { defineStore } from "pinia";

// Define a store chamada `tasks`.
// `useTasksStore` será usado no app para acessar e manipular as tasks.
export const useTasksStore = defineStore('tasks', {
  state: () => ({
    // Array de tarefas, cada uma com:
    // id, title, description e opcionalmente `done` (booleano).
    tasks: [] as { id: number; title: string; description: string; done?: boolean }[]
  }),
  actions: {
   
    setTasks(tasks: any[]) {
      // garante que toda task tenha `done` (mesmo que venha do backend sem isso)
      this.tasks = tasks.map(t => ({ ...t, done: t.done ?? false }))
    },
     // Remove uma task pelo ID (filtra todas menos a que tem o ID).
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    // Alterna o status `done` de uma task pelo ID (true/false).
    toggleTaskDone(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    }
  }
})
