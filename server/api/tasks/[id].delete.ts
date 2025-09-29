import {readDB, writeDB} from '~~/server/utils/fileUtils'

export default defineEventHandler(async (event) => {

    // event.context.params → guarda os parâmetros da URL (no caso, o id que está em [id].ts).
    const id = Number(event.context.params!.id)
    const data = await readDB()

    // O filter vai percorrer cada tarefa: Se o id da tarefa for diferente de "2" por exemplo, ela fica no array. Senao vai o novo array sem o id encontrado.
    data.tasks = data.tasks.filter((t: any) => t.id !== id)
    // escreve no arquivo
    await writeDB(data)
    // retorna true
    return {
        success: true
    }

})