<template>
  <div :class="{'nav--open': navOpen}">
      <div class="nav__bg" @click="navOpen=!navOpen"></div>
      <header class="header" id="home-header" :class="{scrolled: scrolled}">
          <nav class="nav">
              <logo></logo>
              <div class="nav__middle"> </div>
              <a @click="navOpen=!navOpen" class="nav__mobile">
                  <svg width="19" height="17" viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(0 .1)" fill="#FFF" fill-rule="evenodd">
                          <rect y=".6" width="19" height="2" rx="1"></rect>
                          <rect y="7.6" width="12" height="2" rx="1"></rect>
                          <rect y="14.6" width="19" height="2" rx="1"></rect>
                      </g>
                  </svg>
              </a>
              <ul class="nav__right ns-kr">
                  <li> <div class="nav__link"> About </div> </li>
                  <li> <div class="nav__link"> Pricing  </div> </li>
                  <li> <div class="nav__link"> Contact Us </div> </li>
                  <!-- <li class="nav__with-sub"> <a class="nav__link"> Solution </a>
                      <ul class="nav__sub">
                          <li>
                              <a  class="nav__sub-link"> <span class="nav__link-icon"> <svg class="icon icon-agency"> <use xlink:href="#icon-agency"></use> </svg> </span> <span class="nav__link-text"> <span class="nav__link-title"> For Agencies </span> <span class="nav__description"> Manage your projects in one place </span> </span>
                              </a>
                          </li>
                          <li>
                              <a class="nav__sub-link"> <span class="nav__link-icon"> <svg class="icon icon-enterprise"> <use xlink:href="#icon-enterprise"></use> </svg> </span> <span class="nav__link-text"> <span class="nav__link-title"> For Enterprises </span> <span class="nav__description"> Have everything in control </span> </span>
                              </a>
                          </li>
                      </ul>
                  </li> -->
                  <li>
                    <div id="customBtn0">
                      <span class="nav__link nav__link--cta">로그인</span>
                    </div>
                  </li>
              </ul>
          </nav>
      </header>
      <main id="main" class="main" role="main" style="">
      <div style="height: 10rem;background: #09b3af;"></div>
      <div class="wave">
          <div class="wave__text">
              <div class="wave__text-box">
                  <div class="wave__text-box-half">
                  <!-- <div class="ns-kr" style="font-size: 21px;font-weight: 600;letter-spacing: -1px;text-align: center;">쉽고 빠르게 회의록 정리하세요</div> -->
                      <h1 class="wave__h ns-kr" style="color: white;margin-top: 6rem;width: max-content;"> 대화를 쉽고 빠르게 정리하세요 </h1>
                        <div style="width: fit-content;">
                          <div id="customBtn1" class="btn-user btn btn-neutral btn-icon" style="background: #273559;border: none;display: flex;align-items: center;justify-content: center;">
                              <div class="btn-inner--icon">
                                <img src="../img/icons/common/google.svg">
                              </div>
                              <div class="btn-inner--text ns-kr" @done="onSignIn" @error="onSignInError" style="font-size: 18px;color: white;">Google 계정으로 사용</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <svg class="wave__svg" width="1440" height="668" viewBox="0 0 1440 668" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                  <path id="a" d="M0 0h1440v674H0z"></path>
                  <linearGradient x1="50%" y1="12.1%" x2="50%" y2="100%" id="c">
                      <stop stop-color="#FFF" stop-opacity="0" offset="0%"></stop>
                      <stop stop-color="#FFF" stop-opacity="0" offset="3.5%"></stop>
                      <stop stop-color="#FFF" stop-opacity=".4" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="-4.2%" y1="-.9%" x2="105.3%" y2="101.9%" id="d">
                      <stop stop-color="#C3E0FE" offset="0%"></stop>
                      <stop stop-color="#C1DDFC" offset="5.5%"></stop>
                      <stop stop-color="#ABC3EE" offset="64.8%"></stop>
                      <stop stop-color="#A3B9E8" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="20.9%" y1="-15.5%" x2="127%" y2="90.4%" id="e">
                      <stop stop-color="#BEDAFF" offset="0%"></stop>
                      <stop stop-color="#FFF" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="-9.8%" y1="-6.8%" x2="175.7%" y2="169.4%" id="f">
                      <stop stop-color="#E5F2FF" offset="0%"></stop>
                      <stop stop-color="#FFF" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="108%" id="g">
                      <stop stop-color="#A9BDEA" offset=".1%"></stop>
                      <stop stop-color="#FFF" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="0%" y1="0%" y2="100%" id="h">
                      <stop stop-color="#8FE4E0" offset="0%"></stop>
                      <stop stop-color="#86E0DD" offset="44.4%"></stop>
                      <stop stop-color="#07A7AF" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="-29.5%" y1="-68.9%" x2="187.8%" y2="256.1%" id="i">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#E1E9FD" stop-opacity=".6" offset="36.6%"></stop>
                      <stop stop-color="#C7D5FB" stop-opacity=".2" offset="76.3%"></stop>
                      <stop stop-color="#BDCEFA" stop-opacity="0" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="3.4%" y1="-21.3%" x2="175.9%" y2="242.7%" id="j">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#E1E9FD" stop-opacity=".6" offset="36.6%"></stop>
                      <stop stop-color="#C7D5FB" stop-opacity=".2" offset="76.3%"></stop>
                      <stop stop-color="#BDCEFA" stop-opacity="0" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="11.7%" y1="-8.7%" x2="184.2%" y2="255.4%" id="k">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#E1E9FD" stop-opacity=".6" offset="36.6%"></stop>
                      <stop stop-color="#C7D5FB" stop-opacity=".2" offset="76.3%"></stop>
                      <stop stop-color="#BDCEFA" stop-opacity="0" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-.8%" y1="-7%" x2="101.7%" y2="108%" id="l">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-19.1%" y1="29.6%" x2="221.6%" y2="101.2%" id="m">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="120.6%" x2="50%" y2="-8.7%" id="n">
                      <stop stop-color="#55D1FF" offset="7.2%"></stop>
                      <stop stop-color="#4FC3EE" stop-opacity=".9" offset="16.4%"></stop>
                      <stop stop-color="#41A0C2" stop-opacity=".7" offset="34.7%"></stop>
                      <stop stop-color="#29677B" stop-opacity=".4" offset="60.2%"></stop>
                      <stop stop-color="#0A191A" stop-opacity=".1" offset="91.9%"></stop>
                      <stop stop-color="#010400" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="1.3%" y1="1.2%" x2="138.2%" y2="141.2%" id="o">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="120.6%" x2="50%" y2="-8.7%" id="p">
                      <stop stop-color="#55D1FF" offset="7.2%"></stop>
                      <stop stop-color="#4FC3EE" stop-opacity=".9" offset="16.4%"></stop>
                      <stop stop-color="#41A0C2" stop-opacity=".7" offset="34.7%"></stop>
                      <stop stop-color="#29677B" stop-opacity=".4" offset="60.2%"></stop>
                      <stop stop-color="#0A191A" stop-opacity=".1" offset="91.9%"></stop>
                      <stop stop-color="#010400" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="2.6%" y1="2.6%" x2="139.5%" y2="142.6%" id="q">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="120.6%" x2="50%" y2="-8.7%" id="r">
                      <stop stop-color="#55D1FF" offset="7.2%"></stop>
                      <stop stop-color="#4FC3EE" stop-opacity=".9" offset="16.4%"></stop>
                      <stop stop-color="#41A0C2" stop-opacity=".7" offset="34.7%"></stop>
                      <stop stop-color="#29677B" stop-opacity=".4" offset="60.2%"></stop>
                      <stop stop-color="#0A191A" stop-opacity=".1" offset="91.9%"></stop>
                      <stop stop-color="#010400" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="3.9%" y1="3.9%" x2="140.8%" y2="143.9%" id="s">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="120.6%" x2="50%" y2="-8.6%" id="t">
                      <stop stop-color="#55D1FF" offset="7.2%"></stop>
                      <stop stop-color="#4FC3EE" stop-opacity=".9" offset="16.4%"></stop>
                      <stop stop-color="#41A0C2" stop-opacity=".7" offset="34.7%"></stop>
                      <stop stop-color="#29677B" stop-opacity=".4" offset="60.2%"></stop>
                      <stop stop-color="#0A191A" stop-opacity=".1" offset="91.9%"></stop>
                      <stop stop-color="#010400" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="5.2%" y1="5.3%" x2="142.1%" y2="145.2%" id="u">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="120.6%" x2="50%" y2="-8.7%" id="v">
                      <stop stop-color="#55D1FF" offset="7.2%"></stop>
                      <stop stop-color="#4FC3EE" stop-opacity=".9" offset="16.4%"></stop>
                      <stop stop-color="#41A0C2" stop-opacity=".7" offset="34.7%"></stop>
                      <stop stop-color="#29677B" stop-opacity=".4" offset="60.2%"></stop>
                      <stop stop-color="#0A191A" stop-opacity=".1" offset="91.9%"></stop>
                      <stop stop-color="#010400" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="6.5%" y1="6.6%" x2="143.4%" y2="146.6%" id="w">
                      <stop stop-color="#E4F2FF" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="120.6%" x2="50%" y2="-8.6%" id="x">
                      <stop stop-color="#55D1FF" offset="7.2%"></stop>
                      <stop stop-color="#4FC3EE" stop-opacity=".9" offset="16.4%"></stop>
                      <stop stop-color="#41A0C2" stop-opacity=".7" offset="34.7%"></stop>
                      <stop stop-color="#29677B" stop-opacity=".4" offset="60.2%"></stop>
                      <stop stop-color="#0A191A" stop-opacity=".1" offset="91.9%"></stop>
                      <stop stop-color="#010400" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="-237%" y1="43%" x2="129.8%" y2="51.9%" id="y">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-107.6%" y1="46.2%" x2="164.1%" y2="52.8%" id="z">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-97.5%" y1="46.4%" x2="174.2%" y2="53%" id="A">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-87.3%" y1="46.7%" x2="184.3%" y2="53.3%" id="B">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-273.5%" y1="42.1%" x2="298.4%" y2="56%" id="C">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-165.6%" y1="44.8%" x2="201.2%" y2="53.7%" id="D">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-47%" y1="47.6%" x2="193.9%" y2="53.5%" id="E">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-.5%" y1="50%" x2="99.3%" y2="50%" id="F">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-2.1%" y1="46.8%" x2="100.4%" y2="51.1%" id="G">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1=".1%" y1="55.2%" x2="99.5%" y2="47.3%" id="H">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-.4%" y1="50%" y2="50%" id="I">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1=".9%" y1="50%" x2="100.3%" y2="50%" id="J">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1=".5%" y1="50%" x2="98.5%" y2="50%" id="K">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-53.8%" y1="45.1%" x2="152.8%" y2="54.8%" id="L">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-64.1%" y1="44.6%" x2="142.5%" y2="54.4%" id="M">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-74.5%" y1="44.1%" x2="132.1%" y2="53.9%" id="N">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-179.4%" y1="39.2%" x2="255.4%" y2="59.7%" id="O">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-8.9%" y1="47.2%" x2="154.3%" y2="54.9%" id="P">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-85.7%" y1="43.6%" x2="97.4%" y2="52.2%" id="Q">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-3.1%" y1="34.9%" x2="123.3%" y2="64.4%" id="R">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-3.3%" y1="34.9%" x2="123.1%" y2="64.3%" id="S">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-3.6%" y1="34.8%" x2="122.9%" y2="64.3%" id="T">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-49.5%" y1="32.6%" x2="77.8%" y2="50.6%" id="U">
                      <stop stop-color="#E4F2FF" stop-opacity="0" offset="0%"></stop>
                      <stop stop-color="#E1EFFF" stop-opacity=".1" offset="5.5%"></stop>
                      <stop stop-color="#C7D7FB" stop-opacity=".6" offset="64.8%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="100%" y1="50%" x2=".1%" y2="50%" id="V">
                      <stop stop-color="#9FE9E5" offset="0%"></stop>
                      <stop stop-color="#079089" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="50%" y1="14.7%" x2="50%" y2="132.7%" id="W">
                      <stop stop-color="#FFF" stop-opacity="0" offset="0%"></stop>
                      <stop stop-color="#4EEAE1" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="60.8%" y1="150.4%" x2="34.2%" y2="-96.5%" id="X">
                      <stop stop-color="#00B7AE" offset="0%"></stop>
                      <stop stop-color="#91EBE7" stop-opacity=".5" offset="64.4%"></stop>
                      <stop stop-color="#00B7AE" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="37.9%" y1="31.1%" x2="169.2%" y2="236.9%" id="Y">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#E1E9FD" stop-opacity=".6" offset="36.6%"></stop>
                      <stop stop-color="#C7D5FB" stop-opacity=".2" offset="76.3%"></stop>
                      <stop stop-color="#BDCEFA" stop-opacity="0" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-26.4%" y1="-63%" x2="234.3%" y2="322.9%" id="Z">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#E1E9FD" stop-opacity=".6" offset="36.6%"></stop>
                      <stop stop-color="#C7D5FB" stop-opacity=".2" offset="76.3%"></stop>
                      <stop stop-color="#BDCEFA" stop-opacity="0" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="-21.4%" y1="-15.9%" x2="106.7%" y2="98.4%" id="aa">
                      <stop stop-color="#FFF" offset="0%"></stop>
                      <stop stop-color="#DAE4FC" offset="58.2%"></stop>
                      <stop stop-color="#BDCEFA" offset="99.9%"></stop>
                  </linearGradient>
                  <linearGradient x1="64.9%" y1="179.4%" x2="30.5%" y2="-97.2%" id="ab">
                      <stop stop-color="#7F5EFF" offset="0%"></stop>
                      <stop stop-color="#8665FF" offset="24.2%"></stop>
                      <stop stop-color="#9978FF" offset="59.5%"></stop>
                      <stop stop-color="#B391FF" offset="94%"></stop>
                  </linearGradient>
                  <linearGradient x1="83.4%" y1="87.2%" x2="-5.6%" y2="-29.6%" id="ac">
                      <stop stop-color="#7F5EFF" offset="0%"></stop>
                      <stop stop-color="#8665FF" offset="24.2%"></stop>
                      <stop stop-color="#9978FF" offset="59.5%"></stop>
                      <stop stop-color="#B391FF" offset="94%"></stop>
                  </linearGradient>
                  <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="ad">
                      <stop stop-color="#FF4F00" offset="0%"></stop>
                      <stop stop-color="#FF3D9D" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="51.3%" y1="-101.1%" x2="49.3%" y2="92.2%" id="ae">
                      <stop stop-color="#7F5EFF" offset="0%"></stop>
                      <stop stop-color="#8665FF" offset="24.2%"></stop>
                      <stop stop-color="#9978FF" offset="59.5%"></stop>
                      <stop stop-color="#B391FF" offset="94%"></stop>
                  </linearGradient>
                  <path id="af" d="M0 0h19.5v9.6H0z"></path>
              </defs>
              <g fill="none" fill-rule="evenodd">
                  <mask id="b" fill="#fff">
                      <use xlink:href="#a"></use>
                  </mask>
                  <path d="M-516.1-250.7h1553.6L1440-121.1c55.2 110.9 70.5 167.3 45.9 169.3-227.3 18.9-377.6 271.4-462.4 316.2-299.2 157.8-467.3-10.7-762.8 167.5C39.5 665.2-219.4 664-516.1 528.4v-779.1z" fill="#09B3AF" mask="url(#b)"></path>
                  <path d="M-84.5 92.5L1469 95.1v405.5c-264.9-102-523.8-91.7-776.8 31.3-253 122.9-512 121.7-776.8-3.5V92.5z" fill="url(#c)" mask="url(#b)" transform="matrix(-1 0 0 1 1384.6 0)"></path>
                  <g mask="url(#b)">
                      <path d="M211.2 561V142c0-11.6-7-25-15.7-30L16 8.3C7.3 3.3.3 8.6.3 20.3V439c0 11.6 7 25 15.7 30l179.5 103.7c8.7 5 15.7-.3 15.7-11.9z" fill="url(#d)" transform="translate(1014.7)"></path>
                      <g fill="#A9BDEA">
                          <path d="M1020.3 7.6l.3-.2-.3.2zM1221.6 572.8c2.6-2.2 4.3-6.3 4.3-11.9V142c0-11.6-7-25-15.8-30L1030.6 8.3c-3.8-2.2-7.2-2.4-10-1l9.6-5.4c2.9-2.3 6.9-2.4 11.3.2L1221 105.7c8.6 5 15.7 18.5 15.7 30v419c0 6.9-2.6 11.6-6.5 13.1l-8.6 5zM1219 574.3z"></path>
                      </g>
                      <path d="M8 6.7c2.3-.6 5 0 8 1.6L195.5 112c8.7 5 15.7 18.4 15.7 30v419c0 5.5-1.6 9.6-4.3 11.8l2.4-1.4c2.1-2.3 3.4-6 3.4-11V141.5c0-11.6-7-25-15.7-30L17.5 7.8c-3.6-2-7-2.3-9.6-1.1zm-2.4.8l.4-.1-.4.1z" fill="url(#e)" fill-rule="nonzero" transform="translate(1014.7)"></path>
                      <path d="M17.2 17l31 17.8 4.6 11.7a27.3 27.3 0 0 0 10.7 13.2l84.4 48.8c4.4 2.5 8.5 2.2 10.8-.9l4.6-6.3 31 18c5.6 3.1 10 11 10 17.3v421.8c0 6.4-4.4 9-10 5.8L17.2 462c-5.6-3.2-10-11-10-17.3V22.7c0-6.4 4.4-9 10-5.8z" fill="url(#f)" transform="translate(1014.7)"></path>
                      <path d="M1093 59.6l54.8 31.7c1 .6 1.8 0 1.8-1.4 0-1.3-.8-2.8-1.8-3.4L1093 55c-1-.6-1.8 0-1.8 1.3s.8 2.9 1.8 3.4z" fill="#A3B9E8"></path>
                      <path d="M1230.3 252.1l.3-.1c1-.6 1.8-2.2 1.8-3.5v-38.4c0-1.3-.8-2-1.8-1.4l-.3.2c-1 .6-1.8 2.1-1.8 3.4v38.5c0 1.3.9 2 1.8 1.3z" fill="#7B97C9"></path>
                      <path d="M1232.4 252.1l.2-.1c1-.6 1.8-2.2 1.8-3.5v-38.4c0-1.3-.8-2-1.8-1.4l-.2.2c-1 .6-1.9 2.1-1.9 3.4v38.5c0 1.3.9 2 1.9 1.3zM1053.6 14.3c-1.7 1-1.7 2.6 0 3.6a7 7 0 0 0 6.3 0c1.7-1 1.7-2.6 0-3.6a7 7 0 0 0-6.3 0z" fill="#90A9D6"></path>
                      <path d="M1053.6 14.3a7 7 0 0 1 6.3 0c.5.3.8.6 1 .9l-.4-.3a7 7 0 0 0-6.3 0c-1.2.8-1.6 1.8-1 2.8-1.3-1-1.1-2.5.4-3.4z" fill="#7B97C9"></path>
                      <g opacity=".3" fill="#FFF">
                          <path d="M1021.8 222.2V81.7L1219 278.9v140.6zM1219 237.6L1021.8 40.4V22.7c0-6.4 4.5-9 10-5.8l16 9.2 19.3 19.4.4 1a27.3 27.3 0 0 0 10.7 13.2l7.4 4.3L1219 197.4v40.2zM1021.8 334.5v-80.7L1219 451v80.8zM1021.8 407.2v-18.4l159.5 159.4-43.7-25.2z"></path>
                      </g>
                      <path d="M56.7 53.4c2.3 4 5.5 7.4 8.8 9.3l84.5 48.8c4.4 2.5 8.4 2.2 10.7-.9l4.6-6.2 31 17.8c2 1.1 3.7 2.8 5.2 4.8-1.8-3.3-4.4-6.1-7.2-7.8l-31-17.9-4.6 6.3c-2.3 3-6.4 3.4-10.8.9L63.5 59.7a23.7 23.7 0 0 1-6.8-6.3zM7.1 22.7v421.9c0 4.1 2 9 4.8 12.6-1.7-3-2.8-6.5-2.8-9.6V25.8c0-6.4 4.5-9 10-5.8l30 17.2-1-2.4-31-17.9c-5.5-3.2-10-.6-10 5.8z" fill="url(#g)" fill-rule="nonzero" transform="translate(1014.7)"></path>
                      <g>
                          <g fill="#C3E0FE">
                              <path d="M1146.5 256.7l54.3 31.4c3.8 2.2 6.9-.1 6.9-5.2 0-5-3-11-6.9-13.1l-54.3-31.4c-3.8-2.2-7 .1-7 5.2 0 5 3.2 11 7 13.1zM1127 271l73.8 42.6c3.8 2.2 6.9-.1 6.9-5.2 0-5-3-11-6.9-13.1l-73.8-42.6c-3.8-2.2-6.9 0-6.9 5.1s3.1 11 6.9 13.2zM1159.4 315.2l41.4 24c3.8 2.1 6.9-.2 6.9-5.3 0-5-3-11-6.9-13.1l-41.4-24c-3.8-2.1-6.8.2-6.8 5.3 0 5 3 11 6.8 13.1z"></path>
                          </g>
                          <path d="M30.6 376.9l155.9 90c6 3.5 11-.3 11-8.4v-85.1c0-8.1-5-17.6-11-21.1l-156-90c-6-3.5-11 .2-11 8.3v85.2c0 8 5 17.6 11 21z" fill="url(#h)" transform="translate(1010.4 65.5)"></path>
                          <path d="M1029.7 81.7V74c0-6.7 4.7-9.4 10.4-6l157.3 90.7a23.2 23.2 0 0 1 10.5 18.2v7.7L1029.7 81.7z" fill="#32BFC5"></path>
                          <g fill="#91EBE7">
                              <path d="M1189.3 164c0 2.7 2 6 4.3 7.3 2.3 1.3 4.2.3 4.2-2.4 0-2.7-2-6-4.2-7.3-2.4-1.4-4.3-.3-4.3 2.4zM1174.5 155.4c0 2.7 2 6 4.2 7.3 2.4 1.4 4.3.3 4.3-2.4 0-2.7-2-6-4.3-7.3-2.3-1.3-4.2-.2-4.2 2.4zM1159.7 146.9c0 2.7 1.9 6 4.2 7.3 2.3 1.3 4.2.2 4.2-2.4 0-2.7-1.9-6-4.2-7.4-2.3-1.3-4.2-.2-4.2 2.5z"></path>
                          </g>
                          <path fill="#C3E0FE" d="M1029.7 309.6l176.8 102.1v-4l-176.8-102zM1029.7 259.4l176.8 102.1v-4l-176.8-102z"></path>
                          <path d="M1102.9 338.3l32 18.5c2.5 1.5 4.6 0 4.6-3.5V340c0-3.4-2-7.4-4.7-9l-32-18.4c-2.5-1.5-4.6.1-4.6 3.6v13.2c0 3.4 2 7.4 4.7 9zM1043.9 304.3l32 18.4c2.5 1.5 4.6 0 4.6-3.5V306c0-3.5-2-7.5-4.7-9l-32-18.4c-2.5-1.5-4.6 0-4.6 3.5v13.2c0 3.5 2 7.5 4.7 9z" fill="#BEDAFF"></path>
                          <path d="M1181.5 402.1c-.9.7-2 .8-3.4 0l-32-18.5c-2.5-1.5-4.6-5.5-4.6-8.9v-13.2c0-1.8.5-3 1.4-3.7l15.6-11.2c.9-.6 2-.7 3.4 0l32 18.6c2.5 1.4 4.6 5.4 4.6 8.9v13.2c0 1.8-.5 3-1.4 3.7l-15.6 11.1z" fill="#9CC0E8"></path>
                          <path d="M1146.1 383.6l32 18.5c2.6 1.5 4.7 0 4.7-3.5v-13.3c0-3.4-2-7.4-4.7-9l-32-18.4c-2.5-1.5-4.6.1-4.6 3.6v13.2c0 3.4 2 7.4 4.6 9z" fill="#BEDAFF"></path>
                          <g>
                              <path d="M1036 152.5l90.6 52.3c3.4 2 6.1-.1 6.1-4.6v-23.4c0-4.5-2.7-9.8-6.1-11.7l-90.6-52.3c-3.4-2-6.1.1-6.1 4.6v23.4c0 4.5 2.7 9.8 6.1 11.7z" fill="#C3E0FE"></path>
                              <path d="M11.2 25.7l34.3 19.8c.8.5 1.5 0 1.5-1.1v-.1c0-1-.7-2.4-1.5-2.8L11.2 21.7c-.8-.5-1.5 0-1.5 1.1 0 1.2.7 2.4 1.5 3z" fill="url(#i)" transform="translate(1081.2 149.3)"></path>
                              <path d="M1.5 12.4l44 25.3c.8.5 1.5 0 1.5-1v-.2c0-1-.7-2.3-1.5-2.8L1.5 8.4c-.8-.5-1.4 0-1.4 1v.2c0 1 .6 2.3 1.4 2.8z" fill="url(#j)" transform="translate(1081.2 149.3)"></path>
                              <path d="M1.5 4.6l44 25.4c.8.5 1.5 0 1.5-1.1v-.1c0-1.1-.7-2.4-1.5-2.8L1.5.6C.7.1.1.6.1 1.7v.1C0 3 .7 4.2 1.5 4.6z" fill="url(#k)" transform="translate(1081.2 149.3)"></path>
                              <g>
                                  <path fill="url(#l)" d="M0 34.3l22.5 13v-21L0 13.3z" transform="translate(1016.7 123.5)"></path>
                                  <path fill="#BDCEFA" d="M1016.8 136.9h.1l22-12.8v-.2l22.5 13v20.9l-22.2 13v-21z"></path>
                              </g>
                          </g>
                          <g class="i1__blok">
                              <path d="M1018.5 255l45.5 26.3c4 2.3 7.4-.2 7.4-5.6v-49.8c0-5.5-3.4-11.8-7.4-14.2l-45.5-26.2c-4-2.3-7.4.2-7.4 5.6v49.8c0 5.5 3.3 11.8 7.4 14.1z" fill="#383E7F"></path>
                              <path d="M1045.6 240c.4.7.5 1.5.5 2.2 0 .7-.2 1.3-.6 1.5-.4.2-.8.2-1.4-.1l-9-5.3v-5.2l9.2 5.3c.6.3 1 .8 1.3 1.6zm-1-7.8c-.3 0-.8.1-1.2-.1l-8.2-4.9v-4.7l8.4 4.9a3.5 3.5 0 0 1 1.6 3.2c0 .9-.2 1.5-.6 1.6zm13.4-12c1 .6 1.7 2 1.7 3.3l.3 41.5c0 1.4-.7 1.8-1.8 1.2L1035 253l-6.5 4.5V249l-5.1-3.2c-1-.6-2-2-2-3.2l.3-41.4c0-1.2.9-1.8 2-1l34.4 19.9zm-5.7 30.5c.4-.8.6-1.8.6-3a13.2 13.2 0 0 0-4.5-10.1c1 0 2-.5 2.6-1.4.6-1 .9-2.1.9-3.5a13.6 13.6 0 0 0-5.6-10.6l-17.7-10.4-.1 29.5 15.7 9.2c1.2.7 2.3 1.1 3.4 1.4 1 .3 2 .3 2.8.1.8-.1 1.5-.5 2-1.2z" fill="#FFF" fill-rule="nonzero"></path>
                              <path d="M1071.4 275.7v-49.8c0-5.5-3.4-11.8-7.4-14.2l-45.5-26.2c-1.7-1-3.4-1.1-4.6-.5l18.4-10.4c1.3-.7 3-.6 4.8.4l45.4 26.3c4 2.3 7.4 8.6 7.4 14v50c0 3-1 5.1-2.7 6l-18.4 10.4c1.5-.9 2.6-3 2.6-6z" fill="#090062"></path>
                          </g>
                      </g>
                      <g>
                          <path d="M966 310.5l64 35.7c2.8 1.6 7.8 1.4 11-.5l37.4-21.5c3.2-1.9 3.6-4.7.8-6.4l-64-35.7c-2.9-1.6-7.9-1.4-11.1.5L966.8 304c-3.3 1.9-3.6 4.8-.8 6.4z" fill="#FFF"></path>
                          <path d="M1 174.3V0c.2.9.8 1.7 1.9 2.3l64 35.7c1.3.8 3.2 1.1 5.1 1v175.4c-1.9 0-3.8-.3-5.1-1.1l-64-35.7c-1.5-.8-2-2-1.9-3.3z" fill="url(#m)" transform="translate(963.1 308.2)"></path>
                          <path d="M78 37.5L115.3 16c1.5-.9 2.4-2 2.6-3.1v174.3c.3 1.4-.6 3-2.6 4.1L78 212.8c-1.7 1-3.9 1.5-6 1.6V39c2.1 0 4.3-.6 6-1.6z" fill="url(#n)" transform="translate(963.1 308.2)"></path>
                          <path d="M1041 345.7l37.4-21.5c1.5-.9 2.4-2 2.6-3.1v174.3c.3 1.4-.6 3-2.6 4.1l-37.3 21.6c-1.7 1-3.9 1.5-6 1.5V347.3c2.1 0 4.3-.6 6-1.6z" fill="#BDCEFA"></path>
                          <g>
                              <path d="M928.8 360.4l64 36.8c2.8 1.6 7.8 1.4 11-.5l21.3-12.7c3.3-1.9 3.7-4.8.8-6.4L962.2 341c-2.8-1.6-7.8-1.4-11.1.5L929.6 354c-3.3 2-3.7 4.8-.8 6.4z" fill="#FFF"></path>
                              <path d="M.3 6.8V.5c.2.9.8 1.7 1.9 2.3l64 36.7a10 10 0 0 0 5.1 1.1V48c-2 0-3.8-.3-5.2-1L2.1 10C.8 9.2.2 8 .4 6.8z" fill="url(#o)" transform="translate(926.6 357.6)"></path>
                              <path d="M77.3 39l21.2-12.6c1.6-1 2.5-2 2.7-3.2v6.3c.3 1.4-.6 3-2.7 4.2L77.3 46.4c-1.8 1-4 1.5-6 1.5v-7.3c2 0 4.2-.5 6-1.5z" fill="url(#p)" transform="translate(926.6 357.6)"></path>
                              <path d="M1003.8 396.7l21.3-12.7c1.6-.9 2.5-2 2.7-3.1v6.2c.3 1.5-.6 3-2.7 4.2l-21.3 12.7c-1.7 1-3.8 1.5-6 1.5v-7.2c2.2 0 4.3-.6 6-1.6z" fill="#BDCEFA"></path>
                              <path d="M901.4 398.5l64 36.8c2.8 1.6 7.8 1.4 11-.5l21.4-12.7c3.3-1.9 3.6-4.7.8-6.4l-63.8-36.5c-2.8-1.7-7.8-1.5-11 .4l-21.6 12.5c-3.3 2-3.6 4.8-.8 6.4z" fill="#FFF"></path>
                              <path d="M.9 6.3V.1c.2.8.8 1.6 1.8 2.2l64 36.8a10 10 0 0 0 5.2 1v7.3c-2 0-3.8-.3-5.2-1L2.7 9.5c-1.4-.9-2-2-1.8-3.3z" fill="url(#q)" transform="translate(898.7 396.2)"></path>
                              <path d="M77.8 38.6l21.3-12.7c1.6-.9 2.5-2 2.7-3.1V29c.2 1.4-.7 3-2.7 4.2L77.8 45.9c-1.7 1-3.8 1.5-6 1.5v-7.2c2.2-.1 4.3-.6 6-1.6z" fill="url(#r)" transform="translate(898.7 396.2)"></path>
                              <path d="M976.5 434.8l21.3-12.7c1.5-.9 2.4-2 2.6-3.1v6.3c.3 1.4-.6 3-2.6 4.1l-21.3 12.7c-1.7 1-3.9 1.5-6 1.5v-7.2c2.1 0 4.3-.6 6-1.6z" fill="#BDCEFA"></path>
                              <g>
                                  <path d="M874 436.7l64 36.7c2.9 1.6 7.9 1.4 11.1-.5l21.3-12.7c3.3-1.9 3.7-4.7.8-6.4l-63.7-36.5c-2.8-1.7-7.8-1.5-11.1.4l-21.5 12.5c-3.3 2-3.7 4.8-.8 6.5z" fill="#FFF"></path>
                                  <path d="M.4 6.8V.5c.2.9.8 1.7 1.8 2.3l64 36.7a10 10 0 0 0 5.2 1.1v7.3c-2 0-3.8-.3-5.2-1.1L2.2 10C.8 9.2.2 8 .4 6.8z" fill="url(#s)" transform="translate(871.8 433.9)"></path>
                                  <path d="M77.3 39l21.3-12.6c1.6-1 2.5-2 2.7-3.2v6.3c.2 1.4-.7 3-2.7 4.1L77.3 46.3c-1.7 1-3.8 1.5-6 1.6v-7.3c2.2 0 4.3-.6 6-1.5z" fill="url(#t)" transform="translate(871.8 433.9)"></path>
                                  <path d="M949.1 473l21.3-12.8c1.6-.9 2.5-2 2.7-3.1v6.3c.3 1.4-.6 3-2.7 4.1l-21.3 12.7c-1.7 1-3.8 1.5-5.9 1.6v-7.3c2 0 4.2-.6 6-1.6z" fill="#BDCEFA"></path>
                              </g>
                              <g>
                                  <path d="M846.7 474.8l64 36.7c2.8 1.6 7.8 1.4 11.1-.5l21.3-12.7c3.3-1.8 3.6-4.7.8-6.4L880 455.4c-2.8-1.7-7.8-1.5-11 .4l-21.6 12.6c-3.3 1.8-3.6 4.7-.8 6.4z" fill="#FFF"></path>
                                  <path d="M1 6.3V0c.1.9.7 1.7 1.8 2.3l64 36.7a10 10 0 0 0 5.2 1.1v7.3c-2 0-3.8-.3-5.2-1.1L2.8 9.6c-1.5-.9-2-2-1.8-3.3z" fill="url(#u)" transform="translate(843.9 472.5)"></path>
                                  <path d="M77.9 38.6l21.3-12.7c1.5-1 2.4-2 2.6-3.2V29c.3 1.4-.6 3-2.6 4.1L77.9 45.8c-1.7 1-3.9 1.5-6 1.6V40c2.1 0 4.3-.5 6-1.5z" fill="url(#v)" transform="translate(843.9 472.5)"></path>
                                  <path d="M921.8 511l21.3-12.7c1.5-.9 2.4-2 2.6-3.1v6.3c.3 1.4-.6 3-2.6 4.1l-21.3 12.7c-1.7 1-3.9 1.5-6 1.6v-7.3c2.1 0 4.3-.6 6-1.6z" fill="#BDCEFA"></path>
                              </g>
                              <g>
                                  <path d="M819.4 512.9l64 36.7c2.8 1.6 7.8 1.4 11-.5l21.3-12.6c3.3-2 3.7-4.8.8-6.5l-63.7-36.5c-2.8-1.7-7.8-1.4-11.1.4l-21.5 12.6c-3.3 1.9-3.7 4.7-.8 6.4z" fill="#FFF"></path>
                                  <path d="M.5 6.7V.5c.1.8.7 1.6 1.8 2.2l64 36.8a10 10 0 0 0 5.2 1v7.3c-2 0-3.8-.3-5.2-1L2.3 10C.8 9.2.3 8 .5 6.7z" fill="url(#w)" transform="translate(817 510.1)"></path>
                                  <path d="M77.4 39l21.3-12.7c1.5-.9 2.4-2 2.6-3.1v6.3c.3 1.4-.6 3-2.6 4.1L77.4 46.3c-1.7 1-3.9 1.5-6 1.5v-7.2c2.1 0 4.3-.6 6-1.6z" fill="url(#x)" transform="translate(817 510.1)"></path>
                                  <path d="M894.5 549.1l21.2-12.6c1.6-1 2.5-2 2.7-3.2v6.3c.3 1.4-.6 3-2.7 4.1l-21.2 12.7c-1.7 1-4 1.5-6 1.6v-7.3c2 0 4.3-.6 6-1.6z" fill="#BDCEFA"></path>
                              </g>
                          </g>
                      </g>
                      <g>
                          <path d="M1012.2 569.4l73.2 42.2c3 1.7 8.2 1.5 11.6-.5l76.6-44.2c3.5-2 3.8-5 .9-6.7l-73.2-42.3c-3-1.7-8.2-1.4-11.6.5l-76.6 44.3c-3.5 2-3.8 5-.9 6.7z" fill="#FEFEFE"></path>
                          <path d="M1012.2 569.4l73.2 42.2c3 1.7 8.2 1.5 11.6-.5l76.6-44.2c2-1.1 3-2.5 2.9-3.9v3c0 1.3-1 2.7-2.9 3.8l-76.6 44.3c-3.4 2-8.6 2.2-11.6.5l-73.2-42.3c-1.3-.7-2-1.8-2-2.8v-3c0 1.1.7 2.1 2 2.9z" fill="#BDCEFA"></path>
                          <path d="M91.9 36.5l29.5 17c1 .6 2.8.6 4-.1l19.4-11.2c1.1-.7 1.3-1.7.3-2.3l-29.6-17c-1-.6-2.7-.6-3.9.1L92.2 34.2c-1.2.7-1.3 1.7-.3 2.3z" fill="url(#y)" transform="translate(1020 523)"></path>
                          <path d="M41.8 20.7l68.4 39.5c1 .5 2.6.4 3.6-.2 1.1-.6 1.3-1.6.3-2.1L45.7 18.4c-1-.5-2.6-.5-3.7.2-1 .6-1.2 1.5-.2 2z" fill="url(#z)" transform="translate(1020 523)"></path>
                          <path d="M34.3 25l68.4 39.5c.9.6 2.5.5 3.6-.1 1.1-.7 1.2-1.6.3-2.2L38.2 22.7c-1-.5-2.6-.4-3.7.2-1 .6-1.2 1.6-.2 2.1z" fill="url(#A)" transform="translate(1020 523)"></path>
                          <path d="M26.8 29.4l68.4 39.4c.9.6 2.5.5 3.6-.1s1.2-1.6.3-2.1L30.7 27c-1-.6-2.6-.5-3.7.1-1 .7-1.2 1.6-.2 2.2z" fill="url(#B)" transform="translate(1020 523)"></path>
                          <path d="M57.9 56l29.7 17.2c1 .5 2.6.5 3.7-.2 1.1-.6 1.2-1.6.3-2.1L61.8 53.7c-1-.5-2.6-.5-3.7.2-1 .6-1.2 1.6-.2 2.1z" fill="url(#C)" transform="translate(1020 523)"></path>
                          <path d="M53.3 14.2l29.5 17c1 .6 2.7.5 4-.1L106 19.9c1.2-.7 1.3-1.7.3-2.3L77 .6c-1-.6-2.8-.6-4 .1L53.6 12c-1.1.7-1.3 1.7-.2 2.3z" fill="url(#D)" transform="translate(1020 523)"></path>
                          <path d="M1.3 44.2l68.2 39.3c1 .6 2.8.5 4-.1l9.2-5.4c1.2-.7 1.3-1.7.3-2.3L14.9 36.4c-1-.6-2.8-.5-4 .1L1.6 42c-1.1.7-1.3 1.7-.3 2.3z" fill="url(#E)" transform="translate(1020 523)"></path>
                          <g>
                              <path d="M1012.2 574.6l73.2 42.3c3 1.7 8.2 1.5 11.6-.5l76.6-44.3c2-1 3-2.5 2.9-3.8v2.9c0 1.3-1 2.8-2.9 3.9l-76.6 44.2c-3.4 2-8.6 2.2-11.6.5l-73.2-42.2c-1.3-.8-2-1.8-2-2.9v-2.9c0 1 .7 2 2 2.8z" fill="#BDCEFA"></path>
                              <path d="M3 5.3L76 47.5c3 1.7 8.2 1.5 11.6-.5l76.7-44.2a5.7 5.7 0 0 0 2.5-2.6c.7 1.6-.1 3.5-2.5 4.9L87.7 49.3c-3.4 2-8.6 2.2-11.6.5L3 7.6C1 6.6.6 5 1.2 3.5A4 4 0 0 0 3 5.3z" fill="url(#F)" transform="translate(1009.3 567)"></path>
                          </g>
                          <g>
                              <path d="M1012.2 579.9l73.2 42.2c3 1.7 8.2 1.5 11.6-.5l76.6-44.2c2-1.1 3-2.6 2.9-3.9v2.9c0 1.4-1 2.8-2.9 4l-76.6 44.2c-3.4 2-8.6 2.2-11.6.4l-73.2-42.2c-1.3-.8-2-1.8-2-2.8v-3c0 1.1.7 2.1 2 2.9z" fill="#BDCEFA"></path>
                              <path d="M3 5.1L76 47.4c3 1.7 8.2 1.5 11.6-.5l76.7-44.2a5.7 5.7 0 0 0 2.5-2.7c.7 1.6-.1 3.6-2.5 5L87.7 49.2c-3.4 2-8.6 2.2-11.6.5L3 7.4C1 6.4.6 4.8 1.2 3.4A4 4 0 0 0 3 5z" fill="url(#G)" transform="translate(1009.3 572.4)"></path>
                          </g>
                          <g>
                              <path d="M1012.2 585.1l73.2 42.2c3 1.8 8.2 1.5 11.6-.4l76.6-44.3c2-1 3-2.5 2.9-3.9v3c0 1.3-1 2.7-2.9 3.9l-76.6 44.2c-3.4 2-8.6 2.2-11.6.5l-73.2-42.3c-1.3-.7-2-1.7-2-2.8v-2.9c0 1 .7 2 2 2.8z" fill="#BDCEFA"></path>
                              <path d="M3 6L76 48.4c3 1.7 8.2 1.5 11.6-.5l76.7-44.2a5.7 5.7 0 0 0 2.5-2.6c.7 1.6-.1 3.5-2.5 4.9L87.7 50.1c-3.4 2-8.6 2.2-11.6.5L3 8.4C1 7.4.6 5.8 1.2 4.3A4 4 0 0 0 3 6z" fill="url(#H)" transform="translate(1009.3 576.7)"></path>
                          </g>
                          <g>
                              <path d="M1012.2 590.3l73.2 42.3c3 1.7 8.2 1.5 11.6-.5l76.6-44.2c2-1.1 3-2.6 2.9-4v3c0 1.3-1 2.8-2.9 3.9L1097 635c-3.4 2-8.6 2.2-11.6.5l-73.2-42.2c-1.3-.8-2-1.8-2-2.9v-2.8c0 1 .7 2 2 2.7z" fill="#BDCEFA"></path>
                              <path d="M3 6L76 48.2c3 1.7 8.2 1.5 11.6-.5l76.7-44.2a5.7 5.7 0 0 0 2.5-2.7c.7 1.7-.1 3.6-2.5 5L87.7 50c-3.4 2-8.6 2.2-11.6.5L3 8.3C1 7.2.6 5.6 1.2 4.2A4 4 0 0 0 3 6z" fill="url(#I)" transform="translate(1009.3 582)"></path>
                          </g>
                          <g>
                              <path d="M1012.2 595.6l73.2 42.2c3 1.7 8.2 1.5 11.6-.5l76.6-44.2c2-1.1 3-2.5 2.9-3.9v3c0 1.3-1 2.7-2.9 3.8l-76.6 44.3c-3.4 2-8.6 2.2-11.6.5l-73.2-42.3c-1.3-.7-2-1.7-2-2.8v-3c0 1.1.7 2.1 2 2.9z" fill="#BDCEFA"></path>
                              <path d="M3 5.8L76 48.1c3 1.7 8.2 1.5 11.6-.5l76.7-44.3a5.7 5.7 0 0 0 2.5-2.6c.7 1.6-.1 3.5-2.5 5L87.7 49.8c-3.4 2-8.6 2.2-11.6.5L3 8C1 7.1.6 5.5 1.2 4.1A4 4 0 0 0 3 5.7z" fill="url(#J)" transform="translate(1009.3 587.5)"></path>
                          </g>
                          <g>
                              <path d="M1012.2 600.8l73.2 42.3c3 1.7 8.2 1.5 11.6-.5l76.6-44.3c2-1 3-2.5 2.9-3.8v2.9c0 1.3-1 2.8-2.9 3.9l-76.6 44.2c-3.4 2-8.6 2.2-11.6.5l-73.2-42.2c-1.3-.8-2-1.8-2-2.9V598c0 1 .7 2 2 2.8z" fill="#BDCEFA"></path>
                              <path d="M3 5.7L76 47.9c3 1.7 8.2 1.5 11.6-.4l76.7-44.3a5.7 5.7 0 0 0 2.5-2.6c.7 1.6-.1 3.5-2.5 5L87.7 49.7c-3.4 2-8.6 2.1-11.6.4L3 8C1 7 .6 5.4 1.2 3.9A4 4 0 0 0 3 5.7z" fill="url(#K)" transform="translate(1009.3 592.8)"></path>
                          </g>
                          <g>
                              <path d="M835.7 436.9L762.6 479c-3 1.7-8.2 1.5-11.6-.4l-76.7-44.3c-3.4-2-3.8-5-.8-6.7l73.2-42.2c3-1.7 8.2-1.5 11.6.4l76.6 44.3c3.4 2 3.8 5 .8 6.7z" fill="#FFF"></path>
                              <path d="M835.7 436.9L762.6 479c-3 1.7-8.2 1.5-11.6-.4l-76.7-44.3c-1.9-1.1-2.8-2.5-2.8-3.9v3c0 1.3.9 2.7 2.8 3.8l76.7 44.3c3.4 2 8.6 2.2 11.6.5l73.1-42.3c1.4-.7 2-1.7 2-2.8v-2.9c0 1-.7 2-2 2.8z" fill="#BDCEFA"></path>
                              <path d="M104.4 21.4L36 60.9c-.9.5-2.5.4-3.6-.2-1.1-.6-1.2-1.6-.3-2.1L100.5 19c1-.6 2.6-.5 3.7.1 1 .7 1.2 1.6.2 2.2z" fill="url(#L)" transform="translate(681.7 389.8)"></path>
                              <path d="M112 25.7L43.6 65.2c-1 .5-2.6.5-3.7-.2-1.1-.6-1.2-1.5-.3-2L108 23.3c1-.5 2.6-.4 3.7.2 1 .6 1.2 1.6.3 2.1z" fill="url(#M)" transform="translate(681.7 389.8)"></path>
                              <path d="M119.5 30L51 69.5c-1 .6-2.6.5-3.7-.1-1.1-.7-1.2-1.6-.3-2.1l68.4-39.5c1-.6 2.6-.5 3.7.1 1 .6 1.2 1.6.3 2.1z" fill="url(#N)" transform="translate(681.7 389.8)"></path>
                              <path d="M88.3 56.7L58.6 73.9c-1 .5-2.6.4-3.7-.2-1-.6-1.2-1.6-.3-2.1l29.8-17.2c1-.5 2.6-.5 3.7.2 1 .6 1.2 1.5.2 2z" fill="url(#O)" transform="translate(681.7 389.8)"></path>
                              <path d="M93 14.9L24.8 54.3c-1 .6-2.8.5-4-.2L1.5 43c-1.1-.7-1.2-1.7-.2-2.3L69.3 1.2c1-.6 2.8-.5 4 .2l19.4 11.2c1.1.7 1.3 1.7.3 2.3z" fill="url(#P)" transform="translate(681.7 389.8)"></path>
                              <path d="M144.9 44.9L76.7 84.2c-1 .6-2.7.5-4-.2l-9.2-5.3c-1.2-.7-1.3-1.7-.3-2.3l68.2-39.3c1-.6 2.7-.6 4 .1l9.2 5.4c1.2.7 1.3 1.7.3 2.3z" fill="url(#Q)" transform="translate(681.7 389.8)"></path>
                              <g>
                                  <path d="M835.7 442.1l-73.1 42.3c-3 1.7-8.2 1.5-11.6-.5l-76.7-44.2c-1.9-1.2-2.8-2.6-2.8-4v3c0 1.3.9 2.8 2.8 3.9l76.7 44.2c3.4 2 8.6 2.2 11.6.5l73.1-42.2c1.4-.8 2-1.8 2-2.9v-2.9c0 1.1-.7 2-2 2.8z" fill="#BDCEFA"></path>
                                  <path d="M164.7 6L91.6 48.2c-3 1.7-8.2 1.5-11.6-.5L3.3 3.5A5.8 5.8 0 0 1 .8.8c-.8 1.7.1 3.6 2.5 5L80 50c3.4 2 8.6 2.2 11.6.5l73.1-42.2c1.9-1.1 2.4-2.6 1.8-4.1a4 4 0 0 1-1.8 1.8z" fill="url(#R)" transform="translate(671 433.9)"></path>
                              </g>
                              <g>
                                  <path d="M835.7 447.4l-73.1 42.2c-3 1.7-8.2 1.5-11.6-.5L674.3 445c-1.9-1.1-2.8-2.5-2.8-3.9v3c0 1.3.9 2.7 2.8 3.8l76.7 44.3c3.4 2 8.6 2.2 11.6.5l73.1-42.3c1.4-.7 2-1.7 2-2.8v-3c0 1.1-.7 2.1-2 2.9z" fill="#BDCEFA"></path>
                                  <path d="M164.7 5.8L91.6 48.1c-3 1.7-8.2 1.5-11.6-.5L3.3 3.3A5.8 5.8 0 0 1 .8.7c-.8 1.6.1 3.5 2.5 5L80 49.8c3.4 2 8.6 2.2 11.6.5L164.7 8c1.9-1 2.4-2.6 1.8-4a4 4 0 0 1-1.8 1.7z" fill="url(#S)" transform="translate(671 439.2)"></path>
                              </g>
                              <g>
                                  <path d="M835.7 452.6L762.6 495c-3 1.7-8.2 1.5-11.6-.5L674.3 450c-1.9-1-2.8-2.5-2.8-3.8v2.9c0 1.3.9 2.8 2.8 3.9l76.7 44.2c3.4 2 8.6 2.2 11.6.5l73.1-42.2c1.4-.8 2-1.8 2-2.9v-2.9c0 1-.7 2-2 2.8z" fill="#BDCEFA"></path>
                                  <path d="M164.7 5.7L91.6 47.9c-3 1.8-8.2 1.5-11.6-.4L3.3 3.2A5.8 5.8 0 0 1 .8.6C0 2.2.9 4 3.3 5.6L80 49.7c3.4 2 8.6 2.2 11.6.4L164.7 8c1.9-1 2.4-2.6 1.8-4.1a4 4 0 0 1-1.8 1.8z" fill="url(#T)" transform="translate(671 444.6)"></path>
                              </g>
                          </g>
                      </g>
                      <g>
                          <path d="M809 345.7c-14.8 8.6-14.8 22.4 0 31a59.3 59.3 0 0 0 53.8 0c14.8-8.6 14.8-22.4 0-31a59.3 59.3 0 0 0-53.7 0z" fill="#FFF"></path>
                          <path d="M11.3 38.4a59.3 59.3 0 0 0 53.7 0c7.4-4.2 11.1-9.8 11.2-15.4v13.6c0 5.6-3.7 11.3-11.2 15.6a59.3 59.3 0 0 1-53.7 0C4 47.9.2 42.2.3 36.6V23c0 5.6 3.7 11.2 11 15.4z" fill="url(#U)" transform="translate(797.7 338.3)"></path>
                          <path d="M61.5 16.9a51.5 51.5 0 0 0-46.6 0 19 19 0 0 0-9 9.7c-2.1-6 .9-12.5 9-17.2a51.5 51.5 0 0 1 46.6 0c8 4.7 11 11.2 9 17.2a19 19 0 0 0-9-9.7z" fill="url(#V)" transform="translate(797.7 338.3)"></path>
                          <path d="M812.6 355.1a51.5 51.5 0 0 1 46.6 0 19 19 0 0 1 9 9.8 19 19 0 0 1-9 9.8 51.5 51.5 0 0 1-46.6 0 19 19 0 0 1-9-9.8 19 19 0 0 1 9-9.8z" fill="#72FFF8"></path>
                          <g transform="translate(809.5 343.7)">
                              <path class="i1_rect1" d="M29.2 15.2h4.3v-4.4a1.4 1.4 0 1 1 2.9 0v4.4h4.3a1.4 1.4 0 1 1 0 2.8h-4.3v4.3a1.4 1.4 0 1 1-2.9 0V18h-4.3a1.4 1.4 0 1 1 0-2.8zM5.6 10.7h4.3V6.4a1.4 1.4 0 1 1 2.9 0v4.3H17a1.4 1.4 0 0 1 0 2.9h-4.3v4.3a1.4 1.4 0 0 1-3 0v-4.3H5.7a1.4 1.4 0 1 1 0-2.9z" fill="#00E9FF"></path>
                              <path class="i1_rect6" d="M33.3 6.4h4.3V2.1a1.4 1.4 0 1 1 3 0v4.3h4.2a1.4 1.4 0 0 1 0 2.9h-4.3v4.3a1.4 1.4 0 1 1-2.9 0V9.3h-4.3a1.4 1.4 0 1 1 0-2.9zM13.8 20.4H18V16a1.4 1.4 0 1 1 2.9 0v4.3h4.3a1.4 1.4 0 1 1 0 2.9H21v4.3a1.4 1.4 0 1 1-3 0v-4.3h-4.2a1.4 1.4 0 1 1 0-3z" fill="#00E9FF"></path>
                              <ellipse class="i1_rect6" fill="#0382FF" cx="19.5" cy="11" rx="3.1" ry="3.1"></ellipse>
                              <ellipse class="i1_rect4" fill="#0382FF" cx="8.3" cy="10.5" rx="3.1" ry="3.1"></ellipse>
                              <path class="i1_rect6" d="M28.2 4.4a3 3 0 1 0 6.1 0 3 3 0 0 0-6.1 0z" fill="#0382FF"></path>
                              <ellipse class="i1_rect5" fill="#0382FF" cx="20.9" cy="10.7" rx="3.1" ry="3.1"></ellipse>
                              <ellipse class="i1_rect6" fill="#0382FF" cx="44.4" cy="10.5" rx="3.1" ry="3.1"></ellipse>
                              <ellipse class="i1_rect1" fill="#0382FF" cx="32.7" cy="12.9" rx="3.1" ry="3.1"></ellipse>
                              <ellipse class="i1_rect3" fill="#0382FF" cx="11.3" cy="18.4" rx="3.1" ry="3.1"></ellipse>
                              <ellipse class="i1_rect4" fill="#0382FF" cx="42.1" cy="25.2" rx="3.1" ry="3.1"></ellipse>
                              <path class="i1_rect1" fill="#3A55CA" d="M44.2 25l-7.7-7.6 7.7-7.7 7.7 7.7z"></path>
                              <path class="i1_rect2" fill="#3A55CA" d="M20.9 18.9l-7.7-7.7 7.7-7.7 7.7 7.7z"></path>
                              <path class="i1_rect3" fill="#3A55CA" d="M8.3 25.8L.6 18.1l7.7-7.7 7.7 7.7z"></path>
                              <path class="i1_rect4" fill="#3A55CA" d="M29.6 30.3L22 22.6l7.7-7.7 7.7 7.7z"></path>
                          </g>
                          <path d="M71 253c.5 5.1-2.7 10.3-9.5 14.2a51.5 51.5 0 0 1-46.6 0c-6.8-3.9-10-9-9.6-14.2V20.2C4.9 15 8 9.9 14.9 6a51.5 51.5 0 0 1 46.6 0c6.8 3.9 10 9 9.6 14.2V253z" fill="url(#W)" transform="translate(797.7 107.4)"></path>
                      </g>
                      <g>
                          <path d="M20.1 2.7L155 80.5c10.5 6 19.2 21 19.2 33.2v16.2c0 12.1-8.7 17.1-19.2 11L54.6 83l6 31.7L26 66.5 20 63.1C9.6 57.1 1 42.1 1 30V13.7C1 1.5 9.6-3.4 20 2.7z" fill="url(#X)" transform="translate(1208 308.2)"></path>
                          <path d="M2.6 7.6l131.1 75.7c1.4.7 2.5-.1 2.5-2 0-1.7-1.1-3.9-2.5-4.6L2.7 1C1.2.2.1 1 .1 2.9c0 1.8 1 3.9 2.4 4.7z" fill="url(#Y)" transform="translate(1227.3 329.7)"></path>
                          <path d="M69.8 63.4l64.2 37c1.2.8 2.2 0 2.2-1.6V98c0-1.6-1-3.4-2.2-4.1l-64.2-37c-1.1-.8-2.1 0-2.1 1.5v.9c0 1.6 1 3.4 2.1 4.1z" fill="url(#Z)" transform="translate(1227.3 329.7)"></path>
                      </g>
                      <g>
                          <g transform="translate(1135 288.9)">
                              <path d="M16.5 107.3c0 .5-.3.9-1 1.3-.1.1 0-2.6-.6-2.2-.2.2-9 7-14 5.8-.6-.1-.7-.7-.8-1V110c0-1.2 1.9-3.2 4.7-6 3.1-3 5.1-4.9 9.8-2.2 1.3.8 1.9 1.4 1.9 1.9v3.6z" fill="#000"></path>
                              <path d="M4.8 104c-3.8 3.8-5.9 6-4 7 2 1.2 6-.5 9.9-3.5 3.5-2.7 8.6-3 4-5.7-4.8-2.7-6.8-.8-10 2.3z" fill="#484968"></path>
                              <path d="M8.6 102l.2-29.1c0-1.4.9-2.7 2.2-3.2l2.3-.8 9.5 6.3-4.6 2.4s.8 8-1.5 15.6c0 0-1.6 3.2-1.2 10.9 0 0-5.1 1.6-7-2.1z" fill="#F1AC85"></path>
                              <path d="M30.5 114.2c0 .5-.3 1-1 1.4-.2 0 0-2.7-.6-2.2-.2.1-9 7-14 5.8-.6-.2-.8-.7-.8-1.1V117c0-1.3 1.8-3.2 4.7-6 3-3 5-5 9.8-2.2 1.3.7 1.8 1.3 1.8 1.8v3.6z" fill="#000"></path>
                              <path d="M18.8 111c-3.8 3.7-5.9 5.9-4 7 2 1.1 5.9-.6 9.9-3.6 3.4-2.6 8.5-3 3.9-5.6-4.7-2.7-6.7-.8-9.8 2.2z" fill="#484968"></path>
                              <path d="M22.6 109.3l.2-34 11.3 3.6-2 5.5s1 7.4-1.4 15c0 0-1.6 3.2-1.3 10.8 0 0-4 2.4-6.8-1z" fill="#F1AC85"></path>
                              <path d="M32.6 40.6S20.1 29.2 27.7 8.9l6 21-1 10.7z" fill="#943BBB"></path>
                              <path d="M17.8 68.4c2 .5 4-.6 4.6-2.5l10-34.3a3.7 3.7 0 0 0-7-2L15.2 63.7c-.6 2 .5 4 2.5 4.6z" fill="#F1AC85"></path>
                              <path d="M28 59.2L11 69.7s6-1.4 21.2 14.7l16.7-9.7L28 59.2z" fill="#8800BF"></path>
                              <path d="M46.7 76.2a1 1 0 0 1-.5.2c-2.4.2-11.3-1.8-20.2-11.8-.7-.8-1.2-2-1.2-2.8V33.4c0-2.2.8-3.7 2-4.4l6.7-3.9c1.2-.7 2.9-.6 4.7.5l9.1 5.2C51 33 54 38.2 54 42.4V71c0 .6-.2 1.1-.6 1.3l-6.7 4z" fill="#FFFFEB"></path>
                              <path d="M45.7 32.6c0 .7-.4 1.4-1.4 2-1.8 1-4.8 1-6.6 0-1-.6-1.4-1.3-1.4-2v-6.2c0-.7.4-1.4 1.4-2 1.8-1 4.8-1 6.6 0 1 .6 1.4 1.3 1.4 2v6.2z" fill="#DD936F"></path>
                              <ellipse fill="#F1AC85" cx="41" cy="16.5" rx="13" ry="13"></ellipse>
                              <path d="M37.2 40.6s9.6-10.7 2.9-30.3l-12 4.1S24 4.2 37.5 1.2c0 0 9.1-2 12.2 5.5 0 0 7.3.6 4.6 15.6 0 0-.4 14.1-17.1 18.3z" fill="#943BBB"></path>
                          </g>
                          <path fill="#BDCEFA" d="M1140.5 357l24.5 14.1 18.7-10.2-25-14.3z"></path>
                          <path fill="url(#aa)" d="M4.5 25.2L.7.7l27.1 15.7L29 39.3z" transform="translate(1136 331.9)"></path>
                          <path d="M1160.1 358.1a3.7 3.7 0 0 0 5.2-.4l23-27a3.7 3.7 0 0 0-5.6-4.8l-23 27a3.7 3.7 0 0 0 .4 5.2z" fill="#F1AC85"></path>
                      </g>
                      <g>
                          <path d="M902 611s2 13.3 3.7 20.6c0 0 .4 12.1.7 16.3l1.4 13.2s1.2 1 2.6.4l2.1-30c.4-4.3 1.6-23 1.6-23s-4-3.7-12.2 2.6zM915 605.9s2 13.2 3.8 20.5c0 0 .3 12.1.7 16.3.3 4.2 1.3 13.2 1.3 13.2s1.3 1 2.7.4l2-30.1c.4-4.2.6-22.8.6-22.8s-3-3.8-11.2 2.5z" fill="#F5B697"></path>
                          <path d="M904.5 593.2s-4.9 5.4-2 23.7c.1 2.6 1.8 9.3 1.8 9.3s6.5 1 14.1-2c7.7-2.9 7.8-4.4 7.8-4.4s.4-22.9-1.4-28.8c-1.7-6-20.3 2.2-20.3 2.2z" fill="#113C7A"></path>
                          <path d="M923.5 655s-.1 1.3 1.3 2.4c1.3 1 4 3 4.4 4 0 1-3.3 0-4.8-.8s-2.9-2.6-2.9-2.6l.1.8s-.5 0-1-.5c-.4-.4.2-3 .2-3l2.7-.3zM910.5 661s-.2 1.3 1.2 2.4c1.4 1 4 3 4.5 4 0 1-3.3 0-4.8-.8s-2.9-2.6-2.9-2.6l.1.8s-.5 0-1-.5c-.4-.4.1-3 .1-3l2.8-.3z" fill="#5167B0"></path>
                          <path d="M45 28.2s4.5.7 7.4 10.5c1.8 6.5 4.3 7 7.2 7.6 3 .6 15.3 0 16.3 0s2.1 2.2.7 3.8c-1.3 1.5-18.3 3-21.6 3-3.4 0-11-6.2-14.1-11.2-3.1-5.1 0-14.1 4-13.7z" fill="url(#ab)" transform="translate(878.3 530.5)"></path>
                          <path d="M921.1 534.3s4.5 5.8 3.5 12.2c-1 6.5-6.6 6.2-7.6 9.7-1 3.5 2.7 8.6-2.3 11.9-5.1 3.3-7.5 2.5-8.8 9.6-1.4 7-6.3 10.7-14.7 11.5-8.4.8-14.2-9.4-12-16.8 2-7.4 9.5-5 11-11.1 1.6-6.1 1-10.9 6.3-13.2 5.3-2.4 3.3-11.3 8.6-14 5.4-2.8 12.1-4.3 16 .2z" fill="#113C7A"></path>
                          <path d="M11.8 23s-9.6 7-10.6 9.2c-1 2.3-2.3 9.4.8 13 5.5 6 2.2 16.4 3 19.5.6 3 8 3.5 13.1 2.5s9.9-3.6 9.7-9.6c-.2-6 1.4-14.2 1.7-16.8.3-2.7 0-9.5-1.3-14-.3-1-3.5-2-3.5-2s-3.4-2.2-12.9-1.8z" fill="url(#ac)" transform="translate(897.6 533.8)"></path>
                          <path d="M917.8 555.5v.3c.1.7.5 2.5.5 3.2.1.8-.7 2-2.7 2s-5.3-.9-6.4-3.2c.1-.4 0-4.7-.3-6.9l9 4.6z" fill="#FF7C40"></path>
                          <path d="M923.2 542.4c-1-5.6-5.4-8.7-10.5-7.6 0 0-5.4.6-7.8 5.4-2.4 4.7 1.1 8.8 3.4 11.3l2.1 2.3.5.6c1.6 1.6 3.4 2.5 4.7 2.9 2.2.6 4.8.3 6.2-1.2 1.4-1.5 2.5-8 1.4-13.7z" fill="#FF9D6F"></path>
                          <path d="M924.1 546.2s-4 .4-6.3-2.3c-2.4-2.8-5.7 0-8.4-2.4 0 0 1.2 3 0 5.9-1.2 3-1.6 7.4-1.6 7.4l-5-8v-7l6.4-6 8.6-.5 4 4s2.7 6 2.3 9z" fill="#113C7A"></path>
                          <path d="M23.6 49.8l12.1 3.8L47 50.5C47 51 44 60 37.4 61.8c-4.7 1.2-10.2-3-13-5.4 0-1.7-.4-3.3-1.1-5l.3-1.6z" fill="url(#ad)" opacity=".4" transform="translate(878.3 530.5)"></path>
                          <g>
                              <path d="M4.8.8S-1.7-.8 1 8C3.8 16.8 13 23.2 16.3 22.8A56.2 56.2 0 0 0 33.1 6.4c0-1.7-1.6-2.9-3.1-2.5-1.6.4-12 11.5-13 11.1-.9-.4-7-10.5-12.2-14.2z" fill="url(#ae)" transform="translate(897.6 568.1)"></path>
                              <path d="M928.9 575.2s-1.9-.5-1.3-2.5c.5-2 4-3.4 4.6-3.5.5-.1 5.8 1 6 1.6.2.6-1 1-2.2.6-1.3-.3-3.3-.4-3.3-.4s1.4 1.5 1.3 2.2a4 4 0 0 1-2 2.4c-1 .6-2.3-.6-2.3-.6l-.8.2z" fill="#FF9D6F"></path>
                          </g>
                          <path d="M952.5 577.2s4.3-3.7 4.5-3c.2.6-1.5 2.4-1.5 2.4s5.7-2.1 5.8-1.4c0 .7-3 3-3.8 3.6a21 21 0 0 1-3.7 1.3s-1.6-2-1.3-3z" fill="#FF9D6F"></path>
                          <g class="i1__display" opacity=".6" fill="#7EF4ED">
                              <path d="M933.2 544.8a5.6 5.6 0 0 0-2.6 4.4l.2 59.9c0 3.8 2.7 5.4 6 3.5l35.7-20.6a5.6 5.6 0 0 0 2.5-4.4l-.1-60c0-3.7-2.8-5.3-6-3.4l-35.7 20.6z"></path>
                          </g>
                          <g fill="#FFF">
                              <path d="M938.6 566.5c-.4.3-.7.8-.7 1.3v3.2c0 .5.3.7.8.4l29-16.8c.5-.2.8-.8.8-1.3v-3.2c0-.4-.4-.6-.8-.4l-29 16.8zM938.7 573.4c-.5.3-.8.9-.8 1.3v3.2c0 .5.4.7.8.4l29-16.7c.5-.3.8-.9.8-1.3V557c0-.5-.3-.7-.8-.5l-29 16.8zM950 578.6a4 4 0 0 0-1.8 3v.8c0 1.2.8 1.6 1.8 1l9.4-5.4a4 4 0 0 0 1.8-3v-.8c0-1.2-.8-1.6-1.8-1l-9.4 5.4z"></path>
                          </g>
                      </g>
                      <g transform="translate(984 182)">
                          <g transform="translate(33.5 126.4)">
                              <mask id="ag" fill="#fff">
                                  <use xlink:href="#af"></use>
                              </mask>
                              <path d="M5.4 0l4.3 3.2s13.9-1 8.5 6.4H0V1.1L5.4 0z" fill="#090062" mask="url(#ag)"></path>
                          </g>
                          <path d="M12.3 39.3s-2.3 9.9 0 11.3l7.1-4.2-4.7-9-2.4 2z" fill="#F6B9AD"></path>
                          <path d="M38.5 126.3l-6.2-26-6.3 8.4s5.2 16.6 8.4 18.6l4.1-1z" fill="#B98B82"></path>
                          <path class="i1__hand2" d="M42.7 37.2s-4.2-6.2-8.3 0c0 0 1 4.1 0 6.2l-4.2 9.3h-9.4V58L32.3 61l7.3-17.6v-4.1l3.1-2.1z" fill="#F6B9AD"></path>
                          <path fill="#5989A1" d="M28 49.6L26 61l-8.4-2v-9.4z"></path>
                          <ellipse fill="#F6B9AD" cx="11.3" cy="33.1" rx="9.4" ry="9.3"></ellipse>
                          <path d="M9.2 32l8.4-10.3s-5.3-1.5-10.4.5c-9.4 3.5-9.4 17 0 20.5 1.3.6 2.7.8 4.1.7v-6.2H8.2l1-5.2z" fill="#3D213C"></path>
                          <path class="i1__hand" d="M32.3 10.3l-1 18.6-8.5 10.4-5.2-3.1L25 24.8 28.1 7S26.3 2.7 35.3.4a1.8 1.8 0 0 1 2.2 1.8c-.1 2.6-1 6.7-5.2 8z" fill="#F6B9AD"></path>
                          <path class="i1__hand" d="M23.9 92.1l1 8.3s-9.4 7.2-9.4 17.6l-1 2 3.1 3.2 16.7-19.7s0-11.4-3-14.5L23.8 92z" fill="#F6B9AD"></path>
                          <path d="M18.6 122v5.3s8.4 1 6.3 6.2h-8.3l-8.4-10.3 6.3-5.2 4.1 4z" fill="#090062"></path>
                          <path d="M34.4 91s-9.5 7.3-13.6 5.3l-3.2-14.5s-4.2 0-6.3-5.2v-6.3l20 6.3s0 11.4 3 14.5z" fill="#383E7F"></path>
                          <path d="M26 39.3L17.6 33s-4.2 12.5-6.3 12.5c-2 0-2 11.4 1 13.4l-1 11.4 20 6.3s-3.2-20.8-9.5-28l4.2-9.3z" fill="#34ABE6"></path>
                      </g>
                  </g>
              </g>
          </svg>
      </div>
      <div class="centered-text centered-text--hero">
          <div class="centered-text__wrap">
              <h2 class="centered-text__head">The Problem</h2>
              <div class="centered-text__body ns-kr" style="font-size: 18px;font-weight: 400;letter-spacing: -0.2px;">
                  <div>대화를 정리하느라 시간을 낭비하고 있나요?</div>
              </div>
          </div>
      </div>
      <div class="centered-text centered-text--inverse centered-text--top-arrow centered-text--hero">
          <div class="centered-text__wrap">
              <h2 class="centered-text__head">The Solution</h2>
              <div class="centered-text__body ns-kr" style="font-size: 18px;font-weight: 400;letter-spacing: -0.2px;">
                  <div>LISN을 통해 불필요한 시간을 획기적으로 줄여보세요</div>
              </div>
          </div>
      </div>
      <div class="centered-text centered-text--inverse centered-text--bow">
          <div class="centered-text__wrap">
              <h2 class="centered-text__head">How it works</h2>
              <div class="centered-text__body"> </div>
              <div class="centered-text__console">
              </div>
          </div>
      </div>
      <div class="steps">
          <div class="steps__box">
              <div class="step">
                  <h3 id="step-1">Step 1</h3>
                  <p>사용해보고</p>
              </div>
              <div class="step">
                  <h3 id="step-2">Step 2</h3>
                  <p>가입하고</p>
              </div>
              <div class="step">
                  <h3 id="step-3">Step 3</h3>
                  <p>계속 사용하자</p>
              </div>
          </div>
          <div class="steps__cta"> 
            <div style="display: flex;align-items: center;justify-content: center;">
              <div id="customBtn2" class="btn-user btn btn-neutral btn-icon" style="background: #273559;border: none;display: flex;align-items: center;justify-content: center;">
                  <div class="btn-inner--icon">
                    <img src="../img/icons/common/google.svg">
                  </div>
                  <div class="btn-inner--text ns-kr" @done="onSignIn" @error="onSignInError" style="font-size: 18px;color: white;">Google 계정으로 사용</div>
              </div>
            </div>
          </div>
      </div>
      </main>
  <app-footer></app-footer> 
