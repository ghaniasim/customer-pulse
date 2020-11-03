const assert = require("assert");

describe("Test", () => {
  it("Should not return ok", () => {
    assert.strictEqual("ok", "Not ok");
  });
});
