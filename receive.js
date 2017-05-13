var kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  HighLevelConsumer = kafka.HighLevelConsumer,
  client = new kafka.Client('192.168.1.27:2181'),
  consumer = new HighLevelConsumer(
    client, [{
      topic: 'topic1',
      partition: 0
    }, {
      topic: 'topic2',
      partition: 1
    }], {
      autoCommit: false
    }
  );

consumer.on('message', function(message) {
  console.log(message);
});

consumer.on("error", function(message) {
  console.error(message);
});

process.on('uncaughtException', function (err) {
    console.log(err);
});
