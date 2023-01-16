const sendNoti = require("./noti");
const saveFile = require("./file");
// const db = require("./db"); //함수 분리 1방식
const { storeDatabase } = require("./db"); //함수 분리 2방식
function storeDatabase(message) {
  //message 데이터를 DB에 저장
}
async function createFeed(message, image) {
  //1.올바른 데이터가 왔는지 검증
  //2. 이미지 저장
  await saveFile(image);
  //3. 데이터베이스에 기록
  //   await db.storeDatabase(message);
  await storeDatabase(message);
  //4. 멘션한 유저에게 새글 알림
  await sendNoti(message, userId);
}
