@extends('app')
@section('css')

@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="overview-wrap">
            <h2 class="title-1">Laporan Pengeluaran</h2>
            <div class="form-inline">
                <select style="width: 200px;" class="form-control" id="filterdokumen">
                    <option value="">Semua Jenis Dokumen</option>
                </select>&nbsp;&nbsp;
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
                        <th>Jenis Dokumen</th>
                        <th>Nomor Dokumen</th>
                        <th>Tanggal Dokumen</th>
                        <th>Nomor Aju</th>
                        <th>Nomor Pengeluaran</th>
                        <th>Tanggal Pengeluaran</th>
                        <th>Pembeli</th>
                        <th>Kode Barang</th>
                        <th>Nama Barang</th>
                        <th>Satuan</th>
                        <th>Jumlah</th>
                        <th>Nilai Barang</th>
                        <th>Mata Uang</th>
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
<script src="{{ url('/') }}/js/pengeluaran.js"></script>
@endsection