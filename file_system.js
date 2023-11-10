const { isUtf8 } = require("buffer");
const fs = require("fs");

fs.writeFile("message.txt","hello world",(err)=> {
    if(err) throw err;
    console.log("done");
})
fs.readFile("message.txt",'utf-8',(err,data)=> {
    if(err) throw err;
    fs.writeFile("write.txt",data,(err)=> {
        if(err) throw err;
        console.log("wrote");
    })
})


async function example(){
    try{
       const data =  await fs.readFileSync('write.txt','utf-8')
            console.log(data);
        
    }
    catch(err){
          console.log(err);
    }
   
}
example();