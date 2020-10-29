var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function () {
    function Home(numberOfRooms, numberOfWindows, floor) {
        this._numberOfRooms = numberOfRooms;
        this._numberOfWindows = numberOfWindows;
        this._floor = floor;
    }
    Home.prototype.eat = function () {
        console.log(this._floor + " katlı evde yemek yiyildi.");
    };
    return Home;
}());
var home = new Home(3, 4, 5);
home.eat();
console.log(home._numberOfRooms + ": room");
console.log(home._numberOfWindows + ": windows");
console.log(home._floor + ": floor");
//INHERITANCE
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log("Person saved");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("It'is sold");
    };
    return Customer;
}(Person));
var Personal = /** @class */ (function (_super) {
    __extends(Personal, _super);
    function Personal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personal.prototype.paySalary = function () {
        console.log("Salary is paid");
    };
    return Personal;
}(Person));
var customer = new Customer();
customer.sell();
customer.save();
var personal = new Personal();
personal.paySalary();
personal.save();
//PUBLIC, PROTECTED, PRIVATE KEYWORDS....
//Public: her yerden erişim olur. Default olarak gelir.
//Protected: inherit edilen classlar ve tanımlandığı class 'ın içerisinde erişim olur.
// Private: sadece tanımlandığı class içerisinde erişim olur.
//ENCAPSULATION: GETTER AND SETTER
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Object.defineProperty(Person2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Person2.prototype.save = function () {
        console.log("Person saved");
    };
    return Person2;
}());
var Customer2 = /** @class */ (function (_super) {
    __extends(Customer2, _super);
    function Customer2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer2.prototype.sell = function () {
        console.log("It'is sold");
    };
    return Customer2;
}(Person2));
var Personal2 = /** @class */ (function (_super) {
    __extends(Personal2, _super);
    function Personal2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personal2.prototype.paySalary = function () {
        console.log("Salary is paid");
    };
    return Personal2;
}(Person2));
var customer2 = new Customer2();
customer2.name = "Emre Tekce";
console.log(customer2.name);
customer2.name = "Yusuf Tekce";
console.log(customer2.name);
customer2.name = "Mustafa Tekce";
console.log(customer2.name);
customer2.name = "ismail Tekce";
console.log(customer2.name);
