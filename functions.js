function sum(x, y) {
    return x + y;
}
function sum2(x, y) {
    return x + y;
}
var sum3 = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
console.log(sum("Ankara", 2));
console.log(sum2(2, 3));
console.log(sum2(5, 2));
console.log(sum3(5, 7));
console.log(sum(2, 3));
console.log(sum("Ankara", 2));
//default value
function sum4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(sum4(3)); //3+4  = 7 result
//undefined value or unsure value
function sum5(x, y) {
    if (y) { //eğer y değeri varsa bu blok çalışır.
        return x + y;
    }
    else {
        return x; //y değeri yoksa bu çalışır
    }
}
console.log(sum5(5)); //5 sonucu çıkar
console.log(sum5(5, 3)); //8 sonucu çıkar
//rest functions
//aynı tipte birden fazla girdi olacaksa ve bunun sayısını bilmiyorsak
//bu şekilde rest fonksiyonu yardımı ile syntax oluşturabiliriz.
function invitePeople(firstGuest) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    //join methodu aralara parantez içerisindeki yazılı ifadeyi
    // koyarak dizi elemanlarını birleştirir!!
    return firstGuest + " " + others.join(" ");
}
console.log(invitePeople("Emre", "Mustafa", "Mesut", "Yusuf"));