</div>
</template>

<script>
import AppFooter from '../layout/AppFooter'
import Logo from '../assets/Logo'
import axios from 'axios'

export default {
  components: {
    AppFooter,
    Logo,
  },
  data() {
    return {
      scrolled: false,
      navOpen: false,
    }
  },
  created(){
    setTimeout(() => {
      gapi.load('auth2', function () {
        gapi.auth2.init().then(function () {
          var auth2 = gapi.auth2.getAuthInstance();
          if (auth2.isSignedIn.get() == true) {
            location.href = "/#/list";
          }
        });
      });
    }, 300);  //delay loading
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    let self = this;
    gapi.load('auth2', function(){
      var auth2 = gapi.auth2.init({
        client_id: '935445294329-t38oc4vmt9l5sokr34h8ueap63dfq4hi.apps.googleusercontent.com',
      });

      auth2.attachClickHandler(document.getElementById('customBtn0'), {},
        function(googleUser) {
          self.onSignIn(googleUser);
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
      });
      
      auth2.attachClickHandler(document.getElementById('customBtn1'), {},
        function(googleUser) {
          self.onSignIn(googleUser);
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
      });

      auth2.attachClickHandler(document.getElementById('customBtn2'), {},
        function(googleUser) {
          self.onSignIn(googleUser);
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
      });
    });
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 80;
    },
    onSignInError (error) {
      // console.log('OH NOES', error)
    },
    onSignIn(googleUser){
      let self = this;
      var id_token = googleUser.getAuthResponse().id_token;
      var formData = new FormData();
      formData.append('idtoken', id_token);
      axios.post( this.$store.state.domain + '/signin/oauth/google/user', formData)
        .then((res) => {
          var user_id = res.data.user_id
          self.$store.commit('setCookie', {name: 'glisn_user_id', value: user_id, exp: 365});
          self.$router.push('/list');
        })
        .catch((ex) => {
        });
    }
  }
}
</script>
<style scoped>
#home-header {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
}
#home-header.scrolled {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.2);
}
#home-header.scrolled>nav {
  padding: 0 25px;
}
#customBtn span:hover{
  color: #09b3af;
  text-decoration: none;
}
#customBtn span{
  color: #09b3af;
  text-decoration: none;
}
a {
    color: #09b3af
}
a:hover{
  text-decoration: none;
}

