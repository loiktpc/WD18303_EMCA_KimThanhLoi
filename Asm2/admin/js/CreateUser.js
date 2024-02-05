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
import config from "../../config/config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

const btnadd = document.querySelector(".submitadduser");

const date = new Date();
const yaer = date.getFullYear();
const moth = date.getMonth();
const day = date.getDate();

btnadd.addEventListener("click", (e) => {
    e.preventDefault();
    let inputName = document.getElementById("nameUser").value;
    let inputroleid = document.getElementById("role_id").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;
    let userPhone = document.getElementById("userPhone").value;
    console.log(inputName, inputroleid, userEmail, userPass, userPhone);
    if (
        !inputName.trim() ||
        !inputroleid.trim() ||
        !userEmail.trim() ||
        !userPass.trim() ||
        !userPhone.trim()
    ) {
        alert("vui lòng nhập dữ liệu");
        return;
    }
    let patt1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let is_EmailNew = userEmail.match(patt1) ? true : false;

    if (is_EmailNew === false) {
        console.log("email không đúng định dạng");
        alert("email không đúng định dạng");
        return;
    }
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    let isPhoneNew = userPhone.match(regexPhoneNumber) ? true : false;
    if (isPhoneNew === false) {
        console.log("ko đúng dạng số điện thoại việt nam");
        alert("ko đúng dạng số điện thoại việt nam");

        return;
    }
    let data = {
        user_name: inputName,
        passwords: userPass,
        user_email: userEmail,
        phone: userPhone,
        role_id: inputroleid,
        create_at: `${day}/${moth + 1}/${yaer}`,
    };

    const HandlerUser = async () => {
        const res = await axios.get(
            "https://asm2es6-default-rtdb.firebaseio.com/users.json"
        );

        const idUser = res.data.length;
       
        PostUser(idUser, data);
    };
    HandlerUser();
    const PostUser = (idUser, data) => {
        data.id = idUser;
        console.log(data);

        const app = initializeApp(config);
        const db = getDb(app);
        dbSet(dbRef(db, "users/" + idUser), data)
            .then((res) => {
                console.log(res + "thành công");
                chay();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const chay = () => {
        const progress = document.querySelector(".progress");
        progress.style.display = "block";
        var i = 0;
        if (i == 0) {
            i = 1;
            var elem = document.querySelector(".progress-bar");
            console.log(elem);
            // start
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;

                    setTimeout(() => {
                        swal("Thành Công", "Bạn Có Thể Xem Thêm!", "success");
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }, 1500);
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.textContent = width + "%";
                }
            }
        }
    };
});
