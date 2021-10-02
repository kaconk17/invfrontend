@extends('app')
@section('css')

@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="overview-wrap">
            <h2 class="title-1">Laporan Mutasi Barang Sisa</h2>
            <div class="form-inline">
                <input style="width: 150px;" readonly="" type="text" class="form-control dpicker" value="{{ date('d-m-Y',strtotime('-1 months')) }}" id="filterdate">&nbsp;S/D&nbsp;
                <input style="width: 150px;" readonly="" type="text" class="form-control dpicker" value="{{ date('d-m-Y') }}" id="filterdate1">&nbsp;&nbsp;
                <button type="button" id="btnexcel" class="au-btn au-btn-icon au-btn--green">Excel</button>
            </div>
        </div>
    </div>
</div>
<div class="row m-t-50">
    <div class="col-md-12">
        <!-- DATA TABLE-->
        <div class="table-responsive">
            <table class="table table-borderless table-data3" id="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kode Barang</th>
                        <th>Uraian Barang</th>
                        <th>Satuan</th>
                        <th>Saldo Awal</th>
                        <th>Pemasukan</th>
                        <th>Pengeluaran</th>
                        <th>Penyesuaian</th>
                        <th>Disposal</th>
                        <th>Saldo Akhir</th>
                        <th>Stock Opname</th>
                        <th>Adjustment</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        <!-- END DATA TABLE-->
    </div>
</div>
@endsection
@section('js')
<script src="{{ url('/') }}/js/mutasi/barangsisa.js"></script>
@endsection