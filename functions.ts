function sum(x,y){
    return x+y;
}

function sum2(x:number,y:number):number{ //en son number return number olduğu için yazıldı...
    return x+y;
}

let sum3 = function(x:number, y:number):number{ //bu şekilde değişkene de atanabiliyor fonksiyon.
    return x+y;
}


console.log(sum(2,3))
console.log(sum("Ankara",2))
console.log(sum2(2,3))
console.log(sum2(5,2))
console.log(sum3(5,7))

console.log(sum(2,3))
console.log(sum("Ankara",2))

//default value
function sum4(x:number,y:number=4):number{  //4 = default assigned value
    return x+y;
}
console.log(sum4(3)) //3+4  = 7 result

//undefined value or unsure value

function sum5(x:number, y?:number):number{ //? yazıyorsa y kesin atanmak zorunda olmayabilir demek.
    if(y){ //eğer y değeri varsa bu blok çalışır.
        return x+y
    }else{
        return x //y değeri yoksa bu çalışır
    }
}

console.log(sum5(5)) //5 sonucu çıkar
console.log(sum5(5,3)) //8 sonucu çıkar