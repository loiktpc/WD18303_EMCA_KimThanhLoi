import {
    getDatabase as getDb,
    ref as dbRef,
    set as dbSet,
    get as dbGet,
    child as dbChild,
    push,
    orderByChild,
    equalTo,
    remove as dbRemove,
    update as dbUpdate,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import config from "../config/config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
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
        if(userpass.length < 6){
            alert("Mật khẩu phải có ít nhất 6 ký tự");
            return;
        }
        const url = "https://asm2es6-default-rtdb.firebaseio.com/users.json";

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const id = response.length;
                const data = {
                    id: id,
                    user_name: username,
                    passwords: userpass,
                    user_email: useremail,
                    phone: userphone,
                    role_id: 2,
                    create_at: "2/2/2024",
                };
                PassAndEmail(useremail,userpass)
                createdUser(data);
            })
            .catch((error) => console.error("Lỗi:", error));

            const PassAndEmail = (email,password) =>{
                const app = initializeApp(config);
                const db = getDb(app);
                const auth = getAuth(app);
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up
                        const user = userCredential.user;
                        console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
            }

        const createdUser = (data) => {
            const app = initializeApp(config);

           
            const db = getDb(app);
            dbSet(dbRef(db, "users/" + data.id), data)
                .then((res) => {
                    console.log(res + "thành công");
                    alert('đăng kí thành công')
                })
                .catch((error) => {
                    console.log(error);
                });

           
        };
    });
})();
