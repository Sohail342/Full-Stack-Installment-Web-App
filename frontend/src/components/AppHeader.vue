<template>
    <header class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex items-center justify-between px-4">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><a href="/" class="hover:text-gray-300">Home</a></li>
            <li><a href="/about" class="hover:text-gray-300">About</a></li>
            <li><a href="/services" class="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  