// ejemplos con async y await en vez de promise
const multiplicar = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<=0||b<=0) {
                reject('solo se multiplica numeros positivos');
            }
            else if(a*b<0){
                reject('la calculadora no puede regresar un numero negativo')
            } 
            else {
                resolve(a*b);
            }
        }, 1000);
    });
}

const suma = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a==0||b==0) {
                reject('operacion inecesaria se esta sumando 0');
            } else {
                resolve(a+b);
            }
        }, 1000);
    });
}

const resta = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a==0||b==0) {
                reject('operacion inecesaria se esta restando 0');
            }
            else if(a<b){
                reject('la calculadora debe regresar un numero mayor a 0')
            }
             else {
                resolve(a-b);
            }
        }, 1000);
    });
}

const dividir = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<=0||b<=0) {
                reject('no se puede dividir a 0 o entre 0');
            }
            else if(a/b<0){
                reject('la calculadora no puede regresar un numero negativo')
            } 
            else {
                resolve(a/b);
            }
        }, 1000);
    });
}
//async y await
// const multAsync = async (num1,num2) => {

//     try{
//         resultado = await multiplicar(num1,num2)
//         console.log(resultado)
//         console.log('multiplicacion concluido')
//         return resultado;
//     }catch(err){
//         console.log(err)
//     } 
// }

// const sumaAsync = async (num1,num2) => {

//     try{
//         resultado = await suma(num1,num2)
//         console.log(resultado)
//         console.log('suma concluida')
//         return resultado;
//     }catch(err){
//         console.log(err)
//     } 
// }

// const restaAsync = async (num1,num2) => {

//     try{
//         resultado = await resta(num1,num2)
//         console.log(resultado)
//         console.log('resta concluida')
//         return resultado;
//     }catch(err){
//         console.log(err)
//     } 
// }

const calculos = async (funcion,num1,num2) => {
    try{
        resultado = await funcion(num1,num2)
        
        return resultado;
    }catch(err){
        console.log(err)
    } 
}


// sumaAsync(5,7).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
// multAsync(5,7).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
// sumaAsync(5,0).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
// multAsync(5,0).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
// restaAsync(5,7).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
// restaAsync(9,7).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
// restaAsync(5,0).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))
calculos(dividir,5,3).then(res => console.log('se resolvio', res)).catch(err=>console.log(err)).finally(()=>console.log('finalizado'))

