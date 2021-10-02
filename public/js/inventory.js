$('.inventory').addClass("active");
var table = $("#tableassets").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "inventory",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                order:data.order[0],
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
        { data: "item_code" },
        { data: "item" },
        { data: "end_stock" },
        { data: "uom" },
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
    ],
    drawCallback: function(e,response){
    }
});

var tablesparepart = $("#tablesparepart").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                order:data.order[0],
                search: data.search["value"],
                type:'sparepart'
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
        { data: "end_stock" },
        { data: "uom" }
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
                return row.item+" "+row.spesifikasi;
            },
            targets : [2]
        }
    ],
    drawCallback: function(e,response){
    }
});

var tablesisaproduksi = $("#tablesisaproduksi").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
                order:data.order[0],
                search: data.search["value"],
                type:'sisaproduksi'
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
        { data: "end_stock" },
        { data: "uom" }
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
                return row.item+" "+row.spesifikasi;
            },
            targets : [2]
        }
    ],
    drawCallback: function(e,response){
    }
});

var tablepengemas = $("#tablepengemas").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                order:data.order[0],
                length: data.length,
                search: data.search["value"],
                type:'pengemas'
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
        { data: "end_stock" },
        { data: "uom" }
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
                return row.item+" "+row.spesifikasi;
            },
            targets : [2]
        }
    ],
    drawCallback: function(e,response){
    }
});

var tablebahanbaku = $("#tablebahanbaku").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                order:data.order[0],
                length: data.length,
                search: data.search["value"],
                type:'bahanbaku'
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
        { data: "end_stock" },
        { data: "uom" }
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
                return row.item+" "+row.spesifikasi;
            },
            targets : [2]
        }
    ],
    drawCallback: function(e,response){
    }
});

var tablebahanpenolong = $("#tablebahanpenolong").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                order:data.order[0],
                length: data.length,
                search: data.search["value"],
                type:'bahanpenolong'
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
        { data: "end_stock" },
        { data: "uom" }
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
                return row.item+" "+row.spesifikasi;
            },
            targets : [2]
        }
    ],
    drawCallback: function(e,response){
    }
});

var table = $("#tablefinishgood").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : true,
    order : [[0,'desc']],
    ajax: {
        url: baseurl + "stock/finishgood",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                order:data.order[0],
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
        { data: "item_code" },
        { data: "item_code" },
        { data: "end_stock" },
        { data: "end_stock" }
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
                if (data.indexOf('SS') !== -1) {
                  return 'CYLINDER LINER '+row.item_code;
                } else {
                  return 'PISTON RING '+row.item_code;
                }
            },
            targets : [2]
        },
        {
            render: function(data,type,row,index){
                return 'Pcs';
            },
            targets : [4]
        }
    ],
    drawCallback: function(e,response){
    }
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

$("#btnexcelsparepart").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'stock/excel',{type:'sparepart'}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$("#btnexcelsisaproduksi").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'stock/excel',{type:'sisaproduksi'}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$("#btnexcelpengemas").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'stock/excel',{type:'pengemas'}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$("#btnexcelbahanbaku").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'stock/excel',{type:'bahanbaku'}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$("#btnexcelbahanpenolong").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'stock/excel',{type:'bahanpenolong'}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$("#btnexcelassets").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'inventory/excel',{}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});

$("#btnexcelfinishgood").click(function(event) {
    event.preventDefault();
    var btn = $(this);
    btn.html('<i>Downloading...</i>');
    btn.attr('disabled', true);
    $.get(baseurl+'stock/finishgood/excel',{}, function(data) {
        window.location.replace(data.filename);
    }).always(function(){
        btn.html('Excel');
        btn.attr('disabled', false);
    });
});