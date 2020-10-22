//code to track:
//ilk olarak console açıyoruz
//tsc intro.ts diyerek ts dosyasının ismini girerek kodu js'ye dönüştürüyoruz.
//Sonra yeni bir console açıyoruz, nodemon intro.js kodu ile otomatik takibe başlıyoruz.
//artık ts dosyası üzerinde değişiklik yapıp ilk console'da tekrardan intro.ts dersek
//otomatik olarak takip gerçekleşir ve bunu 2. console üzerinden görebiliriz.
function greeter(name) {
    return "Welcome " + name;
}
var mesaj = greeter('EmRe');
console.log(mesaj);
var mesaj2 = greeter("Murtaza");
console.log(mesaj2);
//Datatypes
var num;
num = 10;
num = 10.4;
var city = "Adana"; //bu şekilde de tanımlanabilir.
city = "Ankara";
city = "İstanbul";
var isTrue;
isTrue = false;
isTrue = true;
var numbers = [1, 2, 3]; //arrays bu şekilde tanımlanabilir.
var numbers2 = [1, 2, 3]; //generic array tanımı
var dizi = [2, "Ankara"]; //bu şekilde tuple oluşturulabilir.
dizi[0]; //2
dizi[1]; //"Ankara"
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
var value = "Ankara"; //türünü bilmiyorsak gelen ifadenin any kullanırız.
value = 2;
value = {};
var value2 = undefined; //herhangi birşey return etmek istemiyorsak.
function giveHello() {
    console.log("Hello");
    //return "Hello" // bu mesela çalışmaz çünkü fonksiyon void bir fonksiyon.
}
