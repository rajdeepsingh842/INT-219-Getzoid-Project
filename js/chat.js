{

    let addChatWindow = function(chatButton){
        $(chatButton).click(function(e){
            e.preventDefault();

            let userId = $(chatButton).attr('id');
            let newChatWindow = getNewChatWindow(userId);

            addChatBoxDelete($('.delete-chat-box',newChatWindow)[0]);
            addMinimizeBoxButton($('.minimize-chat-box',newChatWindow)[0]);
            sendMessage($('.chat-submit-button',newChatWindow));

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

                User ${userId}  <button class="delete-chat-box" id="${userId}">X</button>  <button class="minimize-chat-box" id="${userId}" value="1">-</button>

            </span>
            

            <div class="message-box flex" id="message-box-${userId}">

                <div class="messages flex" id="messages-${userId}">
                    <span class="other-message"><span>Hi! How u doing?</span></span>
                </div>


                <form action="">
                    <input type="text" class="chat-content" id="message-content-${userId}" placeholder="Message...">
                    <input type="submit" class="chat-submit-button" id="${userId}">
                </form>
                

                
            </div>

            
            

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

    function addMinimizeBoxButton(minimizeChatBoxButton){
        $(minimizeChatBoxButton).on('click',function(e){
            e.preventDefault();

            let messageBoxId = '#message-box-'+$(minimizeChatBoxButton).attr('id');

            if($(messageBoxId).attr('value')=='1'){
                $(messageBoxId).css('height','0px');
                $(messageBoxId).attr('value','0');
            }else{
                $(messageBoxId).css('height','300px');
                $(messageBoxId).attr('value','1');
            }

        })
    }

    function sendMessage(sendButton){
        $(sendButton).on('click',function(e){
            e.preventDefault();

            let contentId = '#message-content-'+$(sendButton).attr('id');
            let content = $(contentId).val();

            if(content == ''){
                return;
            }

            let newMessage = $(`

             <span class="self-message"><span>${content}</span></span>
            `);

            $('#messages-'+$(sendButton).attr('id')).append(newMessage);

        });
    }
}