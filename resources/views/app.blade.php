<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>NPR MANUFACTURING INDONESIA</title>

    <!-- Fontfaces CSS-->
    <link href="{{ url('/') }}/css/font-face.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">

    <!-- Bootstrap CSS-->
    <link href="{{ url('/') }}/vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all">

    <!-- Vendor CSS-->
    <link href="{{ url('/') }}/vendor/animsition/animsition.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/wow/animate.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/slick/slick.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/toastr/toastr.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/DataTables/datatables.min.css" rel="stylesheet" media="all">
    <link href="{{ url('/') }}/vendor/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="{{ url('/') }}/css/theme.css" rel="stylesheet" media="all">
    @yield('css')
</head>

<body class="animsition">
    <div class="page-wrapper">
        <!-- HEADER MOBILE-->
        <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <img width="64px" height="64px" src="{{ url('/images/logo.png') }}">
                        <a class="logo" href="{{ url('/') }}">
                            <H3>NPR MANUFACTURING</H3>
                        </a>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">
                        <li>
                            <a href="{{url('/')}}">
                                <i class="fas fa-home"></i>Home</a>
                        </li>
                        <li class="pemasukan">
                            <a href="{{url('/pemasukan')}}">
                                <i class="fas fa-chart-bar"></i>Pemasukan</a>
                        </li>
                        <li class="pengeluaran">
                            <a href="{{url('/pengeluaran')}}">
                                <i class="fas fa-table"></i>Pengeluaran</a>
                        </li>
                        <li class="inventory">
                            <a href="{{url('/inventory')}}">
                                <i class="far fa-check-square"></i>Inventory</a>
                        </li>
                        <li class="wip">
                            <a href="{{url('/wip')}}">
                                <i class="far fa-check-square"></i>WIP</a>
                        </li>
                        <li class="mutasi has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-copy"></i>Mutasi Barang</a>
                            <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li class="bahanbaku">
                                    <a href="{{url('mutasi/bahanbaku')}}">Bahan Baku & Penolong</a>
                                </li>
                                <li class="sparepart">
                                    <a href="{{url('mutasi/sparepart')}}">Sparepart & Consumable</a>
                                </li>
                                <li class="barangsisa">
                                    <a href="{{url('mutasi/barangsisa')}}">Barang Sisa</a>
                                </li>
                                <li class="assets">
                                    <a href="{{url('mutasi/assets')}}">Assets</a>
                                </li>
                                <li class="barangjadi">
                                    <a href="{{url('mutasi/barangjadi')}}">Barang Jadi</a>
                                </li>
                            </ul>
                        </li>
                        <li class="log">
                            <a href="{{url('/log')}}">
                                <i class="far fa-check-square"></i>Log</a>
                        </li>
                        <li class="user">
                            <a href="{{url('/user')}}">
                                <i class="far fa-user"></i>Management User</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- END HEADER MOBILE-->

        <!-- MENU SIDEBAR-->
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo" style="padding-left: 15px;">
                <img width="64px" height="64px" src="{{ url('/images/logo.png') }}">
                <a class="form-inline" href="{{ url('/') }}">
                    <H3>NPR MANUFACTURING</H3>
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li>
                            <a href="{{url('/')}}">
                                <i class="fas fa-home"></i>Home</a>
                        </li>
                        <li class="pemasukan">
                            <a href="{{url('/pemasukan')}}">
                                <i class="fas fa-chart-bar"></i>Pemasukan</a>
                        </li>
                        <li class="pengeluaran">
                            <a href="{{url('/pengeluaran')}}">
                                <i class="fas fa-table"></i>Pengeluaran</a>
                        </li>
                        <li class="inventory">
                            <a href="{{url('/inventory')}}">
                                <i class="far fa-check-square"></i>Inventory</a>
                        </li>
                        <li class="wip">
                            <a href="{{url('/wip')}}">
                                <i class="far fa-check-square"></i>WIP</a>
                        </li>
                        <li class="mutasi has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-copy"></i>Mutasi Barang</a>
                            <ul class="list-unstyled navbar__sub-list js-sub-list">
                                <li class="bahanbaku">
                                    <a href="{{url('mutasi/bahanbaku')}}">Bahan Baku & Penolong</a>
                                </li>
                                <li class="sparepart">
                                    <a href="{{url('mutasi/sparepart')}}">Sparepart & Consumable</a>
                                </li>
                                <li class="barangsisa">
                                    <a href="{{url('mutasi/barangsisa')}}">Barang Sisa</a>
                                </li>
                                <li class="assets">
                                    <a href="{{url('mutasi/assets')}}">Assets</a>
                                </li>
                                <li class="barangjadi">
                                    <a href="{{url('mutasi/barangjadi')}}">Barang Jadi</a>
                                </li>
                            </ul>
                        </li>
                        <li class="log">
                            <a href="{{url('/log')}}">
                                <i class="far fa-check-square"></i>Log</a>
                        </li>
                        <li class="user">
                            <a href="{{url('/user')}}">
                                <i class="far fa-user"></i>Management User</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="copyright">
                        <p>Copyright © 2019 NPR. All rights reserved</p>
                    </div>
                </div>
            </div>
        </aside>
        <!-- END MENU SIDEBAR-->

        <!-- PAGE CONTAINER-->
        <div class="page-container">
            <!-- HEADER DESKTOP-->
            <header class="header-desktop">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="header-wrap">
                            <form class="form-header" action="" method="POST">

                            </form>
                            <div class="header-button">
                                <div class="noti-wrap">
                                </div>
                                <div class="account-wrap">
                                    <div class="account-item clearfix js-item-menu">
                                        <div class="image">
                                            <img src="{{url('/')}}/images/user.png" alt="John Doe" />
                                        </div>
                                        <div class="content">
                                            <a class="js-acc-btn nmuser" href="#"></a>
                                        </div>
                                        <div class="account-dropdown js-dropdown">
                                            <div class="info clearfix">
                                                <div class="image">
                                                    <a href="#">
                                                        <img src="{{url('/')}}/images/user.png" alt="John Doe" />
                                                    </a>
                                                </div>
                                                <div class="content">
                                                    <h5 class="name">
                                                        <a href="#" class="nmuser"></a>
                                                    </h5>
                                                    <span class="email emailuser">johndoe@example.com</span>
                                                </div>
                                            </div>
                                            <!--<div class="account-dropdown__body">
                                                <div class="account-dropdown__item">
                                                    <a href="#">
                                                        <i class="zmdi zmdi-account"></i>Account</a>
                                                </div>
                                                <div class="account-dropdown__item">
                                                    <a href="#">
                                                        <i class="zmdi zmdi-settings"></i>Setting</a>
                                                </div>
                                                <div class="account-dropdown__item">
                                                    <a href="#">
                                                        <i class="zmdi zmdi-money-box"></i>Billing</a>
                                                </div>
                                            </div>-->
                                            <div class="account-dropdown__footer">
                                                <a id="btnlogout" href="#">
                                                    <i class="zmdi zmdi-power"></i>Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- END HEADER DESKTOP-->

            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        @yield('content')
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script type="text/javascript">
        var appurl = '{{env('APP_URL','')}}/';
        var baseurl = '{{env('APP_BACKEND','')}}/api/';
    </script>
    <!-- Jquery JS-->
    <script src="{{ url('/') }}/vendor/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap JS-->
    <script src="{{ url('/') }}/vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="{{ url('/') }}/vendor/bootstrap-4.1/bootstrap.min.js"></script>
    <!-- Vendor JS       -->
    <script src="{{ url('/') }}/vendor/slick/slick.min.js">
    </script>
    <script src="{{ url('/') }}/vendor/wow/wow.min.js"></script>
    <script src="{{ url('/') }}/vendor/animsition/animsition.min.js"></script>
    <script src="{{ url('/') }}/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
    </script>
    <script src="{{ url('/') }}/vendor/counter-up/jquery.waypoints.min.js"></script>
    <script src="{{ url('/') }}/vendor/counter-up/jquery.counterup.min.js">
    </script>
    <script src="{{ url('/') }}/vendor/circle-progress/circle-progress.min.js"></script>
    <script src="{{ url('/') }}/vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="{{ url('/') }}/vendor/chartjs/Chart.bundle.min.js"></script>
    <script src="{{ url('/') }}/vendor/select2/select2.min.js"></script>
    <script src="{{ url('/') }}/vendor/toastr/toastr.min.js"></script>
    <script src="{{ url('/') }}/vendor/DataTables/datatables.min.js"></script>
    <script src="{{ url('/') }}/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>

    <!-- Main JS-->
    <script src="{{ url('/') }}/js/main.js"></script>
    <script src="{{ url('/') }}/js/app.js"></script>
    @yield('js')
</body>

</html>
<!-- end document-->
