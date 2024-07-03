<template>
  <div>
    <section class="relative grid container mx-auto border-b-[.1em] w-full">
      <div
        class="items-center flex justify-between border-b-[.1em] accordion-content px-2 py-3 cursor-pointer"
        :class="{ active: seccion1 }"
        @click="toggleAccordion1"
      >
        <h4>seccion1</h4>
        <i
          class="text-black fas fa-chevron-right"
          :class="{ 'fa-chevron-down': seccion1 }"
        ></i>
      </div>
      <div v-if="seccion1" class="px-5 py-3">
        <form @submit.prevent="handleSubmit">
          <div class="mb-5">
            <label for="titulo" class="block mb-2 text-sm text-gray-900">Titulo</label>
            <input
              type="text"
              id="titulo"
              v-model="formData.title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Titulo"
              
            />
          </div>
          <div class="mb-5">
            <label for="parrafo" class="block mb-2 text-sm text-gray-900">Parrafo</label>
            <textarea
              v-model="formData.parrafo_seccion1"
              id="parrafo"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Parrafo..."
              
            ></textarea>
          </div>
          <div class="mb-5">
            <label for="url" class="block mb-2 text-sm text-gray-900">URL</label>
            <input
              v-model="formData.link_bottom_seccion1"
              type="text"
              id="url"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="URL"
              
            />
          </div>
          <label class="block mb-2 text-sm text-gray-900" for="small_size">Small file input</label>
          <input
            class="block w-full mb-5 text-xs text-gray-900 p-1 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="small_size"
            type="file"
            @change="handleFileUpload"
          />
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            
          >
            Guardar
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from 'axios';

const formData = ref({
  title: '',
  parrafo_seccion1: '',
  link_bottom_seccion1: '',
  img_seccion1: '', // Esto almacenará la URL base64 de la imagen
});

const handleSubmit = async () => {
  try {
    await axios.put('https://127.0.0.1:8000/api/pagina/1', formData.value);
    window.location.reload(); // Recargar la página después de la actualización
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    console.error('Detalles del error:', error.response.data); // Muestra detalles del error del servidor
  }
};

const seccion1 = ref(false); // Inicialmente false para estar cerrado
const toggleAccordion1 = () => {
  seccion1.value = !seccion1.value; // Alterna el valor entre true y false
};

const handleFileUpload = (event) => {
  let file = event.target.files[0]; // Acceder al archivo seleccionado desde el evento
  let reader = new FileReader();
  reader.onloadend = () => {
    formData.value.img_seccion1 = reader.result; // Actualizar formData con la URL base64 de la imagen
  };
  console.log(reader.readAsDataURL(file));
};
</script>


<style>
.accordion-content.active .fa-chevron-down {
  transform: rotate(90deg);
}

.fa-chevron-right {
  transition: transform 0.3s ease;
}

.fa-chevron-down {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}
</style>
