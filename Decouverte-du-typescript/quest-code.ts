function hello(name: string) {
    console.log("Hello " + name);
}

let firstName: string = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a: string, b: string) {
    return a + b;
}

let wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
