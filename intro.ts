//code to track:
//ilk olarak console açıyoruz
//tsc intro.ts diyerek ts dosyasının ismini girerek kodu js'ye dönüştürüyoruz.
//Sonra yeni bir console açıyoruz, nodemon intro.js kodu ile otomatik takibe başlıyoruz.
//artık ts dosyası üzerinde değişiklik yapıp ilk console'da tekrardan intro.ts dersek
//otomatik olarak takip gerçekleşir ve bunu 2. console üzerinden görebiliriz.

function greeter(name: string){
    return "Welcome " +name
}

let mesaj = greeter('EmRe')

console.log(mesaj)

let mesaj2 = greeter("Murtaza")
console.log(mesaj2);


//Datatypes

let num:number
num = 10
num = 10.4

let city:string = "Adana" //bu şekilde de tanımlanabilir.
city = "Ankara"
city = "İstanbul"

let isTrue :boolean
isTrue =false
isTrue = true

let numbers:number[]=[1,2,3] //arrays bu şekilde tanımlanabilir.
let numbers2:Array<number> =[1,2,3] //generic array tanımı

let dizi:[number,string] =[2,"Ankara"] //bu şekilde tuple oluşturulabilir.
dizi[0] //2
dizi[1] //"Ankara"

enum Color{Red=1,Black=2,Blue=3}
let color:Color = Color.Red

let value:any ="Ankara" //türünü bilmiyorsak gelen ifadenin any kullanırız.
value = 2
value ={}

let value2:void = undefined //herhangi birşey return etmek istemiyorsak.

function giveHello():void{
    console.log("Hello")
    //return "Hello" // bu mesela çalışmaz çünkü fonksiyon void bir fonksiyon.
}











