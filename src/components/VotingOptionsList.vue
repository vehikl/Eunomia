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
      <button id="button" @click="buttonClick">Button</button>
    </div>
    <div id="options" v-for="option of votingOptions">
      <VotingOption :title="option" :enabled="isVotingEnabled" />
    </div>
    <button @click="connect">Hey hi hello</button>
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
      pusher: null,
      app: null,
      logChannel: null,
      authEndpoint: null,
      host: "127.0.0.1",
      port: 6001,
      option: "",
      votingOptions: [],
      isVotingEnabled: false,
      connected: false,
      votingPayload: {
        choice: "snickers",
      },
      response: "",
    };
  },
  methods: {
    buttonClick() {
      if (this.option.length > 0 && this.option.length < 32) {
        this.votingOptions.push(this.option);
        this.option = "";
      }
    },
    toggleIsVotingEnabled() {
      if (this.votingOptions.length > 0) {
        this.isVotingEnabled = !this.isVotingEnabled;
      }
    },
    connect() {
      console.log(this.response);
      this.connected = true;
    },
    disconnect() {
      this.connected = false;
    },
  },
  computed: {
    votingButtonVerb() {
      return !this.isVotingEnabled ? "Start" : "Stop";
    },
  },
  // beforeMount() {
  //   fetch('http://localhost:8000/api/socket/data')
  //       .then(response => response.json())
  //       .then(data => this.response = data.value);
  // },
  mounted() {
    console.log("snickers");
  },
};
</script>
