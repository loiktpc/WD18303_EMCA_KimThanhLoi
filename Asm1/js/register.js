(function () {
    const regiter = document.getElementById("regiter");

    regiter.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;

        const userphone = document.getElementById("userphone").value;

        const useremail = document.getElementById("useremail").value;

        const userpass = document.getElementById("userpass").value;
        if (!userphone || !username || !useremail || !userpass) {
            alert("vui lòng nhập dữ liệu");
            return;
        }

        const data = {
            user_name: username,
            passwords: userpass,
            user_email: useremail,
            phone: userphone,
            role_id: 2,
            create_at: "2/2/2024",
        };

        const url = "http://localhost:3000/users";

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data) alert("đăng kí thành công");
            })
            .catch((error) => console.error("Lỗi:", error));
    });
})();
