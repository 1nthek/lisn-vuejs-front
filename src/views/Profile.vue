<template>
    <div class="profile-page">
            <div class="container">
                <div class="card card-profile shadow">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2"></div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"></div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">00</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">00</span>
                                        <span class="description">Notes</span>
                                    </div>
                                    <div>
                                        <span class="heading">00h</span>
                                        <span class="description">Records</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <div class="photo-container"><img alt="" data-src="img/ryan.jpg" src="../assets/emoji.png" lazy="loaded"></div>
                            <h1>name</h1>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>SEOUL</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>email@email.com</div>
                            <div><i class="ni education_hat mr-2"></i>University of Computer Science</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>abcabc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.photo-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 10px 25px 0 rgba(0,0,0,.3);
}
</style>