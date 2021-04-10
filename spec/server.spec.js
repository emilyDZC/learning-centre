process.env.NODE_ENV = "test";

const chai = require("chai");
const { expect } = chai;
const app = require("../server");
const request = require("supertest");
const connectDB = require("../config/db");
const Subject = require("../models/Subject");

connectDB();

describe("endpoints", () => {
  // beforeEach(() => connection.seed.run());
  //   after(() => connection.destroy());
  describe("/api/v1/dashboard", () => {
    describe("GET", () => {
      before((done) => {
        Subject.deleteMany({}, done);
        Subject.create({ name: "Psychology" });
      });
      after((done) => {
        Subject.deleteMany({}, done);
      });
      it("Status 200: should successfully connect to endpoint", () => {
        return request(app).get("/api/v1/dashboard").expect(200);
      });
      it("Returns an array of subjects", () => {
        return request(app)
          .get("/api/v1/dashboard")
          .expect(200)
          .then(({ body }) => {
            expect(body.subjects).to.be.an("array");
          });
      });
      it("Returns the correct subjects", () => {
        return request(app)
          .get("/api/v1/dashboard")
          .expect(200)
          .then(({ body }) => {
            expect(body.subjects[0].name).to.equal("Psychology");
          });
      });
    });
  });
});
