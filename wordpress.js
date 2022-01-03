var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)
fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
.then((d)=>d.json())
.then((data)=>{
    console.log(data)
    console.log(data.length)
    for(let i=0;i<data.length;i++){
        row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-4 mt-3 vijay">
        <div class="h-100 card">
            <div class="card-header  bg-secondary text-center"> <div class="title"><u>${data[i].title.rendered}</u></div><div>
         <div class=" card-body ">
           <div class = " card-text text-center px-5 py-5 " >
           <div class="cardbody">
            Type:${data[i].type} <br> 
            Excerpt:${data[i].excerpt.rendered} <BR>
            <input type="button" value="Read More" onclick="window.open('${data[i].link}')" id="btn"/>
            
           </div>
         </div>
        </div>`
    }
})
.catch((er)=>{
    console.log("error")
})