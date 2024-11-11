<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,.fade-leave-to {
  opacity: 0;
}
</style>