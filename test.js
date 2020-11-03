import chai from "chai";
import fetch from "node-fetch";

describe("Test API call", () => {
  it("This should not return status 200", async () => {
    //Url is incorrect it will return 404
    chai.assert.equal(
      await fetch("https://meri.digitraffic.fi/api/v1/locations/latestttt")
        .then((res) => {
          return res.status;
        })
        .catch((res) => console.log(res)),
      200
    );
  });
});
