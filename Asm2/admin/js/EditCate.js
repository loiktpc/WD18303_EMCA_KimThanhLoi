(function () {
    const date = new Date();
    const yaer = date.getFullYear();
    const moth = date.getMonth();
    const day = date.getDate();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idUser = urlParams.get("id");

    axios
        .get(
            `https://asm2es6-default-rtdb.firebaseio.com/categories/${idUser}.json`
        )
        .then(function (response) {
            console.log(response);
            let nameCate = document.getElementById("nameCate");

            debugger;
            nameCate.value = response.data.name;
            // inputroleid.value = response.data.role_id;

            console.log(response.data.name);

            return response.data;
        })
        .then((return_data) => {
            btnadd.addEventListener("click", (e) => {
                e.preventDefault();
                let nameCate = document.getElementById("nameCate").value;

                if (!nameCate.trim()) {
                    alert("vui lòng nhập dữ liệu");
                    return;
                }

                const idCate = urlParams.get("id");
                let data = {
                    id: idCate,
                    name: nameCate,
                    create_at: `${day}/${moth + 1}/${yaer}`,
                };
                console.log(idCate);
                axios
                    .put(
                        `https://asm2es6-default-rtdb.firebaseio.com/categories/${idCate}.json`,
                        data
                    )
                    .then(function (response) {
                        console.log(response + "thành công");
                        alert("Chỉnh Sửa Thành Công");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        })
        .catch(function (error) {
            console.log(error);
        });
})();

const btnadd = document.querySelector(".submitadduser");
