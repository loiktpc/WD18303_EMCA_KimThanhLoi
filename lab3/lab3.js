// lab 3.1
// loiktpc05314

// 3.1
const Mutiply = (num1, num2) => {
    return num1 * num2;
};

const ToCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
};

const padZeros = (num, totallen) => {
    let numStr = num.toString();
    let numZeros = totallen - numStr.length;
    numZeros.forEach((element) => {
        numStr = "0" + numStr;
    });
    return numStr;
};

const Power = (base, exponent) => {
    let result = 1;
    exponent.forEach((item) => {
        result *= base;
    });
    return result;
};

const greet = (who) => {
    console.log("Hello Work" + who);
};

// 3.2
const arr = [1, 2, 3, 4, 5, 6, 7];
let tong = 0;
const tinhtong = (arr) => {
    arr.forEach((item) => {
        tong += item;
    });
};
tinhtong(arr);
console.log(`Tổng số trong mảng: ${tong}`);

// 3.3
let Entity = function (name, delay) {
    this.name = name;
    this.delay = delay;
};

Entity.prototype.greet = function () {
    setTimeout(
        function () {
            console.log(`xin chào tên tôi là`, this.name);
        }.bind(this),
        this.delay
    );
};

let js = new Entity("js", 5000);
let java = new Entity("java", 500);

js.greet();
java.greet();

// 3.4
const convertTemperature = (temperature, unit) => {
    if (!Number(temperature)) {
        console.log("không phải số");
        return;
    }
    let strunit = unit.toUpperCase();

    if (strunit === "C" || strunit === "F") {
        let congthuc = `${(temperature * 9) / 5 + 32} độ ${
            strunit === "C" ? "F" : "C"
        }`;
        return congthuc;
    } else {
        console.log("đơn vị ko chính xác");
        return;
    }
};

const unit = "c";
const temperature = 20;
console.log(convertTemperature(temperature, unit));
