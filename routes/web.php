<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('login');
});
Route::get('/', function () {
    return view('home');
});
Route::get('/user', function () {
    return view('user');
});
Route::get('/pemasukan', function () {
    return view('pemasukan');
});
Route::get('/pengeluaran', function () {
    return view('pengeluaran');
});
Route::get('/wip', function () {
    return view('wip');
});
Route::get('/inventory', function () {
    return view('inventory');
});
Route::get('/stock', function () {
    return view('stock');
});
Route::get('/log', function () {
    return view('log');
});
Route::get('mutasi/bahanbaku', function () {
    return view('mutasi.bahanbaku');
});
Route::get('mutasi/sparepart', function () {
    return view('mutasi.sparepart');
});
Route::get('mutasi/barangsisa', function () {
    return view('mutasi.barangsisa');
});
Route::get('mutasi/assets', function () {
    return view('mutasi.assets');
});
Route::get('mutasi/barangjadi', function () {
    return view('mutasi.barangjadi');
});
Route::get('log', function () {
    return view('log');
});
