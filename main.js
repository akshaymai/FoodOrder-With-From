// let elementsDisplay=document.getElementById("header-title")
// console.log(elementsDisplay)
// console.log("textContent",elementsDisplay.textContent)
// console.log("innerText",elementsDisplay.innerText)

// const items=document.getElementsByClassName('list-group-item')

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "blue";
// }

// const li = document.getElementsByTagName("li");

// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "green";
// }
// const li = document.getElementsByClassName("bb");
// li.textContent="zzzzzzzzzz"
// ".list-group-item:nth-child(2)"
// "li:nth-child(even)"
// const elements=document.querySelectorAll('li:nth-child(even)')
// // console.log(elements.length)

// elements.forEach((item)=>item.style.color="red")

// var obj={
//     name:"ajsahy",
//     address:{
//         city:'kolkata'
//     }
// }
// const {address:{city}}=obj
// console.log(city)

// var a={
//     no1:10

// }

// var b=a
// b.no1++;

// console.log(a,b)

// function add(...temp){
// return temp.reduce((aa,b)=>{
// return aa+b
// },0)
// }
// add(10,20,60)

// let container=document.querySelector('.container #main #addForm')

// let newButton=document.createElement('button')
// let content=document.createTextNode('I will fuck you')
// newButton.className="btn btn-dark"
//  let yy=document.querySelector('.container input[type="submit"]')
// newButton.appendChild(content)

// container.insertBefore(newButton,yy)

// function add(){

// }
// add.age="asd"
// console.log(add.length)

// function add(){
//     return '1'
// }

// var obk={
//     name:"akshay",
//     age(){
//       return   this.name + "is" + '24 years old'
//     }
// }
// console.log(add.call())

// let functionx =new Function('num1','num2','return num1+num2')

// console.log(functionx(8,9,7))

// function tony(params=5){
//     return params
// }

// console.log(tony(55))

// function add(HH){
// return HH;
// }

// console.log(add(function cc(){return 'akshAY'})())

// const result=(a)=>(b)=>a*b
// console.log(result(2)(5))

// function multiply(){
//     return
// }
// multiplyByTen

// const multiby = (num1) => {
//   return function (num2) {
//     return num1 * num2;
//   };
// };

// const multiplyByFive = multiby(6);
// console.log(multiplyByFive(3));

// function a(){
//     return function b(){
//         return function c(){
//         return 'sdvb'
//         }
//     }
// }
// console.log(a()()())

// setTimeout(() => {
// let name="akshay"
// }, 3000);

// console.log(name)
// console.log(new Array(100).map((item,index)=>index))

// function heavyDuity(index) {
//   let newArray = new Array(700).fill("IIT KGP");
//   console.log("Heavy duiety");
//   return newArray[index];
// }
// function heavyDuity2(index) {
//   let newArray = new Array(700).fill("IIT KGP");
//   console.log("Heavy duiety2");
//   return function (index) {
//   return  newArray[index];
//   };
// }
// console.log(heavyDuity2()(88));
// console.log(heavyDuity2()(56));
// console.log(heavyDuity2()(86));
// const arr = [10, 90, 80, 50, 63];

// for (var i = 0; i < arr.length; i++) {
//     (function (arg){
//         setTimeout(() => {
//             console.log("Inside",arg);
//           }, 3000);
//     })(i)

// }

// const obj = {
//   fname: "akshaty",
//   Lanme: "maity",
//   istrue: true,
//   fullName() {
//     return this.fname + this.Lanme;
//   },
// };

// const obj2 = {
//   fname: "mitu",
// };
// const hh=obj.fullName.bind(obj2)

// // let hh=obj.fullName.bind(obj2)

// console.log(obj.fullName())




// Number.prototype.filters=function(){

// return this.filter((item)=>{
//      return item%2==0
//  })
// }
// console.log([5,6,2,44,90].filters())