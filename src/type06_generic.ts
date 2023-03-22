//generic
function getSize<T>(arr:T []):number{
    return arr.length;
}
const numArr = [1,2,3,4];
getSize<number>(numArr); //4

const strArr23 = ['a','b','c','d'];
getSize<string>(strArr23); //3
const boolArr2 = [true,false,true,true];
getSize<boolean>(boolArr2);
const objArr2 = [{},{name:"a"},{},{age:30},{}];
getSize<object>(objArr2); //5


interface Animal <T> {
    name: string;
    color:string;
    option:T;
}
const animal2: Animal<string> = {
    name:"고양이",
    color:"검정",
    option:"특이함"
}
const amimal1:Animal<{age:number; hobby:string}> = {
    name:"강아지",
    color:"흰색",
    option:{
        age:3,
        hobby:"축구"
    }
}
//제네릭 확장 extends
interface Student100 {
    name:string;
    age:number;
}
interface Car {
    name:string;
}
interface Fruit{
    color:string;
}
const stu100: Student100 = {
    name:"a",
    age:19
}
const car1:Car = {
    name:"소나타"
}
const fruit1:Fruit = {
    color:"빨강"
}
function printobjName<T extends { name:string } >(data:T): string {
    return data.name;
}
printobjName(stu100);
printobjName(car1);
//printobjName(fruit1);
type U = number | string | boolean;
interface MyType<T extends U >{
    name:string;
    value:T
}
const dataA: MyType<string> = {
    name:"하하",
    value:"제네릭"
}
const dataB: MyType<number> = {
    name:"호호",
    value:123
}
const dataC: MyType<boolean> = {
    name:"희희",
    value: true
}


//새로운 interface 3개 생성
interface 민준 {
    name:string;
    color:string;
}
interface 요한 {
    name:string;
    color:string;
}
interface 창민 {
    name:string;
    
}
//객체 
const s1: 민준={
    name:"민준",
    color:"흰색",
}
const s2: 요한={
    name:"요한",
    color:"검정"
}
const s3: 창민={
    name:"창민",
}
function printColor<T extends { color:string }>(data:T){
    console.log(data.color)
}
printColor(s1);
printColor(s2);
