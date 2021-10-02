$(document).ready(function() {
	var token = localStorage.getItem('npr_token');
	if (token) {
		window.location.href=appurl;
	}
});

$("#formlogin").submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    var btn = $("#btnlogin");
    btn.html('<i>Sign In</i>');
    btn.attr('disabled', true);

    $.ajax({
        url: baseurl + "auth/login",
        type: 'POST',
        dataType: 'json',
        data: data,
    })
    .done(function(resp) {
        if (resp.success) {
	        localStorage.setItem('npr_token',resp.token);
	        localStorage.setItem('npr_name',resp.user.name);
	        localStorage.setItem('npr_email',resp.user.email);
            localStorage.setItem('npr_id_user',resp.user.id);
			window.location.href = appurl;
        }
        else
        	toastr['error'](resp.message);
    })
    .fail(function() {
 		toastr['warning']('Tidak dapat terhubung ke server !!!');
    })
    .always(function() {
        btn.html('Sign In');
        btn.attr('disabled', false);
    });
    
    return false;
});