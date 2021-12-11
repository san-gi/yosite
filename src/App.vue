<template>
  <v-app>

      
        <transition name="scale-slide">
        <router-view> </router-view>
      </transition>
      
  </v-app>

</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: Oswald, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 3s ease;
}

.scale-slide-leave-from {
  transform: scale(1);
  opacity: 1;
}

.scale-slide-leave-to {
  transform: scale(2);
  opacity: 0;
}
</style>