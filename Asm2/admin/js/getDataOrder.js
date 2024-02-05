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

    let rootOrder = document.querySelector(".listTabale");
    let Html = ``;
    axios
        .get("https://asm2es6-default-rtdb.firebaseio.com/orders.json")
        .then(function (response) {
            let data = response.data;
            let dataarr = Array.isArray(data) ? data : Object.values(data);
            console.log(dataarr);
            let filteredArray = dataarr.filter((item) => item !== null);
            console.log(dataarr);
            filteredArray.map((item) => {
                let total_product_cost = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.total_product_cost);

                Html += `
                <tr>
                        <td><a href="./ListOrderDetail.html">${item.order_code}</a></td>
                        <td class="font-weight-600">${item.customer_name}</td>
                        <td><div class="badge badge-warning">${item.status == 1? 'chưa giao hàng' : 'đã giao hàng'}</div></td>
                        <td>${item.created_date}</td>
                        <td>${item.customer_address}</td>
                        <td>${item.customer_email}</td>
                        <td>${item.customer_phone_number}</td>
                        <td>${total_product_cost}</td>
                        <td>${item.transfer_money == 1 ? 'trực tiếp' : 'chuyển khoản'}</td>
                        <td>
                          <a href="./ListOrderDetail.html?id=${item.id}" class="btn btn-primary">Chi Tiết</a>
                        </td>
                      </tr>
                 `;
            });
            rootOrder.insertAdjacentHTML("beforeend", Html);
          
        })
        .then(() => {})
        .catch(function (error) {
            console.log(error);
        });
})();
