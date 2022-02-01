<template>
  <div class="bg-gray-600 p-5">
    <div class="container mx-auto">
      <div class="lg:mx-20 flex justify-between items-center">
        <div class="">
          <img src="#" alt="User Logo" />
        </div>
        <div class="text-white lg:py-3">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/profile">Profie</router-link> |
          <router-link to="/Settings">Settings</router-link> |
          <router-link to="/login">Login</router-link> |
          <router-link to="/Logout">Logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Navbar",
};
</script>
