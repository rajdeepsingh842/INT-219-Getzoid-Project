{
    let submitButton = $('#submit-button');

    submitButton.on('click',function(e){

        e.preventDefault();

        if($('#email-field').val()=='' || $('#password-field').val()==''){
            new Noty({
                theme : 'sunset',
                text : 'Fill up all fileds',
                progressBar : true,
                timeout : 1000,
                layout : 'topRight'
            }).show();

            return;
        }
        window.location.replace('home.html');
    })
}