function  menu(){
    
    const s1 = document.getElementById('s1')
    const s11 = document.getElementById('s11')

    if(s1.style.height =='40px'){
        s11.style.left ='0%'
        s1.style.height ='41px'
        s1.style.border = '2px solid black'
    } else if(s1.style.height =='41px'){
        s11.style.left ='-100%'
        s1.style.height = '40px'
        s1.style.border = '1px solid black'
    }
}

function pj(){
    window.scroll({
        top:940,
        behavior:"smooth",
    })
}
function inicio(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
function sobre(){
    window.scroll({
        top:500,
      
        behavior:"smooth",
    })
}