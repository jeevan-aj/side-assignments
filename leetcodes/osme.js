const data = [
    {
       
       home:[{
            name1:"jeevan",
            adress:"kozhikode"
        },
    {
        name1:"jeevan2",
        name2:"appu2"
    }],
        age:'21',
        school:'vsg'
    },
]


for(i of data){
    for(k of i.home){
        if(k.adress==="kozhikode") {
            k.adress = "thiruvalla"
        }
    }
}

