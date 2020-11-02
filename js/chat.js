{

    let addChatWindow = function(chatButton){
        $(chatButton).click(function(e){
            e.preventDefault();

            let userId = $(chatButton).attr('id');
            let newChatWindow = getNewChatWindow(userId);

            addChatBoxDelete($('.delete-chat-box',newChatWindow)[0]);

            $('#chat-box').append(newChatWindow);
        })
    }


    let allChatButtons = $('.chat-now');

    for(let chatButton of allChatButtons){
        addChatWindow(chatButton);
    }

    function getNewChatWindow(userId){

        return $(`

        <div class="chat-window flex" id="user-chat-box-${userId}">

            <span class="chat-details flex">

                User ${userId}  <button class="delete-chat-box" id="${userId}">X</button>  <button class="delete-chat-box" id="${userId}">-</button>

            </span>

        <div>
        
        `);
    }


    function addChatBoxDelete(deleteChatBoxButton){
        $(deleteChatBoxButton).on('click' , function(e){
            e.preventDefault();

            let chatBoxId = '#user-chat-box-'+$(deleteChatBoxButton).attr('id');

            $(chatBoxId).remove();
        })
    }
}