/* 
para una promesa la estructura es return new Promisew((resolve, reject) => {
    
 let funcion=(cosa,cosa2)=>{   
    setTimeout(() => {
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
}


*/

const multiplicar = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a==0||b==0) {
                reject('Error: No se puede multiplicar por 0');
            } else {
                resolve(a*b);
            }
        }, 1000);
    });
}

multiplicar(2,0).then((result)=>console.log(result)).catch(err => console.log(err));