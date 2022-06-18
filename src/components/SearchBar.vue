<template>
  <div class="search mx-auto">
    <div class="w-full flex drop-shadow-lg rounded-lg bg-white font-medium">
      <span class="material-symbols-outlined my-auto">
        chevron_left
      </span>
      <input
        class="placeholder-shown:border-gray-0
        focus:outline-none
        p-2 w-full rounded-lg"
        placeholder="you@example.com"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};

</script>

<style lang="scss" scoped>
</style>
