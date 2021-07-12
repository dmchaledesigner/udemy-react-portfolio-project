
 const navitem = document.querySelector('.navbar');

// window.addEventListener('scroll', function(){
//     const navHeight = navitem.getBoundingClientRect().height;
//     const pageHeight = pageYOffset;

    
//     }
// })




window.addEventListener('scroll', function(){
    const pagePosition = window.pageYOffset;
    const navHeight = navitem.getBoundingClientRect().height;
    if(navHeight < pagePosition){
        navitem.classList.add('drop');
    }else{
        navitem.classList.remove('drop');
    }
})




