<template>
  <div>
    <button id="votingToggleButton" @click="toggleIsVotingEnabled">{{ this.votingButtonVerb }} the voting!</button>
    <div>
      <input id="textInput" v-model="option" placeholder="give thing for ballot"/>
      <button id="button" @click="addItemToVotingOptions">Button</button>
    </div>
    <div id="options" v-for="option of votingOptions">
      <VotingOption
          :title="option"
          :enabled="isVotingEnabled"
      />
    </div>
  </div>
</template>

<script>
import VotingOption from "./VotingOption.vue";

export default {
  name: 'VotingOptionsList',
  components: {
    VotingOption,
  },
  data() {
    return {
      option: '',
      votingOptions: [],
      isVotingEnabled: false,
    }
  },
  methods: {
    addItemToVotingOptions() {
      if (this.isValidOption()) {
        this.votingOptions.push(this.option)
        this.option = ''
      }
    },
    toggleIsVotingEnabled() {
      // todo why does toggling via inverse of self not work?
      // eg. this.isVotingEnabled = !this.isVotingEnabled doesn't update state?
      if (this.votingOptions.length > 0) {
        this.isVotingEnabled = !this.isVotingEnabled
      }
    },
    isValidOption() {
      if (this.option.length === 0) {
        return false
      }

      if (this.option.length > 32) {
        return false
      }

      if (this.votingOptions.includes(this.option)) {
        return false
      }

      return true
    }
  },
  computed: {
    votingButtonVerb() {
      return !this.isVotingEnabled ? 'Start' : 'Stop'
    }
  }
};
</script>
