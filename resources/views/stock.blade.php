@extends('app')
@section('css')

@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="overview-wrap">
            <h2 class="title-1">Laporan Stock</h2>
            <div class="form-inline">

            </div>
        </div>
    </div>
</div>
<div class="row m-t-50">
    <div class="col-md-12">
        <div class="default-tab">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-sparepart-tab" data-toggle="tab" href="#nav-sparepart" role="tab" aria-controls="nav-sparepart"
                     aria-selected="true">Sparepart</a>
                    <a class="nav-item nav-link" id="nav-sisaproduksi-tab" data-toggle="tab" href="#nav-sisaproduksi" role="tab" aria-controls="nav-sisaproduksi"
                     aria-selected="false">Sisa Produksi</a>
                    <a class="nav-item nav-link" id="nav-pengemas-tab" data-toggle="tab" href="#nav-pengemas" role="tab" aria-controls="nav-pengemas"
                     aria-selected="false">Pengemas</a>
                    <a class="nav-item nav-link" id="nav-bahanbaku-tab" data-toggle="tab" href="#nav-bahanbaku" role="tab" aria-controls="nav-bahanbaku"
                     aria-selected="false">Bahan Baku</a>
                    <a class="nav-item nav-link" id="nav-bahanpenolong-tab" data-toggle="tab" href="#nav-bahanpenolong" role="tab" aria-controls="nav-bahanpenolong"
                     aria-selected="false">Bahan Penolong</a>
                    <a class="nav-item nav-link" id="nav-finishgood-tab" data-toggle="tab" href="#nav-finishgood" role="tab" aria-controls="nav-finishgood"
                     aria-selected="false">Finish Goods</a>
                </div>
            </nav>
            <div class="tab-content pl-3 pt-2" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-sparepart" role="tabpanel" aria-labelledby="nav-sparepart-tab">
                    <div class="table-responsive">
                        <table class="table table-borderless table-data3" style="width: 100%;" id="tablesparepart">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Barang</th>
                                    <th>Uraian Barang</th>
                                    <th>Stock Akhir</th>
                                    <th>Satuan</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-sisaproduksi" role="tabpanel" aria-labelledby="nav-sisaproduksi-tab">
                    <div class="table-responsive">
                        <table class="table table-borderless table-data3" style="width: 100%;" id="tablesisaproduksi">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Barang</th>
                                    <th>Uraian Barang</th>
                                    <th>Stock Akhir</th>
                                    <th>Satuan</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-pengemas" role="tabpanel" aria-labelledby="nav-pengemas-tab">
                    <div class="table-responsive">
                        <table class="table table-borderless table-data3" style="width: 100%;" id="tablepengemas">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Barang</th>
                                    <th>Uraian Barang</th>
                                    <th>Stock Akhir</th>
                                    <th>Satuan</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-bahanbaku" role="tabpanel" aria-labelledby="nav-bahanbaku-tab">
                    <div class="table-responsive">
                        <table class="table table-borderless table-data3" style="width: 100%;" id="tablebahanbaku">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Barang</th>
                                    <th>Uraian Barang</th>
                                    <th>Stock Akhir</th>
                                    <th>Satuan</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-bahanpenolong" role="tabpanel" aria-labelledby="nav-bahanpenolong-tab">
                    <div class="table-responsive">
                        <table class="table table-borderless table-data3" style="width: 100%;" id="tablebahanpenolong">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Barang</th>
                                    <th>Uraian Barang</th>
                                    <th>Stock Akhir</th>
                                    <th>Satuan</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-finishgood" role="tabpanel" aria-labelledby="nav-finishgood-tab">
                    <div class="table-responsive">
                        <table class="table table-borderless table-data3" style="width: 100%;" id="tablefinishgood">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Item Code</th>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Uom</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('js')
<script src="{{ url('/') }}/js/stock.js"></script>
@endsection