<template>
  <div>
    <p>{{ title }}</p>
    <input
        name="vote"
        type="radio"
        :id="this.titleForId + 'RadioButton'"
        :disabled=!enabled
    >
  </div>
</template>

<script>
export default {
  name: "VotingOption",
  data() {
    return {}
  },
  props: {
    title: 'Title',
    enabled: true,
  },
  methods: {},
  computed: {
    titleForId() {
      return this.title.replaceAll(' ', '')
    }
  }
}
</script>

<style scoped>
</style>