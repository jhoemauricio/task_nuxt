// Array que guarda todas as tarefas em memória
// Importante: como não usamos banco de dados, ao reiniciar o servidor as tarefas são perdidas
let tasks: any[] = [];

// Retorna a lista de todas as tarefas.
export function getTasks(){
    return tasks;
}

// adiciona tarefa
export function addTask(task:any){
    tasks.push(task); // insere no final do array
    return task;  // devolve o objeto adicionado

}


export function updateTask(id:number, updated: any){
     // procura o índice da tarefa que tem o id fornecido
    const index = tasks.findIndex(t=> t.id === id);
    // senao encontrar retorna null
    if(index === -1) return null;
    // mescla a tarefa atual com os novos dados
    tasks[index] = {...tasks[index], ...updated};
    // retorna a versão atualizada
    return tasks[index];
}

// Remove uma tarefa da lista pelo id
export function deleteTask(id:number){

    // procura o índice da tarefa
    const index = tasks.findIndex(t => t.id === id);
    // se não achou, não pode deletar
    if(index === -1) return false;
    // remove a tarefa da posição encontrada
    tasks.splice(index, 1);
    // confirma que foi removida
    return true;
}