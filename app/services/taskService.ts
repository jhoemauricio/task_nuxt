// services/taskService.ts
export const taskService = {
  // Lista todas as tasks
  list: () => $fetch('/api/tasks/get'),

  // Cria uma nova task
  create: (task: any) => $fetch('/api/tasks/post', {
    method: 'POST' as any, // ✅ ignora a checagem do TS,
    body: task
  }),

  // Atualiza task pelo ID
  update: (id: number, task: any) => $fetch(`/api/tasks/put?id=${id}`, {
    method: 'PUT',
    body: task
  }),

  // Remove task pelo ID
  remove: (id: number) => $fetch(`/api/tasks/delete?id=${id}`, {
    method: 'DELETE'
  }),

  // Alterna o "done"
  toggleDone: (id: number, done: boolean) => $fetch(`/api/tasks/put?id=${id}`, {
    method: 'PUT',
    body: { done }
  })
}
