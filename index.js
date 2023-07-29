const toggleMode =()=>{
    const btn = document.querySelector('#switch')
    const page = document.querySelector('html')
    const img = document.querySelector('#profile img')

    btn.addEventListener('click', ()=>{
        page.classList.toggle('light')
       if(page.classList.contains('light')){
        img.setAttribute('src', './assets/jana.jpg')
        img.setAttribute('alt', 'Imagem ilustrada de uma menina negra, fort e empoderada, com cableo cacheado preto e fundo amarelo')
       }else{        
            window.location.reload()
            img.setAttribute('src', '"https://github.com/janaina-costa.png')
            img.setAttribute('alt', 'Foto da Janaina sorrindo vestindo uma blusa preta')
        
       }
    })
}

toggleMode()