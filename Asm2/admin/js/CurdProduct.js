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
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

// add product info
const btnadd = document.querySelector(".submitProduct");

const date = new Date();
const yaer = date.getFullYear();
const moth = date.getMonth();
const day = date.getDate();

let databackup;
let idbackkup;

btnadd.addEventListener("click", (e) => {
    e.preventDefault();
    let nameProduct = document.getElementById("nameProduct").value;
    let category_id = document.getElementById("category_id").value;
    let priceProduct = document.getElementById("priceProduct").value;

    let image_upload = document.getElementById("image-upload").value;

    let preview = document.querySelector("img");
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    if(!nameProduct.trim() || !category_id.trim() || !priceProduct.trim()
    || !file ){
        alert('vui lòng nhập dữ liệu') ;
        return ;
    }

    // console.log(nameProduct, category_id, priceProduct ,file  );
    // cate 1
    let dataProduct = {
        name: nameProduct,
        cate_id: category_id,
        price: priceProduct,
        image_url: file.name,
    };

    const app = initializeApp(config);

    //    post
    const db = getDb(app);
    const getIdProducts = async (dataProduct, file) => {
        const res = await axios.get(
            "https://asm2es6-default-rtdb.firebaseio.com/products.json"
        );

        const idProduct = res.data.length;
        // console.log(dataProduct, file);
        handlerCreatedProduct(idProduct, dataProduct, file);
    };
    getIdProducts(dataProduct, file);

    const handlerCreatedProduct = (idProduct, dataProduct, file) => {
        dataProduct.id = idProduct;

        console.log(dataProduct);

        const storage = getStorage(app);
        const metadata = {
            contentType: "image/jpeg",
        };
        databackup = dataProduct;
        idbackkup = idProduct;
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = sRef(storage, "images/" + idProduct + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        chay();
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        uploadCompletedHandler();
                      
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;

                    // ...

                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            function uploadCompletedHandler() {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        console.log("File available at", downloadURL);
                        dataProduct.image = downloadURL;
                        // update data ở đây
                        createdProducts(dataProduct, idProduct);
                    })
                    .catch((error) => {
                        console.error("Error getting download URL: ", error);
                    });
            }
        );
    };

    const createdProducts = (dataProduct, idProduct) => {
        dbSet(dbRef(db, "products/" + idProduct), dataProduct)
            .then((res) => {
                console.log(res + "thành công");
                document.getElementById("modaldetail").click();
            })
            .catch((error) => {
                console.log(error);
            });
    };
});

document
    .querySelector(".submitProductDetail")
    .addEventListener("click", (e) => {
        e.preventDefault();

        
        let screenProduct = document.getElementById("screenProduct").value;
        let systemProduct = document.getElementById("systemProduct").value;
        let caremaraProduct = document.getElementById("caremaraProduct").value;
        let caremaraProductfrist = document.getElementById(
            "caremaraProductfrist"
        ).value;
        let chipProduct = document.getElementById("chipProduct").value;
        let ramProduct = document.getElementById("ramProduct").value;
        let capacityProduct = document.getElementById("capacityProduct").value;
        let simProduct = document.getElementById("simProduct").value;
        let pinProduct = document.getElementById("pinProduct").value;
        let data = {
            ...databackup,
            description: {
                screen: screenProduct,
                system: systemProduct,
                caremara_last: caremaraProduct,
                caremara_first: caremaraProductfrist,
                chip: chipProduct,
                ram: ramProduct,
                capacity: capacityProduct,
                sim: simProduct,
                pin: pinProduct,
            },
        };
        console.log(data, idbackkup);
        
       

        const pushDetailInfoProduct = (data, idproduct) => {
            axios
                .put(
                    `https://asm2es6-default-rtdb.firebaseio.com/products/${idproduct}.json`,
                    data
                )
                .then(function (response) {
                    console.log(response + "thành công");
                   setTimeout(() => {
    swal("Thành Công", "Bạn Có Thể Xem Thêm!", "success");
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}, 1500);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        pushDetailInfoProduct(data, idbackkup);
    });

const chay = () => {
    const progress = document.querySelector(".progress");
    progress.style.display = "block";
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.querySelector(".progress-bar");
        console.log(elem);
        // start
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;

                
            } else {
                width++;
                elem.style.width = width + "%";
                elem.textContent = width + "%";
            }
        }
    }
};
// add product detail
