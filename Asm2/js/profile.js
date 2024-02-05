// / cookies
// Lấy tất cả cookies
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
if (cookiesObject) {
    const iduser = cookiesObject.iduser;
    console.log();
    fetch(`https://asm2es6-default-rtdb.firebaseio.com/users/${iduser}.json`)
        .then((response) => response.json())
        .then((data) => {
            const output = data;
            $(".nameprofile").html(output.user_name);
            $(".emailprofile").html(output.user_email);
            $(".phoneprofile").html(output.phone);
        })
        .catch((error) => console.error("Error:", error));
}

const btnlogout = document.querySelector(".submitlogout");

btnlogout.addEventListener("click", () => {
    // xóa cookies logout

    function deleteCookie(cookieName) {
        // Đặt thời gian sống của cookie thành một thời điểm ở quá khứ
        document.cookie =
            cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Gọi hàm để xóa cookie có tên là "myCookie"
    deleteCookie("iduser");
    deleteCookie("role_id");
    deleteCookie("token");

    window.location = "../index.html";
});

const shows = () => {
    let role_id = cookiesObject.role_id;
    if (role_id == 1) {
        const rootadmin = document.getElementById("pageAdmin");
        let btnadmin = `
        <a href="../admin/Pages/Dashboard.html"> 
        <button type="button" class="btn btn-outline-primary btn-floating pageadmin">
        Trang Quản Trị
      <i class="fab fa-skype fa-lg"></i>
        </button>
        </a>
      
        `;
        if (rootadmin) {
            rootadmin.insertAdjacentHTML("afterbegin", btnadmin);
        } else {
            return;
        }
    } else {
        return;
    }
};
shows();
