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

(function () {
    const app = initializeApp(config);
    const db = getDb(app);

    let rootUser = document.getElementById("rootUser");
    let Html = ``;
    axios
        .get("https://asm2es6-default-rtdb.firebaseio.com/users.json")
        .then(function (response) {
            let data = response.data;
            let dataarr = Array.isArray(data) ? data : Object.values(data);
            console.log(dataarr);
            let filteredArray = dataarr.filter((item) => item !== null);
            console.log(dataarr);
            filteredArray.map((item) => {
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
                           <td>
                              ${item.user_email}
                               <div
                                   class="table-links"
                               >
                                   <a href="#"
                                       >View</a
                                   >
                                   <div
                                       class="bullet"
                                   ></div>
                                   <a href="#"
                                       >Edit</a
                                   >
                                   <div
                                       class="bullet"
                                   ></div>
                                   <a
                                       href="#"
                                       class="text-danger"
                                       >Trash</a
                                   >
                               </div>
                           </td>
                           <td>
                               <a href="#"
                                   >${item.phone}</a
                               >
       
                           </td>
                           <td>
                               <a href="#">
                                   <img
                                       alt="image"
                                       src="../assets/img/avatar/avatar-5.png"
                                       class="rounded-circle"
                                       width="35"
                                       data-toggle="title"
                                       title=""
                                   />
                                   <div
                                       class="d-inline-block ml-1"
                                   >
                                   ${item.user_name}
                                   </div>
                               </a>
                           </td>
                           <td>${item.create_at}</td>
                         
                           <td>
                               <div
                                   class="badge  ${
                                       item.role_id == 1
                                           ? "badge-primary"
                                           : "badge-warning"
                                   }"
                               >
                               ${item.role_id == 1 ? "Quản Trị" : "Khách hàng"}
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
                               <button data-id='${
                                   item.id
                               }'  class="btn btn-danger btn-action btndelete swal-6" >
                                Xóa</button>
                           </td>
                    </tr>
                 `;
            });
            rootUser.insertAdjacentHTML("beforeend", Html);
            $(".swal-6").click(function (e) {
                let btnDeleteId = e.target.dataset.id;
                swal({
                    title: "Bạn Chắc Chắn?",
                    text: "Sau khi xóa, bạn sẽ không thể khôi phục tệp này!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        // axios
                        //     .delete(
                        //         `https://asm2es6-default-rtdb.firebaseio.com/users/${btnDeleteId}.json`
                        //     )
                        dbRemove(
                            dbChild(dbRef(db), "users/" + btnDeleteId)
                        ).then(function (response) {
                            console.log("xóa thành công");
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
        .then(() => {})
        .catch(function (error) {
            console.log(error);
        });
})();