html,body {
    font-family: 'Raleway', Helvetica, sans-serif;
    line-height: 1.6;
    font-size: 13px;
    font-weight: 500;
    color: #202227;
    margin: 0;
    padding: 0
}

@media (min-width: 768px) {
    html,body {
        font-size:16px
    }
}

tt,code,kbd,samp {
    font-family: 1rem;
    font-size: 0.85rem;
    line-height: 1.45;
    overflow-x: auto;
    display: block
}

:not(pre)>code,:not(pre)>kbd,:not(pre)>samp {
    display: inline-block;
    vertical-align: middle;
    border-radius: 5px;
    border: 1px solid #BCBEC0;
    padding: 2px 4px;
    font: 12px Monaco,Consolas,"Andale  Mono","DejaVu Sans Mono",monospace
}

h1,h2,h3,h4,h5 {
    font-weight: 700;
    line-height: 1.3
}

h1 {
    font-size: 2.66667rem
}

h2 {
    font-size: 2.66667rem
}

h3 {
    font-size: 2.13333rem
}

h4 {
    font-size: 1.33333rem
}

hr {
    height: 0;
    border: none;
    border-bottom: 2px solid #eff1f5
}

img {
    width: 100%;
    height: auto
}

input[type=text],input[type=email],input[type=tel],input[type=file],textarea,select {
    display: block;
    width: 100%;
    border: 1px solid #FFF;
    border-radius: 4px;
    background-color: #fff;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    font-size: .8rem;
    transition: all 0.1s;
    padding: 12px;
    color: initial;
    margin: 0
}

