/**VAR**/
const gearbox_extern = document.querySelector(".gearbox_extern")
const button = document.querySelector(".button")
const screw=document.querySelectorAll(".screw")
let compteur=0

// Button ->remove gearbox_extern
button.addEventListener('click', ()=>
{
    gearbox_extern.classList.toggle('active')

    for(let i=0;i<screw.length;i++)
    {
           screw[i].classList.toggle('active')
    }
})

//ANIMATION INTERACTION CLICK ON screw

for(let i=0;i<screw.length;i++)
{
    screw[i].addEventListener('click',()=>
    {
        if (screw[i].classList.contains('rotate'))
        {   
            screw[i].classList.toggle('rotate')
            compteur--          
        }
        else
        {
            screw[i].classList.add('rotate')
            compteur++        
        }
        if(compteur==8)
        {
            button.style.visibility="visible";
        }
        else
        {
            button.style.visibility="hidden";
        }
    })
}