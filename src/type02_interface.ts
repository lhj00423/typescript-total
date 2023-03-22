interface Dog{
    readonly name:string,
    age:number,
    color?:string
}
let dog1: Dog= {
    name :"둥이",
    age: 3 
}
let dog2: Dog= {
    name :"구름",
    age: 3
}
//리터럴 (실제 입력값) 타입
//문자열리터럴 타입 지정
type Score = 'A'|'B'|'C'|'D'|'E'|'F';
interface Student2{
    name:string;
    age:number;
    gender:string;
    [grade:number]:Score
}

// let stu1 : Student2 = {
//     name:"창민",
//     age:30,
//     gender: "남자",
//     1:"B"
// }
// let stu2 : Student2 = {
//     name:"요한",
//     age:22,
//     gender: "남자",
//     1:"A"
// }

//모든 파라미터 readonly 
interface ReadUser{
     name:string,
     age:number,
     phone:string
}
let readuser1:Readonly <ReadUser>= {
    name:"그린",
    age:30,
    phone:"01012341234",
}
interface TV{
    turnOn():boolean;
    turnOff():void;
}
const myTv:TV = {
    turnOn() {
        return true;
    },
    turnOff() {
        console.log("off");
    },
}
interface SingUp{
    email:string;
    id:string;
    password:string;
}
//클래스 타입 인터페이스 !!!!
//implements키워드
interface IStudent {
    name:string,
    getName():string
}
class Student2 implements IStudent{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
const green= new Student2("green");
console.log(green.getName());

//인터페이스 확장
//인터페이스도 class처럼 extends 키워드를 활용해 상속 할 수 있음
interface IAnimal{
    name:string;
}
interface ICat extends IAnimal{
    sound() :string;
}
class Cat implements ICat {
    name: string;
    constructor(name:string){
        this.name=name;
    }
    sound(): string {
        return "야옹";
    }
}
//같은 이름의 인터페이스를 여러개 만들수 있음
//기존에 만들어진 interface에 내용을 추가할때 유용함.
interface IName {
    name:string;
    age:number
}
interface IName {
    color:string;
}
const iname:IName = {
    name:"a",
    age:12,
    color:"blue"
}
