@extends('app')
@section('css')

@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="overview-wrap">
            <h2 class="title-1">Laporan Wip</h2>
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
                        <th>Item Code</th>
                        <th>Item</th>
                        <th>Lot No.</th>
                        <th>Qty</th>
                        <th>Uom</th>
                        <th>Nama Proses</th>
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
<script src="{{ url('/') }}/js/wip.js"></script>
@endsection