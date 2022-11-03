<template>
  <nav class="navbar">
    <Icon name="carbon:face-cool" size="32" @click="handleClick('Face Icon')" />
    <h2>Navigation</h2>
    <Icon
      name="fontisto:nav-icon-a"
      size="32"
      @click="handleClick('Nav Toggle Icon')"
    />
  </nav>
</template>

<script setup lang="ts">
const handleClick = (log: string) => {
  console.log(log);
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
