class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`Name: ${this.name} | Age: ${this.age}`);
    }
}

Person.prototype.sayHello = function() {
    console.log(`Xin chao, toi la ${this.name}`);
}

// const teo = new Person('Teo', 10);
// teo.sayHello();
// teo.show();

// console.log('abcd cascd cascd asdcba'.replace(' ', '_'));
// console.log('abcd cascd cascd asdcba'.includes('x'));

String.prototype.replaceAll = function(toReplace, replaceBy) {
    let str = this;
    while(str.includes(toReplace)) {
        str = str.replace(toReplace, replaceBy);
    }
    return str;
}

console.log('abcd cascd cascd   asdcba'.replaceAll(' ', '_'));
//abcd_cascd_cascd_asdcba