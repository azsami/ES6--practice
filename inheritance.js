class Father{
    constructor(){
        this.fatherName = "Usman"
    }
}

class Child extends Father{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " bin "+ this.fatherName;
    }
}

const baby = new Child("Amir");
const baby2 = new Child("Asif");
console.log(baby.getFullName());
console.log(baby2.getFullName());