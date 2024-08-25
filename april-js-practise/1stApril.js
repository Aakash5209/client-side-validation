// function getsquare(arr){
//    let op = arr.map(x=>x*x)
//    return op;
// }

// console.log(getsquare([1,2,3,4,5]))

// function getEven(arr){
//     return arr.filter(num=>num>2)
// }

// console.log(getEven([1,2,3,4,5]))

// function sumArr(arr){
//     return arr.reduce((acc,num)=>acc+num,5)
// }
// let op = sumArr([1,2,3,4,5])
// console.log(op)

// function evenSum(arr){
//     let evenArr = arr.filter(x=>x%2==0)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)

// }

// console.log(evenSum([1,2,3,4,5,6,7]))

// function evenSum(arr){
//     return arr.filter(x=>x%2==0).reduce((acc,cur)=>acc+cur,0)
   
// }

// console.log(evenSum([1,2,3,4,5]))

// function sumEVen(arr){
//     // return arr.map(x=>x*x).filter(x=>x%2==0).reduce((acc,cur)=>acc+cur,0)
//     arr.map(x=>x*x)
//     let getEven =  arr.map(x=>x*x).filter(x=>x%2==0)
//     console.log('res of map + filter', getEven)
//     return getEven.reduce((acc,cur)=>acc+cur,10)
// }

// console.log(sumEVen([1,2,3,4,5]))

// function chunkArr(arr, key){
//     let res = [];
//     for(let i=0; i<arr.length; i+=key){
//         res.push(arr.slice(i, i+key))
//     }
//     return res;

// }
// console.log(chunkArr([1,2,3,4,5,6,7], 2))

// let sum = (first,second)=>{
//     console.log("hiiiii",first+)
// }
// sum()
// function evenSum(arr){
//     let evenArr = arr.filter(x=>x%2==0)
//     console.log(evenArr)
//     return evenArr.reduce((acc,curr)=>acc+curr,0)

// }

// console.log(evenSum([1,2,3,4,5,6]))

// function evenSum(arr){
//     return arr.filter(x=>x%2==0).reduce((acc,curr)=>acc+curr,0)
   
// }

// console.log(evenSum([1,2,3,4,5,6]))

// function sumELem(arr){
//     return arr.map(x=>x*2).filter(x=>x>6).reduce((acc,cur)=>acc+cur,0)

// }

// console.log(sumELem([1,2,3,4,5,6]))

// function getFreq(arr){
//     let freq = {};
//     for(let i=0; i<arr.length;i++){
//         let char = arr[i];
//         console.log(char)
//         if(freq[char]){
//             freq[char]++
//             console.log('1',char)
//         }
//         else{
//             freq[char] =1

//         }

//     }
//     // console.log(freq)
//     return freq

// }
// console.log(getFreq(['a','b','c','a','d','a','d']))

// function getFreq(arr){
//     return arr.reduce((acc,cur)=>{
//         acc[cur] = (acc[cur] || 0) +1
//         return acc

// },{})
// }

// console.log(getFreq(['a','b','c','a','d','a','d']))

// function customMap(arr, cb){
//     let res = [];
//     for(let i=0; i<arr.length;i++){
//         let rcb = cb(arr[i]);
//         res.push(rcb)
//     }
//     return res

// }
// console.log(customMap([1,2,3,4,5],x=>x*3))

// function customMap(arr, cb){
//     let res = [];
//     for(let i=0; i<arr.length;i++){
//         // let rcb = cb(arr[i]);
//         res.push(cb(arr[i]))
//     }
//     return res

// }
// console.log(customMap([1,2,3,4,5],x=>x*3))

// function customFilter(arr, cb){
//     let res = []
//     for(let i=0; i<arr.length; i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }

// console.log(customFilter([1,2,3,4,5],x=>x>2))

// function customReduce(arr, cb, init){
//     let acc = init;
//     for(let i=0; i<arr.length;i++){
//         acc = cb(acc,arr[i])
//     }
//     return acc;
// }
// console.log(customReduce([1,2,3,4,5],(acc,x)=>acc+x,[]))


// function mapTransform1(arr){
//     return arr.map((str) =>{
//         const res = {};
//         res.fruitN = str;
//         res.length = str.length;
//         res.case = str.toUpperCase()
//         return res;


//     })
// }
// console.log(mapTransform1(['apple','banana','cherry','mango']))

// function mapTransform2(arr){
//     return arr.map(x=>[x,x*x])
// }
// console.log(mapTransform2([1,2,3,4,5]))


// function mapTransform2(arr){
//     return arr.map(x=>{
//         const res =[]
//         res.push(x*2)
//         res.push(x*x)
//         return res
//     })
// }
// console.log(mapTransform2([1,2,3,4,5]))

// function mapTransform3(arr){
//     return arr.map(x=> ()=>x*2)
// }

// let op1 = mapTransform3([1,2,3,4,5])


// // console.log('op1',op1)

// const op2 = op1.map((f)=>f())

// console.log('op2',op2)

// function mapTransform4(arr){
//     return arr.map(x=>{
//         return ()=>x*x

//     })
// }
// let op1 = mapTransform4([1,2,3,4,5])
// console.log("op1",op1)

// let op2 = op1.map(f=>f())
// console.log("op2",op2)

// function mapTransform5(arr){
//     return arr.map(pair=>pair[0]*pair[1])
// }
// console.log(mapTransform5([[1,2],[3,4],[5,6]]))

// function mapTransform6(arr){
//     return arr.reduce((acc,subArr)=>{
//         acc.concat(subArr)
//         return acc;
//     },[])
// }

// console.log(mapTransform6([[1,2],[3,4],[5,6]]))

// function mapTransform7(arr){
//     return arr.map(x=>x.price).reduce((acc,cur)=>acc+cur,0)
    
// }

// console.log(mapTransform7([{Name: 'item1', price:100},{Name: 'item2', price:200},{Name: 'item3', price:300}]))

// function filterTrans(arr,limit){
//     return arr.filter(x=>x.length ===limit).length
    
//     // console.log(filterArr)
// }
// console.log(filterTrans(['grapes','banana','mango','apple'],6))

// function mapTransform11(arr){
//     const total = arr.reduce((acc,cur)=>acc+cur.grade,0)
//     const avg = total/arr.length
//     return {total,avg}

// }
// console.log(mapTransform11([{name: 'aman', grade :85},{name: 'chaman', grade :92},{name: 'naman', grade :88}]))