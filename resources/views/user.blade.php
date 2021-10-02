@extends('app')
@section('css')

@endsection
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="overview-wrap">
            <h2 class="title-1">Management User</h2>
            <button type="button" id="btn-add" class="au-btn au-btn-icon au-btn--blue">
                <i class="zmdi zmdi-plus"></i>Tambah User</button>
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
                        <th>Email</th>
                        <th>Nama</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
        <!-- END DATA TABLE-->
    </div>
</div>
<!-- Modal -->
<div id="form" class="modal fade" role="dialog">
  <div class="modal-dialog">
  {{-- <input type="hidden" name="id" /> --}}
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form User</h4>
      </div>
        <form class="form-horizontal" id="formuser">
            <input type="hidden" required="" name="id" />
            <div class="modal-body">
              <div class="form-group">
                <label class="control-label col-xs-3">Nama :</label>
                <div class="col-xs-9">
                <input class="form-control" required="" name="name" />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-xs-3">Email :</label>
                <div class="col-xs-9">
                <input class="form-control" required="" name="email" type="email" />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-xs-3">Password :</label>
                <div class="col-xs-9">
                <input class="form-control" id="password" name="password" type="password" />
                <!--<input type="checkbox" id="showpassword"> &nbsp;Show Password-->
                </div>
              </div>
            </div>
          <div class="modal-footer">
            <button type="reset" class="btn btn-default" id="btn-cancel">Batal</button>
            <button type="submit" class="btn btn-primary" id="btn-save">Simpan</button>
          </div>
        </form>
    </div>

  </div>
</div>
@endsection
@section('js')
<script src="{{ url('/') }}/js/user.js"></script>
@endsection