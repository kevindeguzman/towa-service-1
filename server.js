const { ServiceBroker } = require("moleculer");

const serviceOneBroker = new ServiceBroker({
  nodeID: "towa-service-1",
  transporter: "NATS",
  logLevel: "debug",
});

serviceOneBroker.createService({
  name: "greeter1",

  actions: {
    hello(ctx) {
      return {
        msg: "Hello from Greeter 1"
      };
    },
    heyGreeter2(ctx) {
      return ctx.call("greeter2.hello");
    }
  }
});

Promise.all([serviceOneBroker.start()]);