import {
    GoogleAuthProvider,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import config from "../../config/config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

let btnsubmit = document.getElementById("submitchangpass");
var allCookies = document.cookie;

// Chuyển đổi chuỗi cookies thành một đối tượng
function parseCookies() {
    var cookies = {};
    var cookieArray = allCookies.split(";");

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        var parts = cookie.split("=");
        var name = parts[0];
        var value = parts[1];
        cookies[name] = value;
    }

    return cookies;
}

// Sử dụng hàm parseCookies để lấy đối tượng cookies
var cookiesObject = parseCookies();

const changpass = (iduser, data) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    const API = `https://asm2es6-default-rtdb.firebaseio.com/users/${iduser}.json`;
    fetch(API, requestOptions)
        .then((response) => {
            console.log(response);
            alert("cập nhật thành công");
        })
        .then((data) => console.log("cập nhật thành công"));
};

const changpassFirebase = () => {
    const app = initializeApp(config);
    // const db = getDb(app);
    const auth = getAuth(app);
    const user = auth.currentUser;
    const newPassword = getASecureRandomPassword();

    updatePassword(user, newPassword)
        .then(() => {
            console.log("đổi mật khẩu thành công firebase");
        })
        .catch((error) => {
            // An error ocurred
            // ...
        });
};

btnsubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let inputpassold = document.getElementById("password").value;
    let inputpassnew = document.getElementById("typePasswordX-2").value;

    if (!inputpassold || !inputpassnew) {
        alert("ko có dữ liệu");
        return;
    }
    if (!Number(inputpassold) || !Number(inputpassnew)) {
        alert("mật khẩu phải là số");
        return;
    }
    if (inputpassnew) {
        let iduser = cookiesObject.iduser;

        axios
            .get(
                `https://asm2es6-default-rtdb.firebaseio.com/users/${iduser}.json`
            )
            .then((response) => {
                console.log(response);
                const resultdata = response.data;
                const data = {
                    ...resultdata,
                    passwords: inputpassnew,
                };
                console.log(data);
                if (resultdata.passwords == inputpassold) {
                    // console.log(resultdata.passwords);

                    changpass(iduser, data);
                    changpassFirebase();
                } else {
                    console.log("sai mật khẩu");
                    alert("sai mật khẩu");
                    return;
                }
            })

            .catch((error) => {
                console.error("Lỗi:", error);
            });
    } else {
        alert("mật khẩu không chính xác");
        return;
    }
});
