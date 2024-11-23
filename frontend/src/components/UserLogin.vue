<template>
  <div>
    <AppHeader />
    <div class="max-w-md mt-12 mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Terms and Conditions Checkbox -->
        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            v-model="acceptTerms"
            :disabled="!email || !password"
            required
            class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label for="terms" class="ml-2 text-sm text-gray-600">
            I agree to the <a href="" target="_blank" class="text-indigo-600">Terms and Conditions</a>
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="!acceptTerms"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400"
        >
          Login
        </button>
      </form>

      <!-- Error Message -->
      <p v-if="error" class="mt-4 text-red-500 text-sm">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppHeader from './AppHeader.vue';


export default {
  data() {
    return {
      email: "",
      password: "",
      acceptTerms: false, 
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      this.error = null;
      try {
        const response = await axios.post("http://127.0.0.1:8000/login/", {
          email: this.email,
          password: this.password,
          terms_conditions: this.acceptTerms,
        });
        const { access, refresh } = response.data;

        // Save tokens in localStorage or cookies
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);

        // Redirect to the dashboard or another authenticated route
        this.$router.push("/products");
      } catch (error) {
        if (error.response && error.response.data) {
          this.error = error.response.data.error || "Login failed.";
        } else {
          this.error = "An error occurred. Please try again.";
        }
      }
    },
  },

  components: {
    AppHeader,
  },
};


</script>