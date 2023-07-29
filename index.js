const toggleMode =()=>{
    const btn = document.querySelector('#switch')
    const page = document.querySelector('html')
    const img = document.querySelector('#profile img')

    btn.addEventListener('click', ()=>{
        page.classList.toggle('light')
       
    })
}

toggleMode()