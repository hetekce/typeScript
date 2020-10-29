//GENERIC OLMADAN Fonksiyonlar
function value(x:number):number{
    return x;
}

function value2(x:string):string{
    return x;
}

let sayi = value(10);
console.log(sayi);

let city = value2("Ankara");
console.log(city);


//GENERIC ILE Fonksiyonlar
function value3<T>(x:T):T{
    return x;
}

let sayi3 = value3<number>(2);
let city3 = value3<string>("İstanbul");

//GENERIC ILE Classes

class GenericClasses<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}
let sinif = new GenericClasses<string>();
sinif.fonksiyon("Ankara");