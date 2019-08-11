<template>
    <div class="lisn-navbar">
        <nav class="navbar navbar-expand-lg navbar-light" style="padding-right: 2rem;">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <form class="form-inline">
                        <div class="md-form my-0">
                            <input class="form-control mr-sm-2 search-box" type="text" placeholder="Search" aria-label="Search">
                        </div>
                    </form> -->
                <!-- <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> -->
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <!-- <li class="nav-item-right">
                        <a class="nav-link waves-effect waves-light">
                        <i class="fab fa-google-plus-g"></i>
                        </a>
                    </li> -->
                    <!-- <li class="nav-item-right">
                        <a class="nav-link waves-effect waves-light">99
                        <i class="fas fa-envelope"></i>
                        </a>
                    </li> -->
                    <li class="nav-item-right dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0 .5rem">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0" alt="avatar image" style="height: 34px;">
                            <span class="mb-0 text-sm font-weight-bold" style="padding-left: 10px;">IN DUCK</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-default" style="padding: 0">
                            <!-- <a class="dropdown-item" href="#">My Account</a>
                            <a class="dropdown-item" href="#">Logout</a> -->
                            <ul class="dropdown-menu show dropdown-menu-right">
                                <div class="dropdown-header noti-title" style="color:black;">Welcome!</div>
                                <a href="#" class="dropdown-item" >
                                    <i class="fas fa-user-edit navbar-icon"></i>
                                    <span >My profile</span>
                                </a>
                                <a href="#" class="dropdown-item" >
                                    <i class="fas fa-cog navbar-icon"></i>
                                    <span >Settings</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-running navbar-icon" style="font-size: 1.4em;"></i>
                                    <span >Logout</span>
                                </a>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'base-header'
}
</script>

<style scoped>
.nav-link{
    transition: all .4s ease 0s;
}
.nav-link:not(.btn):hover {
    background-color: hsla(0,0%,100%,.3);
    border-radius: .2rem;
    color: #fff;
    transition: all .4s ease 0s;
}
.dropdown-header {
        margin: 0!important;
    display: block;
    padding: .5rem 1rem;
    margin-bottom: 0;
    font-size: .650rem;
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
}
.navbar-icon{
    width: 2rem;
    font-size: 1.2em;
}
.navbar:not(.navbar-nav-hover) .dropdown-menu.show {
    opacity: 1;
    pointer-events: auto;
    -webkit-animation: show-navbar-dropdown .25s ease forwards;
    animation: show-navbar-dropdown .25s ease forwards;
}
.dropdown-menu>span {
    font-size: .875rem;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #525f7f;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 0 solid rgba(0,0,0,.15);
    border-radius: .4375rem;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
}
.dropdown-menu .dropdown-item {
    padding: .5rem 1rem;
    font-size: .875rem;
}
.dropdown-item {
    display: block;
    width: 100%;
    padding: .5rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
    height: 3.5rem;
}
.nav-item-right{
    /* margin-left: 0.1rem; */
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.search-box:focus{
    border-bottom: 1px solid rgba(255, 255, 255, 1);
}
input::placeholder {
  color: white;
  font-style: italic;
}
.search-box{
    height: auto;
    color: white;
    /* margin: 2rem; */
    transition: border-color .3s ease-in-out,box-shadow .3s ease-in-out;
    outline: 0;
    box-shadow: none;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: content-box;
    background-color: transparent;
}
/* .navbar-light .navbar-toggler-icon {
    background-image: url(data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000…p='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e);
} */
.dropdown-item{
    color: rgba(0,0,0,.9);
}
a.nav-link{
    color: rgba(255, 255, 255, 0.9) !important;
    padding: 0.2rem 1rem !important;
}
a.nav-link:hover{
    color: rgba(255, 255, 255, 1) !important;
}
.btn-secondary {
    color: black;
    background-color: white;
    border-color: #6c757d;
}
.show>.btn-secondary.dropdown-toggle {
    color: black;
    background-color: white;
    border-color: #6c757d;
}
.lisn-navbar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin-left: 16rem;
    z-index: 10;
    box-shadow: 0 0.2rem 0.5rem -0.3rem rgba(0,0,0,.2);
    background: linear-gradient(to left,#281483,#83157b 60%,#bc158a);
}
.md-button.md-primary:hover {
    -webkit-box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);
    box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2);
}
</style>
