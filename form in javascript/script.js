var container=document.createElement('div')
container.setAttribute('class','container-fluid')

var row1= document.createElement('div')
row1.setAttribute('class','row')

var firsthalf= document.createElement('div')
firsthalf.setAttribute('class','col-lg-3 col-md-12 col-sm-12')


var forms=  document.createElement('form')
var h3=document.createElement('h3')
h3.innerHTML="Form Submission"
h3.setAttribute('class','heading')
var label1=document.createElement('label')
label1.setAttribute('for','firstname')
label1.innerHTML="First Name"

var label2=document.createElement('label')
label2.setAttribute('for','lastname')
label2.innerHTML="Last Name:"


var label3=document.createElement('label')
label3.setAttribute('for','addressline1')
label3.innerHTML="address line 1:"


var label4=document.createElement('label')
label4.setAttribute('for','addressline2')
label4.innerHTML="address line 2:"



var label5=document.createElement('label')
label5.setAttribute('for','pin')
label5.innerHTML="Pin"

var label6=document.createElement('label')
label6.setAttribute('for','Gender')
label6.innerHTML="Gender:"

var label7=document.createElement('label')
label7.setAttribute('sor','food')
label7.innerHTML="Choice of Food"
var span=document.createElement('span')
span.innerHTML="(must choose at least 2 out of 5 options)"
label7.append(span)
var divhead=document.createElement('div')
divhead.append(label7)

var br= document.createElement('br')


var input1=document.createElement('input')
input1.setAttribute('placeholder','First Name')
input1.setAttribute('type','text')
input1.setAttribute('id','firstname')
input1.setAttribute('class','form-control')


var input2=document.createElement('input')
input2.setAttribute('placeholder','Last Name')
input2.setAttribute('type','text')
input2.setAttribute('id','lastname')
input2.setAttribute('class','form-control')


var input3=document.createElement('input')
input3.setAttribute('placeholder','Address Line 1:')
input3.setAttribute('type','text')
input3.setAttribute('id','addressline1')
input3.setAttribute('class','form-control')


var input4=document.createElement('input')
input4.setAttribute('placeholder','Address Line 2:')
input4.setAttribute('type','text')
input4.setAttribute('id','addressline2')
input4.setAttribute('class','form-control')


var input5=document.createElement('input')
input5.setAttribute('placeholder','pin')
input5.setAttribute('type','text')
input5.setAttribute('id','pin')
input5.setAttribute('class','form-control')


var inputmale=document.createElement('input')
inputmale.setAttribute('type','radio')
inputmale.setAttribute('id','gen')
inputmale.setAttribute('class','gen')
inputmale.setAttribute('value','male')
inputmale.setAttribute('name','gen')



var inputfemale=document.createElement('input')
inputfemale.setAttribute('type','radio')
inputfemale.setAttribute('id','gen')
inputfemale.setAttribute('class','gen')
inputfemale.setAttribute('value','female')
inputfemale.setAttribute('name','gen')

var spanmale=document.createElement('span')
spanmale.innerHTML="Male"
var spanfemale=document.createElement('span')
spanfemale.innerHTML="Female"

var finalspangender=document.createElement('div')
finalspangender.append(inputmale,spanmale,inputfemale,spanfemale)


var inputa=  document.createElement("input")
inputa.setAttribute('class','fooo')
inputa.setAttribute('type','checkbox')
inputa.setAttribute('value','first')
inputa.setAttribute('id','fooo')


var inputb=  document.createElement("input")
inputb.setAttribute('class','fooo')
inputb.setAttribute('type','checkbox')
inputb.setAttribute('value','first')
inputb.setAttribute('id','fooo')

var inputc=  document.createElement("input")
inputc.setAttribute('class','fooo')
inputc.setAttribute('type','checkbox')
inputc.setAttribute('value','first')
inputc.setAttribute('id','fooo')

var inputd=  document.createElement("input")
inputd.setAttribute('class','fooo')
inputd.setAttribute('type','checkbox')
inputd.setAttribute('value','first')
inputd.setAttribute('id','fooo')

var inpute=  document.createElement("input")
inpute.setAttribute('class','fooo')
inpute.setAttribute('type','checkbox')
inpute.setAttribute('value','first')
inpute.setAttribute('id','fooo')


var spana= document.createElement('span')
spana.innerText="North India"
spana.style.position= "inline-block"

var spanb= document.createElement('span')
spanb.innerText="South India"

var spanc= document.createElement('span')
spanc.innerText="Chines"

var spand= document.createElement('span')
spand.innerText="japanese"

var spane= document.createElement('span')
spane.innerText="Sea Food"


var div1=document.createElement('div')
div1.append(inputa,spana)
div1.setAttribute("class",'"spana')

var div2=document.createElement('div')
div2.append(inputb,spanb)
div2.setAttribute("class",'"spanb')


var div3=document.createElement('div')
div3.append(inputc,spanc)
div3.setAttribute("class",'"spanc')

var div4=document.createElement('div')
div4.append(inputd,spand)
div4.setAttribute("class",'"spand')


