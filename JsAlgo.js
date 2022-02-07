// // let arr=[[1,2,3],[4,5,6],[7,8,9]]

// // let temp=0
// // for(let i=0;i<arr.length;i++){
// //     for(let j=0;j<arr[i].length;j++){
// //         temp+=arr[i][j]
// //     }
// // }
// // console.log(temp)

// let str="akshay"
// // console.log(str.split('').reverse().join(''))
// // //  let obj={}

// // //  for(let i=0;i<str.length;i++){
// // //      if(str[i]==str[i+1]){
// // //          obj[str[i]]
// // //      }
// // //  }
// for (ch in str) {
//     console.log(str[ch]  + " count: " +ch );
// }

// let s = 'akshay';
// var obj={}
// for(let i=0;i<s.length;s++){
//     if(!obj[i])
//     {
//         obj[i] =1
//     }else{
//         obj[i] = obj[i]  + 1
//     }
// }
// console.log("fgh",obj,s)
// let str = "atul kumar srivastava";
// let obj ={};
// for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
// console.log(obj)

// var result = [...s].reduce((a, e) => {
//     console.log(a[e])
//     a[e] = a[e] ? a[e] + 1 : 1; return a
//  }, {});
// console.log(result); // {h: 1, e: 1, l: 2, o: 1}

// const arrofobj = [
//   {
//     name: ";aksahy",
//     roll: 98,
//   },
//   {
//     name: "mitu",
//     roll: 67,
//   },
// ];

// let namesarr = [];

// for (let key in arrofobj) {
//   namesarr.push(arrofobj[key].name);
// }
// console.log(namesarr);

// let str = "  narula istitute of technology     sdfg dfg  ";

// console.log(str.trim().split(/\s+/).length);
