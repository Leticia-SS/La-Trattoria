// Função de abrir Menu do Mobile
let sidebarOpen = document.querySelector('#divSideMenu')
function Menu(){
    sidebarOpen.style.display = "flex"
}

// Função de fechar Menu do Mobile

let sidebarClose = document.getElementById('closeSideMenu')
sidebarClose.addEventListener('click', function(){
    sidebarOpen.style.display = "none"
})

// Função para fechar o menu se clicar na telaq inicial
// sidebarOpen.addEventListener('change', function(){
//     sidebarOpen.style.display = "none"
// })

// Redes Socias Abrir Link

function redesSociais(x){
    window.open(x,'_blank')  // o parâmetro da função foi escrito no HTML ao chamar a função
}

// Abrir botões de Acesse Aqui

function btAcesso(x){
    window.location.href = x  // o parâmetro da função foi escrito no HTML ao chamar a função
}

// Carrossel do Cardápio

let btnControls = document.querySelectorAll('.controlBtn');  
let itens = document.querySelectorAll('.cardapioImgs');

let currentItem = 0;
let maxItens = itens.length;

btnControls.forEach((btnControl) => {
    btnControl.addEventListener('click', function(){

        if(btnControl.classList.contains('setaEsquerda')){  // Para adicionar ou remover de acordo com qual seta você pressiona
            currentItem -=1
        }
        else{
            currentItem += 1
        }


        if(currentItem >= maxItens){  // Quando chegar no número max de itens, ele retorna ao primeiro elemento
            currentItem = 0
        }

        if(currentItem < 0){    // Quando tentar ir para o elemento anterior ao primeiro, ele te leva ao último
            currentItem = maxItens - 1
        }

        itens.forEach((item) =>{
            item.classList.remove('cardapioImgs-Current')  // Remove a classe ao clicar

            itens[currentItem].scrollIntoView({  // Centraliza o item clicado com smooth behavior
                behavior: "smooth",
                inline: "center",
            });

            itens[currentItem].classList.add('cardapioImgs-Current'); // Adiciona a classe 
        })

    })
})

// Código abrir e fechar Menu

let conteudoMenu = document.querySelectorAll('.cardImg')

for(conteudos of conteudoMenu){
    conteudos.classList.add('esconder')
}

for (let i = 0; i< itens.length;i++){
    itens[i].addEventListener('click', function(){

        for(let n=0; n<itens.length;n++){
            if(n!=i){
                conteudoMenu[n].classList.add('esconder')
            }
        }

        if(conteudoMenu[i].classList.contains('esconder')){
            conteudoMenu[i].classList.remove('esconder')
        }
        else{
            conteudoMenu[i].classList.add('esconder')
        }

    })
}

// let conteudo = document.querySelectorAll("p")

// for (conteudos of conteudo) {
//   conteudos.classList.add("esconder")
// }

// let divClick = document.querySelectorAll(".accordion-item")


// for (let i = 0; i < divClick.length; i++) {
//   divClick[i].addEventListener("click", function() {

//     for (let n = 0; n < divClick.length; n++) {
//       if(n!=i){
//         conteudo[n].classList.add("esconder")
//       }
//     }

//     if (conteudo[i].classList.contains("esconder")) {
//       conteudo[i].classList.remove("esconder")
//     }
//     else{
//       conteudo[i].classList.add("esconder")
//     }

//   })

// }