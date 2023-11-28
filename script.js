// Função de fechar e abrir Menu do Mobile
function Menu(){
    let sidebarOpen = document.querySelector('#divSideMenu')
    sidebarOpen.style.display = "flex"

    let sidebarClose = document.getElementById('closeSideMenu')
    sidebarClose.addEventListener('click', function(){
        sidebarOpen.style.display = "none"
    })
}

// Redes Socias Abrir Link

function redesSociais(x){
    window.open(x,'_blank')
}

// Abrir botões de Acesse Aqui

function btAcesso(x){
    window.location.pathname = x
}