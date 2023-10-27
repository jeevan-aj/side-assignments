const data = [
    {file:"first",body:"this is first body"},
    {file:"second",body:"this is second body"}
]

function show(){
    
   setTimeout(()=> {
    let output = '';
       data.forEach((cur)=> {
           output += `<div>${cur.file}</div>
           <div>${cur.body}</div>`
        });
        document.body.innerHTML = output;
    },2000)
}

function newData(newData){
    setTimeout(()=> {
    data.push(newData);
    },3000);
}

show();
newData({file:"third",body:"this is third file"});