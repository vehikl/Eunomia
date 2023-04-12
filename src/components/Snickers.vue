<template>

</template>

<script>
export default {
  name: "Snickers",
  mounted() {
    Pusher.logToConsole = true;

    const pusher = new Pusher('dc8bfba00676c4552963', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      console.log(JSON.stringify(data));
    });
  }
}
</script>
