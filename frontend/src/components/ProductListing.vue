<template>
    <div>
      <AppHeader />
      <div class="max-w-7xl mx-auto mt-12 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Product Listings</h2>
  
        <!-- Product Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="product in products" :key="product.id" class="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <!-- Product Image -->
            <img :src="getFullImageUrl(product.photo)" alt="Product Image" class="w-full h-48 object-cover rounded-md mb-4" />
            
            <!-- Product Details -->
            <div class="flex flex-col">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
              <p class="text-sm text-gray-500 mb-4">{{ product.category_moto }}</p>
  
              <!-- Button -->
              <button class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
  
        <!-- Loading State -->
        <div v-if="loading" class="text-center mt-8">
          <p class="text-xl text-gray-500">Loading products...</p>
        </div>
  
        <!-- Error Message -->
        <p v-if="error" class="mt-6 text-red-500 text-sm text-center">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import AppHeader from './AppHeader.vue';
  
  export default {
    data() {
      return {
        products: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchProducts() {
        this.loading = true;
        this.error = null; // Reset the error before making the request
        try {
          const accessToken = localStorage.getItem("accessToken");
  
          if (!accessToken) {
            this.error = "You must be logged in to view products.";
            this.loading = false;
            return;
          }
  
          // Attempt to fetch products
          const response = await axios.get("http://127.0.0.1:8000/category_list/", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.products = response.data.results;
          console.log("Products fetched:", this.products);
        } catch (error) {
          console.error("Error fetching products:", error);
          this.error = "An error occurred while fetching products.";
        } finally {
          this.loading = false;
        }
      },
  
      // Method to prepend the full URL for Cloudinary images
      getFullImageUrl(photo) {
        const cloudinaryBaseUrl = 'https://res.cloudinary.com/dms0a62ec/';
        return cloudinaryBaseUrl + photo;
      },
    },
    mounted() {
      this.fetchProducts(); 
    },
    components: {
      AppHeader,
    },
  };
  </script>

  