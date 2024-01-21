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

const changpass = (iduser,data) =>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const API = `http://localhost:3000/users/${iduser}` ;
    fetch(API, requestOptions)
        .then(response => {
            console.log(response);
           alert('cập nhật thành công')
    })
    .then(data => console.log('cập nhật thành công') );
}
// const updateUser = (iduser, updatedData) => {
//         axios.put(`http://localhost:3000/users?id=${iduser}`, updatedData)
//             .then((response) => {
//               console.log('thành công');
//             })
//             .catch((error) => {
//                 // Handle errors
//             });
//     };

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
            .get(`http://localhost:3000/users?id=${iduser}`)
            .then((response) => {
                const resultdata = response.data.at(0);
                const data = {
                    ... resultdata ,
                    passwords: inputpassnew,
                  };
                console.log(data);
                if (resultdata.passwords == inputpassold) {
                    // console.log(resultdata.passwords);
                    
                   
                   changpass(iduser,data)
                  
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

