@extends('app')
@section('css')

@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="overview-wrap">
            <h2 class="title-1">Laporan Log</h2>
            <div class="form-inline">
                <input style="width: 150px;" readonly="" type="text" class="form-control dpicker" value="" id="filterdate">&nbsp;&nbsp;
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
                        <th>Tanggal</th>
                        <th>Nama User</th>
                        <th>Remark</th>
                        <th>Aktifitas</th>
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
<script src="{{ url('/') }}/js/log.js"></script>
@endsection