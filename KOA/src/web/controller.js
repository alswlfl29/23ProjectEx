/** 사이트 메인 페이지 */
exports.home = (ctx, next) => {
  console.log("홈페이지 호출");
  ctx.body = "Hello Wodddrld";
};
/** 약관, 개인정보처리방침 등 정적 페이지 */
exports.page = (ctx, next) => {
  let page = ctx.params.page; //아래와 완전히 똑같다.
  //let {name}=ctx.params; 위와 완전히 똑같다.
  let content;
  switch (page) {
    case "terms":
      content = "이용약관";
      break;
    case "policy":
      content = "개인정보 처리방침";
      break;
  }
  ctx.body = content;
};