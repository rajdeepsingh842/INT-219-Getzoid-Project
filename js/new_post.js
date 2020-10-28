{
    let postCount = 1;
    let newPostSubmit = $('#post-submit-button');

    newPostSubmit.on('click',function(e){
        e.preventDefault();

        if($('#post-content').val()=='' || $('#username').val()==''){
           

                new Noty({
                    theme : 'sunset',
                    text : 'Fill up all fields',
                    progressBar : true,
                    timeout : 1000,
                    layout : 'topRight'
                }).show();

                return;
        }

        let newPost = getNewPost($('#post-content').val() , $('#username').val());
        addLikeButton($('.like-button',newPost)[0]);
        addDeleteButton($('.delete-button',newPost)[0]);
        addSubmitCommentButton($('.new-comment-submit',newPost)[0]);

        postCount++;

        new Noty({
            theme : 'sunset',
            text : 'New Post Created',
            timeout:1000,
            progressBar:true,
            layout : 'topRight'
        }).show();

        $('#posts-list-container').prepend(newPost);

    });

    function getNewPost(content , username){

        let date=new Date();

        return $(`
        
        <div id="post-container-${postCount}" class="post-container flex">
                    <div class="post-user flex">
                        <span class="flex post-user-name"><img src="../images/default.png"> <strong>${username}</strong></span><span class="delete-button" id="${postCount}" title="delete post"><img src="../images/delete-button.png"></span>
                    </div>
                    <hr>
                    <span class="content">${content}</span>
                    <hr>
                    <span class="post-details"><span id="${postCount}" class="like-button"><img src="../images/like-button.png"><span id="likes-${postCount}"> 0 </span>Likes</span><span>Created At : ${date}</span></span>
                    <form class="new-comment-form" action="">
                        <input type="text" id="new-comment-${postCount}" class="new-comment-content" placeholder="Add comment..." required>
                        <input type="text" id="comment-form-name-${postCount}" placeholder="Your name" required>
                        <input type="submit" id="${postCount}" class="new-comment-submit">
                    </form>
        </div> 
        
        
        `);
    }

    function addDeleteButton(deleteButton){
        console.log(deleteButton);
        $(deleteButton).on('click',function(){
            let id= deleteButton.getAttribute('id');
            $(`#post-container-${id}`).remove();
            new Noty({
                theme : 'sunset',
                text : 'Post Deleted',
                timeout:1000,
                progressBar:true,
                layout : 'topRight'
            }).show();
        });
    }

    let allDeletePostButtons = $('.delete-button');
    for(let deleteButton of allDeletePostButtons){
        console.log(deleteButton);
        addDeleteButton(deleteButton);
    }
}