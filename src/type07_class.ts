class ClassAnimal {
    name: string;
    //정적 멤버 변수 선언
    //this나 인스턴스로 접근할 수 없음 클래스명.변수명
    static eye = 2;
    constructor(name:string){
        this.name=name;
    }
    //정적 메소드가 됨 ->ClassAnimal로 접근 가능, 클래스명.메소드명
    static eat():void{
        console.log("먹는다.");
    }
}
class ClassCat extends ClassAnimal{
    public getName() :string{
        this.sound()
        return `Cat name is ${this.name}`;
    }
    protected sound():void{
        console.log('^⊙▽⊙^야옹');
    }
}
let cat = new ClassCat("레오");
console.log(cat.getName());
//console.log(cat.eye) -->접근불가능
ClassAnimal.eat();

//추상 클래스 선언 abstract
//선언가능, 상속 가능, 인스턴스 생성 불 가 능  !
abstract class Person1 {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    //추상 메소드는 선언부만 있음
    abstract work():void;
}
class Teacher extends Person1{
    work(): void {
        console.log("가르킵니다");
    }
}

class Engineer extends Person1{
    work(): void {
        console.log("엔지니어 입니다.")
    }
}
let teacher1 = new Teacher("bella");
teacher1.work();
let engineer1 = new Engineer("lora");
engineer1.work(); 
//let person1 = new Person1("ㅎㅎ"); -->  추상클래스에 인스턴스 안됨