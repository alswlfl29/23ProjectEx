const jwt = require("jsonwebtoken");

// const token = jwt.sign(
//   { name: "tu" },
//   "my-secret-key",
//   { expiresIn: "1m" },
//   (err, token) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(token);
//   }
// );

jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHUiLCJpYXQiOjE2NzM4NDQwMDUsImV4cCI6MTY3Mzg0NDA2NX0.owFX_rGg2S8JYwfQC34hNqgsGNqLALFdYzfYsZx3HPc",
  "my-secret-key",
  (error, decoded) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(decoded);
  }
);
