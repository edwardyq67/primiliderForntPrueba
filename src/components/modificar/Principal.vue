<script setup>
import { ref } from 'vue';
import SegundarioGlobal from "./SegundarioGlobal.vue";
import SegundarioMenu from "./SegundarioMenu.vue";
import SegundarioPagina from "./SegundarioPagina.vue";
import SegundarioPie from "./SegundarioPie.vue";

const isGlobalActive = ref(false);
const isMenuActive = ref(false);
const isPaginaActive = ref(false);
const isPieActive = ref(false);

const toggleGlobal = () => {
  isGlobalActive.value = !isGlobalActive.value;
};

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const togglePagina = () => {
  isPaginaActive.value = !isPaginaActive.value;
};

const togglePie = () => {
  isPieActive.value = !isPieActive.value;
};
</script>

<template>
  <div v-if="!isGlobalActive && !isMenuActive&&!isPaginaActive&&!isPieActive" class="grid gap-2">
    <div class="grid px-4 py-3 border bg-white border-[#F0F0F1]">
      <div class="flex justify-between">
        <h3>Usted está personalizando</h3>
        <i
          class="cursor-pointer flex justify-center items-center h-5 w-5 text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 fa-solid fa-question"
        ></i>
      </div>
      <h2>E-Comer</h2>
    </div>
    <div class="flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between">
      <div class="grid">
        <h3>Tema activo</h3>
        <h2>Astra</h2>
      </div>
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
  
      >
        Cambiar
      </button>
    </div>
    <div class="grid">
      <div
        class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
        @click="toggleGlobal"
      >
        <h4>Global</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
      <div
        class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
        @click="toggleMenu"
      >
        <h4>Menú</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
      <div
        class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
        @click="togglePagina"
      >
        <h4>Página</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
      <div
        class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
        @click="togglePie"
      >
        <h4>Pie de página</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
    </div>

 
    
  </div>
  <SegundarioGlobal v-if="isGlobalActive" :toggleGlobal="toggleGlobal" />
    <SegundarioMenu v-if="isMenuActive" :toggleMenu="toggleMenu" />
    <SegundarioPagina v-if="isPaginaActive" :togglePagina="togglePagina" />
    <SegundarioPie v-if="isPieActive" :togglePie="togglePie" />
</template>
