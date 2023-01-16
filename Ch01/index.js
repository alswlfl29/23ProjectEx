// // 간단하게 콘솔에 Hello world라는 문자열을 출력
// console.log("Hello world");

// // 웬만하면 변수명은 알아볼 수 있는 걸로(의미 있게)
// // 주석은 최대한 달기

// // 변수명
// // 코드 인벤션: 개발자들이 정한 코드 규칙
// // 변수명은 시작은 소문자로
// let index_of_student; //snake 케이스(대문자를 쓰지 않는 경우에 여러 단어를 띄어쓰는 경우 _ 붙이기)
// let indexOfStudent; // camel 케이스(띄어쓰기 대신에 대문자로 표현)

const http = require("http"); //require: http라는 모듈을 가져와서 변수에 넣음(자바의 import 개념)

http
  .createServer((req, res) => {
    //req, res인자를 넣은 함수 만들기
    res.statusCode = 200; //상태값을 200[정상동작] (statusCode는 상태코드로, 정상인지 실패인지 판단)
    res.setHeader("Content-Type", "text/plain"); //헤더 정보: 일반 텍스트를 출력한다고 알려줌
    res.end("Hello TU Korea world"); //바디내용 출력 (결과물): 서버에 표시할 텍스트의 내용
  })
  .listen(3000); //3000포트를 기반으로 listen(할당)을 해줌
