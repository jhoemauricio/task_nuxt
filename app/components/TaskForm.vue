<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import {useTasks} from '~/composables/useTasks'
import { useTasksStore } from '~/stores/tasks';

// funções do composables
const {addTask, updateTask} = useTasks()
// storeTask
const store = useTasksStore();
const route = useRoute();
const router = useRouter();
// const id recebe o valor que está na URL e verifica se existe e se a id é diferente da string 'new'. Se a condição for verdadeira → converte o id para número senao fica NULL
const id = route.params.id && route.params.id !== 'new' ? Number(route.params.id) : null
// cria a task reativa
const task = ref({ title:'', description: '', status_task: false})

// se tiver um id existente
if(id){
    // procura no array uma task com o mesmo id
    const existing = store.tasks.find(t=> t.id === id)
    // se achou a task, copia os dados dela para dentro de task.value. preenchendo assim o formulário
    if(existing) task.value = {...existing}
}

const save = async () =>{
 // se existe o id entao edita senão cria 
  if(id){
    await updateTask(id, task.value)
  }else {
    await addTask(task.value)
  }
  router.push('/')
}

</script>

<template>


<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="max-w-md w-full">
    <!-- Card branco -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <form @submit.prevent="save">
        <div class="relative z-0 w-full mb-5 group">
          <input v-model="task.title" type="text" name="floating_email" id="floating_email" 
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                   border-0 border-b-2 border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600 
                   peer" 
            placeholder=" " required />
          <label for="floating_email" 
            class="peer-focus:font-medium absolute text-sm text-gray-500 
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                   peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Título
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input v-model="task.description" type="text" name="floating_password" id="floating_password" 
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                   border-0 border-b-2 border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600 
                   peer" 
            placeholder=" " required />
          <label for="floating_password" 
            class="peer-focus:font-medium absolute text-sm text-gray-500 
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                   peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Descrição
          </label>
        </div>

        <!--No botao se existir o id então:  → mostra "Atualizar". Se id não existir → mostra "Criar"-->
    <!-- Botão centralizado no topo -->
<div class="flex justify-center mt-6">
  <button
    @click="router.push('/task/new')"
    class="text-white bg-green-700 hover:bg-green-800 
           focus:ring-4 focus:outline-none focus:ring-green-300 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  >
    {{ id ? 'Atualizar' : 'Criar' }}
  </button>
</div>


      </form>
    </div>
  </div>
</div>








</template>

<style lang="scss" scoped>

</style>