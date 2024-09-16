import { createModuleResolutionCache } from "typescript";

let a: number = 5;
console.log(a);  // This will correctly log the value of 'a'


let title: string;
title="Shah rahe faisal";
console.log(title);
//type annoatation:

let fullName : string;
fullName = 'fsy';
console.log(fullName);

//declare it
let number : number;

//initialize it
number  = 123; 

// print
console.log(number);

//string array only string intake
const names : string[] = [];
names.push("fatima");
names.push("fsy");
names.push("123");
names.pop();
console.log(names);
names.pop();

let age : number;
 age = 23;
 
 const ages : number [] = [];
 ages.push(23);
 ages.push(12,90,87,89);
 console.log(ages);

 function sum (a:number, b:number): number{
    return a+b;
 }
//tuples
let address : [number, string, number];
address = [111,'fsy',234] 


let person : {name: string};
person = {name: 'fsy'} 


// OPTIONAL PROPERTY
let family : {name: string, age?: number};
family = {name: 'huda'}
family = {name : 'hudabakht', age: 30};

let shah_Family_tree : {
   name: string, 
   age?: number, 
   school: string, 
   hobby?: string
};
shah_Family_tree={name: 'aliabhutt',school: 'yangi'}
shah_Family_tree={name: 'honda', age:30, school:"softwere-Engineer" };
shah_Family_tree= {name: 'faqa', age:78,school:'abc',hobby : "cricket"};

console.log(shah_Family_tree);

function divide(a:number, b:number) :number{
   return a/b;

}

let familier :[number, string, number?];
familier = [13, "haji", 122] 
// type annonatation

let fulhouse : string = "fatii";

let num: number;
num =1;

const subjects: string[] = [];
subjects.push("chemistry");

//functions
function family_tree(a:number, b:number) : number{
   return a+b;
}  


function family_history(a:string, b:string) : string {
    return a;
    
} 
// TUPLES 
let address_place : [number, string, number];
address_place =[ 222, "shaikh shaheen road", 9898]

//objects

let person_name : {name : string};
person_name = { name: 'her name is shah'};


// decimal leading to zeros are not allowed
let person_identity :{ identity : number};
person_identity = { identity: 1923 }; 

//optional value 
function add (a:string, b?:string){
return a+b;
}

console.log(add('abc', 'sde'));

// let nationality : 
let nation: {names_of_nation: string, no_of_people?: number};
nation= {names_of_nation: "pakistan", no_of_people: 2000};
nation ={names_of_nation: "india"};
nation = {names_of_nation: "Americans", no_of_people: 100000000000000000000};
console.log(nation);


function find_home(street:string, address: string){
   return street+address;
}

console.log(add("sheikh Shaheen Road Sukkur","hyderabad"));