input[type=text]:focus,input[type=email]:focus,input[type=tel]:focus,input[type=file]:focus,textarea:focus,select:focus {
    outline: 0;
    background-color: #f2f9f8;
    color: #444;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.3)
}

input[type=text].hs-input,input[type=email].hs-input,input[type=tel].hs-input,input[type=file].hs-input,textarea.hs-input,select.hs-input {
    width: 90%
}

input[type=text].error,input[type=email].error,input[type=tel].error,input[type=file].error,textarea.error,select.error {
    border-color: #e91e63
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBvbHlnb24gZmlsbD0iIzY2NiIgcG9pbnRzPSIxMiAxIDkgNiAxNSA2Ij48L3BvbHlnb24+ICAgIDxwb2x5Z29uIGZpbGw9IiM2NjYiIHBvaW50cz0iMTIgMTMgOSA4IDE1IDgiPjwvcG9seWdvbj48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: 100% 50%;
    padding: 0 55px 0 15px;
    line-height: 41px;
    height: 41px;
    box-sizing: border-box;
    margin: 0;
    font: inherit;
    color: #000;
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

.hs-form-field {
    margin-bottom: 12px
}

.hs-error-msgs {
    margin: 3px 0 5px;
    width: 100%;
    padding-left: 0;
    list-style: none
}

.hs-error-msgs li {
    display: block;
    padding: 0;
    width: 100%;
    padding-top: 0
}

.hs-error-msgs label {
    color: #FFF;
    font-size: 0.8rem
}

.hs-submit {
    margin-top: 5px
}

.hs-richtext {
    font-size: 0.7rem;
    margin: 0 0 10px;
    width: 95%
}

.hs_error_rollup .hs-error-msgs {
    margin: 0;
    padding: 0 0 5px 0
}

label {
    display: block;
    margin-bottom: 4px
}

li {
    line-height: 1.5
}

p {
    margin-top: 0.5em;
    margin-bottom: 0.5em
}

pre {
    font-size: 1rem;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #282c34;
    background: #282c34;
    color: #DCDCDC
}

pre .hljs {
    background: #282c34
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    min-width: 600px
}

table th {
    vertical-align: bottom;
    text-align: left
}

table th,table td {
    padding: 12px 10px
}

table td {
    vertical-align: top
}

table tbody tr:nth-of-type(odd) {
    background: #eff1f5
}

table tr td:first-child {
    text-align: left
}

.apps {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 40px 0 100px;
    line-height: 1.6;
    background: linear-gradient(to bottom, #eff1f5 0%, #fff 500px)
}

.apps__box {
    max-width: 1080px;
    padding: 0 25px;
    margin: 0 auto
}

@media (min-width: 768px) {
    .apps__box {
        padding:0 45px;
        display: flex
    }
}

.apps__pag {
    padding: 30px 0 0 0;
    text-align: center
}

.apps__sidebar {
    margin-right: 5%;
    padding-top: 10px
}

@media (min-width: 768px) {
    .apps__sidebar {
        width:20%
    }
}

@media (max-width: 767px) {
    .apps__sidebar-detail {
        max-width:100px
    }

    .apps__sidebar-detail .apps__btn {
        display: none
    }
}

.apps__sidebar-items {
    margin-bottom: 40px
}

.apps__sidebar-item {
    display: block;
    padding: 2px 0;
    color: #202227;
    text-decoration: none
}

.apps__sidebar-item.uk-active,.apps__sidebar-item:hover {
    color: #09b3af
}

.apps__sidebar-title {
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 1.1rem
}

.apps__btn {
    line-height: 1.6;
    width: 100%;
    box-sizing: border-box;
    display: block;
    text-align: center;
    padding: 15px 20px 15px 20px;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    transition: all 0.3s;
    margin-bottom: 10px;
    border: none;
    cursor: pointer;
    color: #FFF;
    background: #1b253e;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08)
}

.apps__btn:hover {
    color: #FFF;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.25)
}

@media (min-width: 768px) {
    .apps__list {
        width:75%
    }
}

@media (max-width: 767px) {
    .apps__hide-mobile {
        display:none
    }
}

.apps__items {
    background: #FFF;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.2);
    overflow: hidden
}

.apps__detail {
    max-width: 720px
}

@media (min-width: 768px) {
    .apps__detail {
        width:75%
    }
}

.apps__d-icon {
    border-radius: 10px;
    border: 1px solid #eff1f5;
    overflow: hidden;
    margin: 20px 0
}

.apps__d-icon img {
    display: block
}

.apps__sub-header {
    margin-bottom: 30px;
    color: #6F7279
}

.apps__header {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 5px
}

.apps__back {
    display: inlin-block;
    position: relative;
    text-decoration: none;
    color: #1b253e
}

.apps__back:hover {
    color: #1b253e
}

.apps__back:before {
    content: "";
    display: inline-block;
    height: 7px;
    margin-right: 3px;
    top: -1px;
    position: relative;
    transform: rotate(135deg);
    vertical-align: middle;
    width: 7px;
    border-bottom: 2px solid #1b253e;
    border-right: 2px solid #1b253e;
    transition: border-color 0.25s ease 0s
}

.apps__author {
    padding-top: 15px
}

.apps__author dt {
    margin-top: 10px;
    font-weight: bold
}

.apps__author dd {
    margin: 0
}

.apps__search {
    margin-bottom: 40px
}

.apps__search .searchblok__input {
    border-radius: 10px;
    padding: 6px 15px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.2)
}

.apps__search .searchblok__icon {
    right: 15px
}

.apps__item {
    display: flex;
    align-items: center;
    padding: 16px 12px;
    border-bottom: 1px solid #eff1f5;
    text-decoration: none;
    color: #202227
}

.apps__item:hover {
    border-color: #c7dcdc;
    background: #f3fbfb
}

.apps__item img {
    flex: 0 0 auto;
    margin-right: 15px;
    width: 32px;
    height: 32px;
    border-radius: 5px
}

.apps__item-name {
    flex: 0 0 auto;
    font-weight: 600;
    margin-right: .5rem
}

.apps__item-intro {
    color: #6F7279;
    font-size: 0.9rem;
    min-width: 0;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.apps__category {
    font-weight: 600;
    font-size: 1.5rem;
    margin: 10px 0
}

.apps__d-title {
    font-weight: 600;
    font-size: 1.8rem
}

@media (min-width: 768px) {
    .apps__d-title {
        margin:45px 0 10px
    }
}

.apps__d-screen {
    margin: 20px 0
}

.benefit {
    width: 48%;
    padding-bottom: 60px;
    box-sizing: border-box;
    color: #434461
}

@media (min-width: 768px) {
    .benefit {
        width:30%
    }
}

.benefit__logo {
    height: 30px;
    width: 30px
}

.benefit__h {
    margin: 20px 0 10px 0;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1.09px;
    color: #31324A
}

.benefits {
    padding: 0 0 100px 0
}

.benefits__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block
}

@media (min-width: 768px) {
    .benefits__box {
        padding:0 45px
    }
}

.benefits__cols {
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex
}

.breadcrumbs {
    list-style: none;
    margin: 0 0 15px;
    padding: 0;
    color: #6F7279
}

.breadcrumbs li {
    overflow: hidden;
    display: inline-block;
    padding: 0 6px 0 0 !important
}

.breadcrumbs li:after {
    border-bottom: 2px solid #c4cad8;
    border-right: 2px solid #c4cad8;
    content: "";
    display: inline-block;
    height: 7px;
    margin-left: 6px;
    position: relative;
    top: -3px;
    transform: rotate(-45deg);
    transition: 0.25s;
    transition-property: border-color;
    vertical-align: middle;
    width: 7px
}

.breadcrumbs li:last-child:after {
    display: none
}

.breadcrumbs--small {
    font-size: 1rem
}

.breadcrumbs__title {
    width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis
}

.button,.hs-button {
    display: inline-block;
    padding: 15px 20px 15px 20px;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    transition: all 0.3s;
    border: none
}

.button span,.hs-button span {
    height: 20px;
    vertical-align: middle
}

.button__arrow {
    width: 40px;
    margin-left: 30px;
    margin-right: -8px;
    border-radius: 10px;
    box-sizing: border-box;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEzIDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTkgNC45SDB2LTFoOXYtM2w0IDMuNS00IDMuNXYtM3oiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=") no-repeat 70% 50%;
    background-color: #414f79;
    display: inline-block;
    vertical-align: middle
}

.button--wide {
    padding: 15px 35px 15px 35px
}

.button--primary,.hs-button {
    cursor: pointer;
    color: #FFF;
    background: #1b253e;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08)
}

.button--primary:hover,.hs-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.25)
}

