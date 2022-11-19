class Worker{
    constructor(name, surname, rate, days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    calculator(){
        return (this.rate * this.days)
    }
}
const salaryWorker1 = new Worker("Ivan", "Ivanov", 25, 18);
const salaryWorker2 = new Worker("Oleg", "Bykov", 30, 16);

let salary1 = salaryWorker1.calculator();
let salary2 = salaryWorker2.calculator();

console.log(salary1);
console.log(salary2);


// class MyString{
//     reverse(str){
//         let reverseStr = '';
//         for( let i=str.lenght -1; i >=0; i--){
//             reverseStr += str[i];
//         }
//         return reversStr;
//     }
//     ucFirst(str){
//         let newStr = str[0].toUpperCase() + str.slice(1);
//         return newStr;
//     }
//     ucWords(str){
//         let arr = str.split('');
//         let strArr = [];
//         for (let i = 0; i < arr.lenght; i++){
//             let a = arr[i];
//             let newStr = a[0].toUpperCase() + a.slice(1);
//             strArr.push(newStr);
//         }
//         return strArr.join('');
//     }
// }
// let slovo = new MyString();
// console.log(slovo.reverse('стол стул шкаф'))
// console.log(slovo.ucFirst('стол, стул, шкаф'))
// console.log(slovo.ucWords('стол, стул, шкаф'))


class MyString {
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }
}
let slovo = new MyString();
console.log(slovo.reverse('стол стул шкаф'));
console.log(slovo.ucFirst('стол стул шкаф'));
console.log(slovo.ucWords('стол, стул, шкаф'));