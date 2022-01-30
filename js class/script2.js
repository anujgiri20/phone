//crud opeartion via api
//create read update delete
var url= "https://612dbcd5e579e1001791dced.mockapi.io/user"

//read opeartion is first operation 

function getdata()
{
    fetch(url)
    .then((result)=>
    {
        result.json
    })
}