import { expect } from "chai";
import * as request from "supertest";
require("../../Server");

const url = "http://localhost:3000/api";

describe("User module", () => {
  it("should should list users", async () => {
    try {
      const users: any = await request(url).get("/users");
      expect(users.statusCode).to.be.equal(200);
    } catch (err) {
      expect(err.statusCode).to.be.equal(401);
    }
  });
});
