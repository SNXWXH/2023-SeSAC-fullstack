const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = require("chai");

require("dotenv").config();

// const f = require("../index");
function f() {
  return [1, 2, 3];
}

// before(() => console.log("before"));
// beforeEach(() => console.log("before-each"));
// after(() => console.log("after"));
// afterEach(() => console.log("after-each"));

describe.skip("회원", () => {
  it("login", () => {
    const arr = f();
    // console.log("🚀  arr:", arr);
    expect(arr).to.deep.equal([1, 2, 3]);
  });
});

describe("dotenv", () => {
  it("get", (done) => {
    expect(process.env.TEST).to.equal("12345");
    done();
  });
});

describe.skip("db utils", () => {
  it("db-select", () => {
    const emp1 = db.get("emp", 1);
    expect(emp1).to.deep.equal({
      id: 1,
      ename: "서라",
      dept: 3,
      salary: 900,
    });
  });
  it("getConnection", () => {
    const dbinfo = db.getDbInto();
    console.log("🚀  dbinfo:", dbinfo);
    const arr = f();
    // console.log("🚀  arr:", arr);
    expect(arr).to.deep.equal([1, 2, 3]);
  });
});

const should = chai.should();
chai.use(chaiHttp); // DI 의존성 주입

describe.skip("서버", () => {
  it("get", (done) => {
    // console.log("get");
    chai
      .request("http://0.0.0.0")
      .get("/")
      .end((err, res) => {
        // console.log("body >>>", res.body);
        console.log("body >>>", res.text);
        should.not.exist(err);
        should.exist(res);

        const { text } = res;
        text.should.eq("hello world");
        done();
      });
  });
});

// const should = chai.should();
// chai.use(chaiHttp); //디펜던시 인젝션

// describe.skip("서버", () => {
//   it("get", (done) => {
//     // console.log("get");
//     // if('json - GET', done => {
//     chai
//       .request("http://0.0.0.0")
//       .get("/")
//       .end((err, res) => {
//         console.log("body>>", res.text);
//         should.not.exist(err);
//         should.exist(err);

//         const { text } = res;
//         text.should.eq("hello world");

//         const { body } = res;
//         done();

//         // const {id,name} = body;
//       });
//   });
//   //   });
// });