.button--inverse {
    background: #FFFFFF;
    color: #09b3af !important;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08)
}

.button--inverse .button__arrow {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEzIDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTkgNC45SDB2LTFoOXYtM2w0IDMuNS00IDMuNXYtM3oiIGZpbGw9IiMwOWIzYWYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=");
    background-color: #eff1f5
}

.button--inverse:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.25)
}

.centered-text__step {
    position: absolute;
    top: 0;
    width: 100%;
    display: none
}

@media (min-width: 768px) {
    .centered-text__step {
        display:block
    }
}

.centered-text {
    text-align: center;
    padding: 40px 0
}

.centered-text--inverse {
    background: #09b3af
}

.centered-text--inverse .centered-text__head,.centered-text--inverse .centered-text__body {
    color: #FFF
}

.centered-text--inverse .centered-text__head {
    margin-bottom: 10px
}

.centered-text--inverse .centered-text__head:after {
    display: none
}

.centered-text__console {
    height: 100px;
    opacity: 0
}

@media (min-width: 768px) {
    .centered-text__console {
        opacity:1;
        position: relative;
        background: url("https://a.storyblok.com/f/51376/456x438/d662feeebf/console1.svg");
        background-size: 100% 100%;
        height: 456px;
        width: 492px;
        margin: 0 auto
    }
}

