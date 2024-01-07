// lab 1 
// Kim Thanh Loi PC05314

// 1.2 tối ưu code và tính số tuổi
let name  = 'Hieu'; 
let birthday = "2003/10/10"
let getyear = birthday.split('/');
let convergeteyar = Number(getyear[0])
let Sayhello1 = () =>{
    console.log(`I'm ${name}, ${birthday}`);
}

Sayhello1()

// tính thời gian tồn tại của mình
let date = new Date();
let year = date.getFullYear();
let getage = 0 ; 
getage = year - convergeteyar ;

let get_age = () =>{
    console.log(`Tuổi của tôi là ${getage}`);
}
get_age()


// 1.3 
//  APi firebase
const apiUrl = "https://wd18303ecmascript-default-rtdb.firebaseio.com/api.json";

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  
    let arrbanner
    data.map((res)=>{
        if(res.name==='category'){
                if(res.data){
                    arrbanner = res.data ;
                
                }
        }
    })
    return arrbanner
})
.then((data) => {
    const root = document.getElementById('lab1.3')
    html = '' ;
    for (const {category_id ,category_name} of data) {
        html += `<li>${category_id}  ${category_name}</li>`
    }
 

    root.innerHTML = html ;
   

})
.catch(error => {
    
    console.error("Error adding product:", error);
});

// 1.4 
const api = 'https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students'
fetch (api)
    .then(res =>  {
       
        return res.json()
    })
    .then((data)=>
    {
       
        let html = ` 
         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                    id
                    </th>
                    <th scope="col" class="px-6 py-3">
                       name
                    </th>
                    <th scope="col" class="px-6 py-3">
                    avatar
                    </th>
                    <th scope="col" class="px-6 py-3">
                    createdAt
                    </th>
                </tr>
            </thead>`;
           
        data.map((item)=>{
            html += ` 
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${item.id}
                </th>
                <td class="px-6 py-4">
                ${item.name}
                </td>
                <td class="px-6 py-4">
                <img style="width="40px" src="${item.avatar}" />
               
                </td>
                <td class="px-6 py-4">
                ${item.createdAt}
                </td>         
            </tr>   
            `
        })
        html += `</tbody>
        </table>
    </div>`
        let root = document.getElementById('root')
        root.innerHTML = html ;
        
    })
    .catch((err)=>{
        console.log(err);
    })