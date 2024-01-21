(function () {
    let rootUser = document.getElementById("rootUser");
    let Html = ``;
    axios
        .get("http://localhost:3000/users")
        .then(function (response) {
          response.data.map((item)=>{
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
                            class="badge  ${item.role_id == 1 ? "badge-primary":  "badge-warning"}"
                        >
                        ${item.role_id == 1 ? "Quản Trị":  "Khách hàng"}
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
                        <a
                            class="btn btn-danger btn-action trigger--fire-modal-4 ${item.id}"
                            data-toggle="tooltip"
                            title=""
                            data-confirm="Bạn Có Muốn Xóa Không|Hành động này không thể được hoàn tác. Bạn có muốn tiếp tục? |${item.id}"
                            id="${item.id}"
                           
                            data-original-title="Delete"
                            ><i
                                class="fas fa-trash"
                            ></i
                        ></a>
                    </td>
             </tr>
          `;
          })
         
         
        //   HandlerDelete(id) 
        
         
        //   
          rootUser.insertAdjacentHTML('beforeend',Html )
            // console.log(Html);
        })
        .catch(function (error) {
            console.log(error);
        });
})();
// onclick="ShowId(${item.id})"
function ShowId(id){
    console.log(id);
    // let handlerDelete = document.querySelectorAll('.handlerDelete') ;

    handlerDelete.forEach((item)=>{
        item.addEventListener('click',(e)=>{
            console.log(id);
        })
    })
   
    // handlerDelete.addEventListener('click',(e)=>{
    //     e.preventDefault ;
    //     // async function HandlerDelete(id) {
    //     //     const response = await fetch(`http://localhost:3000/users/${id}`, 
    //     //     { method: 'DELETE',
    //     //     headers: { 
    //     //         'Authorization': 'Bearer my-token',
    //     //         'My-Custom-Header': 'foobar'
    //     //     },
    //     //     });
          
       
    //     //   }
      
    //     // window.location.href = './ListUser.html'
    // })
  }