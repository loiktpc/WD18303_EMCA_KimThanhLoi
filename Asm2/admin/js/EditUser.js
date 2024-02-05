(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idUser = urlParams.get("id");

    axios
        .get(`https://asm2es6-default-rtdb.firebaseio.com/users/${idUser}.json`)
        .then(function (response) {
            console.log(response);
            let inputName = document.getElementById("nameUser");
            let inputroleid = document.getElementById("role_id");
            let userEmail = document.getElementById("userEmail");
            let userPass = document.getElementById("userPass");
            let userPhone = document.getElementById("userPhone");
            let rootroleId = document.getElementById("rootroleId");
            
            inputName.value = response.data.user_name;
            // inputroleid.value = response.data.role_id;
            userEmail.value = response.data.user_email;
            userPass.value = response.data.passwords;
            userPhone.value = response.data.phone;
            console.log(response.data.role_id);
            let html = "";
            html += `
          <select
          class="form-control selectric" id="role_id"
      >
      <option></option>
      <option ${response.data.role_id == 2 ? 'selected' : ''} value="2">
          Khách Hàng
      </option>
      <option  ${response.data.role_id == 1 ? 'selected' : ''} value="1">
          Quản Trị
      </option>
      </select>`;
            rootroleId.insertAdjacentHTML('afterbegin',html)
            return response.data;
        })
        .then((return_data) => {
            btnadd.addEventListener("click", (e) => {
                e.preventDefault();
                let inputName = document.getElementById("nameUser").value;
                let inputroleid = document.getElementById("role_id").value;
                let userEmail = document.getElementById("userEmail").value;
                let userPass = document.getElementById("userPass").value;
                let userPhone = document.getElementById("userPhone").value;
                
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

                if(is_EmailNew === false){
                    console.log('email không đúng định dạng');
                    alert('email không đúng định dạng')
                    return ;
                }
                const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
                let isPhoneNew = userPhone.match(regexPhoneNumber)
                    ? true
                    : false;
                if (isPhoneNew === false) {
                    console.log("ko đúng dạng số điện thoại việt nam");
                    alert("ko đúng dạng số điện thoại việt nam");

                    return;
                }
                
                const idUser = urlParams.get("id");
                let data = {
                    id : idUser,
                    user_name: inputName,
                    passwords: userPass,
                    user_email: userEmail,
                    phone: userPhone,
                    role_id: inputroleid,
                    create_at: `${day}/${moth + 1}/${yaer}`,
                };
                console.log(idUser);
                axios
                    .put(`https://asm2es6-default-rtdb.firebaseio.com/users/${idUser}.json`, data)
                    .then(function (response) {
                        console.log(response + "thành công");
                        alert("Chỉnh Sửa Thành Công");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        })
        .catch(function (error) {
            console.log(error);
        });
})();

const btnadd = document.querySelector(".submitadduser");

const date = new Date();
const yaer = date.getFullYear();
const moth = date.getMonth();
const day = date.getDate();
