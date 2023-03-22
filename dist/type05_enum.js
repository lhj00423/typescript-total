"use strict";
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
var color;
(function (color) {
    color["Red"] = "red";
    color["Green"] = "green";
    color["Blue"] = "blue";
})(color || (color = {}));
console.log(Week[0]);
console.log(Week[1]);
console.log(color.Red);
console.log(color['Green']);
let aaa = color.Blue;
var StarbuckGrade;
(function (StarbuckGrade) {
    StarbuckGrade[StarbuckGrade["WELCOME"] = 0] = "WELCOME";
    StarbuckGrade[StarbuckGrade["GREEN"] = 1] = "GREEN";
    StarbuckGrade[StarbuckGrade["GOLD"] = 2] = "GOLD";
})(StarbuckGrade || (StarbuckGrade = {}));
function getDicound(v) {
    switch (v) {
        case StarbuckGrade.WELCOME:
            return 0;
        case StarbuckGrade.GREEN:
            return 5;
        case StarbuckGrade.GOLD:
            return 10;
    }
}
console.log(getDicound(StarbuckGrade.WELCOME));
