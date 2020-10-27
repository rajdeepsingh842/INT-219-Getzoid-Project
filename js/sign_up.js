{
    let submitButton = $('#submit-button');

    submitButton.on('click',function(e){

        e.preventDefault();
        let password = $('#password-field').val();

        let confirmPassword = $('#confirm-password-field').val();

        if(password!=confirmPassword){
            console.log('dont match');
            new Noty({
                theme : 'sunset',
                color:'red',
                timeout : 1000,
                text : 'Passwords dont match',
                progressBar : true,
                layout : 'topRight',

            }).show();

            e.preventDefault();
            return;
        }

        window.location.replace('sign_in.html');

    });
}