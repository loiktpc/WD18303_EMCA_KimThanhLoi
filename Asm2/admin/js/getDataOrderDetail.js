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
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idOrderDetail = urlParams.get("id");

    let rootOrder = document.querySelector(".listTabale");
    let Html = ``;
    axios
        .get(`https://asm2es6-default-rtdb.firebaseio.com/orders/${idOrderDetail}.json`)
        .then(function (response) {
            console.log(response);
            let data = response.data;
            console.log(data);
          //   let dataarr = Array.isArray(data) ? data : Object.values(data);
          //   console.log(dataarr);
          //   let filteredArray = dataarr.filter((item) => item !== null);
          const productsIncart = []
          //   filteredArray.map((item) => {
          //       productsIncart.push(item.product_id);
          //       Html += `
          //       <tr>
          //               <td><a href="./ListOrderDetail.html">${item.order_id}</a></td>
          //               <td class="font-weight-600 imgproduct" ></td>
          //               <td><div class="badge badge-warning nameproduct" ></div></td>
          //               <td>${item.product_price}</td>
          //               <td>${item.quantity}</td>
          //               <td>${item.created_date}</td>
                       
          //               <td>
          //                 <a href="./ListOrderDetail.html?id=${item.id}" class="btn btn-primary">Giao Hàng</a>
          //               </td>
          //             </tr>
          //        `;
          //   });
         
          data.order_detail.map((item) => {
            let product_price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product_price);
            Html += `
                  <tr>
                          <td><a href="./ListOrderDetail.html">${item.order_id}</a></td>
                          <td class="font-weight-600 imgproduct" >
                          <img src='${item.product_img}' width="80" height="80">
                          </td>
                          <td><div class="badge badge-warning nameproduct" >
                          ${item.product_name}</div></td>
                          <td>${
                            product_price
                            }</td>
                          <td>${item.quantity}</td>
                          <td>${item.created_date}</td>
                         
                          <td>
                            <a href="./ListOrderDetail.html?id=${item.id}" class="btn btn-primary">Giao Hàng</a>
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
