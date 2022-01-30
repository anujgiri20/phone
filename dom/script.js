var table=document.createElement('table')
var tr=document.createElement('tr')
var td=document.createElement('td')




var button=document.createElement('button')
button.setAttribute('type','button')
button.classList.add('btn','btn-primary');

button.setAttribute('value','1')
button.innerText="clackme"
td.append(button)
tr.append(td)
table.append(tr)
document.body.append(table)


function dis()
{
    var di=document.createElement('div')
    di.innerHTML= "anuj"
    document.body.append(di)
}