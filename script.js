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


// Inserindo a Data e Hora atual do sistema

let dataAtual = new Date();
 let dia = dataAtual.getDate();
 let mes = (dataAtual.getMonth() + 1);
 let ano = dataAtual.getFullYear();
 let hora = dataAtual.getHours();
 
 // Código Data da parte de Reserva, para bloquear datas que já passaram
 
 let campoDiaAtual = ano + "-" + (mes<10 ? "0" : "") + mes + "-" + (dia<10? "0" : "") + dia; //De acordo com as conformidades do navegador , ele não reconhece dia ou mês que não tenha o 0 antes, como 05 ou 08
 let campoData = document.getElementById("data");
 campoData.setAttribute("min", campoDiaAtual);

 // Código Hora da parte de Reserva, para bloquear horas não permitidas

 if(hora<12){
    hora = 12
 }
 else if(hora>21){
    hora = 21
 }
 
 let horaReserva = document.querySelector('#hora')
 horaReserva.value = hora + ":00";