<template>
  <div>
    <p> OPTION IS {{option}}</p>
    <input v-model="option" placeholder="give thing for ballot"/>
  </div>
</template>

<script>
export default {
  name: 'VotingOptionsList',
  data() {
    return {
      option: '',
    }
  }
};
</script>

<style scoped>

</style>
