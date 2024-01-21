// npm install jsonwebtoken
const jwt = require("jsonwebtoken");

// Thay thế 'yourSecretKey' bằng một khóa bí mật thực tế. Nó được sử dụng để ký và xác minh chữ ký JWT.
const secretKey = "PC05314";

// Dữ liệu mẫu cho payload (có thể là thông tin người dùng, quyền hạn, v.v.)
const sampleData = {
    userId: 123,
    username: "example_user",
};

// Tạo JWT
const token = jwt.sign(sampleData, secretKey, { expiresIn: "1h" });

console.log("Generated Token:", token);

// Xác thực JWT
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error("JWT verification failed:", err.message);
    } else {
        console.log("Decoded Token:", decoded);
    }
});