.centered-text--bow {
    background: url("https://a.storyblok.com/t/51376/assets/images/background-arrow.png");
    background-size: 100% 100%;
    margin-bottom: -100px
}

.centered-text--bow .centered-text__head {
    margin-bottom: 40px
}

.centered-text--bow .centered-text__head:after {
    display: none
}

.centered-text--hero .centered-text__body {
    font-size: 1.2rem
}

.centered-text--top-arrow {
    position: relative
}

.centered-text--top-arrow:after {
    top: 0;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0,0,0,0);
    border-top-color: #FFF;
    border-width: 15px;
    margin-left: -15px
}

.centered-text__head {
    margin: 0 0 50px 0;
    position: relative;
    z-index: 1;
    text-align: center
}

.centered-text__head:after {
    position: absolute;
    width: 66px;
    margin-left: -33px;
    left: 50%;
    height: 4px;
    bottom: -25px;
    background: #09b3af;
    background: linear-gradient(to right, #05dec1 0%, #09b3af 100%);
    border-radius: 3px;
    content: "";
    display: block
}

.centered-text__wrap {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 600px;
    box-sizing: border-box
}

.centered-text__body {
    color: #000;
    font-weight: 500;
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto
}

@media (min-width: 768px) {
    .centered-text__body {
        max-width:none
    }
}

.changelogs__items {
    list-style: none;
    margin: 0;
    padding: 0
}

.changelogs__items>li {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 2px solid #eff1f5
}

.changelogs__badge {
    display: inline-block;
    padding: 0 5px;
    background: #09b3af;
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-transform: none;
    border-radius: 3px
}

.changelogs__muted {
    color: #6F7279
}

.changelogs__perma {
    display: inline-block;
    margin-left: 10px
}

.codeblock {
    background-color: #f2f2f2;
    padding: 20px;
    font-family: Courier
}

.codeblock__title {
    right: 0;
    position: absolute;
    background-color: #CCC;
    padding: 5px;
    font-size: 10px;
    line-height: 12px
}

.docs {
    padding: 0 10px
}

.docs__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    max-width: 1140px;
    flex-direction: row-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #FFF;
    margin-top: -255px;
    position: relative;
    border-radius: 10px;
    display: block
}

