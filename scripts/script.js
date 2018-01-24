// CALL CursorParallax Function
const cursorParallax = new CursorParallax()

// Set Variables

const $fill_line = document.querySelector('.fill_line')
const $discover_link=document.querySelector('.discover_link')

const $work = document.querySelector('.work')
const $works_description = Array.from($work.querySelectorAll('.works_description'))
const $div_img = Array.from($work.querySelectorAll('.img a'))
const $skills = Array.from($work.querySelectorAll('.skills'))

const $arrow_down = document.querySelector('.arrow_down')


// Underline

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

// Description works
for (let i=0; i<$div_img.length;i++)
{
    $div_img[i].addEventListener('mouseover',()=>
    {    
        $works_description[i].style.visibility='visible'
        $works_description[i].style.opacity='1'

        $skills[i].style.visibility='visible'
        $skills[i].style.opacity='1'
        
    })
    $div_img[i].addEventListener('mouseleave',()=>
    {
        $works_description[i].style.visibility='hidden'
        $works_description[i].style.opacity='0'

        $skills[i].style.visibility='hidden'
        $skills[i].style.opacity='0'
        
    })
}

// Scroll

window.addEventListener('scroll',(event)=>
{
 if(window.pageYOffset>=window.scrollMaxY-5)
    {
        $arrow_down.style.opacity="0"
    }
    else
    {
        $arrow_down.style.opacity="1"
    }
})


// scroll to

$arrow_down.addEventListener('click',()=>
{        
    $work.scrollIntoView(
    {
        behavior: "smooth"
    });
});
