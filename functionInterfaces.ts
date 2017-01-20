interface ITypeFunc {
    (a: number, b:number):boolean;
}

var add:ITypeFunc;

add = function(a:number, b:number):boolean {
 return true;
}


interface IColor{
    (color:string, title?:string):{color:string, title?:string};
}

var getColor:IColor;

getColor = function(codeColor:string, title?:string): {color:string, title?:string}{
    if (title) {
        return {color:codeColor, title:title}
    }
    return {color:codeColor}
}

console.log(getColor('#0000'))
console.log(getColor('#0000', "black"))

interface IArrayTypes {
    [index:number]:string;
}

var a:IArrayTypes;
a = ['a'];
console.log(a)