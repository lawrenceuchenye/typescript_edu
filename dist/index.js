//VARIABLES IN TYPESCRIPT
const a = "Yeah";
const getName = (name, surname) => {
    return name + " " + surname;
};
const age = 22;
console.log(getName("Law", "Uche"));
console.log(age);
const user = {
    name: "Dave",
    age: 33,
    getMessage() {
        return this.name;
    }
};
const user2 = {
    name: "Jack",
    getMessage() {
        return this.name;
    }
};
//TYYPE UNION IN TYPESCRIPT
const name_ = "alex";
const pageNumber = "1";
const User = null;
const Tags = ["groovy", "curl", "amzn"];
//TYPESCRIPT VOID 
const printHello = () => {
    console.log("Hello world!");
};
//TYPESCRIPT ANY
const foo = "00";
//TYPRSCRIPT TYPE ASSERTION AND UNKNOWN
const Unknown = "this is a string";
const sval = Unknown;
console.log(foo.bar());
const un = 10;
const stringun = un;
console.log(un);
//TYPESCRIPT CLASSES
class UserN {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getMessage() {
        return this.firstName + " " + this.lastName;
    }
    ;
}
const userr = new UserN("Law", "Uche");
