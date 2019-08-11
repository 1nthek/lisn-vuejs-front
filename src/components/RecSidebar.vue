<template>
    <div class="lisn-sidebar">
        <div class="lisn-logo-container">
            <router-link to="/board">
                <div class="logo-router">
                  <!-- <img src="../assets/logo.png" alt="" style="height: 2.3rem;"> -->
                    <div class="merienda-one" style="margin: 0;padding-left: 10px;font-size: 36px;font-weight: 500;">LISN</div>
                </div>
            </router-link>
        </div>
        <div class="menus1">
            <div class="nav flex-column nav-pills">
                <a class="nav-link active" data-toggle="pill" href="#v-pills-home"  aria-selected="true">
                    <i class="fas fa-book-open fa-lg sidebar-icon"></i>
                    Meeting Minutes</a>
                <a class="nav-link" data-toggle="pill" href="#v-pills-messages"  aria-selected="false">
                    <i class="fas fa-book fa-lg sidebar-icon"></i>
                    Lecture notes</a>
                <a class="nav-link" data-toggle="pill" href="#v-pills-profile" aria-selected="false">
                    <i class="fas fa-comments fa-lg sidebar-icon"></i>
                    Interview</a>
            </div>
        </div>
        <div class="menus2">
            <a class="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i class="fas fa-trash"></i>
                Trash</a>
            <a class="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i class="fas fa-cog"></i>
                Settings</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar-icon{
  width: 1.5rem;
  text-align: center;
  margin-right: 1rem;
}
.nav-pills .nav-link.active{
    border-left: 3px solid #83157b;
    border-radius: 0rem;
    color: black;
    background-color: transparent;
    font-weight: 600;
    background: hsla(10,40%,80%,.3);
    transition: all 0s ease 0s;
}
.fa-lg {
    font-size: 1.2em;
}
a:hover {
 text-decoration: none;
}
.nav-link {
    font-size: 1rem;
    font-weight: 400;
    display: block;
    padding: 0.7rem 1rem;
    color: rgba(0, 0, 0, 0.5);
    display: block;
    padding: .6rem 1rem;
    border-left: 3px solid transparent;
    transition: all .3s ease 0s;
    border-radius: 0;
}
.nav-link:hover {
  color: rgba(0, 0, 0, 0.8);
  background: hsla(0,0%,100%,.3);
}
.menus1{
    margin-top: 0;
    margin-bottom: auto;
}
.menus2{
    margin-bottom: 1rem;
}
.menus2>a>i{
    margin-left: 1rem;
    margin-right: 0.6rem;
}
a{
    color: rgba(0,0,0,.9);
}
.lisn-logo-container{
    width: 16rem;
    height: 8rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
}
.logo-router{
    color:black;
    font-size: 34px;
    justify-content: center;
    align-items: center;
    display: flex;
}
.lisn-sidebar{
    /* flex-grow: 1; */
    display: flex!important;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 16rem;
    z-index: 6;
    background: #eee9f1;
}
</style>
