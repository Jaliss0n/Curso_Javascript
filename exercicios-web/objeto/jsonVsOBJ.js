const obj = { a: 1, b:2, c:3, soma() {return a + b + c} }  
console.log(JSON.stringify(obj)) // passando um objeto para JSON

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //PASSANDO UM JSON PARA UM OBJETO
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))