$('.wip').addClass("active");
var table = $("#table").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : false,
    ajax: {
        url: baseurl + "wip",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                search: data.search["value"],
                tanggal:$(".dpicker").val()
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
        { data: "item_code" },
        { data: "item" },
        { data: "lot_no" },
        { data: "qty_act" },
        { data: "uom" },
        { data: "process_name_act" }
    ],
    columnDefs: [
        {
            render: function(data,type,row,index){
                var info = table.page.info();
                return index.row+info.start+1;
            },
            targets : [0]
        },
    ],
    drawCallback: function(e,response){
    }
});

$("#btnexcel").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'wip/excel',{tanggal:$(".dpicker").val()}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$(".dpicker").datepicker({
	autoclose:true,
    format: "mm-yyyy",
    viewMode: "months", 
    minViewMode: "months"
});

$(".dpicker").change(function(event) {
	table.ajax.reload();
});