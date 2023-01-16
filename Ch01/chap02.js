// var intNumber = 10;
// var floatNumber = 20.5;

// var string1 = "문자'형' 변수";
// var string2 = "문자형 변수";

// console.log(intNumber);
// console.log(floatNumber);

// console.log(string1);
// console.log(string2);

// var printString = 10 + "문자열";
// var printString2 = "3" * "5";
// var printString3 = 10 - "문자";

// console.log(printString);
// console.log(printString2);
// console.log(printString3);

/**
 * 두 수의 곱을 출력하는 함수이지만, 1개만 보낼 경우
 * 그냥 자기 자신을 출력합니다.
 * @param {number} a 변수1
 * @param {number} b 변수2
 * @returns 두 수의 곱
 */

// function mul(a, b = 1) {
//   return a * b;
// }
// console.log(mul(3, 4));
// console.log(mul(3));

// var string1 = "한국공대";
// var string2 = `지금 우리가 다니는
// 학교는 ${string1} 입니다.`;
// console.log(string2);

// const name = "tukorea";
// console.log(name);
// const name = "kpu";
// console.log(name);

// var mySqure = (x) => {
//   return x * x;
// };
// console.log(mySqure(5));

// var mySqure2 = (x) => x * x;
// console.log(mySqure(5));

/**
 * 구구단 만들기(1단부터 9단까지)
 */
// var GuGu = (a, b) => {
//   return a * b;
// };

// for (i = 1; i < 10; i++) {
//   for (j = 1; j < 10; j++) {
//     console.log(`${i}*${j}=${GuGu(i, j)}`);
//   }
// }

/**
 * 무작위로 난수를 받아와 0~2 사이의 정수를 넣을 수 있도록
 * 0은 가위, 1은 바위, 2는 보
 */
//난수 생성: Math.random()
//floor: 버림
var com, user;

var rsp = () => {
  return Math.floor(Math.random() * 3);
};
com = rsp();
user = rsp();
console.log("컴퓨터의 입력:" + com);
console.log("사용자의 입력:" + user);
winnersls(com, user);
/**
 * 컴퓨터와 사용자의 값을 비교하여 승패 출력
 * @param {number} com 컴퓨터 입력수
 * @param {number} user 사용자 입력수
 * 0은 가위, 1은 바위, 2는 보
 */

function winnersls(com, user) {
  if (com == user) {
    console.log("비겼다");
  } else if (
    (com == 0 && user == 1) ||
    (com == 1 && user == 2) ||
    (com == 2 && user == 0)
  ) {
    console.log("이김");
  } else {
    console.log("사용자 패");
  }
}

/**
 *  최대한 가독성이 높고, 컴퓨터가 연산하는 횟수를 줄이도록
 *  (com == 0 && user == 1) ||
    (com == 1 && user == 2) ||
    (com == 2 && user == 0) 
    이건 너무 일차원적
    ->
    (com-user)==-1 || (com-user)==2
    ->
    ((com-user+1)%3)==0
    ->
    !((com-user+1)%3)
 */
