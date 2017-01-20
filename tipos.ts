var test:boolean = true;
var id:number = 2;

//

var decimal:number = 5.5;
var hex:number = 0xf00d;
var bin:number = 0b1010;
var oct:number = 0o744;

//

var name: string = 'Joao';
var car: string = "Gol";
var text: string = `
    Name: ${name}
`

//

var fruits:string[] = ['joao'];
var fruits:Array<string> = ['joao'];

//

enum Color {Red, Green, Blue} //0,1,2
enum Color1 {Red= 1, Green, Blue} //1,2,3

Color[1] // Red
Color.Red // 1

//

var list:any = 23;
list = "string"

//

function printNumber(num:number):void {
    alert(num)
}
