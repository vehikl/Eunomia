<template>
  <div>
    <h1>Eunomia</h1>
    <VotingOptionsList />
  </div>
</template>

<script>
import Pusher from "pusher-js";
import VotingOptionsList from "./VotingOptionsList.vue";

export default {
  name: "VotingSession",
  components: {
    VotingOptionsList,
  },
  data() {
    return {
      pusher: null
    }
  },
  methods: {
    voteCreatedEvent(data) {
      console.log(JSON.stringify(data))
    }
  },
  computed: {
    channelName() {
      return 'my-channel'
    },
    voteCreatedEventName() {
      return 'vote-created'
    }
  },
  mounted() {
    this.pusher = new Pusher('dc8bfba00676c4552963', {
      cluster: 'us2'
    });

    const channel = this.pusher.subscribe(this.channelName);
    channel.bind('my-event', this.voteCreatedEvent);
  },
  beforeDestroy() {
    this.pusher.unsubscribe(this.channelName)
  }
}
</script>

<style scoped>

</style>