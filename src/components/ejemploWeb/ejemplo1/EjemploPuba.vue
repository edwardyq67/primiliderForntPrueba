<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div class="grid gap-10 pt-10" v-for="item in componente" :key="item.id">
        <!-- Renderiza tus datos aquí -->
        <div class="flex justify-evenly items-center">
          <div class="grid gap-2">
            <h1>{{ item.title }}</h1>
            <p>{{ item.parrafo_seccion1 }}</p>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Comprar ahora
            </button>
          </div>
          <img
            src="https://static-media.hotmart.com/LNXrcx2kHal8beOsS9N5Fhh11oE=/filters:quality(100):format(webp)/klickart-prod/uploads/media/file/7996909/miller_s3.png"
            alt=""
          />
        </div>
        <div class="container mx-auto grid gap-5">
          <h2>{{ item.subtitle_seccion2 }}</h2>
          <p>{{ item.parrafo_seccion2 }}</p>
          <div class="plyr__video-embed" id="player">
            <iframe
              class="rounded mx-auto min-w-[80vw] md:min-w-[60vw] min-h-[40vh] md:min-h-[60vh]"
              src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
              allowfullscreen
              allowtransparency
              allow="autoplay"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="grid justify-center text-center container mx-auto gap-5">
          <h2>{{ item.subtitle_seccion3 }}</h2>
          <div class="md:min-w-[400px] min-w-[80vw]">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 w-full focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
        <div class="flex justify-evenly items-center container mx-auto">
          <img
            src="https://static-media.hotmart.com/LNXrcx2kHal8beOsS9N5Fhh11oE=/filters:quality(100):format(webp)/klickart-prod/uploads/media/file/7996909/miller_s3.png"
            alt=""
          />
          <div class="grid gap-2">
            <span>{{ item.span_seccion4 }}</span>
            <h2>{{ item.subtitle_seccion4 }}</h2>
            <p>{{ item.parrafo_seccion4 }}</p>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
        <div class="container mx-auto grid justify-center text-center gap-5">
          <h2>{{ item.subtitle_seccion5 }}</h2>
          <h3>{{ item.parrafo1_seccion5 }}</h3>
          <p>{{ item.parrafo2_seccion5 }}</p>
        </div>
        <div class="container mx-auto grid justify-center text-center gap-5">
          <h2>Accede al contenido desde cualquier diapositivo</h2>

          <div
            class="max-w-sm grid gap-5 p-6 text-center bg-white border border-gray-200 rounded-lg shadow"
          >
            <h2>POR APENAS</h2>

            <span class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {{ item.precio_seccion6 }}
            </span>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
        <div class="container mx-auto grid gap-5 py-10">
          <h2 class="text-center">{{ item.subtitle_seccion7 }}</h2>
          <div class="relative grid justify-center container mx-auto w-[70vw]">
            <div
              class="relative grid container mx-auto border-b-[.1em] w-[70vw]"
            >
              <div
                class="items-center flex justify-between border-b-[.1em] accordion-content px-2 py-3 cursor-pointer"
                :class="{ active: activeTab1 === item.id }"
                @click="toggleAccordion1(item.id)"
              >
                <h4>{{ item.pregunta1_seccion7 }}</h4>
                <i
                  class="fas fa-chevron-right"
                  :class="{ 'fa-chevron-down': activeTab1 === item.id }"
                ></i>
              </div>
              <div v-if="activeTab1 === item.id" class="px-5 py-3">
                <p>{{ item.respuesta1_seccion7 }}</p>
              </div>
            </div>
            <div
              class="relative grid container mx-auto border-b-[.1em] w-[70vw]"
            >
              <div
                class="items-center flex justify-between border-b-[.1em] accordion-content px-2 py-3 cursor-pointer"
                :class="{ active: activeTab2 === item.id }"
                @click="toggleAccordion2(item.id)"
              >
                <h4>{{ item.pregunta2_seccion7 }}</h4>
                <i
                  class="fas fa-chevron-right"
                  :class="{ 'fa-chevron-down': activeTab2 === item.id }"
                ></i>
              </div>
              <div v-if="activeTab2 === item.id" class="px-5 py-3">
                <p>{{ item.respuesta2_seccion7 }}</p>
              </div>
            </div>
            <div
              class="relative grid container mx-auto border-b-[.1em] w-[70vw]"
            >
              <div
                class="items-center flex justify-between border-b-[.1em] accordion-content px-2 py-3 cursor-pointer"
                :class="{ active: activeTab3 === item.id }"
                @click="toggleAccordion3(item.id)"
              >
                <h4>{{ item.pregunta3_seccion7 }}</h4>
                <i
                  class="fas fa-chevron-right"
                  :class="{ 'fa-chevron-down': activeTab3 === item.id }"
                ></i>
              </div>
              <div v-if="activeTab3 === item.id" class="px-5 py-3">
                <p>{{ item.respuesta3_seccion7 }}</p>
              </div>
            </div>
            <div
              class="relative grid container mx-auto border-b-[.1em] w-[70vw]"
            >
              <div
                class="items-center flex justify-between border-b-[.1em] accordion-content px-2 py-3 cursor-pointer"
                :class="{ active: activeTab4 === item.id }"
                @click="toggleAccordion4(item.id)"
              >
                <h4>{{ item.pregunta4_seccion7 }}</h4>
                <i
                  class="fas fa-chevron-right"
                  :class="{ 'fa-chevron-down': activeTab4 === item.id }"
                ></i>
              </div>
              <div v-if="activeTab4 === item.id" class="px-5 py-3">
                <p>{{ item.respuesta4_seccion7 }}</p>
              </div>
            </div>
            <div
              class="relative grid container mx-auto border-b-[.1em] w-[70vw]"
            >
              <div
                class="items-center flex justify-between border-b-[.1em] accordion-content px-2 py-3 cursor-pointer"
                :class="{ active: activeTab5 === item.id }"
                @click="toggleAccordion5(item.id)"
              >
                <h4>{{ item.pregunta5_seccion7 }}</h4>
                <i
                  class="fas fa-chevron-right"
                  :class="{ 'fa-chevron-down': activeTab5 === item.id }"
                ></i>
              </div>
              <div v-if="activeTab5 === item.id" class="px-5 py-3">
                <p>{{ item.respuesta5_seccion7 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineProps, ref, onMounted } from "vue";
import axios from "axios";

const props = defineProps(["toggleMenu"]);

const componente = ref([]);
const loading = ref(true);
const activeTab1 = ref(null);
const activeTab2 = ref(null);
const activeTab3 = ref(null);
const activeTab4 = ref(null);
const activeTab5 = ref(null);

const toggleAccordion1 = (tab) => {
  activeTab1.value = activeTab1.value === tab ? null : tab;
};
const toggleAccordion2 = (tab) => {
  activeTab2.value = activeTab2.value === tab ? null : tab;
};
const toggleAccordion3 = (tab) => {
  activeTab3.value = activeTab3.value === tab ? null : tab;
};
const toggleAccordion4 = (tab) => {
  activeTab4.value = activeTab4.value === tab ? null : tab;
};
const toggleAccordion5 = (tab) => {
  activeTab5.value = activeTab5.value === tab ? null : tab;
};

onMounted(() => {
  axios
    .get("http://127.0.0.1:8000/api/pagina")
    .then((res) => {
      componente.value = res.data;
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
      loading.value = false;
    });
});
</script>
<style>
iframe {
  pointer-events: none;
}
iframe:hover {
  pointer-events: auto;
}

.active .fa-chevron-down {
  transform: rotate(90deg);
}

.fa-chevron-right {
  transition: transform 0.3s ease;
}

.fa-chevron-down {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>