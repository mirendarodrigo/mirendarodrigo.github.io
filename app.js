const tabs = document.querySelectorAll('.opcion')
const bloque = document.querySelectorAll('.bloque')


tabs.forEach( ( tab , i)  => {
    tabs[i].addEventListener('click',()=>{
         tabs.forEach((tab, i)=>{
            tabs[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
         })  
         tabs[i].classList.add('activo')
         bloque[i].classList.add('activo')

    })
})

 