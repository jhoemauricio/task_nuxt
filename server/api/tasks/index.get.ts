// Importa a função `readDB` que lê os dados do "banco" (nesse caso, um arquivo JSON)
import { readDB } from "~~/server/utils/fileUtils";

// Define o handler de evento (rota da API) usando o Nuxt 3.
// Toda vez que alguém fizer uma requisição para essa rota,
// essa função será executada.
export default defineEventHandler(async () => {

    // Lê os dados do "banco" (arquivo JSON) de forma assíncrona
    const db = await readDB();

    // Retorna apenas o array de `tasks` que está dentro do objeto `db`.
    // Isso será a resposta da API (em JSON) para o cliente.
    return db.tasks;
})
