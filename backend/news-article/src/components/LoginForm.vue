<template>
  <!-- in the end add justify-between and remove margin-->
  <div
    class="bg-zinc-100 h-[90%] min-h-96 w-[30%] rounded-xl flex flex-col py-10 px-11"
  >
    <section class="flex w-full">
      <button
        :class="
          isLogin == 'login'
            ? 'bg-zinc-950 text-white'
            : 'bg-zinc-100 text-zinc-800'
        "
        class="py-1.5 px-3 flex-1 rounded-md font-medium text-sm transition-all"
        @click="setActive('login')"
      >
        Log in
      </button>
      <button
        :class="
          isLogin == 'register'
            ? 'bg-zinc-950 text-white'
            : 'bg-zinc-100 text-zinc-800'
        "
        class="py-1.5 px-3 flex-1 rounded-md font-medium text-sm transition-all"
        @click="setActive('register')"
      >
        Register
      </button>
    </section>
    <section class="my-14">
      <h2 class="text-3xl font-bold text-center">
        {{ isLogin == "login" ? "Welcome back" : "Create a new account" }}
      </h2>
    </section>
    <form class="flex flex-col" @submit.prevent="handleLogin">
      <input
        class="rounded bg-white my-2 outline-1 border-2 border-zinc-300 px-3 py-2 text-sm"
        placeholder="Email"
        type="email"
        v-model="user.email"
      />
      <input
        class="rounded bg-white my-2 outline-1 border-2 border-zinc-300 px-3 py-2 text-sm"
        placeholder="Password"
        type="password"
        v-model="user.password"
      />
      <button
        class="bg-zinc-950 text-white py-2.5 px-3 rounded-md font-medium text-sm mt-5"
      >
        {{ isLogin == "login" ? "Log in with Email" : "Register with Email" }}
      </button>
    </form>

    <section>
      <div class="flex items-center my-7">
        <hr class="flex-grow border-t border-gray-300" />
        <span class="mx-1.5 text-gray-500 text-xs">OR</span>
        <hr class="flex-grow border-t border-gray-300" />
      </div>
    </section>

    <section class="flex flex-col">
      <button
        class="bg-white border border-zinc-300 border-solid text-black py-2.5 px-3 rounded-md font-medium text-sm flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-5 w-5 mx-2"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 128 128"
        >
          <path
            fill="#fff"
            d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
          ></path>
          <path
            fill="#e33629"
            d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
          ></path>
          <path
            fill="#f8bd00"
            d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
          ></path>
          <path
            fill="#587dbd"
            d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
          ></path>
          <path
            fill="#319f43"
            d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4"
          ></path>
        </svg>
        Continue with Google
      </button>
    </section>
    <!-- add google button and terms or service | privacy policy -->
    <section
      class="flex justify-between text-xs font-medium text-nowrap text-zinc-400 mt-20"
    >
      <div class="flex flex-1">
        <p>Term of Service</p>
        <p class="mx-1">|</p>
        <p>Privacy Policy</p>
      </div>
      <p class="flex-1 text-end">Article News</p>
    </section>
  </div>
</template>

<!-- after i finish refactor this to multiple components -->

<script setup>
import { ref, reactive, toRaw } from "vue";
import axios from "axios";

const isLogin = ref("login");

const user = reactive({
  email: "",
  password: "",
});

const setActive = (state) => {
  isLogin.value = state;
};

const handleLogin = async () => {
  console.log(user);
  if (isLogin.value == "login") {
    // login unimplemented
    const res = await axios
      .post("http://localhost:8080/api/login", toRaw(user))
      .catch((err) => {
        console.error("Error during login: ", err.response);
      });
      // later make the error in the ui (email or password)
    console.log(res);

  } else if (isLogin.value == "register") {
    const res = await axios
      .post("http://localhost:8080/api/register", toRaw(user))
      .catch((err) => {
        console.error("Error during register: ", err.response);
      });
      // later make the error in the ui (email or password)
    console.log(res);
  }
};
</script>
