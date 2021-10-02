var token = localStorage.getItem('npr_token');
if (!token) {
	window.location.href=appurl+'login';
}
$.ajaxSetup({
  	headers: {
    	'Authorization': 'Bearer '+localStorage.getItem('npr_token')
  	},
    error: function(resp) {
        if (resp.status == 401) {
            $("#btnlogout").click();
        }
    }
});
$(".nmuser").html(localStorage.getItem('npr_name'));
$(".emailuser").html(localStorage.getItem('npr_email'));

if (localStorage.getItem('npr_id_user') > 1) {
  $(".user").remove();
}
$("#btnlogout").click(function(event) {
	event.preventDefault();
  	localStorage.removeItem('npr_name');
  	localStorage.removeItem('npr_token');
  	localStorage.removeItem('npr_email');
  	window.location.href = appurl+'login';
});