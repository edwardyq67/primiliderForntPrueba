<style scoped>
:root {
  --color1: #e1ebec;
  --color2: #c7d7da;
  --color3: #8aacb2;
  --color4: #71979f;
  --color5: #567b84;
  --color6: #4a6870;
  --color7: #40565e;
  --color8: #3a4a50;
  --color9: #343f45;

}

</style>
<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-[#343f45]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-[#343f45]">
        <li>
          <a href="/" class="block py-2 px-3 text-white bg-[#71979f] rounded md:bg-transparent md:p-0 dark:text-[#71979f] " aria-current="page">Inicio</a>
        </li>
        <li>
          <a href="/historia" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-[#71979f] md:p-0 dark:text-white  md:dark:hover:bg-transparent">Historia</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-[#71979f] md:p-0 dark:text-white  md:dark:hover:bg-transparent">Tienda</a>
        </li>
      </ul>
    </div>
  </div>
</nav>   
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import emitter from '../../../../eventBus.js';

</script>