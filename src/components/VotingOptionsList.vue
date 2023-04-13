<template>
  <div>
    <button id="votingToggleButton" @click="toggleIsVotingEnabled">
      {{ this.votingButtonVerb }} the voting!
    </button>
    <div>
      <input
          id="textInput"
          v-model="option"
          placeholder="give new thing for ballot"
      />
      <button id="button" @click="addOption">Add Option</button>
    </div>
    <div id="options" v-for="option of votingOptions">
      <VotingOption :title="option" :enabled="isVotingEnabled"/>
    </div>
  </div>
</template>

<script>
import VotingOption from "./VotingOption.vue";

export default {
  name: "VotingOptionsList",
  components: {
    VotingOption,
  },
  data() {
    return {
      option: "",
      votingOptions: [],
      isVotingEnabled: false,
      connected: false,
    };
  },
  methods: {
    addOption() {
      if (this.isValidVotingOption) {
        this.votingOptions.push(this.option);
        this.option = "";
      }
    },
    toggleIsVotingEnabled() {
      if (this.votingOptions.length > 0) {
        this.isVotingEnabled = !this.isVotingEnabled;
      }
    },
    disconnect() {
      this.connected = false;
    },
  },
  computed: {
    votingButtonVerb() {
      return !this.isVotingEnabled ? "Start" : "Stop";
    },
    isValidVotingOption() {
      return this.option.length > 0
          && this.option.length < 32
          && !this.votingOptions.includes(this.option)
    },
  },
};
</script>
