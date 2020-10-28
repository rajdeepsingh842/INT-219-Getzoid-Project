{

    let commentCount = 1;

    function addSubmitCommentButton(commentButton){
        $(commentButton).on('click',function(e){

            e.preventDefault();
            let postId = commentButton.getAttribute('id'); 
            let commentContent = $('#new-comment-'+postId).val();
            let commentUser = $('#comment-form-name-'+postId).val();

            if(commentContent == '' || commentUser==''){
                new Noty({
                    theme : 'sunset',
                    timeout :1000,
                    progressBar : true,
                    layout : 'topRight',
                    text : 'Fill all fields'
                }).show();

                return;
            }

            commentCount++;
            let newComment = getNewComment(commentContent , commentUser);

            new Noty({
                theme : 'sunset',
                timeout :1000,
                progressBar : true,
                layout : 'topRight',
                text : 'New Comment Added'
            }).show();

            console.log(newComment);
            $('#post-container-'+postId).append(newComment);
        });
    }
    let allCommentSubmit = $('.new-comment-submit');

    for( let commentButton of allCommentSubmit){
        addSubmitCommentButton(commentButton); 
    }

    function getNewComment(commentContent,commentUser){
        return $(`

        <div id="comment-${commentCount}" class="comment-container">
                        <span>${commentContent} by ${commentUser}</span><spn class="delete-comment-button" id="delete-comment-button-${commentCount}"><img src = "../images/delete-button.png"></button>
        </div>
        `);
    }
}