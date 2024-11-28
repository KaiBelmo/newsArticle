<template>
  <div class="bg-gray-100 min-h-96 w-2/5 rounded-xl flex flex-col py-10 px-11">
    <!-- Button Section -->
    <section class="flex w-full mb-6">
      <button
        :class="
          isLogin == 'login'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-black'
        "
        class="py-2 px-4 flex-1 rounded-md font-medium text-sm transition-all"
        @click="setActive('login')"
      >
        Log in
      </button>
      <button
        :class="
          isLogin == 'register'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-black'
        "
        class="py-2 px-4 flex-1 rounded-md font-medium text-sm transition-all"
        @click="setActive('register')"
      >
        Register
      </button>
    </section>

    <!-- Heading Section -->
    <section class="my-10">
      <h2 class="text-3xl font-bold text-center text-black">
        {{ isLogin == "login" ? "Welcome back" : "Create a new account" }}
      </h2>
    </section>

    <!-- Form Section -->
    <form class="flex flex-col" @submit.prevent="handleLogin">
      <!-- Email Input -->
      <label for="emailInput" class="text-left text-sm text-red-600">
        {{ userError.emailError }}
      </label>
      <input
        class="rounded bg-white my-2 outline-none border-2 border-gray-300 px-3 py-2 text-sm"
        placeholder="Email"
        type="email"
        v-model="user.email"
        id="emailInput"
      />

      <!-- Password Input -->
      <label for="PasswordInput" class="text-left text-sm text-red-600">
        {{ userError.passwordError }}
      </label>
      <input
        class="rounded bg-white my-2 outline-none border-2 border-gray-300 px-3 py-2 text-sm"
        placeholder="Password"
        type="password"
        v-model="user.password"
        id="PasswordInput"
      />

      <!-- Submit Button -->
      <button
        class="bg-red-600 text-white py-2.5 px-3 rounded-md font-medium text-sm mt-5"
      >
        {{ isLogin == "login" ? "Log in with Email" : "Register with Email" }}
      </button>
    </form>

    <!-- Terms and Privacy Section -->
    <section class="flex justify-between text-xs font-medium text-zinc-400 mt-10">
      <div class="flex flex-1">
        <p class="hover:underline cursor-pointer">Term of Service</p>
        <p class="mx-1">|</p>
        <p class="hover:underline cursor-pointer">Privacy Policy</p>
      </div>
      <p class="flex-1 text-end text-red-600">Article News</p>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, toRaw } from "vue";
import axios from "axios";
import { handleLoginError, resetUserError } from "../utils/handleLoginError";
import { useRouter } from 'vue-router';

const router = useRouter();

const isLogin = ref("login");

const user = reactive({
  email: "",
  password: "",
});

const userError = reactive({
  emailError: "",
  passwordError: "",
  unknownError: "",
});

const setActive = (state) => {
  isLogin.value = state;
};

const handleLogin = async () => {
  resetUserError(userError);
  if (isLogin.value == "login") {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/login",
        toRaw(user)
      );
      console.log("logged in");
      console.log(res);

      router.push(`/user-profile/${user.email}`);
    } catch (err) {
      console.error("Error during login: ", err.response);
      handleLoginError(err, userError);
      console.log(userError);
      // TODO: login unimplemented add cookies
    }
  } else if (isLogin.value == "register") {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/register",
        toRaw(user)
      );
      console.log("registered email");
      console.log(res);

      router.push(`/user-profile/${user.email}`);
    } catch (err) {
      console.error("Error during registering: ", err.response);
      handleLoginError(err, userError);
      console.log(userError);
    }
  }
};
</script>
