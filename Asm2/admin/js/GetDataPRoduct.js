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
import {
    getStorage,
    ref as sRef,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
const app = initializeApp(config);
const db = getDb(app);
console.log(deleteObject);
(function () {
    let rootUser = document.getElementById("rootUser");
    let Html = ``;
    axios
        .get("https://asm2es6-default-rtdb.firebaseio.com/products.json")
        .then(function (response) {
            // console.log(response);
            let data = response.data;
            let dataarr = Array.isArray(data) ? data : Object.values(data);
            console.log(dataarr);
            let filteredArray = dataarr.filter((item) => item !== null);
            console.log(dataarr);
            filteredArray.map((item) => {
                let product_price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price);

                Html += `
         <tr>
                    <td>
                        <div
                            class="custom-checkbox custom-control"
                        >
                            <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                class="custom-control-input"
                                id="checkbox-2"
                            />
                            <label
                                for="checkbox-2"
                                class="custom-control-label"
                                >&nbsp;</label
                            >
                        </div>
                    </td>
                    <td style="display:flex;justify-content: center;align-items: center;">
                    <img width="40px" src="${item.image}" />
                       
                       
                    </td>
                    <td>
                        <a href="#"
                            >${item.name}</a
                        >

                    </td>
                    <td>
                        <a href="#">
                            
                            ${product_price}
                            </div>
                        </a>
                    </td>
                    <td>${item.id}</td>
                  
                    <td>
                        <div
                            class="badge  ${
                                item.price == 1
                                    ? "badge-primary"
                                    : "badge-warning"
                            }"
                        >
                        ${item.cate_id == 0 ? "Điện Thoại" : "Loptop"}
                        </div>
                    </td>
                    <td>
                        <a  
                            href="./EditUser.html?id=${item.id}"
                            class="btn btn-primary btn-action mr-1"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                            ><i
                                class="fas fa-pencil-alt"
                            ></i
                        ></a>
                        <button
                        data-img='${item.image_url}' 
                         data-id='${
                             item.id
                         }'  class="btn btn-danger btn-action btndelete swal-6" >
                         Xóa</button>
                    </td>
             </tr>
          `;
            });
            rootUser.insertAdjacentHTML("beforeend", Html);
            const storage = getStorage(app);
            // xóa ảnh
            const deleteimg = (img_url, btnDeleteId) => {
                const desertRef = sRef(
                    storage,
                    `images/${btnDeleteId}${img_url}`
                );

                deleteObject(desertRef)
                    .then((res) => {
                        console.log(res + "xóa thành công ảnh");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            };
          
            $(".swal-6").click(function (e) {
                let btnDeleteId = e.target.dataset.id;
                let img_url = e.target.dataset.img ?? "";

                swal({
                    title: "Bạn Chắc Chắn?",
                    text: "Sau khi xóa, bạn sẽ không thể khôi phục tệp này!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                       // phải có url_img mới xóa đc  
                        dbRemove(
                            dbChild(dbRef(db), "products/" + btnDeleteId)
                        ).then(function (response) {
                            console.log("xóa thành công");
                            deleteimg(img_url, btnDeleteId)
                        });
                        swal("Tập tin tưởng tượng của bạn đã bị xóa!", {
                            icon: "success",
                        });
                        setTimeout(() => {
                            location.reload();
                        }, 1400);
                    } else {
                        swal("Tệp của bạn vẫn còn!");
                    }
                });
            });
        })
        .catch(function (error) {
            console.log(error);
        });
})();
