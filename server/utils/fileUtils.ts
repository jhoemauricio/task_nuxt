// file system do node para trabalhar com arquivos versão baseada em Promises permite usar await fs.readFile(), await fs.writeFile()
import {promises as fs} from 'fs';
// O módulo path ajuda a montar caminhos de arquivos de forma segura e independente do sistema operacional.
import {resolve} from 'path';

// transforma um caminho relativo em um caminho absoluto
const dbPath = resolve("server/db/tasks.json");

// readDB() → buscar os dados.
export async function readDB(){

    try {
        // abri e lê o arquivo como texto
        const data = await fs.readFile(dbPath,"utf-8");
        // transforma o texto em objeto/array
        return JSON.parse(data);
    }catch(err:any){
        // Se não existir, retorna lista vazia
        return []; 
    }
}

// writeDB() → salvar os dados.
export async function writeDB(data:any){
    
    // fs.writeFile → sobrescreve o conteúdo do arquivo.json
    // JSON.stringify(data, null, 2) → transforma o objeto/array em texto JSON
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8")

}