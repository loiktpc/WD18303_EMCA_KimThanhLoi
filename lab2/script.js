// KIM THANH LOI PC05314
// Lab 2
//  2.5
    const generateTableHeader = (headerTitles) => {
        if(!headerTitles || headerTitles.length === 0){
            return ;
        }

        const headerHtml = headerTitles.map((item) => `<th>${item}</th>`) ;

        return `<thead><tr>${headerHtml}</tr></thead>` ;
    }

    const generateTableRow = (rowData,index) => {

        if(!rowData || rowData.length === 0){
            return ;
        }
    
        return `
        <tr>
        <td>${rowData.id}</td>
        <td><img src="${rowData.avatar}" /></td>
        <td>${rowData.name}</td>
        <td>${rowData.createdAt}</td>
    </tr>
        ` ;
    }


    const generateTable = (headers,data) => {
        if(!headers || !data  || headers.length === 0 || data.length === 0) 
        {
            return ;
        }
        
        const headerRow = generateTableHeader(headers) ;
        const dataRows = data.map((item, index) =>  {
            return generateTableRow(item,index)
        }).join('');
    
        return `<table>${headerRow} <tbody>${dataRows} </tbody></table>`
    }

    const apiUrl = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const headers = ['#','Ảnh','Họ và Tên','Ngày Tạo'];
        
            const tableHtml = generateTable(headers,data);

            const root = document.getElementById('root');

            root.innerHTML = tableHtml ;
        })

        .catch(error => {
            console.error("Error adding product:", error);
        });



// 2.1 

    const result = {
        success: ['max-length','no-amd','prefer-arrow-functions'],
        failure:['no-var','var-on-top','linebreak'],
        skipped:['no-extra-semi','no-dup-keys']
    };

    function makeList(arr){

        const [a,b,c] = arr ;

        const failureItem = [`<li>${a}</li>`,`<li>${b}</li>`,`<li>${c}</li>`] ;
       

        return failureItem  
    }

    const failuresList = makeList(result.failure);
    console.log(failuresList); // output:  ['<li>no-var</li>', '<li>var-on-top</li>', '<li>linebreak</li>']


// 2.2

    const source = [1,2,3,4,5,6,7,8,9,10] ;

    const removeFristTwo = (list) => {

        const [a,b,...arr] = list ;
        
        return arr
    }

    const arr = removeFristTwo(source) ;
    console.log(arr); // output: [3, 4, 5, 6, 7, 8, 9, 10]
    console.log(source); // output:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 2.3

    const arr1 = ['Jan','FEB','MAR','APR','MAY'] ;
    let arr2 ;

    arr2 = [...arr1] ;

    console.log(arr2); // output:  ['Jan', 'FEB', 'MAR', 'APR', 'MAY']


// 2.4

    const spreadOut = () =>{
        let frist = ['learning'];
        let last = ['is','fun'];
        let fragment = ['to','code'] ;
        let sentence = [...frist ,...fragment,...last] ;

        return sentence
    }

    console.log(spreadOut()); //output: ['learning', 'to', 'code', 'is', 'fun']