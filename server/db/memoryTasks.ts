let tasks: any[] = [];

export function getTasks(){
    return tasks;
}

export function addTask(task:any){
    tasks.push(task);
    return task;

}

export function updateTask(id:number, updated: any){
    const index = tasks.findIndex(t=> t.id === id);
    if(index === -1) return null;
    tasks[index] = {...tasks[index], ...updated};
    return tasks[index];
}

export function deleteTask(id:number){
    const index = tasks.findIndex(t => t.id === id);
    if(index === -1) return false;tasks.splice(index, 1);
    return true;
}