const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{ /*listen for click, and when click is done we will run function*/
        removeActiveClasses() /*so by clicking it will remove all active classes for all panels*/
        panel.classList.add('active') /*and then add active class to clicked panel*/
    })
})

function removeActiveClasses(){ /*function for removing active classes*/
    panels.forEach(panel =>{ /*loop through panels*/
        panel.classList.remove('active')
    })
}