<template>
  <div>
    <div>
      <p>OPTION IS {{ option }}</p>
      <input id="textInput" v-model="option" placeholder="give thing for ballot"/>
      <button id="button" @click="buttonClick">Button</button>
    </div>
    <div id="options" v-for="option of votingOptions">
      <p>{{ option }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotingOptionsList',
  data() {
    return {
      option: '',
      votingOptions: []
    }
  },
  methods: {
    buttonClick() {
      console.log(this.option)
      this.votingOptions.push(this.option)
    }
  }
};
</script>
