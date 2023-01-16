const moment = require("moment");
require("moment/locale/ko");

let now = moment().format("YYYY-MM-DD");
console.log(`현재 날짜는 ${now} 입니다.`);

let endClass = moment("2023-01-27", "YYYY-MM-DD").fromNow();
console.log(`종강날짜: ${endClass}`);
