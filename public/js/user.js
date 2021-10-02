//$('.master').addClass("active");
//$('.master .js-arrow').click();
$('.user').addClass("active");
$("#form").appendTo("body");

var table = $("#table").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : false,
    ajax: {
        url: baseurl + "user",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                search: data.search["value"]
            };
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization","Bearer " + localStorage.getItem('npr_token'));
        },
        error: function(resp) {
            if (resp.status == 401) {
                $("#btnlogout").click();
            }
        }
    },
    columns: [
        { data: "id", width: 50 },
        { data: "email" },
        { data: "name" },
        { data: "id", width: 70}
    ],
    columnDefs: [
        {
            render: function(data,type,row,index){
                var info = table.page.info();
                return index.row+info.start+1;
            },
            targets : [0]
        },
        {
            render: function(data,type,row,index){
                var html = '';
                if (data > 1){
                        html+= '<i class="fa fa-pencil-square-o text-success cursor btn-edit" data-id="'+index.row+'"></i>'+
                    ' <i class="fa fa-trash text-danger cursor btn-delete" data-id="'+index.row+'"></i>';
                }
                return html;
            },
            targets : [3]
        }
    ],
    drawCallback: function(e,response){
        $(".btn-edit").click(function(){
            var id = $(this).data("id");
            var data = table.row(id).data();
            $("input[name=id]").val(data.id);
            $("input[name=name]").val(data.name);
            $("input[name=email]").val(data.email);
            $("input[name=password]").removeAttr('required');
            $('#form').modal({backdrop: 'static', keyboard: false});
        });

        $(".btn-delete").click(function(){
            var id = $(this).data("id");
            var data = table.row(id).data();

            var yes = confirm("Anda yakin akan menghapus data ini?");
            if (!yes)
                return;

            $.ajax({
                url : baseurl + "user/"+data.id,
                type : "DELETE"
            }).done(function(resp){
                table.ajax.reload();
                toastr[resp.status](resp.message);
            }).fail(function(){
                toastr['warning']('Tidak dapat terhubung ke server !!!');
            });
        });
    }
});

$("#btn-add").click(function(){
    $("input[name=password]").attr('required', 'required');
    $('#form').modal({backdrop: 'static', keyboard: false});
});

$("#btn-cancel").click(function(){
    $("#formuser")[0].reset();
    $("input[name=id]").val("");
    $("#form").modal("hide");
});

$("#formuser").submit(function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    var btn = $("#btn-save");
    btn.html('<i>Menyimpan Data...</i>');
    btn.attr('disabled', true);

    $.ajax({
        url: baseurl + "user",
        type: 'POST',
        dataType: 'json',
        data: data,
    })
    .done(function(resp) {
        if (resp.success) {
            $("#btn-cancel").click();
            table.ajax.reload();
        }
        toastr[resp.status](resp.message);
    })
    .fail(function() {
        toastr['warning']('Tidak dapat terhubung ke server !!!');
    })
    .always(function() {
        btn.html('Simpan');
        btn.attr('disabled', false);
    });
    
    return false;
});