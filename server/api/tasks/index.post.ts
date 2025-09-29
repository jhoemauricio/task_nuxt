// importa as funções criadas no fileUtils
import {readDB, writeDB} from '~~/server/utils/fileUtils'

// passa dos dados da requisição 'event'
export default defineEventHandler(async(event)=>{
    
    // Pega os dados que vieram na requisição ex: { title: "", description: "" } /  readBody → Converte os dados enviados pelo cliente no corpo da requisição em um objeto JavaScript
    const body = await readBody(event)

    // Lê o conteúdo atual do "banco" (JSON).
    const data = await readDB();

    // cria a nova task / id:Date.now() gera Id aleatório, ...body → pega os dados enviados no corpo da requisição.
    const newTask = { id:Date.now(), ...body}
    // add a nova tarefa
    data.tasks.push(newTask)

    // Salva o JSON atualizado no arquivo.
    await writeDB(data)

    // retorna a novaTarefa
    return newTask
})




