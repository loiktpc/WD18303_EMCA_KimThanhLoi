// loiktpc 05314 __ Lab8 

const API = "https://wd18303ecmascript-default-rtdb.firebaseio.com/";

const getUser = () => {
    const rootInfoUser = document.getElementById("rootInfoUser");

    axios.get(API + "/users.json").then((response) => {
        let converDataResponsearr = Object.entries(response.data);

        let Html = "";
        converDataResponsearr.forEach(([id, data]) => {
            console.log(id);
            Html += `
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                   
                    <div class="ps-3">
                        <div class="text-base font-semibold">${data.user_name}</div>
                        
                    </div>  
                </th>
                <td class="px-6 py-4">
                ${data.user_email}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>  ${data.create_at}
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="./add.html?id=${id}&email=${data.user_email}&username=${data.user_name}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                    
                    <a href="./delete.html?id=${id}&email=${data.user_email}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete user</a>

                </td>
            </tr>
                `;
        });
        if (rootInfoUser) {
            rootInfoUser.insertAdjacentHTML("afterbegin", Html);
        }
    });
};
getUser();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const DeleteUser = async () => {
   
    const emailNameuser = urlParams.get("email");
    const nameroot = document.getElementById("nameemail");
    if (nameroot) {
        nameroot.innerHTML = emailNameuser;
    }
    
    const btndelete = document.querySelector(".btndelete");
    if(btndelete){
        btndelete.addEventListener("click", (e) => {
            const productid = urlParams.get("id");
            // console.log(productid);
             axios.delete(API + `/users/${productid}.json`)
                .then(res =>{
                     if(res.status === 200){
                        window.location.href ='./index.html'
                     }
                })
            
        });
    }
   
   
};
DeleteUser();

const CreatUser = () => {
    const productid = urlParams.get("id");
    if(!productid){
        const btnadd = document.querySelector(".adduser");
        btnadd.style.display ="block"
        let ngayHienTai = new Date();

        let ngay = ngayHienTai.getDate();
        let thang = ngayHienTai.getMonth() + 1;
        let nam = ngayHienTai.getFullYear();
    
        let hientai = `${ngay}/${thang}/${nam}`;

        if (btnadd) {
            btnadd.addEventListener("click", (e) => {
                const nameuser = document.getElementById("username").value;
                const emailuser = document.getElementById("email").value;
                const dataUSer = {
                    user_name: nameuser,
                    user_email: emailuser,
                    create_at: hientai,
                };
                axios.post(API + "/users.json", dataUSer).then((response) => {
                    alert("Thêm Thành Công");
                    console.log("Thêm Thành Công" + response);
                    window.location.reload();
                });
            });
        }
    }
   
};
CreatUser();

const EditUser = () =>{
    const productid = urlParams.get("id");
    const username = urlParams.get("username");
    const useremail = urlParams.get("email");
    if(productid){
       
        const btnadd = document.querySelector(".edituser");
        btnadd.style.display ="block"
        const nameuser = document.getElementById("username");
        const emailuser = document.getElementById("email");
        nameuser.value =username ;
        emailuser.value = useremail;
        let ngayHienTai = new Date();

        let ngay = ngayHienTai.getDate();
        let thang = ngayHienTai.getMonth() + 1;
        let nam = ngayHienTai.getFullYear();
    
        let hientai = `${ngay}/${thang}/${nam}`;
        if (btnadd) {
            btnadd.addEventListener("click", (e) => {
                
                const dataUSer = {
                    user_name: nameuser.value,
                    user_email: emailuser.value,
                    create_at: hientai,
                };
                axios.put(API + `/users/${productid}.json`, dataUSer).then((response) => {
                    alert("Chỉnh sửa thành công");
                    console.log("Chỉnh sửa thành công" + response);
                    window.location.href = './index.html'
                });
            });
        }
    }
   
}
EditUser()