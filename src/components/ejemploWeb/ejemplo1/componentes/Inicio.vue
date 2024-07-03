<script setup>
import { ref } from "vue";
</script>

<template>
  <div
    class="px-4 grid gap-2 grid-cols-2 justify-center container mx-auto items-center py-[10vh] min-h-[80vh]"
  >
    <div class="col-span-2 md:col-span-1 flex justify-center md:justify-end">
      <img
        class="w-auto"
        src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718580941/images_app/cafe-removebg-preview.png"
        alt=""
      />
    </div>
    <div class="text-center md:text-start col-span-2 md:col-span-1 grid gap-5">
      <div class="title">
        <h2>Best Quality Products</h2>
        <h1>Cafe Edward</h1>
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
        esse non neque laborum! Explicabo eveniet magnam ea tenetur dolore!
        Nulla voluptatibus minus error iste quisquam officiis obcaecati animi
        sint neque?
      </p>
      <div class="text-center flex justify-center md:justify-start">
        <button class="flex items-center gap-3">
          <i class="fa-solid fa-cart-shopping"></i><span>Shop</span>
        </button>
      </div>
    </div>
  </div>
  <div class="bg-[#1f292d] w-full py-10">
    <div class="px-4 container grid grid-cols-4 mx-auto gap-4">
      <div
        id="caja "
        class="px-2 md:col-span-1 col-span-4 sm:col-span-2 py-10 gap-1 grid bg-[#8aacb2] rounded text-center"
      >
        <div class="flex justify-center">
          <div class="items-center flex justify-center w-10">
            <i class="fa-solid fa-truck-fast text-[1.7em]"></i>
          </div>
          <h2>Free Shipping</h2>
        </div>
        <h3>Above $5 Only</h3>
      </div>
      <div
        id="caja "
        class="px-2 md:col-span-1 col-span-4 sm:col-span-2 py-10 gap-1 grid bg-[#8aacb2] rounded text-center"
      >
        <div class="flex justify-center">
          <div class="items-center flex justify-center w-10">
            <i class="fa-brands fa-stack-overflow text-[1.7em]"></i>
          </div>
          <h2>Certified Organic</h2>
        </div>
        <h3>100% Guarantee</h3>
      </div>
      <div
        id="caja "
        class="px-2 md:col-span-1 col-span-4 sm:col-span-2 py-10 gap-1 grid bg-[#8aacb2] rounded text-center"
      >
        <div class="flex justify-center">
          <div class="items-center flex justify-center w-10">
            <i class="fa-solid fa-hand-holding-dollar text-[1.7em]"></i>
          </div>
          <h2>Huge Savings</h2>
        </div>
        <h3>At Lowest Price</h3>
      </div>
      <div
        id="caja "
        class="px-2 md:col-span-1 col-span-4 sm:col-span-2 py-10 gap-1 grid bg-[#8aacb2] rounded text-center"
      >
        <div class="flex justify-center">
          <div class="items-center flex justify-center w-10">
            <i class="fa-solid fa-recycle text-[1.7em]"></i>
          </div>
          <h2>Easy Returns</h2>
        </div>
        <h3>No Questions Asked</h3>
      </div>
    </div>
  </div>

  <div class="px-4 grid md:gap-5 gap-10 grid-cols-4 justify-center container mx-auto items-center py-[15vh]  ">
  <div class="grid justify-center mx-auto col-span-4 text-center mb-10">
    <h2>Best Selling Products</h2>
    <img class="w-[300px] min-w-[20vw] my-[-3em]" src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718596263/images_app/granoCafe-removebg-preview.png" alt="">
  </div>
  <div class="text-center grid col-span-4 sm:col-span-2 md:col-span-1">
    <img  class="rounded mb-2" src="http://localhost/wordpress/wp-content/uploads/2018/06/coffee-asorted.jpg" alt="">
    <h4>Groceries</h4>
    <h3>Assorted Coffee</h3>
    <p>$35.00</p>
  </div>
  <div class="text-center grid col-span-4 sm:col-span-2 md:col-span-1">
    <img  class="rounded mb-2" src="http://localhost/wordpress/wp-content/uploads/2018/06/sanitizer.jpg" alt="">
    <h4>Groceries</h4>
    <h3>Hand Sanitizer</h3>
    <p>$15.00</p>
  </div>
  <div class="text-center  grid col-span-4 sm:col-span-2 md:col-span-1">
    <img class="rounded mb-2"  src="http://localhost/wordpress/wp-content/uploads/2018/06/red-chillies.jpg" alt="">
    <h4>Groceries</h4>
    <h3>Handpicked Red Chillies</h3>
    <p>$19.00</p>
  </div>
  <div class="text-center grid col-span-4 sm:col-span-2 md:col-span-1">
    <img class="rounded mb-2"  src="http://localhost/wordpress/wp-content/uploads/2018/06/edible-oil.jpg" alt="">
    <h4>Groceries</h4>
    <h3>Natural Extracted Edible Oil</h3>
    <p>$25.00</p>
  </div>
  
  </div>
</template>

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
i {
  color: #e1ebec;
}

button {
  
  background-color: #567b84; /* Color original: var(--color5) */
  color: #8aacb2; /* Color original: var(--color3) */
  transition: all 0.2s;
  padding: 0.5rem 2rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #4a6870; /* Color original: var(--color4) */
  color: #c7d7da; /* Color original: var(--color2) */
}

p {
  color: #8aacb2; /* Color original: var(--color3) */
  font-size: 1.2em;
}

h1 {
  color: #71979f; /* Color original: var(--color4) */
  font-weight: bold;
  font-size: 2.5em;
}

h2 {
  color: #567b84; /* Color original: var(--color5) */
  font-size: 1.5em;
   font-weight: bold;
}

h3 {
  color: #4a6870; /* Color original: var(--color6) */
  font-size: 1.2em;
}

h4 {
  color: #40565e; /* Color original: var(--color7) */
}

h5 {
  color: #3a4a50; /* Color original: var(--color8) */
}

h6 {
  color: #4a6870; /* Color original: var(--color6) */
}
</style>

