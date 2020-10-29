//GENERIC OLMADAN Fonksiyonlar
function value(x) {
    return x;
}
function value2(x) {
    return x;
}
var sayi = value(10);
console.log(sayi);
var city = value2("Ankara");
console.log(city);
//GENERIC ILE Fonksiyonlar
function value3(x) {
    return x;
}
var sayi3 = value3(2);
var city3 = value3("İstanbul");
//GENERIC ILE Classes
var GenericClasses = /** @class */ (function () {
    function GenericClasses() {
    }
    GenericClasses.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClasses;
}());
var sinif = new GenericClasses();
sinif.fonksiyon("Ankara");
