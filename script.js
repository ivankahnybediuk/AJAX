$(document).ready(function(){

    function getInfo(){
        fetch("http://64.225.74.130/api/paints/getstart")
        .then((response)=>{
            console.log(response.json)
        })
    }
})
