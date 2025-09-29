export default defineEventHandler(async (event) => {

  try {
    // event.context.params → guarda os parâmetros da URL (no caso, o id que está em [id].ts).
    const id = Number(event.context.params!.id)
    // Lê os dados enviados no corpo da requisição. exemplo: { title: "Novo título", description: true }
    const body = await readBody(event)

    console.log('PUT body:', body, 'id:', id)

    const data = await readDB()
    console.log('DB data:', data)

    // procura em data o id que for igual ao id que procura
    const index = data.tasks.findIndex((t: any) => t.id === id)

    // se nao encontrar
    if (index === -1) {
      // cria erro do servidor serve para devolver uma resposta HTTP correta (com código e mensagem) quando algo deu errado
      throw createError({ statusCode: 404, statusMessage: 'Task not found' })
    }

    // data.tasks é um array de tarefas, [index] é a posição no array onde está a tarefa que sera atualizada com ...data.tasks[index], ...body
    data.tasks[index] = { ...data.tasks[index], ...body }
    await writeDB(data)

    return data.tasks[index]
  } catch (err) {
    console.error('PUT error:', err)
    throw err
  }
})
