const main = function () {
    function ramdonWords(tamanho = 5 || 3) {
        var strRamdon = '';
        var caracteres = 'abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < tamanho; i++) {
            strRamdon += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return strRamdon;
    }
    
    function genArray() {
        let newArray = []
        for (let i = 0; i < 10000; i++){
            newArray.push(ramdonWords())
        } return newArray
    }
    
    const palimdromo = (palavra) =>{
        if (palavra === palavra.split('').reverse().join('')) {
            console.log(palavra)
        } 
    } 
    const check = verdadeiro => verdadeiro === true
    
    const resultados = genArray().map(palimdromo).filter(check)
    
}

console.log(main())