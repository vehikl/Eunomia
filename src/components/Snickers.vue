<template>
  <p>
    Publish an event to channel <code>my-channel</code>
    with event name <code>my-event</code>; it will appear below:
  </p>
  <div id="display">
    <ul>
      <li v-for="message in messages">
        {{message}}
      </li>
    </ul>
  </div>
</template>

<script>
import Pusher from "pusher-js";

export default {
  name: "Snickers",
  data() {
    return {
      pusher: null,
      channel: null,
      messages: []
    };
  },
  mounted() {
    Pusher.logToConsole = true;

    let pusher = new Pusher('dc8bfba00676c4552963', {
      cluster: 'us2'
    });

    let channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      this.messages.push(JSON.stringify(data));
    });
  }
}
</script>
