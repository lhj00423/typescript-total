enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
enum color{
    Red='red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Week[0]);
console.log(Week[1]);
console.log(color.Red);
console.log(color['Green']);

let aaa:color = color.Blue;

enum StarbuckGrade{
    WELCOME,
    GREEN,
    GOLD
}
function getDicound(v:StarbuckGrade) : number {
    switch(v){
        case StarbuckGrade.WELCOME:
            return 0;
        case StarbuckGrade.GREEN:
            return 5;
        case StarbuckGrade.GOLD:
            return 10;    
    }
}
console.log(getDicound(StarbuckGrade.WELCOME));