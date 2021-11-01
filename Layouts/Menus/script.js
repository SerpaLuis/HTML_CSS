const  menus=document.querySelectorAll('[data-menu]')
const cssAtivo='ativo'

menus.forEach(function(e){
    e.addEventListener('click',function(){
        for(i=0;i<menus.length;i++){
            menus[i].classList.remove(cssAtivo)
        }
        e.classList.add(cssAtivo)
    })
})

const btnMenu=document.querySelector('.btnMenu')
const menu=document.querySelector('.menu')

btnMenu.addEventListener('click',function(){
    menu.classList.toggle('menuAberto')
})