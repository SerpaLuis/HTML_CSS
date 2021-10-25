const elementos=document.querySelectorAll('[data-anima]')
const animacaoClass='animacao'

function animaScroll(){
    const topoPaginaNaJanela=window.scrollY+((window.innerHeight*2)/4)
        elementos.forEach(function (elemento){
            if(topoPaginaNaJanela > elemento.offsetTop){
                elemento.classList.add(animacaoClass)
            }else{
                elemento.classList.remove(animacaoClass)
            }
        })
}

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll()
    })
}

function clickModal(img){
    const janelaModal=document.getElementById('janelaModal')
    const imgModal=document.getElementById('imgModal')
    const txtModal=document.getElementById('txtModal')
    const btnFechar=document.getElementById('btnFechar')

    janelaModal.classList.remove("escondeJanelaModal")
    janelaModal.classList.add("mostraJanelaModal")

    imgModal.src=img.src
    txtModal.innerHTML=img.alt

    btnFechar.onclick=function(){
        janelaModal.classList.add("escondeJanelaModal")
        janelaModal.classList.remove("mostraJanelaModal")
    }
}