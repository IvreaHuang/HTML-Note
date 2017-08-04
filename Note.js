// JavaScript 是「弱型別」
var javascriptVariable = 123;  //給數字，則這個變數的型別就是「number」

// TypsScript 的「布林型別」
var isBool: boolean = true;

// TypsScript 的「數值型別」
var isNumber: number = 123;

// TypsScript 的「字串型別」
var isString: string = 'Ryan';
var isStringTemplate: string = `My name is ${Ryan}.`; //Template Literals的寫法，方便把變數帶入字串中

// TypsScript 的「陣列型別」
var isBoolArray: boolean[] = [true, false, true];
var isNumberArray: number[] = [1, 2, 3];
var isNumberArray: string[] = ['Ryan', 'Jamie', 'Json'];

// TypsScript 的「列舉」
enum Sex {
    Man = 0,
    Women = 1
}

// 列舉使用方式
if (Person.Sex == Sex.Man)
{
  // do what you want.
  // 程式可讀性比較高
}

// TypsScript 的「區域變數」
var isOut: boolean = false
for (i=0; i<= team.length; i ++)
{
  // 這邊的 isOut 變數即為「區域變數」
  // 不會受到外面 isOut 的影響/或影響外面的變數
  let isOut: boolean = false 
  // do what you want.
}
