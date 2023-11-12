function rgb(r, g, b) {
    const clamp = (x)=> {
        return Math.min(255,Math.max(0,Math.round(x)))
    }
    
    
    r= clamp(r);
    g = clamp(g);
    b = clamp(b);

    

   
    const convert = (x)=> {
        let hexa = x.toString(16).toUpperCase();
        return hexa.length === 1? '0'+hexa :hexa;
    }

    return convert(r)+ convert(g) + convert(b);
    
  }

console.log(rgb(-10,255,255));