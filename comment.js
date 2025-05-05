// function replyForm(){
//     const comment_form = document.querySelector('.box reply-form');
//     comment_form.classList.add('open-form');
// }
// const reply_btn = document.getElementById('reply')
// reply_btn.addEventListener('click',function(){
//     console.log("i love pizza")
//     const comment_form = document.querySelector('.reply-form');
//     comment_form.classList.add('openForm');
// })


document.addEventListener('DOMContentLoaded',function(){
    const replyBtns = document.querySelectorAll('.reply-btn-open')
    const replyForms = document.querySelectorAll('.commentreply-box');

    replyBtns.forEach(button=>{
        button.addEventListener('click',function(){
            // const commentId = this.dataset.commentId
            // const correspondingReplyForm = document.getElementById(`replyform-${commentId}`);

            replyForms.forEach(form=>{
                form.classList.remove('openForm')
                
            });
            const commentDiv = this.closest('.comment-container');
            if(commentDiv){
                const correspondingReplyForm = commentDiv.querySelector('.reply-form');
                if(correspondingReplyForm){
                    correspondingReplyForm.classList.add('openForm')
                }
            }


            
        })
        
    })
    
})

document.addEventListener('DOMContentLoaded',function(){
    const commentContainers = document.querySelectorAll('.comment-container')

    commentContainers.forEach(commentDiv=>{
        const optionBtn =commentDiv.querySelector('.openact')
        const closeBtn = commentDiv.querySelector('.close-act')
        const optionDiv = commentDiv.querySelector('.act-to-comment-options')

        if(optionBtn && closeBtn && optionDiv){
            optionBtn.addEventListener('click',function(){
                optionDiv.classList.add('visible')
                closeBtn.classList.add('block')
                optionBtn.classList.add('open')
            })

            closeBtn.addEventListener('click',function(){
                optionDiv.classList.remove('visible')
                closeBtn.classList.remove('block')
                optionBtn.classList.remove('open')
            })
        }
    })
})


// document.addEventListener('DOMContentLoaded',function(){
//     const replyBtns = document.querySelectorAll('.reply-btn-open')
//     const replyForms = document.querySelectorAll('.commentreply-box');

//     replyBtns.forEach(button=>{
//         button.addEventListener('click',function(){
//             const commentId = this.dataset.commentId
//             const correspondingReplyForm = document.getElementById(`replyform-${commentId}`);

//             replyForms.forEach(form=>{
//                 form.classList.remove('openForm')
//                 console.log("openForm removed")
//             });

//             if(correspondingReplyForm){
//                 correspondingReplyForm.classList.add('openForm')
//             }
//             console.log("i love bree")
//         })
//         console.log("i love mary")
//     })
//     console.log('i love pizza')
// })