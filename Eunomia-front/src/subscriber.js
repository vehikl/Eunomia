import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "amejds",
  cluster: "mt1",
  forceTLS: false,
  wsHost: "127.0.0.1",
  wsPort: 6001,
});

console.log("tacos");

window.Echo.private(`testchannel`).listen("BroadcastEvent", (e) => {
  console.log(e);
});

// window.Echo.channel
