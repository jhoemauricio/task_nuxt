<script setup lang="ts">
import { useTasks } from '~/composables/useTasks';
import { useTasksStore } from '~/stores/tasks';
import { useRouter } from 'vue-router';

const { fetchTasks, deleteTask, toggleTaskDone } = useTasks();
const store = useTasksStore();
const router = useRouter();

onMounted(() => {
  // lista as tasks
  fetchTasks();
})

// passa o Id e encaminha para a [id].vue
const editarTask = (id: number) => {
  router.push(`/task/${id}`)
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-100 py-6">
    <div class="mb-6">
      <button
        @click="router.push('/task/new')"
        class="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Nova Task
      </button>
    </div>

    <div class="w-full max-w-4xl px-4">
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th class="px-6 py-3">Título</th>
              <th class="px-6 py-3">Descrição</th>
              <th class="px-6 py-3 w-52 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in store.tasks"
              :key="task.id"
              class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
              :class="{ 'line-through text-gray-400': task.done }"
            >
              <th class="px-6 py-4">
                {{ task.title }}
              </th>
              <td class="px-6 py-4 ">
                {{ task.description }}
              </td>
              <td class="px-6 py-4 flex gap-2 justify-center">
                <button
                  @click="editarTask(task.id)"
                  class="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Editar
                </button>
                <button
                  @click="deleteTask(task.id)"
                  class="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Excluir
                </button>
                <!-- Quando o botão é clicado, chama a função toggleTaskDone do composable ou da store. Passa o id da task atual para alternar o status done (concluída ou não).-->
                <button
                  @click="toggleTaskDone(task.id)"
                  class="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                  {{ task.done ? 'Desfazer' : 'Finalizar' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
