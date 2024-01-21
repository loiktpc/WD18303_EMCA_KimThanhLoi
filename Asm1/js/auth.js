// npm install jsonwebtoken
const btnlogin = document.getElementById("login");
btnlogin.addEventListener("click", (e) => {
    e.preventDefault();
    const inputemail = document.getElementById("form1Example13").value;
    const inputpass = document.getElementById("form1Example23").value;
    const apiproduct = `http://localhost:3000/users`;
    if (!inputpass || !inputemail) {
        alert("vui lòng nhập tài khoản");
        return;
    }
    fetch(apiproduct)
        .then((response) => response.json())
        .then((data) => {
            const output = data.filter((item) => {
                return (
                    item.passwords == inputpass && inputemail == item.user_email
                );
            });
            return output;
        })
        .then((data) => {
            if (!data || data.length <= 0 || data == "") {
                alert("vui lòng nhập tài khoản");
                return;
            }
            const output = data[0];
            console.log(output);
            function setCookie(name, value, daysToExpire) {
                var expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + daysToExpire);

                //   let valueString = JSON.stringify(value);

                let cookieString =
                    name +
                    "=" +
                    encodeURIComponent(value) +
                    "; expires=" +
                    expirationDate.toUTCString() +
                    "; path=/";

                // Đặt cookie bằng cách gán chuỗi cookie vào thuộc tính document.cookie
                document.cookie = cookieString;
            }

            setCookie("iduser", output.id, 7); //  hết hạn sau 7 ngày.
            setCookie("role_id", output.role_id, 7);

            window.location.href = "../index.html";
        })

        .catch((error) => console.error("Error:", error));
});
