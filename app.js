const togglebtn = document.querySelector('.togglebtn')
togglebtn.addEventListener('click',function(){
    var btnsdiv = document.querySelector('.btnsdiv')
    btnsdiv.classList.toggle('open')
    const sidebar_container = document.querySelector('.sidebar-container');
    sidebar_container.classList.toggle('slide');
})


document.addEventListener('DOMContentLoaded',function(){
    const droptrigger = document.querySelectorAll('.droptrigger')
    droptrigger.forEach(function(trigger){
        trigger.addEventListener('click',function(){
            const groupdrop = this.nextElementSibling
            groupdrop.classList.toggle('openmenu')
        });
    });
})

// const openact = document.querySelectorAll('.openact')
// openact.forEach(function(open_btn){
//     open_btn.addEventListener('click',function(){
//         openact.forEach(function(other_open_btn){
//             other_open_btn.classList.remove('open');
//         })
//         const closeAct = this.nextElementSibling;
//         closeAct.classList.add('block');
//         var option_container = document.getElementById('comment-options')
//         option_container.classList.add('visible')
//         this.classList.add('open');
//     })
    
// })






// menu indicator
var menu_indicator = document.getElementById('menu-indicator')
var link1 = document.getElementById('link1')
var link2 = document.getElementById('link2')
var link3 = document.getElementById('link3')
var link4 = document.getElementById('link4')
link1.addEventListener('click',function(){
    menu_indicator.style.left="0px";
})
link2.addEventListener('click',function(){
    menu_indicator.style.left="100px"
})
link3.addEventListener('click',function(){
    menu_indicator.style.left="190px"
})
link4.addEventListener('click',function(){
    menu_indicator.style.left="280px"
})



function openPostModal(){
    var postModal = document.getElementById('post-modal')
    console.log("i love pizza")
    postModal.classList.add('openModal');
}
function closePostModal(){
    var postModal = document.getElementById('post-modal')
    postModal.classList.remove('openModal')
}

// options container

function postOptions(){
    var optionsBtn = document.getElementById('option-btn')
    var postOptionsContainer = document.getElementById('options-container');
    postOptionsContainer.classList.toggle('visible');
    optionsBtn.classList.toggle('active')
}




















document.addEventListener('DOMContentLoaded',function(event){
    const opt_btn = document.getElementById('option-btn');
    const postOptionsContainer = document.getElementById('options-container');
    opt_btn.addEventListener('click',function(){
        postOptionsContainer.classList.add('visible');
        opt_btn.classList.add('active');

        event.stopPropagation();
    })
    document.addEventListener('click',function(){
        if(postOptionsContainer.className === 'visible' && postOptionsContainer.contains(event.target) && event.target !== opt_btn){
            postOptionsContainer.classList.remove('visible')
        }
    })

})
// comment actions
// function openCommentOptions(){
//     var commentOptionsContainer = document.getElementById('comment-options');
//     var open_container_btn = document.getElementById('open-container');
//     var close_container_btn = document.getElementById('close-container');
//     open_container_btn.classList.add('open')
//     close_container_btn.classList.add('block')
//     commentOptionsContainer.classList.add('visible');
// }
// function closeCommentOptions(){
//     var commentOptionsContainer = document.getElementById('comment-options');
//     var open_container_btn = document.getElementById('open-container');
//     var close_container_btn = document.getElementById('close-container');
//     open_container_btn.classList.remove('open')
//     close_container_btn.classList.remove('block')
//     commentOptionsContainer.classList.remove('visible');
// }
