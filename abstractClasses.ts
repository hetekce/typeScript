abstract class CreditBase{
    //main class'ta bu şekilde parametreli tanımlanırsa
    // extend eden class'larda super içerisinde parametre girişi yapılır.
    constructor(something:string){

    }
    save():void{    //bu method abstract olarak tanımlanmadığı için heryerde ortaktır.
        console.log("Saved")
    }
    abstract calculate():void; //abstract olduğu için extend eden tüm classlar'da özelleştirilir.
}

class ConsumerCredit extends CreditBase{
    constructor(){
        super("something"); //main class'ta constuctor'daki parametre türüne göre buraya değer girilir.
    }

    calculate(): void {
        console.log("Calculated according to the Consumer credit.")
    }
}

class MortgageCredit extends CreditBase{
    constructor(){
        super("something"); //main class'ta constuctor'daki parametre türüne göre buraya değer girilir.
    }

    calculate(): void {
        console.log("Calculated according to the Mortgage credit.")
    }

    otherOperation(){

    }
}


let consumerCredit = new ConsumerCredit();
consumerCredit.calculate();
consumerCredit.save(); //main class'tan otomatik gelir.

let mortgageCredit =new MortgageCredit();
mortgageCredit.calculate();
mortgageCredit.save(); //main class'tan otomatik gelir.
mortgageCredit.otherOperation(); //özel olarak tanımlanan bu sadece mortgage içerisinde gelir.

//Fonksiyona Parametre olarak bu creditbase verilir. Ve duruma göre Mortgage veya Consumer çağrılır!!!
let credit:CreditBase;
credit = new MortgageCredit();
credit = new ConsumerCredit();

