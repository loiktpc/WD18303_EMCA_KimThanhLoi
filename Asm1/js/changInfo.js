// get info user 

let allCookies = document.cookie;
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
let cookiesObject = parseCookies();
(function(){
    let iduser = cookiesObject.iduser;
    let inputPhone = document.getElementById('userPhone') ;
    let inputEmail = document.getElementById('userEmail') ;
    let inputName = document.getElementById('userName') ;
    axios
        .get(`http://localhost:3000/users/${iduser}`)
        .then((response) => {
            if(response.status === 200){
                // console.log(response);
                inputPhone.value = response.data.phone;
                inputEmail.value = response.data.user_email ;
                inputName.value = response.data.user_name ;
              
            }else{
                throw new Error('API NOT THÀNH CÔNG');
            }
        })
    
        .catch((error) => {
            console.error("Lỗi:", error);
        });
   })();



// thay đổi tài khoản
const btnSubmitChangesInfo = document.getElementById('submitChangesInfo') ;

btnSubmitChangesInfo.addEventListener('click', ()=>{
    let inputPhone = document.getElementById('userPhone').value ;
    let inputEmail = document.getElementById('userEmail').value ;
    let inputName = document.getElementById('userName').value ;
    if(!inputPhone.trim() || !inputEmail.trim() || !inputName.trim()){
        console.log('Vui Lòng nhập đủ thông tin ' );
        return ;
    }
    let patt1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let is_EmailNew = inputEmail.match(patt1)  ? true : false;;

    
    if(is_EmailNew === false){
        console.log('email không đúng định dạng');
        alert('email không đúng định dạng')
        return ;
    }
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    let isPhoneNew =   inputPhone.match(regexPhoneNumber) ? true : false;
    if(isPhoneNew===false){
        console.log('ko đúng dạng số điện thoại việt nam');
        alert('ko đúng dạng số điện thoại việt nam') ;

        return ;
    }
   
    let iduser = cookiesObject.iduser;
    axios
    .get(`http://localhost:3000/users/${iduser}`)
    .then((response) => {
        if(response.status === 200){
            data = response.data
            let datas = {
                ...data , 
                "user_name":inputName ,
                "user_email":inputEmail ,
                "phone": inputPhone,
            } ;
           
            changesInfo(iduser,datas)
        }})
 
        const changesInfo = (iduser,newData) =>{
            axios.put(`http://localhost:3000/users/${iduser}`, newData)
            .then(response => {
                console.log('cập Nhật Thành Công');
                alert('Cập Nhật Thành Công') ;
            })
            .catch(error => {
                // Handle errors
            });
        }

   
}) ;
