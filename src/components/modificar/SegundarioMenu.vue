<template>
  <div class="grid gap-2">
    <div class="grid border-r bg-white border-[#F0F0F1]">
      <div class="flex cursor-pointer" @click="toggleMenu">
        <div class="bg-[#4a6870] flex justify-center items-center px-3">
          <i class="text-[20px] text-[#c7d7da] fa-solid fa-chevron-left"></i>
        </div>
        <div class="grid ml-3 py-2">
          <h3>Usted está personalizando</h3>
          <h2>Menu</h2>
        </div>
      </div>
    </div>
    <div class="grid">
      <!-- Sección de Logo -->
      <div>
        <div
          class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
          @click="toggleAccordion('logo')"
          :class="{ active: activeTab === 'logo' }"
        >
          <h4>Logo</h4>
          <i
            class="flex justify-center items-center text-black fa-solid"
            :class="{
              'fa-chevron-down': activeTab === 'logo',
              'fa-chevron-right': activeTab !== 'logo',
            }"
          ></i>
        </div>
        <div v-if="activeTab === 'logo'" class="accordion-content">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#4a6870] text-[#c7d7da] dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:border-gray-500"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <i class="fa-solid fa-hippo"></i>
              <p class="mb-2 text-sm">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>

      <!-- Sección de Página -->
      <div>
        <div
          class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
          @click="toggleAccordion('pagina')"
          :class="{ active: activeTab === 'pagina' }"
        >
          <h4>Pagina</h4>
          <i
            class="flex justify-center items-center text-black fa-solid"
            :class="{
              'fa-chevron-down': activeTab === 'pagina',
              'fa-chevron-right': activeTab !== 'pagina',
            }"
          ></i>
        </div>
        <div v-if="activeTab === 'pagina'" class="accordion-content">
          <ul>
            <!-- Utilizamos v-for para iterar sobre menuNav -->
            <li v-for="(item, index) in menuNav" :key="index">
              <div class="flex items-center justify-between px-4 border border-[#71979f] mb-1 rounded">
                <input
                  class="text-[#71979f] bg-transparent outline-none hover:outline-none"
                  v-model="editedItems[index]"
                  type="text"
                />
                <i
                  class="fa-solid fa-trash-can text-[#71979f] hover:text-red-500 duration-500 transition-all cursor-pointer p-2"
                  @click="deleteItem(index)"
                ></i>
              </div>
            </li>
            <i
              class="bg-[#71979f] py-2 rounded hover:bg-[#40565e] fa-solid fa-plus flex justify-center text-[#40565e] mt-2 hover:text-[#8aacb2] duration-300 transition-all cursor-pointer"
              @click="addItem"
            ></i>
          </ul>
        </div>
      </div>

      <!-- Sección de Estilos -->
      <div>
        <div
          class="cursor-pointer flex px-4 py-3 border bg-white border-[#F0F0F1] justify-between"
          @click="toggleAccordion('estilos')"
          :class="{ active: activeTab === 'estilos' }"
        >
          <h4>Estilos</h4>
          <i
            class="flex justify-center items-center text-black fa-solid"
            :class="{
              'fa-chevron-down': activeTab === 'estilos',
              'fa-chevron-right': activeTab !== 'estilos',
            }"
          ></i>
        </div>
        <div v-if="activeTab === 'estilos'" class="accordion-content">
          Contenido del acordeón para Estilos
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import emitter from '../../eventBus.js';

const props = defineProps(["toggleMenu"]);

const activeTab = ref(null);

function toggleAccordion(tab) {
  if (activeTab.value === tab) {
    activeTab.value = null; // Si se hace clic en el mismo tab, lo cerramos
  } else {
    activeTab.value = tab; // Abrimos el tab clickeado
  }
}

const menuNav = ref(["Inicio", "Historia", "Tienda"]);
const editedItems = ref([...menuNav.value]);

watch(editedItems, (newValue) => {
  emitter.emit('update-items', newValue);
});

// Función para eliminar un elemento del array
function deleteItem(index) {
  menuNav.value.splice(index, 1);
  editedItems.value.splice(index, 1);
}

// Función para agregar un nuevo elemento al array
function addItem() {
  const newItem = "Nuevo Elemento";
  menuNav.value.push(newItem);
  editedItems.value.push(newItem);
}

const agregar = ref(false);
</script>

<style scoped>
/* Estilos adicionales */
.accordion-content {
  padding: 10px 20px;
  border-bottom: 1px solid #f0f0f1;
  border-left: 1px solid #f0f0f1;
  border-right: 1px solid #f0f0f1;
}

.active .fa-chevron-down {
  transform: rotate(180deg);
}

.fa-chevron-right {
  transition: transform 0.3s ease;
}

.fa-chevron-down {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>
