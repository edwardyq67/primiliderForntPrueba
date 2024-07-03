<script setup>
import { onMounted } from "vue";

import { Offcanvas, Ripple, Dropdown, initTWE } from "tw-elements";
import Principal from "./components/modificar/Principal.vue";
import Ejemplo from'./components/modificar/EjemploPuba.vue'
import Ejemplo1 from "./components/ejemploWeb/ejemplo1/Ejemplo1.vue";
onMounted(() => {
  initTWE({ Offcanvas, Ripple, Dropdown });
});

</script>

<template>
  <div>
    <button
      class="inline-block rounded fixed bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      type="button"
      data-twe-offcanvas-toggle
      data-twe-target="#principal"
      aria-controls="principal"
    >
      Editar
    </button>
      <Ejemplo1/>
    <div
      class="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-[#F0F0F1] bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
      tabindex="-1"
      id="principal"
      aria-labelledby="principalLabel"
      data-twe-offcanvas-init
    >
      <div class="flex items-center justify-between px-4 py-3">
        <button
          type="button"
          class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          data-twe-offcanvas-dismiss
          aria-label="Close"
        >
          <span class="[&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Publicar
        </button>
      </div>
      <div class="grid-grow overflow-y-auto">
        <Ejemplo/>
        
      </div>
    </div>
  </div>
</template>
