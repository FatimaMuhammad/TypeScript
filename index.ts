let a: number = 5;
console.log(a);  // This will correctly log the value of 'a'

//type annoatation:

let fullName : string = "fsy";

fullName = 'john';

//declare it
let number : number;

//initialize it
number  = 123; 

//string array only string intake
const names : string[] = [];
names.push("fatima");
names.push("fsy");
names.push("123");
console.log(names);

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

function family_tree(a:number, b:number) : number{
   return a+b;
}  


function family_history(a:string, b:string) : string {
    return a;
    
}