/**
 * 동기식 프로그래밍 예제(+블로킹)
 */
// let noodle = () => {
//   for (let i = 1; i >= 100; i++) {
//     console.log(`라면 ${i}개 끓임`);
//   }
// };

// console.log("가게오픈");
// noodle();
// console.log("가게닫기");

/**
 * 비동기식 프로그래밍 예제(+논블로킹)
 */
// const noodle = (message, time) => {
//   setTimeout(() => {
//     console.log(message);
//   }, time);
// };

// noodle("신라면", 1000);
// noodle("불닭", 500);
// noodle("짜파게티", 200);

/**
 * 콜백함수 예제
 * 콜백함수 아님
 */
// function noodle(message) {
//   console.log(message + " 라면 끓이는 중...");
//   return `${message}라면`;
// }
// function server(name) {
//   console.log(`${name} 라면을 테이블에 서빙`);
// }
// let result = noodle("살안찌는");
// server(result);
/**
 * 콜백함수로 변경
 */
// function noodle(message, callback) {
//   console.log(`${message} 라면 끓이는 중`);
//   callback(`${message}라면`);
// }
// function serve(number) {
//   console.log(`${number} 테이블에 서빙`);
// }
// noodle("단백질", (name) => {
//   console.log(name + "테이블에 서빙");
// }); //익명함수
// noodle("살 안찌는", serve);

/**
 * 콜백 함수
 */
// let loading = (path, done) => {
//   console.log("경로:" + path);
//   done(path + "text.png");
// };
// loading("/Users/home/", (path) => {
//   console.log("완료" + path);
// });

/**
 * promise
 * 어떻게 보면 resolve도 callback함수이다.
 */
// let fileSavePromise = (path) => {
//   return new Promise((resolve, reject) => {
//     console.log("경로:" + path);
//     resolve(path + "text.png");
//   });
// };

// fileSavePromise("/Users/home/")
//   .then((path) => {
//     //성공한 경우
//     console.log("완료 파일 경로는 : " + path);
//   })
//   .catch((err) => {
//     //실패한 경우
//     console.log("실패 에러 로그는 " + err);
//   });

/**
 * async / await
 * 비동기프로그램을 동기프로그램처럼 사용
 */
// let loading = async (path, done) => {
//   console.log("경로 :" + path);
//   return path + "text.png";
// };

// let path=await.loading("/Users/home/");
// console.log("완료: "+path);

/**
 * 단일 file에 모든 함수들이 총 집합
 */
// async function sendNoti(message, userId) {
//   //userId에게 알림 전송
// }
// async function saveFile(image) {
//   //image에 온 이미지를 저장
// }
// async function storeDatabase(message) {
//   //message 데이터를 DB에 저장
// }
// async function createFeed(message, image) {
//   //1. 올바른 데이터가 왔는지 검증
//   //2. 이미지 저장
//   await saveFile(image);
//   //3.데이터베이스에 기록
//   await storeDatabase(message);
//   //4.멘션한 유저에게 새글 알림
//   await sendNoti(message, userId);
// }
