interface Product{
    id:number;
    name:string;
    unitPrice:number;
}

function save(product:Product){
    console.log(product.name +" kaydedildi");
}
//Tüm değerleri vermemiz gerekiyorsa interface olarak tanımlarız!!!!
save({id:1,name:"laptop",unitPrice:10})

class Product2{
    id:number;
    name:string;
    unitPrice:number;
}

function save2(product2:Product2){
    console.log(product2.name +" kaydedildi");
}

let mouse = new Product2();
mouse.name = "MSI"; //Tüm değerleri vermemiz gerekmiyorsa class olarak tanımlarız.

save2(mouse);



interface PersonService{
    save();
}

class CustomerService implements PersonService{ //interface implement edildi
    save(){ //interface'de tanımlı fonksiyon burada olmak zorunda!!!
    }
}