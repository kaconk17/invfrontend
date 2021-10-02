$('.mutasi').addClass("active");
$('.mutasi .js-arrow').click();
$('.assets').addClass("active");
var table = $("#table").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : false,
    ajax: {
        url: baseurl + "mutasi/assets",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                search: data.search["value"],
                startdate:$("#filterdate").val(),
                enddate:$("#filterdate1").val()
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
        { data: "uom" },
        { data: "begining" },
        { data: "total_datang" },
        { data: "total_pakai" },
        { data: "adjust" },
        { data: "disposal" },
        { data: "end_stock" },
        { data: "stock_opname" },
        { data: "adjust_stock" },
        { data: "end_stock" },
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
                if (row.spesifikasi)
                    return row.item+" "+row.spesifikasi;
                return row.item;
            },
            targets : [2]
        },
        {
            render: function(data,type,row,index){
                return "";
            },
            targets : [12]
        }
    ],
    drawCallback: function(e,response){
    }
});

$("#btnexcel").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'mutasi/assets/excel',{startdate:$("#filterdate").val(),enddate:$("#filterdate1").val()}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$(".dpicker").datepicker({
	autoclose:true,
    format: "dd-mm-yyyy",
    todayHighlight: true
});

$(".dpicker").change(function(event) {
	table.ajax.reload();
});