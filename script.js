$(document).ready(function(){
    let url="http://64.225.74.130";
    let html="";
        fetch(url+"/api/paints/getstart")
        .then((response)=>{
            return response.json()})
            .then((json)=>{
            for(let i=0; i<json.length-1; i++){
            let image = url+json[i]["src"];
            let author =json[i]["author"];
            let title = json[i]["title"];
            html+=`<div class="container" >
            <div class="img"><img style="width:300px" src="${image}"/></div>
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            </div>`;
            $(".container").css({width:"300px", heigh:"500px"});
        }
        $(".pictures").html(html);
        })
})

