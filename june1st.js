// function chunkArr(arr,key){
//     let res = [];
//     for(let i=0; i<arr.length;i+=key){
//         res.push(arr.slice(i,i+key))
//     }
//     return res;

// }

// console.log(chunkArr([1,2,3,4,5,6,7],6))

// function findDup(arr){
//     let res =[]
//     let freq = {}

//     for(let i=0; i<arr.length;i++){
//         let num = arr[i]
//         if(freq[num]){
//             freq[num]++
//         }
//         else{
//             freq[num]=1
//         }
//     }
//     for(let num in freq){
//         if(freq[num]>1){
//             res.push()
//         }
//     }

// }

// console.log(findDup([1,2,3,1,2,3,2,1,4]))

// function dupArr(arr){
//     const freq = arr.reduce((acc,num)=>{
//         acc[num] = (acc[num] || 0) +1
//         return acc;

//     },{})
//     return freq;
// }
// console.log(dupArr([1,2,3,4,1,2,3,1,1,2]))

// function customMap(arr,cb){
//     let res = []
//     for(let i=0; i<arr.length;i++){
//         res.push(cb(arr[i]))
//     }
//     return res;

// }
// console.log(customMap([1,2,3,4,5,6],x=>x*10))

// function customFilter(arr, cb){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }
// console.log(customFilter([1,2,3,4,5,6],x=>x%2!==0))

// function customReduce(arr,cb,init){
//     let acc = init;
//     for(let i=0;i<arr.length;i++){
//         acc = cb(acc,arr[i])
//     }
//     return acc;
// }

// console.log(customReduce([1,2,3,4,5],(ac,num)=>ac+num,0))

// function evenSum(arr){
//     const even = arr.filter(x=>x%2==0)
//     return even.reduce((acc,num)=>acc+num,0)
// }

// console.log(evenSum([1,2,3,4,5,6,7]))

// [1,2,3,4,5] => *2 = [2,4,6,8,10]=> [8,10]

// function transformFilter(arr){
//     // return arr.map(x=>x*2).filter(x=>x>6)
//     const transform = arr.map(x=>x*2)
//     return transform.filter(x=>x>6)

// }
// console.log(transformFilter([1,2,3,4,5]))

// const b=[0,3,1,2,4,1,2,5,5,1,2,5,0]

// const na=[];
// let flag=0;
// for(let i=0; i<b.length;i++)
// {
//     flag=0;
//     if(b[i]!=null){
//         for(let j=i+1; j<b.length;j++){
//             if(b[i]==b[j]){
//                 flag=1;
//                 b[j]=null;
//             }
//         }
//         if(flag==1){
//             na.push(b[i]);
//         }
//     }
// }

// console.log(na);

// function evenSum(arr){
//     let evenArr = arr.filter(x=>x%2===0)
//     console.log(evenArr)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)
// }
// console.log(evenSum([1,2,3,4,5,6]))

// function evenSum(arr){
//     return arr.filter(x=>x%2===0).reduce((acc,cur)=>acc+cur,0)

// }
// console.log(evenSum([1,2,3,4,5,6]))

// function mapTransform1(arr){
//     return arr.map(x=>({fruitN : x}))
// }
// console.log(mapTransform1(['apple','banana','grapes']))

// function mapTransform1(arr){
//     return arr.map(x=>{

//         return {fruitN : x, len : x.length, case: x.toUpperCase()}
//     })
// }
// console.log(mapTransform1(['apple','banana','grapes']))

// function mapTransform2(arr){
//     return arr.map(x=>{
//         let res = []
//         res.push(x)
//         res.push(x*x)
//         return res
//     })
// }

// console.log(mapTransform2([1,2,3,4,5]))

// function mapTransform3(arr){
//     return arr.map(x=> ()=>x*2)
// }
// let op1 = mapTransform3([1,2,3,4,5])
// let op2 = op1.map(f=>f())
// console.log("op2",op2)
// console.log(op1[0])

// function mapTransform4(arr){
//     return arr.map(x=>x[0]*x[1])
// }
// console.log(mapTransform4([[1,2],[3,4],[5,6]]))

// function mapTransform4(arr){
//     return arr.reduce((acc,cur)=>acc.concat(cur),[])
// }
// console.log(mapTransform4([[1,2],[3,4],[5,6]]))

// function mapTransform5(arr,prop){
//     return arr.reduce((acc,obj)=>{
//         const key = obj[prop]
//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(obj)
//         return acc;
//     },{})
// }
// console.log(mapTransform5([{name: 'aman',age:20},{name: 'naman',age:20},{name: 'chaman',age:30},{name: 'kamal',age:22}],'age'))

