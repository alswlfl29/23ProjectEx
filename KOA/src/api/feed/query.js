const { pool } = require("../../data");

/**
 * 작성한 피드 내용을 데이터베이스에 저장하는 함수
 * @param {string} image_id 이미지
 * @param {string} content 피드 내용
 * @param {string} user_id 유저 데이터베이스 id
 * @returns
 */
exports.store = async (user_id, image_id, content) => {
  const query = `INSERT INTO feed
  (user_id, image_id, content)
  VALUES (?,?,?)`;
  return await pool(query, [user_id, image_id, content]);
};

/**
 * 피드 목록 가져오는 데이터베이스 함수
 * @param {number} user_id 유저 데이터베이스 id
 * @param {number} id 피드 데이터베이스 id
 * @returns
 */
exports.read = async (user_id, id) => {
  const query = `SELECT * FROM feed WHERE user_id=? and id=?`;
  let result = await pool(query, [user_id, id]);
  return result.length < 0 ? null : result[0];
};

/**
 * 피드 수정
 * @param {string} image_id 업데이트할 이미지
 * @param {string} content 업데이트 피드 내용
 * @param {number} id 피드 데이터베이스 id
 * @param {string} user_id 유저 데이터베이스 id
 * @returns
 */
exports.update = async (id, user_id, image_id, content) => {
  const query = `UPDATE feed SET user_id=?, image_id=?, content=?
      WHERE id=?`;
  return await pool(query, [user_id, image_id, content, id]);
};

/**
 * 피드 삭제
 * @returns
 */
exports.del = async (id) => {
  const query = `DELETE FROM feed
        WHERE id=?`;
  return await pool(query, [id]);
};