@media (min-width: 768px) {
    .docs__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .docs__box {
        display:flex
    }
}

.docs__search {
    height: 49px
}

.docs__main {
    padding: 20px 0
}

@media (min-width: 768px) {
    .docs__main {
        padding:40px 0 100px;
        margin: 0 10%;
        width: 60%
    }
}

.docs__sidebar {
    padding: 40px 0 40px
}

@media (min-width: 768px) {
    .docs__sidebar {
        width:20%
    }
}

.docs__back {
    display: inlin-block;
    position: relative;
    text-decoration: none;
    color: #1b253e
}

.docs__back:hover {
    color: #1b253e
}

.docs__back:before {
    content: "";
    display: inline-block;
    height: 7px;
    margin-right: 3px;
    top: -1px;
    position: relative;
    transform: rotate(135deg);
    vertical-align: middle;
    width: 7px;
    border-bottom: 2px solid #1b253e;
    border-right: 2px solid #1b253e;
    transition: border-color 0.25s ease 0s
}

.header {
    background: #09b3af
}

.i1_rect1 {
    animation: circle-animation 2.5s ease-out infinite
}

.i1_rect2 {
    animation: circle-animation 3s ease-out infinite
}

.i1_rect3 {
    animation: circle-animation 3.5s ease-out infinite
}

.i1_rect4 {
    animation: circle-animation 4s ease-out infinite
}

.i1_rect5 {
    animation: circle-animation 4.5s ease-out infinite
}

.i1_rect6 {
    animation: circle-animation 5s ease-out infinite
}

.i1__display {
    animation: flipper-animation 0.12s ease-out infinite
}

@keyframes flipper-animation {
    0% {
        opacity: 0.4
    }

    100% {
        opacity: 0.6
    }
}

@keyframes smove-animation {
    0% {
        transform: translateY(0)
    }

    40% {
        transform: translateY(-3px)
    }

    70% {
        transform: translateY(-3px)
    }

    100% {
        transform: translateY(0)
    }
}

@keyframes move-animation {
    0% {
        transform: translateY(0)
    }

    40% {
        transform: translateY(-2px) translateX(2px)
    }

    70% {
        transform: translateY(-2px) translateX(2px)
    }

    100% {
        transform: translateY(0)
    }
}

@keyframes circle-animation {
    0% {
        opacity: 0;
        transform: translateY(0) rotate(0)
    }

    10% {
        opacity: 1
    }

    100% {
        opacity: 0;
        transform: translateY(-110px) rotate(-60deg)
    }
}

.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor
}

.job {
    margin: 0 auto;
    max-width: 1100px;
    padding: 20px
}

@media (min-width: 768px) {
    .job {
        padding:20px 40px 70px 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-around
    }
}

@media (min-width: 768px) {
    .job__body {
        width:66%
    }
}

.job__side {
    box-sizing: border-box;
    padding: 20px 0 40px 0
}

@media (min-width: 768px) {
    .job__side {
        padding:20px 20px 20px 40px;
        width: 33%
    }
}

.job__side table {
    min-width: auto
}

.job__tags {
    margin: 15px 0 0 0;
    display: flex;
    flex-wrap: wrap
}

.job__tag {
    border-radius: 5px;
    margin: 7px;
    padding: 4px 10px;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.25);
    font-size: 0.8rem;
    color: #202227
}

@media (max-width: 767px) {
    .logo svg {
        width:170px
    }
}

.main {
    min-height: 100%;
    position: relative;
    transition-duration: 0.4s;
    transition-property: transform;
    z-index: 2
}

.markdown {
    position: relative
}

.markdown img {
    width: auto;
    max-width: 100%
}

.nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 26px 25px;
    display: flex
}

.nav__mobile {
    margin: 10px 0 10px;
    padding: 10px;
    display: flex
}

@media (min-width: 500px) {
    .nav__mobile {
        margin:10px 20px 10px
    }
}

@media (min-width: 1000px) {
    .nav__mobile {
        display:none
    }
}

.nav__right {
    background-color: #1b253e;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(260px);
    transition-duration: 0.4s;
    transition-property: transform;
    width: 260px;
    z-index: 10;
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    padding: 30px 10px
}

@media (min-width: 1000px) {
    .nav__right {
        transform:translateX(0);
        padding: 0;
        height: auto;
        background-color: transparent;
        margin: 10px 0;
        width: auto;
        display: flex;
        position: relative;
        overflow-y: visible
    }
}

.nav--open .nav__right {
    transform: translateX(0px)
}

.nav--open .nav__bg {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3)
}

.nav__link {
    text-transform: uppercase;
    padding: 10px 12px 10px 12px;
    border-radius: 3px;
    transition: all 0.2s;
    text-decoration: none;
    margin: 0 6px;
    letter-spacing: 0.1em;
    display: block;
    font-size: 14px;
    color: white;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
}

.nav__link:hover {
    color: #FFF;
    background: rgba(255,255,255,0.2)
}

@media (min-width: 1000px) {
    .nav__link {
        display:inline-block
    }
}

.nav__link--cta {
    padding: 10px 16px 10px 16px;
    margin: 10px 6px 0 6px;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: white;
    background: #09b3af;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08)
}

@media (min-width: 1000px) {
    .nav__link--cta {
        margin:0 0 0 10px;
        background: #1b253e
    }

    .nav__link--cta:hover {
        background: #1b253e;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
    }
}

.nav__middle {
    flex-grow: 1
}

.nav__with-sub {
    position: relative
}

.nav__with-sub .nav__link:hover {
    background: transparent
}

.nav__with-sub .nav__link:after {
    border-bottom: 2px solid #FFF;
    border-right: 2px solid #FFF;
    content: "";
    display: inline-block;
    height: 7px;
    margin-left: 6px;
    position: relative;
    top: -3px;
    transform: rotate(45deg);
    transition: 0.25s;
    transition-property: border-color;
    vertical-align: middle;
    width: 7px
}

.nav__with-sub:hover .nav__link {
    opacity: 0.8
}

@media (min-width: 1000px) {
    .nav__with-sub:hover .nav__sub {
        display:block;
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transform: translateY(0px) translateX(-50%)
    }
}

.nav__sub {
    list-style: none;
    margin: 5px 6px 0 0;
    padding: 10px;
    transition: 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    white-space: nowrap;
    background: #FFF;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    border-radius: 4px;
    z-index: 100
}

@media (min-width: 1000px) {
    .nav__sub {
        padding:25px;
        background: #FFF;
        pointer-events: none;
        transform: translateY(24px) translateX(-50%);
        left: 50%;
        position: absolute;
        opacity: 0
    }

    .nav__sub li {
        margin-bottom: 6px
    }

    .nav__sub li:last-child {
        margin-bottom: 0
    }

    .nav__sub:after {
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: #FFF;
        border-width: 10px;
        margin-left: -10px
    }
}

.nav__sub-link {
    border-radius: 4px;
    padding: 6px 16px 6px 8px;
    display: flex;
    color: #000;
    text-decoration: none;
    white-space: nowrap;
    align-items: center;
    transition: all 0.15s
}

.nav__sub-link:hover {
    background: #eff1f5
}

.nav__link-icon {
    display: none;
    padding: 5px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    width: 35px;
    height: 35px;
    line-height: 35px;
    color: #FFF;
    background: linear-gradient(-140deg, #444d78 10%, #1d243e 75%);
    align-items: center;
    justify-content: center
}

.nav__link-icon svg {
    transform: scale(1.2)
}

@media (min-width: 1000px) {
    .nav__link-icon {
        display:flex
    }
}

.nav__link-title {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 3px
}

.nav__description {
    display: none;
    color: #6F7279;
    font-size: 0.9rem
}

@media (min-width: 1000px) {
    .nav__description {
        display:block
    }
}

.one-col__box {
    margin: 0 auto;
    padding: 25px 25px 50px 25px;
    max-width: 750px;
    box-sizing: border-box
}

.read-friendly {
    font-size: 1rem
}

.read-friendly h1 {
    margin: 0 0 20px;
    font-size: 2.6rem
}

.read-friendly h2 {
    font-size: 2rem;
    margin: 1em 0 0.5em 0
}

.read-friendly h3 {
    font-size: 1.75rem;
    margin: 1em 0 0.5em 0
}

.read-friendly h4 {
    font-size: 1.4rem
}

.read-friendly p {
    margin: 1em 0
}

.read-friendly p,.read-friendly ul,.read-friendly li,.read-friendly .codeblock__title {
    font-weight: normal;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.8
}

.read-friendly .table__box {
    padding: 0
}

.read-friendly .table__box table th,.read-friendly .table__box table td {
    text-align: left;
    text-align: left
}

.read-friendly .table {
    padding: 20px 0
}

.searchblok {
    min-height: 49px;
    display: block
}

.searchblok {
    margin-bottom: 10px;
    position: relative
}

.searchblok em {
    font-weight: bold;
    color: #29abe2
}

@media (min-width: 768px) {
    .searchblok {
        border-bottom:none;
        margin-bottom: 0px
    }
}

.searchblok__icon,.searchblok__reset {
    position: absolute;
    right: 0;
    top: 13px;
    color: #e0e0e0
}

.searchblok__reset {
    font-size: 12px;
    right: 10px;
    color: #CCC;
    text-decoration: none
}

.searchblok__loading {
    color: #000;
    padding: 10px 25px
}

.searchblok__input {
    margin-top: 0;
    width: 100%;
    font-size: 16px;
    margin-bottom: 5px;
    border: none;
    font-family: inherit;
    line-height: 2.2;
    padding: 0 20px 0 0;
    box-sizing: border-box;
    min-height: 44px;
    border-radius: 0
}

.searchblok__input:focus {
    outline: none
}

.search__container {
    width: 100%;
    min-width: 340px;
    max-height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.17)
}

