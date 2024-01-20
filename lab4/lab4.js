// KIM THANH LOI PC05314
// Lab4

// 1.
let promise = new Promise((resolve, reject) => {
    resolve(1); // trả về 
    setTimeout(() => {
        resolve(2);
    }, 1000);
    resolve(3);
    resolve(4);
    resolve(5);
});

promise
    .then((value) => {
        if (!value) {
            throw new Error("Không có giá trị"); // dùng để muốn bắt lỗi
        }
        console.log(`data trả về: ${value}`); // 1  trả về resolve() đầu tiên
        return 2; // trả về then() lần tiếp theo
    })
    .then((value) => {
        console.log(`data trả về: ${value}`); // 2
    })
    .catch((err) => {
        console.error(err); // trong trường hợp lỗi in ra (Không có giá trị)
    })
    .finally(() => {
        console.log("chạy xong then và catch chạy finally cuối cùng"); //  lỗi hay không lỗi vẫn run finally
    });

// 2.
const fetchUrl = async (urls) => {
    let result = [];
    for (const url of urls) {
        const res = await axios.get(url);
        result.push(res);
    }
    console.log(result);
    return result;
    // chạy trình theo trình tự trên xuống mặc dù không phụ thuộc nhau
    // để xem rõ hơn qua f12 tab network trả về theo trình tự
    // code theo trình tự , tương minh
};

const fetchUrlsParallel = async (urls) => {
    let result = await Promise.all(
        urls.map((url) => {
            return axios.get(url);
        })
    );
    console.log(result);
    return result;
    // chạy song song ,khi call api không phụ thuộc nhau giúp tiết kiệm thời gian
};

// chạy tương minh theo tnình tự
fetchUrl([
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/posts",
]);

// chạy song song
fetchUrlsParallel([
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/posts",
]);

//  3.

const fs = require("fs");

// // Đọc nội dung từ tệp './data.json' với mã hóa UTF-8
fs.readfile("./data.json", { encoding: "utf8" }, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log("Data loaded from disk ", data);
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                console.log("Data được trả về API ", response.data);
            })
            .catch((error) => {
                console.error("lỗi được trả về " + error);
            });
    }
});
