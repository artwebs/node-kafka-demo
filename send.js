var kafka = require('kafka-node'),
  Producer = kafka.Producer,
  HighLevelProducer = kafka.HighLevelProducer,
  client = new kafka.Client('192.168.1.27:2181'),
  producer = new HighLevelProducer(client),
payloads = [{
    topic: 'topic1',
    messages: 'hi'
  },
  {
    topic: 'topic2',
    messages: ['hello', 'world']
  }
];
producer.createTopics(['topic1', 'topic2'], false, function(err, data) {
  console.log(data);
})
producer.on('ready', function() {
  producer.send(payloads, function(err, data) {
    console.log(data);
  });
});
//
// producer.on('error', function(err) {
//   if(err==null){
//     console.log('发送成功');
//   }else{
//     console.log(err);
//   }
//
// });
