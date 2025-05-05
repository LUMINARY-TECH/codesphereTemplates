
// groups menu indicator
var menu_indication = document.getElementById('menu-indication')
var menu1 = document.getElementById('menu1')
var menu2 = document.getElementById('menu2')
var menu3 = document.getElementById('menu3')
var menu4 = document.getElementById('menu4')

menu1.addEventListener('click',function(){
    menu_indication.style.left ="0px"
})
menu2.addEventListener('click',function(){
    menu_indication.style.left ="170px"
})
menu3.addEventListener('click',function(){
    menu_indication.style.left ="370px"
})
menu4.addEventListener('click',function(){
    menu_indication.style.left ="570px"
})


const menu_btn = document.querySelectorAll('.menu_btns');

menu_btn.forEach(function(btn){
    btn.addEventListener('click',function(){
        menu_btn.forEach(function(other_btn){
            other_btn.classList.remove('active')
        })
        this.classList.add('active');
    })
   
})

const sortbtns =document.querySelectorAll('.sortbtns')
sortbtns.forEach(function(sort_btn){
    sort_btn.addEventListener('click',function(){
        sortbtns.forEach(function(sortbutton){
            sortbutton.classList.remove('active');
        })
        this.classList.add('active');
    })

})
// document.addEventListener('DOMContentLoaded',function(){
//     const menu_btn = document.querySelectorAll('.menu_btns');
//     menu_btn.forEach(function(btn){
//         btn.addEventListener('click',function(){
//             btn.classList.toggle('active')
//         })
//     })
// })

document.addEventListener('DOMContentLoaded',function(){
    const replyBtns = document.querySelectorAll('.reply-btn-open')
    const replyForms = document.querySelectorAll('.commentreply-box');

    replyBtns.forEach(button=>{
        button.addEventListener('click',function(){
            const commentId = this.dataset.commentId
            const correspondingReplyForm = document.getElementById(`replyform-${commentId}`);

            replyForms.forEach
        })
    })
})