// / cookies

let allCookies = document.cookie;

// Chuyển đổi chuỗi cookies thành một đối tượng
function parseCookies() {
    let cookies = {};
    let cookieArray = allCookies.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        let parts = cookie.split("=");
        let name = parts[0];
        let value = parts[1];
        cookies[name] = value;
    }

    return cookies;
}

// Sử dụng hàm parseCookies để lấy đối tượng cookies
let cookiesObject = parseCookies();
console.log(cookiesObject);
if (cookiesObject) {
    fetch(`http://localhost:3000/users?id=${cookiesObject.iduser}`)
        .then((response) => response.json())
        .then((data) => {
            const output = data.at(0);
            $(".nameprofile").html(output.user_name);
            $(".emailprofile").html(output.user_email);
            $(".phoneprofile").html(output.phone);
            console.log(output.phone);
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

    deleteCookie("iduser");

    window.location = "../index.html";
});

const shows = () => {
    let role_id = cookiesObject.role_id;
    if (role_id == 1) {
        const rootadmin = document.getElementById("pageAdmin");
        let btnadmin = `
        <a href="../admin/Dashboard.html"> 
        <button type="button" class="btn btn-outline-primary btn-floating pageadmin">
        Trang Quản Trị
      <i class="fab fa-skype fa-lg"></i>
        </button>
        </a>
      
        `;
        rootadmin.insertAdjacentHTML("afterbegin", btnadmin);
    } else {
        return;
    }
};
shows();
