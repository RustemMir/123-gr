const {HelloRequest, HelloReply} = require('./helloworld_pb.js');
const {GreeterClient} = require('./helloworld_grpc_web_pb.js');

var client = new GreeterClient('http://localhost:8080');

var request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage());
});

class myClass {
  runFunction = function () {
    client.sayHello(request, {}, (err, response) => {
      console.log(response.getMessage());
    });
  }
}

export const myclass = new myClass();

//button = document.getElementById("b1");
console.log(myclass.runFunction());
console.log(myclass);

export const runFunction = () => {
  console.log("runFunction");
}