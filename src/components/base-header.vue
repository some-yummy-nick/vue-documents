<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="header__title">MyApp</h1>
      <div class="user">Username</div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header {
  margin-bottom: 35px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title{
    font-size: 32px;
  }
}
</style>