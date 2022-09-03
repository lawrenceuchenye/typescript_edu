

//VARIABLES IN TYPESCRIPT

const a:string="Yeah";
const getName=(name:string,surname:string):string =>{
    return name+" "+surname;
}
const age:number=22;
console.log(getName("Law","Uche"));
console.log(age);


//OBJECTS IN.TYPESCRIPT
//INTERFACE IN TYPESCRIPT
//
interface User{
    name:string;
    age?:number;
    getMessage():string;
}

const user:User={
    name:"Dave",
    age:33,
    getMessage(){
        return this.name;
    }
};

const user2:User={
    name:"Jack",
    getMessage(){
        return this.name;
    }
};


//TYYPE UNION IN TYPESCRIPT

const name_:string="alex";
const pageNumber:string | number="1";
const User:string | number | null | undefined =null;


//TYPESCRIPT ALIASES

type ID=string;
type popularTags=string;

const Tags:popularTags[]=["groovy","curl","amzn"];