// function mapTransform7(arr){
//     const total = arr.reduce((acc,cur)=>acc+cur.price,0)
//     const avg = total/arr.length;
//     return {total,avg}

// }
// console.log(mapTransform7([{name:'item1',price:100},{name:'item2',price:200},{name:'item3',price:300}]))

// function mapTransform13(arr, key){
//     return arr.filter(str=>str.length ===key).length
// }
// console.log(mapTransform13(['apple','mango','grapes','banana'],5))



///////////////////////   Async JS  ///////////////////////////////////////////



// function greet(name, cb){
//     console.log(`Heloo, ${name}`)
//     cb()
// }
// greet('Alice',()=>{
//     console.log('this is ur cb')
// })

// function greet(name, cb){
//     console.log("hiii")
//     setTimeout(()=>{
//         console.log(`bye ${name}`)
//         cb()
//     },2000)
   
// }
// greet('Alice',()=>{
//     console.log('this is ur cb')
// })

// sequential execution

// function setp1(cb){
//     setTimeout(() => {
//         console.log('setp1 fxn is called')
//         cb()
        
//     }, 1000);
// }

// function setp2(cb){
//     setTimeout(() => {
//         console.log('setp2 fxn is called')
//         cb()
        
//     }, 2000);
// }
// function setp3(cb){
//     setTimeout(() => {
//         console.log('setp3 fxn is called')
//         cb()
        
//     }, 3000);
// }

// setp1(()=>{
//     setp2(()=>{
//         setp3(()=>{
//             console.log("all callback are completed")
//         })
//     })
// })


// parallel execution 
// function step1(cb){
//     setTimeout(() => {
//         console.log('setp1 fxn is called')
//         cb('step1')
        
//     }, 7000);
// }

// function step2(cb){
//     setTimeout(() => {
//         console.log('setp2 fxn is called')
//         cb('step2')
        
//     }, 2000);
// }
// function step3(cb){
//     setTimeout(() => {
//         console.log('setp3 fxn is called')
//         cb('step3')
        
//     }, 3000);
// }

// function parallelCall(){

   
//     function checkUpdate(step){
        
//         console.log(`${step} callback excuted`)

//     }

//     step1(checkUpdate)
//     step2(checkUpdate)
//     step3(checkUpdate)
// }

// parallelCall()



// const Prom = new Promise((resolve,reject)=>{
//     const success = false;
//     if(success){
//         resolve("operation done")
//     }
//     else{
//         reject("operation fail")
//     }

// })
// Prom.then((res)=>{
//     console.log(res)

// }).catch(err=>{
//     console.log(err)
// })



// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 1 is completed')
//             resolve()

//         },1000)
//     })
// }

// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 2 is completed')
//             resolve()
//         },2000)
//     })
// }

// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 3 is completed')
//             resolve()

//         },3000)
//     })
// }

// step1()
// .then(step2)
// .then(step3)
// .then(()=>{
//     console.log("all fxn completed")
// })

//  using async await-------------------

// function step1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 1 is completed')
//             resolve()

//         },1000)
//     })
// }

// function step2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 2 is completed')
//             resolve()
//         },2000)
//     })
// }

// function step3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step 3 is completed')
//             resolve()

//         },3000)
//     })
// }

// async function runstep(){
//     await step1()
//     await step2()
//     await step3()
//     console.log("all step completed")

// }
// runstep()

// api ---   https://jsonplaceholder.typicode.com/todos/

// async function fetchData(){
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
//         const data = await res.json()
//         console.log(data)
//     }
//     catch(err){
//         console.log("->",err)
//     }


// }
// fetchData()


// function api1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("api1 fectch data from server...")
//             resolve('data 1')
//         },1000)
//     })

// }
// function api2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("api 2 fectch data from server...")
//             resolve('data 2')
//         },2000)
//     })

// }
// function api3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("api 3 fectch data from server...")
//             resolve('data 3')
//         },3000)
//     })

// }

// function fetchMulAPi(){
//     return Promise.all([api1(),api2(),api3()])
// }

// fetchMulAPi()
// .then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

function downloadContent(){
    const promise = urls.map(url=>{
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw new Error("http error ")
                }
                return res.text()
            })
            .then(data=>resolve(data))
            .catch(err=>{
                reject(err)
            })

        })

    })
    return Promise.all(promise)

}



const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"

]

downloadContent(urls)
.then(con=>{
    console.log(con)
})
.catch(err=>{
    console.log(err)
})