var div5=document.createElement('div')
div5.append(inpute,spane)
div5.setAttribute("class",'"spane')


var labelstate=document.createElement('label')
labelstate.setAttribute('for','State')
labelstate.innerHTML="State"


var labelcountry=document.createElement('label')
labelcountry.setAttribute('for','countryy')
labelcountry.innerHTML="Country"

var inputforstate=document.createElement('input')
inputforstate.setAttribute('placeholder','State')
inputforstate.setAttribute('type','text')
inputforstate.setAttribute('id','statestate')
inputforstate.setAttribute('class','form-control')


var inputforcountry=document.createElement('input')
inputforcountry.setAttribute('placeholder','Country')
inputforcountry.setAttribute('type','text')
inputforcountry.setAttribute('id','countrycountry')
inputforcountry.setAttribute('class','form-control')

var button= document.createElement('button')
button.innerHTML="Submit"
button.setAttribute('type','submit')
button.setAttribute('id','submit')
button.setAttribute('class','form-control')



var secondmaindiv=document.createElement('div')
secondmaindiv.setAttribute('class','col-lg-7 col-sm-12 col-md-12')

var heading=document.createElement('h1')
heading.innerHTML="Temporary Database"

var tableorignal=document.createElement('div')
tableorignal.setAttribute('class','table')

var thead=document.createElement('thead')
thead.setAttribute('class','bg-dark thead-dark')

var tr=document.createElement('tr')

var td1=document.createElement('td')
td1.innerHTML="First Name"

var td2=document.createElement('td')
td2.innerHTML="Last Name"

var td3=document.createElement('td')
td3.innerHTML="Address"

var td4=document.createElement('td')
td4.innerHTML="Pincode"

var td5=document.createElement('td')
td5.innerHTML="Gender"

var td6=document.createElement('td')
td6.innerHTML="Food"

var td7=document.createElement('td')
td7.innerHTML="State"

var td8=document.createElement('td')
td8.innerHTML="Country"



var tbody=document.createElement("tbody")
tbody.setAttribute('class','tbody')


tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
thead.append(tr)
tableorignal.append(thead,tbody)
secondmaindiv.append(heading,tableorignal)


tbody.setAttribute('id','tbody')
forms.append(h3,label1,br,input1,br,label2,br,input2,br,label3,br,input3,br,label4,br,input4,br,label5,br,input5,br,label6,finalspangender,divhead,div1,div2,div3,div4,div5,labelstate,inputforstate,labelcountry,inputforcountry,button)
firsthalf.append(forms)
row1.append(firsthalf,secondmaindiv)
container.append(row1)
document.body.append(container)

function tablecreation(firstname,lastname,address,pin,gen,fooo,state,country){
     var row = document.createElement("tr")
var a = document.createElement("td")
     var b = document.createElement("td")
   var c = document.createElement("td")
    var d = document.createElement("td")
    var e = document.createElement("td")
    var f = document.createElement("td")
    var g = document.createElement("td")
    var h = document.createElement("td")
    var tbody = document.getElementById("tbody")
    a.innerHTML = firstname;
    b.innerHTML = lastname;
    c.innerHTML = address;
    d.innerHTML = pin;
    e.innerHTML = gen;
    f.innerHTML = fooo;
    g.innerHTML = state;
    h.innerHTML = country;
    row.append(a,b,c,d,e,f,g,h)
    tbody.append(row)
}


var  submiting = document.getElementById("submit")
submiting.addEventListener("click",function(calll){
    calll.preventDefault();
   var addressliness = [];
    address.push(addressline1.value)
    address.push(addressline2.value)

    //var gender = document.getElementsByName("gender")
    //let genderValue;
    //for(let i=0;i<gender.length;i++){
      //  if(gender[i].checked){
        //    genderValue = gender[i].value
        //}
    //}
    
    var fooods = document.getElementsByName("fooo")
    var count=0
    var final
    var arrayoffood = []
    //console.log(food)
    for(var j=0;j<fooods.length;j++){
        if(fooods[j].checked){
            arrayoffood.push(fooods[j].value)
        count++
        }
    }
    if(arrayoffood.length>=2){
        final = arrayoffood.join(", ")
    }else{
        final = alert("Choose atleast 2 options out of 5 in food")
    }

    tablecreation(firstname.value,lastname.value,address.join(" "),pin.value,genValue,final,state.value,country.value)
    firstname.value = ""
    lastname.value = ""
    addressline1.value = ""
    addressline2.value = ""
    pin.value = ""
    gen.value = ""
    arrayoffood = [];
    state.value = ""
    country.value = ""
})

let firstname = document.getElementById("firstname")
let lastname = document.getElementById("last")
let addressline1 = document.getElementById("addressline1")
let addressline2 = document.getElementById("addressline2")
let pin = document.getElementById("pin")
let gen = document.getElementById("gen")
let fooo = document.getElementById("fooo")
let state = document.getElementById("state")
let country = document.getElementById("country")




