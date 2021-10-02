$('.pengeluaran').addClass("active");
var table = $("#table").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "pengeluaran",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                search: data.search["value"],
                order:data.order[0],
                jenis_dokumen:$("#filterdokumen").val(),
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
        { data: "kode_dokumen" },
        { data: "nomor_daftar" },
        { data: "tanggal_daftar" },
        { data: "nomor_aju" },
        { data: "out_no" },
        { data: "out_date" },
        { data: "penerima" },
        { data: "item_code" },
        { data: "item" },
        { data: "uom" },
        { data: "qtyformat" },
        { data: "hargapenyerahanformat" },
        { data: "currency" },
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
            targets : [9]
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
    $.get(baseurl+'pengeluaran/excel',{jenis_dokumen:$("#filterdokumen").val(),startdate:$("#filterdate").val(),enddate:$("#filterdate1").val()}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$.get(baseurl+'pengeluaran/jenis_dokumen', function(data) {
	$.each(data.data, function(index, val) {
		$("#filterdokumen").append('<option value="'+val.kode_dokumen+'">'+val.kode_dokumen+'</option>');
	});
});

$(".dpicker").datepicker({
	autoclose:true,
	format:'dd-mm-yyyy',
    todayHighlight: true
});

$("#filterdokumen").change(function(event) {
	table.ajax.reload();
});

$(".dpicker").change(function(event) {
	table.ajax.reload();
});