$('.mutasi').addClass("active");
$('.mutasi .js-arrow').click();
$('.barangjadi').addClass("active");
var table = $("#table").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : false,
    ajax: {
        url: baseurl + "mutasi/barangjadi",
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
        { data: "begin_stock" },
        { data: "qty_in" },
        { data: "qty_out" },
        { data: "qty_out" },
        { data: "qty_out" },
        { data: "end_stock" },
        { data: "stock_opname" },
        { data: "adjustmen" }
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
                return 0;
            },
            targets : [5,6]
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
    $.get(baseurl+'mutasi/barangjadi/excel',{startdate:$("#filterdate").val(),enddate:$("#filterdate1").val()}, function(data) {
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