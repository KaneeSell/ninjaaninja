let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

let personas = ''

const d1 = '<div class="persona1"><img class="personas" src="./image/sasuke.png" height="150px"><p class="nameChar">Sasuke</p></div>'
const d2 = '<div class="persona2"><img class="personas" src="./image/naruto.png" height="150px"></div><p class="nameChar">Naruto'
const d3 = '<div class="persona3"><img class="personas" src="./image/kakashi.png" height="150px"></div><p class="nameChar">Kakashi'
const d4 = '<div class="persona4"><img class="personas" src="./image/pain.png" height="150px"></div><p class="nameChar">Pain'
const d5 = '<div class="persona5"><img class="personas" src="./image/boruto.png" height="150px"></div><p class="nameChar">Boruto'
const d6 = '<div class="persona6"><img class="personas" src="./image/minato.png" height="150px"></div><p class="nameChar">Minato'
const d7 = '<div class="persona7"><img class="personas" src="./image/madara.png" height="150px"></div><p class="nameChar">Madara'
const d8 = '<div class="persona8"><img class="personas" src="./image/jiraya.png" height="150px"></div><p class="nameChar">Jiraya'
const d9 = '<div class="persona9"><img class="personas" src="./image/gaara.png" height="150px"></div><p class="nameChar">Gaara'
const d10 = '<div class="persona10"><img class="personas" src="./image/itachi.png" height="150px"></div><p class="nameChar">Itachi'
const d11 = '<div class="persona11"><img class="personas" src="./image/shisui.png" height="150px"></div><p class="nameChar">Shisui'
const d12 = '<div class="persona12"><img class="personas" src="./image/kawaki.png" height="150px"></div><p class="nameChar">Kawaki'
const d13 = '<div class="persona13"><img class="personas" src="./image/konohamaru.png" height="150px"></div><p class="nameChar">Konohamaru'
const d14 = '<div class="persona14"><img class="personas" src="./image/mei.png" height="150px"></div><p class="nameChar">Mei'
const d15 = '<div class="persona15"><img class="personas" src="./image/hanabi.png" height="150px"></div><p class="nameChar">Hanabi'
const d16 = '<div class="persona16"><img class="personas" src="./image/kushina.png" height="150px"></div><p class="nameChar">Kushina'
const d17 = '<div class="persona17"><img class="personas" src="./image/himawari.png" height="150px"></div><p class="nameChar">Himawari'
const d18 = '<div class="persona18"><img class="personas" src="./image/kaguya.png" height="150px"></div><p class="nameChar">Kaguya'
const d19 = '<div class="persona19"><img class="personas" src="./image/kurenai.png" height="150px"></div><p class="nameChar">Kurenai'
const d20 = '<div class="persona20"><img class="personas" src="./image/tsunade.png" height="150px"></div><p class="nameChar">Tsunade'
const d21 = '<div class="persona21"><img class="personas" src="./image/karin.png" height="150px"></div><p class="nameChar">Karin'
const d22 = '<div class="persona22"><img class="personas" src="./image/konan.png" height="150px"></div><p class="nameChar">Konan'
const d23 = '<div class="persona23"><img class="personas" src="./image/sakura.png" height="150px"></div><p class="nameChar">Sakura'
const d24 = '<div class="persona24"><img class="personas" src="./image/sarada.png" height="150px"></div><p class="nameChar">Sarada'
const d25 = '<div class="persona25"><img class="personas" src="./image/hinata.png" height="150px"></div><p class="nameChar">Hinata'
const d = '</div>'

function randomizar(array){
    let currentIndex = array.length;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
    }
    
    function atribuirPersona(array){
        personas = ''
        for(let i = 0; i < array.length; i++){
            if(array[i] == 1){personas+=d1+d}
            if(array[i] == 2){personas+=d2+d}
            if(array[i] == 3){personas+=d3+d}
            if(array[i] == 4){personas+=d4+d}
            if(array[i] == 5){personas+=d5+d}
            if(array[i] == 6){personas+=d6+d}
            if(array[i] == 7){personas+=d7+d}
            if(array[i] == 8){personas+=d8+d}
            if(array[i] == 9){personas+=d9+d}
            if(array[i] == 10){personas+=d10+d}
            if(array[i] == 11){personas+=d11+d}
            if(array[i] == 12){personas+=d12+d}
            if(array[i] == 13){personas+=d13+d}
            if(array[i] == 14){personas+=d14+d}
            if(array[i] == 15){personas+=d15+d}
            if(array[i] == 16){personas+=d16+d}
            if(array[i] == 17){personas+=d17+d}
            if(array[i] == 18){personas+=d18+d}
            if(array[i] == 19){personas+=d19+d}
            if(array[i] == 20){personas+=d20+d}
            if(array[i] == 21){personas+=d21+d}
            if(array[i] == 22){personas+=d22+d}
            if(array[i] == 23){personas+=d23+d}
            if(array[i] == 24){personas+=d24+d}
            if(array[i] == 25){personas+=d25+d}
        }
        return personas
    }
    
    const painel = document.getElementById('painel')
    randomizar(arr)
    painel.innerHTML = atribuirPersona(arr)

    function iniciarRand(){
        randomizar(arr)
        painel.innerHTML = atribuirPersona(arr)
    }