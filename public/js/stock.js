$('.stock').addClass("active");

var tablesparepart = $("#tablesparepart").DataTable({
    filter : true,
    sortable: false,
    info: true,
    paging: true,
    processing: true,
    serverSide: true,
    ordering : false,
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
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
                if (row.spesifikasi)
                    return row.item+" "+row.spesifikasi;
                return row.item;
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
    ordering : false,
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
                length: data.length,
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
                if (row.spesifikasi)
                    return row.item+" "+row.spesifikasi;
                return row.item;
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
    ordering : false,
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
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
                if (row.spesifikasi)
                    return row.item+" "+row.spesifikasi;
                return row.item;
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
    ordering : false,
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
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
                if (row.spesifikasi)
                    return row.item+" "+row.spesifikasi;
                return row.item;
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
    ordering : false,
    ajax: {
        url: baseurl + "stock",
        data : function(data){
            return {
                draw: data.draw,
                start: data.start,
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
                if (row.spesifikasi)
                    return row.item+" "+row.spesifikasi;
                return row.item;
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
    ordering : false,
    ajax: {
        url: baseurl + "stock/finishgood",
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
                  return 'CYLINDER LINER';
                } else {
                  return 'PISTON RING';
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