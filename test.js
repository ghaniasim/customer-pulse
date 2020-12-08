const assert = require("assert");
const chai = require("chai");
const fetch = require("node-fetch");

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
    chai.assert.equal(
      await fetch("https://customer-pulse-backend.herokuapp.com")
        .then((res) => {
          return res.status;
        })
        .catch((res) => console.log(res)),
      200
    );
  });
});
