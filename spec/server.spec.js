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
  before((done) => {
    Subject.deleteMany({}, done);
    Subject.create({ name: "Psychology" });
  });
  after((done) => {
    Subject.deleteMany({}, done);
  });
  describe("/api/v1/subjects", () => {
    describe("GET", () => {
      it("Status 200: should successfully connect to endpoint", () => {
        return request(app).get("/api/v1/subjects").expect(200);
      });
      it("Returns an array of subjects", () => {
        return request(app)
          .get("/api/v1/subjects")
          .expect(200)
          .then(({ body }) => {
            expect(body.data).to.be.an("array");
          });
      });
      it("Returns the correct subjects", () => {
        return request(app)
          .get("/api/v1/subjects")
          .expect(200)
          .then(({ body }) => {
            expect(body.data[0].name).to.equal("Psychology");
          });
      });
    });
  });
  describe("/api/v1/subjects/:id", () => {
    describe("GET", () => {
      it("Status 200: should successfully connect to endpoint", async () => {
        const subject = await Subject.find({ name: "Psychology" });
        const endpoint = `/api/v1/subjects/${subject[0]._id}`;
        return request(app).get(endpoint).expect(200);
      });
      it("Returns a single subject", async () => {
        const subject = await Subject.find({ name: "Psychology" });
        const endpoint = `/api/v1/subjects/${subject[0]._id}`;
        return request(app)
          .get(endpoint)
          .expect(200)
          .then(({ body }) => {
            expect(typeof body.data).to.equal("object");
            expect(body.data).to.have.keys([
              "subTopics",
              "posts",
              "_id",
              "name",
              "createdAt",
              "__v",
            ]);
          });
      });
      it("Returns the correct subject", async () => {
        const subject = await Subject.find({ name: "Psychology" });
        const endpoint = `/api/v1/subjects/${subject[0]._id}`;
        return request(app)
          .get(endpoint)
          .expect(200)
          .then(({ body }) => {
            expect(body.data.name).to.equal("Psychology");
            expect(body.data._id).to.equal(subject[0]._id.toString());
          });
      });
    });
  });
});
