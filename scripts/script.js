// CALL CursorParallax Function
const cursorParallax = new CursorParallax()

const $fill_line = document.querySelector('.fill_line')
const $discover_link=document.querySelector('.discover_link')

const $scroll = document.querySelector('.scroll_container')
const $arrow_down = document.querySelector('.arrow_down')


const $work = document.querySelector('.work')
const $works_description = Array.from($work.querySelectorAll('.works_description'))
const $div_img = Array.from($work.querySelectorAll('.img a'))

$discover_link.addEventListener('mouseover',()=>
{
   
    $fill_line.style.transform=`scaleX(${1.6})`
    $fill_line.classList.remove('animate')

    $discover_link.addEventListener('mouseleave',()=>
    {
        $fill_line.style.transform=`scaleX(${1})`
        $fill_line.classList.add('animate')
    }) 
    
})


for (let i=0; i<$div_img.length;i++)
{
    $div_img[i].addEventListener('mouseover',()=>
    {    
        $works_description[i].style.visibility='visible'
        console.log('là')
    })
    $div_img[i].addEventListener('mouseleave',()=>
    {
        $works_description[i].style.visibility='hidden'
    })
}


window.addEventListener('scroll',(event)=>
{
    if(window.pageYOffset==0)
    {
        $scroll.style.opacity="1"
    }
    else if(window.pageYOffset>=window.scrollMaxY-5)
    {
        $arrow_down.style.opacity="0"
    }
    else
    {
        $scroll.style.opacity="0"
        $arrow_down.style.opacity="1"
    }
})