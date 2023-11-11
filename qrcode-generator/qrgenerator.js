import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image'

inquirer
  .prompt([
    {message:'enter your url',
    name:'URL'}
    ]
  )
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    fs.writeFile('url.txt',url,(err)=> {
        if(err){
            throw err;
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error)
    } else {
      console.log(error)
    }
  });

  

 

 
