// tests/app.test.js
const request = require("supertest");
const app = require("../app");

describe("POST /calculate", () => {
  it("should calculate addition correctly", async () => {
    const res = await request(app)
      .post("/calculate")
      .send({ operation: "add", a: 5, b: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ result: 8 });
  });

  it("should handle division by zero", async () => {
    const res = await request(app)
      .post("/calculate")
      .send({ operation: "divide", a: 10, b: 0 });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain("Cannot divide by zero");
  });

  // More tests for other operations and edge cases can be added here
});
