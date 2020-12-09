const assert = require("assert");
const request = require("supertest")(
  "https://customer-pulse-backend.herokuapp.com"
);
const expect = require("chai").expect;

describe("Test", () => {
  it("Should return ok", () => {
    assert.strictEqual("ok", "ok");
  });
});

describe("#indexOf()", () => {
  it("should return -1 when the value is not present", function () {
    assert.strictEqual([1, 2, 3].indexOf(4), -1);
  });
});

describe("Test API call", () => {
  it("should return status 200", async () => {
    const response = await request.get("/");

    expect(response.status).to.eql(200);
  });
});
