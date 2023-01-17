const jwt = require("jsonwebtoken");
const { register, login } = require("./query");
const crypto = require("crypto");

/** 해당 id의 회원정보들 */
exports.info = (ctx, next) => {
  let id = ctx.params.id;
  ctx.body = `${id} 회원에 대한 정보`;
};

/** 회원 가입 */
exports.register = async (ctx, next) => {
  let { email, password, name } = ctx.request.body;
  let result = crypto.pbkdf25ync(
    password,
    process.env.APP_KEY,
    50,
    255,
    "sha512"
  );

  let { affectedRows } = await register(email, result.toString("base64"), name);

  if (affectedRows > 0) {
    let token = await generteToken({ name });
    ctx.body = token;
  } else {
    ctx.body = { results: "fail" };
  }
};
/**로그인 */
exports.login = async (ctx, next) => {
  //로그인 모듈
  let { email, password } = ctx.request.body;
  // let id=ctx.request.body.id; //위의 코드와 동일함(위는 축약코드)
  // let pw=ctx.request.body.pw;

  //계정이 있는 경우 토큰 발급, 없는 경우 에러 메시지 출력
  let result = crypto.pbkdf25ync(
    password,
    process.env.APP_KEY,
    50,
    255,
    "sha512"
  );

  let item = await login(email, result.toString("base64"));
  if (item == null) {
    ctx.body = { result: "fail" };
  } else {
    let token = await generteToken({ name: item.name });
    ctx.body = token;
  }
};
/**
 * jwt 토큰 생성
 * @param {object} payload 추가적으로 저장할 payload
 * @returns {string} jwt 토큰 string
 */
let generteToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.APP_KEY, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token);
    });
  });
};
