<script setup>
import { defineProps } from 'vue';

const props = defineProps(['togglePie']);
</script>

<template>
  <div class="grid gap-2">
    <div class="grid border-r bg-white border-[#F0F0F1]">
      <div class="flex cursor-pointer" @click="togglePie">
        <div class="bg-[#4a6870] flex justify-center items-center px-3">
          <i class="text-[20px] text-[#c7d7da] fa-solid fa-chevron-left"></i>
        </div>
        <div class="grid ml-3 py-2">
          <h3>Usted está personalizando</h3>
          <h2>Global</h2>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between">
        <h4>Tipografía</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
      <div class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between">
        <h4>Paleta de Colores</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
      <div class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between">
        <h4>Botones</h4>
        <i class="flex justify-center items-center text-black fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>
