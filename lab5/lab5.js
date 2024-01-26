// loiktpc05314
// lab 5

// 1.
// Từ Khóa 'this' trong js là đề cập đối tượng nó thuộc về

// this tham chiếu đối tượng truy cập phương thức
// đứng ngoài phương thức, this tham chiếu đối tượng global
// đối tượng this là trước dấu '.'

const students = {
    age: 18,
    name: "loiktpc05314",

    // this trong hàm tạo là đại diện cho đối tượng được tạo
    introduce() {
        console.log(` Học Sinh ${this.name} và tuổi: ${this.age} `);
    },

    learning: {
        subject: "js",
        learning() {
            console.log(` Học Sinh đang học ${this.subject}  `);
        },
    },
};

// này sẽ gọi đến đối tượng là students
students.introduce();

// gọi đến đối tượng là learning
students.learning.learning();


// 2.

class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    corner() {
        console.log(`Tọa độ x:${this.x},Tọa độ y: ${this.y}`);
    }
}
const cat = new Shape(0, 180);
cat.corner();


// 3.

class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer = null;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => {
            this.render();
        }, 1000);
    }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();


// 4.

class Person {
    constructor(FristName, lastName) {
        this._FristName = FristName;
        this._lastName = lastName;
    }

    // Getter
    get lastName() {
        return this._lastName;
    }

    // Setter
    set FristName(value) {
        this._FristName = value;
    }

    fullName() {
        return `${this._FristName} ${this._lastName}`;
    }
}

const user = new Person("Loi", "Kim");

// getter
console.log(user.lastName); // Kim
// setter
user.FristName = "Hoa";

console.log(user.fullName()); // Hoa Kim

// 5.
class APICaller {
    constructor(api) {
        this.api = api;
    }

    get(e) {
        axios
            .get(`${this.api}${this.endpoint}/${e ?? ""}`)
            .then((res) => {
                console.log(res);
            })

            .catch(function (error) {
                   if (error.response) {
                       console.log(error.response.data);
                       console.log(error.response.status);
                       console.log(error.response.headers);
                   } else if (error.request) {
                       console.log(error.request);
                   } else {
                       // Something happened in setting up the request that triggered an Error
                       console.log("Error", error.message);
                   }
                   console.log(error.config);
            });
    }
    delete(e) {
        axios
            .delete(`${this.api}${this.endpoint}/${e ?? ""}`)
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                   if (error.response) {
                       console.log(error.response.data);
                       console.log(error.response.status);
                       console.log(error.response.headers);
                   } else if (error.request) {
                       console.log(error.request);
                   } else {
                       console.log("Error", error.message);
                   }
                   console.log(error.config);
            });
    }
    put(e, data) {
        axios
            .put(`${this.api}${this.endpoint}/${e ?? ""}`, data)
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                   if (error.response) {
                       console.log(error.response.data);
                       console.log(error.response.status);
                       console.log(error.response.headers);
                   } else if (error.request) {
                       console.log(error.request);
                   } else {
                       console.log("Error", error.message);
                   }
                   console.log(error.config);
            });
    }
}

class Comment extends APICaller {
    constructor(Api) {
        super(Api);
        this.endpoint = "comments";
    }
    getAll() {
        super.get();
    }
    GetOne(e) {
        if (typeof e === "number") {
            super.get(e);
        } else {
            throw new Error("id is not a number!");
        }
    }
    deleteOne(id) {
        if (typeof id === "number") {
            super.delete(id);
        } else {
            throw new Error("id is not a number!");
        }
    }
    putOne(id, data) {
        if (typeof id === "number") {
            super.put(id, data);
        } else {
            throw new Error("id is not a number!");
        }
    }
}
const API_URL = "https://jsonplaceholder.typicode.com/";
const getapi = new Comment(API_URL);

getapi.getAll();
getapi.GetOne(3);
getapi.deleteOne(2);
const data = {
    email: "loiktpc05314",
    name: "loi",
};
getapi.putOne(1, data);
