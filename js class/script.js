/*
var age=parseInt(prompt("enter your age"));
var value=document.createElement("div")
value.innerHTML="annuj giri"
var value2=document.createElement('div')
value2.innerHTML="not again"
const p = new Promise((resolve,reject)=>
{
    if(age>=18)
    {
        resolve(document.body.append(value));
    }
    else{
        reject(value2);
    }
});
console.log(p)
*/
//ba1af2be7df0ee427b494e589d9dc604
//api.openweathermap.org/data/2.5/weather?q=London&appid=ba1af2be7df0ee427b494e589d9dc604
//var temp=fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json').then((data)=>
//{
 //   return data.json();
//}).then((result)=>console.log(result))
//console.log(temp);
//dc3107ff9e1f271017248bd42c9a208b
https://restcountries.eu/rest/v2/all
//https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid---> for country weather data
var temp1='https://restcountries.eu/rest/v2/all'
fetch(temp1).then((data)=>data.json()).then((data2)=>
{
    
    var cc= data2[0].latlng;
    let lat=cc[0]
    let lon=cc[1]
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dc3107ff9e1f271017248bd42c9a208b`)
}).then((open1)=>{
    return open1.json();
}).then((open2)=> console.log(open2));