// make sure server has access to express
const express = require("express");
// this will hold express for us
const app = express();
const PORT = 8888;

const rappers = {
  "21 savage": {
    age: 31,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "Plaistow, London, England",
  },
  "chance the rapper": {
    age: 31,
    birthName: "Chancelor Johnathan Bennett",
    birthLocation: "Chicago, Illinois, US",
  },
  "rich brian": {
    age: 24,
    birthName: "Brian Imanuel Soewarno",
    birthLocation: "Jakarta, Indonesia",
  },
  dylan: {
    age: 100,
    birthName: "Dylan",
    birthLocation: "Dylan",
  },
};

// set up server to hear express and generate response with a HTML file. Note that this will be a GET request
// and then we send a file with response.sendFile()
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();
  console.log(request.params.rapperName);
  // [] is bracket notation and enables to grab the key, especially with dot notation
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["dylan"]);
  }
  //   response.json(rappers);
});

// telling our server to listen to port number
app.listen(process.env.port || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
});
