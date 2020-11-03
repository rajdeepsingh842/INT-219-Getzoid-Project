{

    //function add event listener to like button of a post
    function addLikeButton(likeButton){
        $(likeButton).on('click',function(){
            let postId = $(likeButton).attr('id');
            if($('img',likeButton).attr('src') == '../images/like-button.png'){
                $('img' , likeButton).attr('src','../images/unlike-button.png');
                $('#likes-'+postId).html(parseInt($('#likes-'+postId).html()) + 1);
                new Noty({
                    theme : 'sunset',
                    timeout :1000,
                    progressBar : true,
                    layout : 'topRight',
                    text : 'You liked a post'
                }).show();
            }
            else{
                $('img' , likeButton).attr('src','../images/like-button.png');
                $('#likes-'+postId).html(parseInt($('#likes-'+postId).html()) - 1);
                new Noty({
                    theme : 'sunset',
                    timeout :1000,
                    progressBar : true,
                    layout : 'topRight',
                    text : 'You unliked a post'
                }).show();
            }
        });
    }
    let allLikeButtons = $('.like-button');

    for( let likeButton of allLikeButtons){
        addLikeButton(likeButton);
    }
}