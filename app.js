// app.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const mathOperations = require("./tests/mathOperations");

app.post("/calculate", (req, res) => {
  const { operation, a, b } = req.body;
  try {
    let result;
    switch (operation) {
      case "add":
        result = mathOperations.add(a, b);
        break;
      case "subtract":
        result = mathOperations.subtract(a, b);
        break;
      case "multiply":
        result = mathOperations.multiply(a, b);
        break;
      case "divide":
        result = mathOperations.divide(a, b);
        break;
      default:
        return res.status(400).send("Invalid operation");
    }
    res.send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export for testing purposes
