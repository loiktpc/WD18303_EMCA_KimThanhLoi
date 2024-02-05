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
const logingg = document.querySelector(".logingg");
const provider = new GoogleAuthProvider();
provider.addScope(
    "https://www.googleapis.com/auth/contacts.readonly"
);
provider.setCustomParameters({
    login_hint: "stbumbumbst@gmail.com",
});
logingg.addEventListener("click", (e) => {
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
    const app = initializeApp(config);
    // const db = getDb(app);
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential =
                GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            console.log(token);
            const user = result.user;
            
            console.log(user);
            
           
            
            handlerUser(token, user);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential =
                GoogleAuthProvider.credentialFromError(error);
            // ...
        });
        const handlerUser = async (token, user) => {
           await setCookie("token", token, 1);
           await setCookie("iduser",user.uid , 1); //  hết hạn sau 7 ngày.
           await setCookie("role_id", 2, 7);
            window.location.href = "../index.html";
        }

});

const btnlogin = document.getElementById("login");
btnlogin.addEventListener("click", (e) => {
    e.preventDefault();
    const inputemail = document.getElementById("form1Example13").value;
    const inputpass = document.getElementById("form1Example23").value;
    const apiproduct = `https://asm2es6-default-rtdb.firebaseio.com/users.json`;
    if (!inputpass || !inputemail) {
        alert("vui lòng nhập tài khoản");
        return;
    }
    fetch(apiproduct)
        .then((response) => response.json())
        .then((data) => {
            let datanew = data;
            let dataarr = Array.isArray(datanew) ? datanew : Object.values(datanew);
            console.log(dataarr);
            let filteredArray = dataarr.filter((item) => item !== null);
            console.log(dataarr);
           
            const output = filteredArray.filter((item , i) => {
                console.log(item.passwords == inputpass);
                console.log(item.user_email == inputemail);
                return (
                    item.passwords == inputpass && inputemail == item.user_email
                );
            });
            console.log(output.length );
            if(output.length === 0){
                alert("Tài khoản hoặc mật khẩu không đúng");
                return;
            }
            return output;
        })
        .then((data) => {
           
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
          
            const loginfirebase = (password,email) =>{
                const app = initializeApp(config);
                // const db = getDb(app);
                const auth = getAuth(app);
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log(user.accessToken);
                        setCookie("token", user.accessToken, 1);
                          window.location.href = "../index.html";
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
            }
            // loginfirebase(output.passwords , output.user_email)   
          
        })

        .catch((error) => console.error("Error:", error));
});
