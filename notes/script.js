// settimeout

// // setTimeout(()=>{
// //     console.log("anujgiri");
// // },6000)

// // setTimeout(setTimeout(()=>
// // {
// //     console.log("anuj")
// // },5000),2000)


// calback function
// //function accepts one or more function as parameter

// // function dis(res)
// // {
// //     console.log(res)
// // }
// // function calculate(v1,v2,callback)
// // {
// // let sum=v1+v2;
// // callback(sum)
// // }
// // calculate(10,20,dis);

//  promise syntax= new promise((resolve,reject)=>
// // {
// //     resolve(".....")
// // })

// promise settimeout and functioncall all together
// // function compute(num)
// // {
// //     return new Promise((resolve,reject)=>
// //     {
// //         setTimeout(()=>reject(num*2),1000)
// //     })
// // }
// // compute(4).then((data)=>
// // {
// //     console.log(data)
// //     return compute(data)
// // }).then((data1)=>
// // {
// //     console.log(data1)
// //     return compute(data1)
// // }).then((data3)=>
// // {
// //     console.log(data3)
    
// // }).catch((error)=>
// // console.log(error))

// promise.all-->return type is array of return values

// // var p1= new Promise((resolve,reject)=>
// // {
// //     if(true)
// //     {
// //         resolve("one is done")
// //     }
// //     else{
// //         reject("one is not done")
// //     }
// // })
// // var p2= new Promise((resolve,reject)=>
// // {
// //     if(true)
// //     {
// //         resolve("second is done")
// //     }
// //     else{
// //         reject("second is not done")
// //     }
// // })
// // Promise.all([p1,p2]).then((data)=>
// // {
// //     console.log(data)
// // }).catch((error)=>{console.log(error)})

// fetching request via promise--> data in the form of readable stream thats why we convert it into json
// //as well as the daata present in the header
// //fetch provide alternatiive for xml http request
// //
// // var temp= fetch("https://restcountries.eu/rest/v2/all")
// // .then((data)=>
// // {
// //     return data.json();

// // }).then((data1)=>
// // {

// //     console.log(data1)
// // })


// js 
// iiife function
// // (function (a,b)
// // {
// //     console.log(a+b)
// // })(10,20)


// function anonymus
// // var anuj = function (a)
// // {
// //     return a+10
// // }
// // console.log(anuj(2))

// arrow function
//  var a=["ball","football","carom","walyball"]
// // var array = a.map(ele=>ele.length)
// // console.log


//  var a=["ball","football","carom","walyball"]
// // var array = a.filter(ele=>
// //     {
// //         if(ele.length>5)
// //         {
// //             return ele
// //         }
       
// //     })
// // console.log(array)


// // var a=["ball","football","carom","walyball"]
// // var array = a.map(ele=>ele+"anuj")
// // console.log(array)

// //normal arrow function without any oter fucbtion
// // var arr=(x)=>
// // {
// //     return x*x
// // }
// // console.log(arr(9))

// reduce
// // var ar=[1,2,3,4,5,6,7]
// // var final= ar.reduce((acc,ele)=>ele+acc,acc=10)
// // console.log(final)

// rest opertor

// // function add(...key)
// // {
// //    return key.reduce((acc,ele)=>ele+acc,acc=10)
// // }
// // console.log(add(1,2,3,4,5,6,7,8,9))

// // function add(...key)
// // {
// //     return key.map(ele=>ele.length)
// // }
// // console.log(add("ball","call","roll","small"))

// spread opeartor
// // var arr=[1,2,3,4,55]
// // console.log(...arr)
// //also used to concat two arrays
// // var a=[1,2,3,4]
// // var b=[5,6,7,8]
// // console.log(...a,...b)


// splice operator
// //it actualy change the content of array by adding ,replacing or removing element of array
// // var months=["jan",'feb','march']
// // months.splice(1,1,"april")
// // console.log(months)

// // var months=["jan",'feb','march']
// // months.splice(1,0,"april")
// // console.log(months)

// slice operation
// // var ary=[1,2,3,4,5,6,8]
// // console.log(ary.slice(0,-3))
// //can give elements from lower to upper range


// //this is what split and map(number) can doo
// // var arr=["12345"]
// // var t=arr[0].split("").map(Number)
// // console.log(typeof(t[2]))


// key and object datastructre-->here key is not inside double coat or single coat
// // var key={
// //     anuj:"anuj",
// //     age:7
// // }
// // console.log(key)
// // console.log(key.age)


// // var key={
// //     anuj:{1:"a",2:"b",3:[1,2,3,4,{anujanuj:"gi"}]},
// //     an:[1,2,3,4,5,5]
// // }
// // console.log(key.an[2])
// //console.log(key)
// // console.log(key.anuj.1)


// destruring-->
// //in destrucring you give actuly any numbers of names and then see you assign value to anuy numbers
// // var ar=["anuj","anu","a","ggg"]
// // let[fname,mname,lname,oname]=ar
// // console.log(oname)




// clases and object
// //to store value to obect we have something called as constructor
// //
// // class car{
// // constructor(name,year){
// // this.name = name
// // this.year= year 
// // }
// // }
// // var s1= new car("audi",2018)
// // var s2= new car("nano",2020)
// // var s3= new car("benz",2024)
// // console.log(s1.name)
// // console.log(s2.name)
// // console.log(s3.year)



// primitive-->call by value-->This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.
// //var a=3
// // var c
// // c=a
// // a=8
// // now see here c is just a copy of a but at diff memory location so if we ahnge a now then c does not get affected this is called as call by value
// //composite--> call  y refrences-->Let’s say, we have an object stored in the variable “a”. The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. No new object is created, no copy is created. Both the variables point to the same object. This is like having 2 names.
// //primitive-->string,number,boolean-->single value
// //compo-->array,object,function-->multiple values which are group togheter


// //fixed
// //means when you scroll down then it can alwys on the top means it can scroll with screen
// //stciky
// //means it can get stck to the top and remians on same position










