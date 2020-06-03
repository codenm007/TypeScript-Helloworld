interface UserInterface {
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}

class User implements UserInterface {
     name:string;
     email:string;
     age:number;

    constructor(name:string, email : string , age: number){
     this.name = name;
     this.email = email;
     this.age = age;

     console.log('User created '+ this.name);
    }

     register(){
        console.log(this.name + ' is now registered !')
    }

    payInvoice(){
        console.log(this.name + ' paid invoice')
    }
}

class Member extends User{
    id:number;

    constructor(id:number,name:string, email : string , age: number){
         super(name,email,age);
         this.id = id;
    }

    payInvoice(){
        super.payInvoice()
    }
}

//  let User1 = new User('Nilanjan',"example@email.com",19);

// User1.register();

let User1 : User = new Member(1,'Nilanjan Majumdar' , "example@example.com", 33);

User1.payInvoice();