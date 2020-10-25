class Home{
    _numberOfRooms:number;
    _numberOfWindows:number;
    _floor:number;
    constructor(numberOfRooms:number, numberOfWindows:number, floor:number){
        this._numberOfRooms = numberOfRooms;
        this._numberOfWindows  = numberOfWindows;
        this._floor = floor;
    }
    eat(){
        console.log(this._floor+" katlı evde yemek yiyildi.")
    }
}

let home = new Home(3,4,5);
home.eat()
console.log(home._numberOfRooms+ ": room")
console.log(home._numberOfWindows+": windows")
console.log(home._floor+": floor")


//INHERITANCE
class Person{
    save(){
        console.log("Person saved");
    }
}

class Customer extends Person{
    sell(){
        console.log("It'is sold");
    }
}

class Personal extends Person{
    paySalary(){
        console.log("Salary is paid");
    }
}

let customer = new Customer();
customer.sell();
customer.save();

let personal =new Personal();
personal.paySalary();
personal.save();

//PUBLIC, PROTECTED, PRIVATE KEYWORDS....

//Public: her yerden erişim olur. Default olarak gelir.
//Protected: inherit edilen classlar ve tanımlandığı class 'ın içerisinde erişim olur.
// Private: sadece tanımlandığı class içerisinde erişim olur.

//ENCAPSULATION: GETTER AND SETTER
class Person2{
    private _name:string

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    save(){
        console.log("Person saved");
    }
}

class Customer2 extends Person2{
    sell(){
        console.log("It'is sold");
    }
}

class Personal2 extends Person2{
    paySalary(){
        console.log("Salary is paid");
    }
}


let customer2 = new Customer2();
customer2.name  = "Emre Tekce";
console.log(customer2.name) ;