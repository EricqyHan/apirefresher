const express = require("express"); // make sure server has access to express
const app = express(); // this will hold express for us
const PORT = 8000;
const cors = require("cors");

app.use(cors());

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
  },
  dylan: {
    age: 29,
    birthName: "Dylan",
    birthLocation: "Dylan",
  },
};

// we now have our route
// request and response are just param names but it is good pracrice to name them that
app.get("/", (request, response) => {
  // __dirname is wherever the file is that is where we start looking for those files
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  // console.log(request.params.rapperName);
  // [] is bracket notation and enables to grab the key, especially with dot notation
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
});
