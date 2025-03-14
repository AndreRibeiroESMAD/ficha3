function generate(){

    let numeros = document.getElementById("num")
    let estrlas = document.getElementById("star")

    numeros.textContent = ""
    estrlas.textContent = ""

    for (i=0;i<=4;i++){
        let num = Math.floor(Math.random()*50)
        numeros.innerHTML += `${num} `
    }
    for (i=0;i<=1;i++){
        let star = Math.floor(Math.random()*12)
        estrlas.innerHTML += `${star} `
    }
}