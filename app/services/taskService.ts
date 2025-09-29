// Exporta um objeto chamado `taskService` que centraliza
// todas as chamadas HTTP relacionadas às `tasks` (tarefas)
export const taskService = {
  // Busca a lista de todas as tasks
  list: () => $fetch('/api/tasks'),
   // Cria uma nova task enviando os dados no corpo da requisição (body)
  create: (task: any) => $fetch('/api/tasks', { method: 'POST', body: task }),
  // Atualiza uma task existente com base no ID
  // Envia os novos dados no body
  update: (id: number, task: any) => $fetch(`/api/tasks/${id}`, { method: 'PUT', body: task }),
  // Remove uma task do backend com base no ID
  remove: (id: number) => $fetch(`/api/tasks/${id}`, { method: 'DELETE' }),
  // Alterna o status "done" (concluído ou não) de uma task
  // Aqui ele faz um PUT enviando apenas a propriedade `done`
  toggleDone: (id: number, done: boolean) =>
    $fetch(`/api/tasks/${id}`, { method: 'PUT', body: { done } })
}
