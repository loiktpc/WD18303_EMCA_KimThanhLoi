

const btnadd = document.querySelector('.submitadduser')

const date = new Date() ;
const yaer = date.getFullYear() ;
const moth = date.getMonth() ;
const day = date.getDate() ;


btnadd.addEventListener('click' , (e)=>{
    e.preventDefault() ;
    let inputName = document.getElementById('nameUser').value ;
    let inputroleid = document.getElementById('role_id').value ;
    let userEmail = document.getElementById('userEmail').value ;
    let userPass = document.getElementById('userPass').value ;
    let userPhone = document.getElementById('userPhone').value ;
  console.log(inputName,inputroleid,userEmail,userPass,userPhone);
    if(!inputName.trim() || !inputroleid.trim() || !userEmail.trim() 
    || !userPass.trim() || !userPhone.trim()){
        alert('vui lòng nhập dữ liệu') ;
        return ;
    }
    let patt1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let is_EmailNew = userEmail.match(patt1)  ? true : false;;

    
    // if(is_EmailNew === false){
    //     console.log('email không đúng định dạng');
    //     alert('email không đúng định dạng')
    //     return ;
    // }
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    let isPhoneNew =   userPhone.match(regexPhoneNumber) ? true : false;
    if(isPhoneNew===false){
        console.log('ko đúng dạng số điện thoại việt nam');
        alert('ko đúng dạng số điện thoại việt nam') ;

        return ;
    }
    let data = {
        user_name : inputName ,
        passwords: userPass,
        user_email: userEmail,
        phone: userPhone,
        role_id: inputroleid,
        create_at: `${day}/${moth+1}/${yaer}`,
    }
    axios.post('http://localhost:3000/users',data )
      .then(function (response) {
        console.log(response + 'thành công');
        // alert('thêm thành công')
      })
      .catch(function (error) {
        console.log(error);
        e.preventDefault();
      });
        
})
// (function () {
//     axios.get('http://localhost:3000/users')
//     .then(function (response) {
//       console.log(response );
     
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   })();
  
