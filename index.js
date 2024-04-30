const sip=document.querySelector('#sip')

sip.addEventListener('click', function(){
    alert('wow sabia que dirias si')
    alert('te amo 😊')
})

const nop=document.querySelector('#nop')
nop.addEventListener('mouseover',function(){
    const randomX=parseInt(Math.random()*100)
    const randomY=parseInt(Math.random()*100)

    nop.style.setProperty('top',randomX+'%')
    nop.style.setProperty('left',randomY+'%')

    nop.style.setProperty('transform','translate(-$(randomX}%, -$(randomY}% )');



})