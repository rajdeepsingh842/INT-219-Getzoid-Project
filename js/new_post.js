{
    let postCount = 1;
    let newPostSubmit = $('#post-submit-button');

    newPostSubmit.on('click',function(e){
        e.preventDefault();

        if($('#post-content').val()=='' || $('#username').val()==''){
           

                new Noty({
                    theme : 'sunset',
                    text : 'Fill up all fileds',
                    progressBar : true,
                    timeout : 1000,
                    layout : 'topRight'
                }).show();

                return;
        }

        let newPost = getNewPost($('#post-content').val() , $('#username').val());
        addDeleteButton($('.delete-button',newPost)[0]);

        postCount++;

        $('#posts-list-container').prepend(newPost);

    });

    function getNewPost(content , username){

        return $(`
        
        <div id="post-container-${postCount}" class="post-container flex">
                    <div class="post-user flex">
                        <span class="flex post-user-name"><img src="../images/default.png"> <strong>${username}</strong></span><span class="delete-button" id="${postCount}" title="delete post"><img src="../images/delete-button.png"></span>
                    </div>
                    <hr>
                    <span class="content">${content}</span>
                    <hr>
                    <span class="post-details"><span class="like-button"><img src="../images/like-button.png"> 0 Likes</span><span>Created At : 28 Oct 3:55</span></span>
                    <form class="new-comment-form" action="">
                        <input type="text" id="new-comment" class="new-comment-content" placeholder="Add comment...">
                        <input type="submit" class="new-comment-submit">
                    </form>
        </div> 
        
        
        `);
    }

    function addDeleteButton(deleteButton){
        console.log(deleteButton);
        $(deleteButton).on('click',function(){
            let id= deleteButton.getAttribute('id');
            $(`#post-container-${id}`).remove();
        });
    }

    let allDeletePostButtons = $('.delete-button');
    for(let deleteButton of allDeletePostButtons){
        console.log(deleteButton);
        addDeleteButton(deleteButton);
    }
}