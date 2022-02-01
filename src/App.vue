<template>
  <div class="min-h-screen grid grid-rows-[auto,1fr,auto]">
    <!-- Navbar -->
    <navbar />

    <!-- Content -->
    <div class="container mx-auto p-5">
      <router-view />
    </div>

    <!-- Footer -->
    <footerBar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import navbar from "./components/Layouts/Navbar.vue";
import footerBar from "./components/Layouts/Footerbar.vue";

export default {
  components: {
    navbar,
    footerBar,
  },
  name: "App",
};
</script>