@media (min-width: 768px) {
    .search__container {
        border:1px solid #f5f5f5;
        max-height: 340px;
        margin-bottom: 0px
    }
}

.random-links .search__container {
    right: 0
}

.searchblok__result-excerpt {
    display: block;
    width: 100%;
    overflow: hidden
}

.searchblok__result-title {
    font-weight: bold;
    padding-right: 15px;
    width: 30%;
    flex-shrink: 0
}

.searchblok__result {
    padding: 10px 15px;
    text-align: left;
    display: flex;
    font-size: 0.8rem;
    text-decoration: none;
    color: #303D4A;
    border-bottom: 1px solid #f5f5f5
}

.searchblok__result:hover {
    color: #000
}

.searchblok__result em {
    color: #09b3af
}

@media (min-width: 768px) {
    .searchblok__result {
        padding:10px 15px
    }
}

.searchblok__placeholder {
    min-height: 75px
}

.wave .searchblok__input {
    border-radius: 10px;
    padding: 0 15px;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2)
}

.wave .searchblok__icon {
    right: 15px
}

.sidenav {
    list-style: none;
    margin: 20px 0 0 0;
    padding: 0
}

.sidenav li {
    margin: 0;
    padding: 0 0 8px 0;
    line-height: 1.1
}

.sidenav ul {
    margin: 12px 0 0 0;
    padding: 0;
    list-style: none
}

.sidenav ul li {
    font-size: 0.9rem
}

.sidenav ul li a {
    text-decoration: none;
    color: #303644
}

.sidenav ul li a:hover {
    color: #09b3af
}

.sidenav>li {
    padding-bottom: 25px
}

.sidenav--large {
    margin: 20px 0 0 0
}

.sidenav--large li {
    padding: 0 0 10px 0;
    margin-bottom: 6px
}

.sidenav--large li a {
    display: inline-block;
    padding: 0 0 1px 0;
    font-size: 1.3rem;
    font-weight: 400;
    text-decoration: none;
    color: #000;
    opacity: 0.8;
    border-bottom: 2px solid transparent;
    transition: all 0.2s
}

.sidenav--large li a:hover {
    opacity: 1;
    border-bottom: 2px solid #000
}

.sidenav--large li .sidenav__sub--active {
    opacity: 1;
    border-bottom: 2px solid #09b3af
}

.sidenav--large li .sidenav__sub--active:hover {
    border-bottom: 2px solid #09b3af
}

.sidenav .sidenav__sub--active {
    color: #09b3af
}

.sidenav__root {
    text-transform: uppercase
}

.sidenav__sub {
    text-decoration: underline
}

.table {
    padding: 0 0 100px
}

.table__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block;
    overflow: auto
}

@media (min-width: 768px) {
    .table__box {
        padding:0 45px
    }
}

.table__box table th,.table__box table td {
    text-align: center;
    text-align: center
}

.teaser__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center
}

@media (min-width: 768px) {
    .teaser__box {
        padding:0 45px
    }
}

.toolbar {
    background: #189c99
}

.topic {
    text-align: center;
    padding: 50px;
    box-sizing: border-box;
    text-decoration: none;
    color: #303D4A;
    transition: all 0.2s
}

@media (min-width: 768px) {
    .topic {
        width:30%
    }

    .topic:hover {
        box-shadow: 0 32px 44px 0 rgba(0,22,67,0.06)
    }

    .topic:hover .topic__icon {
        transform: rotate(0deg)
    }
}

.topic__icon {
    transition: all 0.2s;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    background: #f4f4f4;
    border-radius: 50%;
    padding: 30px;
    margin: 0 auto;
    transform: rotate(-50deg)
}

.topic__icon img {
    height: 40px
}

.topic__h {
    text-decoration: underline;
    font-size: 1.4rem;
    margin: 20px 0 10px 0
}

.topic__h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal
}

.topics__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #eff1f5;
    display: block
}

@media (min-width: 768px) {
    .topics__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .topics__box {
        padding:40px 50px 60px;
        display: flex
    }
}

.targeted-page__head {
    background: #09b3af;
    color: #FFF;
    padding: 50px
}

.tp__date {
    color: #CCC;
    font-size: 1rem;
    margin: 0 0 20px 0;
    display: block
}

@media (min-width: 1200px) {
    .tp__content img,.job__content img {
        width:112%;
        max-width: 112%;
        transform: translateX(-5%);
        padding: 40px 0px
    }
}

.tp__body {
    margin: 0 auto;
    padding: 0 25px 50px 25px;
    max-width: 750px;
    position: relative
}

.tp__overview {
    display: none;
    pointer-events: none
}

@media (min-width: 1420px) {
    .tp__overview {
        opacity:0;
        display: block;
        position: fixed;
        top: 20px;
        right: 50%;
        margin-right: 438px;
        z-index: 100;
        text-align: right;
        padding: 8px 0;
        width: 150px;
        transition: opacity 0.2s
    }

    .tp__overview--active {
        pointer-events: initial;
        opacity: 1
    }

    .tp__overview .tp__overview-head {
        font-size: 1.4rem;
        margin: 0 0 20px 0
    }

    .tp__overview ul {
        list-style: none;
        margin: 0;
        padding: 0
    }

    .tp__overview ul a {
        text-decoration: none;
        transition: color 0.2s;
        color: #9da2ae
    }

    .tp__overview ul a:hover {
        color: #09b3af
    }

    .tp__overview ul a.active {
        color: #1b253e
    }

    .tp__overview ul a.active:hover {
        color: #09b3af
    }

    .tp__overview ul li {
        font-size: 0.9rem;
        padding: 0 0 8px 0;
        line-height: 1.3
    }
}

.two-cols__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block;
    align-items: center;
    justify-content: center;
    position: relative
}

@media (min-width: 768px) {
    .two-cols__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .two-cols__box {
        display:flex
    }
}

.two-cols--inverse {
    color: #FFF;
    background: #09b3af;
    margin: 80px 0
}

.two-cols__col {
    font-size: 1.05rem;
    box-sizing: border-box;
    padding: 30px 0;
    max-width: 400px;
    margin: 0 auto
}

.two-cols__col .two-cols__col-text {
    padding: 30px 0
}

@media (min-width: 768px) {
    .two-cols__col {
        padding:0;
        max-width: none;
        margin: 0
    }
}

@media (min-width: 768px) {
    .two-cols__col {
        width:50%
    }
}

.two-cols__col img {
    margin: -30px auto;
    max-width: 300px;
    display: block
}

@media (min-width: 768px) {
    .two-cols__col img {
        margin:0;
        max-width: none
    }
}

@media (min-width: 768px) {
    .two-cols__col:first-child {
        padding-right:45px
    }

    .two-cols__col:last-child {
        padding-left: 45px
    }
}

@media (min-width: 768px) {
    .two-cols--top .two-cols__img {
        margin-top:-30px
    }
}

@media (min-width: 768px) {
    .two-cols--negative {
        margin-top:-50px;
        margin-bottom: -50px
    }
}

@media (min-width: 1200px) {
    .two-cols--negative {
        margin-top:-150px;
        margin-bottom: -150px
    }
}

.two-cols h4 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.4
}

.two-cols h3 {
    margin: 25px 0 20px 0;
    position: relative
}

.two-cols h3:after {
    position: absolute;
    width: 66px;
    left: 0;
    height: 4px;
    top: -25px;
    background: #09b3af;
    background: linear-gradient(to right, #05dec1 0%, #09b3af 100%);
    content: "";
    display: block;
    border-radius: 2px
}

.two-cols--bottom-marg {
    margin-bottom: 50px
}

.two-cols__after-img {
    position: relative;
    max-width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px
}

@media (min-width: 768px) {
    .two-cols__after-img {
        display:none
    }
}

@media (min-width: 968px) {
    .two-cols__after-img {
        max-width:none;
        position: absolute;
        bottom: -80px;
        left: 50%;
        margin-left: -18%;
        margin-top: 0;
        margin-bottom: 0;
        width: 36%;
        z-index: 1;
        display: block
    }
}

@media (min-width: 1200px) {
    .two-cols__after-img {
        bottom:-60px
    }
}

.two-cols__col-body {
    margin-top: 20px;
    width: 100%;
    min-height: 50px
}

.uk-margin-top {
    margin-top: 20px
}

.uk-margin-large-top {
    margin-top: 45px
}

.uk-margin-small-top {
    margin-top: 10px
}

.uk-margin-bottom {
    margin-bottom: 20px
}

.uk-margin-large-bottom {
    margin-bottom: 45px
}

.uk-margin-small-bottom {
    margin-bottom: 10px
}

.uk-overflow-container {
    overflow: auto;
    width: 100%
}

.video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.5);
    margin: 20px auto 60px auto
}

.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.wave-box {
    background-color: #FFF;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    margin: 60px auto -180px auto;
    padding: 30px;
    max-width: 400px;
    box-sizing: border-box;
    color: #202227
}

.wave-box h2 {
    font-size: 1.2rem;
    margin: 0 0 5px 0;
    font-weight: normal
}

.wave-box h3 {
    font-size: 3rem;
    margin: 0 0 15px 0
}

.wave {
    margin-top: -20px;
    position: relative
}

@media (min-width: 768px) {
    .wave {
        height:0;
        overflow: hidden;
        padding-top: 46.38889%
    }
}

.wave__text {
    color: #FFF;
    background: #09b3af
}

@media (min-width: 768px) {
    .wave__text {
        background:transparent;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2
    }
}

.wave__svg {
    width: 100%;
    height: auto
}

@media (min-width: 768px) {
    .wave__svg {
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%
    }
}

.wave__text-box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex
}

@media (min-width: 768px) {
    .wave__text-box {
        padding:0 45px
    }
}

@media (min-width: 500px) {
    .wave__text-box-half {
        margin:30px 0 0 30px;
        max-width: 400px
    }
}

@media (min-width: 768px) {
    .wave__text-box-half {
        max-width:none;
        margin: 30px 0 500px 0;
        width: 55%
    }

    .wave__text-box-half .wave__h {
        font-size: 2rem
    }
}

@media (min-width: 1000px) {
    .wave__text-box-half .wave__h {
        font-size:2.66667rem
    }
}

@media (min-width: 1200px) {
    .wave__text-box-half {
        margin:60px 0 500px 0;
        width: 45%
    }
}

.wave__text-box-full {
    width: 95%;
    margin: 20px auto 120px auto
}

@media (min-width: 768px) {
    .wave__text-box-full {
        width:80%
    }
}

.wave__h {
    margin-bottom: 40px
}

.wave__h2 {
    font-size: 1.3rem;
    margin: 0 0 30px 0;
    font-weight: normal
}

.wave--centered {
    padding-top: 0;
    overflow: visible;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1ODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxNDQwIDU4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDx0aXRsZT4gICAgR3JvdXAgMyAgPC90aXRsZT4gIDxkZWZzPiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjU4LjIlIiB5MT0iOSUiIHgyPSI1OC4yJSIgeTI9Ijk1JSIgaWQ9ImEiPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSIvPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIyNS40JSIvPiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIHN0b3Atb3BhY2l0eT0iLjIiIG9mZnNldD0iMTAwJSIvPiAgICA8L2xpbmVhckdyYWRpZW50PiAgPC9kZWZzPiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgPHBhdGggZD0iTTAgMGgxNDQwdjQ4NS44Yy0yMjkuMiAxMDEuNS00MjMuNiAxMjAuNS01ODMuMSA1Ni44LTIzOS4zLTk1LjUtMzk2LjUtNDItNDcyLjctMjUuNy03Ni4zIDE2LjItMjc0IDI0LjktMzg0LjItMzUuN0MuNSA0ODIuMy41IDMyMiAwIDB6IiBmaWxsPSIjMDlCM0FGIi8+ICAgIDxwYXRoIGQ9Ik0xNDQwIDQ1OS4zYy03NS41LTMxLTE2OS00OS4zLTI3MC41LTQ5LjMtMTU2LjYgMC0yOTQuNiA0My43LTM3NS45IDExMC0yMDQtNjMuNS0zNDAuMS0xNy44LTQwOS40LTMuMS03Ni4zIDE2LjItMjc0IDI0LjktMzg0LjItMzUuN0MuNSA0ODIuMy41IDMyMiAwIDBoMTQ0MHY0NTkuM3oiIGZpbGw9InVybCgjYSkiLz4gIDwvZz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-size: cover;
    height: auto
}

@media (min-width: 768px) {
    .wave--centered {
        background-size:100% 100%
    }
}

.wave--centered .wave__h {
    margin-top: 30px;
    position: relative
}

.wave--centered .wave__h:after {
    position: absolute;
    width: 66px;
    margin-left: -33px;
    left: 50%;
    height: 4px;
    bottom: -25px;
    background: #09b3af;
    background: linear-gradient(to right, #05dec1 0%, #09b3af 100%);
    border-radius: 3px;
    content: "";
    display: block
}

.wave--centered .wave__text {
    position: relative;
    text-align: center;
    background: transparent
}

.wave--centered .wave__text-box-half {
    margin: 0 auto 150px auto;
    width: 80%
}

@media (min-width: 768px) {
    .wave--centered .wave__text-box-half {
        width:45%
    }
}

@media (min-width: 968px) {
    .wave--centered .wave__text-box-half {
        width:40%
    }
}

@media (min-width: 1200px) {
    .wave--centered .wave__text-box-half {
        width:35%
    }
}

.wave--as-bg {
    height: 250px
}

</style>
