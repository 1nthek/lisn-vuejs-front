<template>
    <div>
        <div class="header" id="home-header">
            <div class="home-nav">
                <div style="width: 240px;cursor:pointer" @click="$router.push('/home')">
                    <logo style="fill:black"></logo>
                </div>
                <ul class="nav__right ns-kr" :class="{'active': this.navOpen }">
                  <li> 
                    <div @click="$router.replace('/policies/service')">
                      <span class="nav__link nav__link--cta">이용 약관</span>
                    </div>
                  </li>
                  <li>
                    <div @click="$router.replace('/policies/privacy')">
                      <span class="nav__link nav__link--cta">개인정보 처리방침</span>
                    </div>
                  </li>
                </ul>
            </div>
            
        </div>
        
        <div class="body">
          <div class="body-container">
            <h2 class="ns-kr">LISN 개인정보 처리방침</h2>
            <p class="ns-kr">최종수정일 2019.11.19.</p>
            <p class="ns-kr">
              본 개인정보 처리방침은 <strong>LISN(https://lisn.ai)</strong>을 포함한 관련된 서비스들(이하 “서비스”라고 함)에 적용됩니다. 서비스를 제공하는 <strong>ListenCarefully</strong>(이하 "서비스 제공자"라고 함)는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
            </p>
            <p>
              서비스 제공자는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 서비스 제공자는 개인정보처리방침을 개정하는 경우 웹사이트를 통하여 게재할 것입니다.
            </p>
            <h3>
              <strong>1) 수집하는 개인정보 항목</strong>
            </h3>
            <p>
              서비스 제공자는 소셜 로그인(이하 “OAuth“라고 함)을 통해 회원가입을 제공하고 아래와 같은 개인정보를 수집하고 있습니다.
            </p>
            <ul>
                <li>
                    <strong>수집항목:</strong> 이메일(OAuth에서 제공하는 서비스에 등록되고 접근이 허락된 이용자 이메일 주소), 이름(OAuth에서 제공하는 서비스에 등록되고 접근이 허락된 이용자 이름), 비밀번호, 프로필 사진(OAuth에서 제공하는 서비스에 등록되고 접근이 허락된 이용자 프로필 사진), 서비스 이용기록, 접속 로그, 쿠키
                </li>
                <li>
                    <strong>수집방법:</strong> 사이트의 계정 생성 및 자동 수집
                </li>
            </ul>
            <p>
                또한, OAuth Service 제공자의 OAuth 서비스 이용 시 사용자의 데이터에 액세스, 사용 할 수 있습니다. OAuth Service 제공자의 OAuth 서비스 이용과정에서 자동생성 정보는 아래와 같습니다.
            </p>
            <p>
                - OAuth Service 제공자에게 전달받은 Token 정보
            </p>
            <h3>
              <strong>2) 개인정보의 수집 및 이용목적</strong>
            </h3>
            <p>
                서비스 제공자는 수집한 개인정보를 다음과 같은 목적으로만 활용합니다.
            </p>
            <p>
                - 회원관리 측면에서 가입 의사 확인, 불만처리 등 민원 처리, 고지사항을 전달할 때 사용됩니다.
            </p>
            <p>
                - 서비스 내에 회원정보를 표시할 경우, 예를 들면 공유 초대하기 기능을 사용할 때나 문서 협업을 할 때에 회원님의 프로필(이메일, 업로드된 프로필 사진 등)을 표시될 수 있습니다.
            </p>
            <p>
                - 마케팅 활동을 위한 이벤트 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계를 낼 때 사용됩니다.
            </p>
            <h3>
              <strong>3) 개인정보의 보유 및 이용기간</strong>
            </h3>
            <p>
                회원님이 서비스를 이용하는 동안 회원님의 개인정보는 서비스 제공자가 지속적으로 보유하며 회원님께 서비스를 제공하기 위하여 이용합니다. 회원님께서 가입 해지를 요청한 경우 및 자격 상실 시에는 회원님의 모든 데이터는 즉시 삭제되며, 어떤 이유나 방법으로도 복구되거나 이용할 수 없도록 처리됩니다.
            </p>
            <p>
                <strong>- 회원가입정보:</strong> 탈퇴 시 또는 제명된 때 개인정보 수집목적이 달성된 경우 파기를 원칙으로 하고 있으나, 상법과 전자상거래 등에서의 소비자 보호에 관한 법률, 국세기본법 등 규정에 의하여 회원님의 개인정보를 보유할 수 있습니다. 서비스 제공자의 개인정보 보유항목 및 보유기간은 다음과 같습니다.
            </p>
            <p>
                <strong>- 보존항목:</strong> 이메일(로그인ID), 비밀번호, 결제기록관련법령에 의한 정보보유 사유
            </p>
            <p>
                <strong>- 관련법령에 의한 정보보유 사유</strong>
            </p>
            <ul>
                <li>
                    불건전한 서비스 이용에 따른 사법기관 수사의뢰: 1년
                </li>
                <li>
                     대금결제 및 재화 등의 공급에 관한 기록(쇼핑몰): 5년
                </li>
                <li>
                    소비자의 불만 또는 분쟁처리에 관한 기록(쇼핑몰): 3년
                </li>
            </ul>
            <h3>
              <strong>4) 개인정보의 파기절차 및 방법</strong>
            </h3>
            <p>
                서비스 제공자는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
            </p>
            <p>
                <strong>- 파기절차</strong>
            </p>
            <p>
                서비스 제공자가 제공하는 서비스를 받는 동안 회원님의 개인정보는 서비스 제공자가 지속적으로 보유하며 회원님께 서비스 제공자의 서비스를 제공하기 위하여 이용합니다. 회원님께서 회원 탈퇴를 요청한 경우 및 회원자격을 상실한 경우 개인정보 중에 해지관련 통계 관리를 위한 최소한의 정보만을 남기고 회원 개인을 식별할 수 있는 고유한 정보들은 즉시 삭제되며, 어떤 이유나 방법으로도 재생되거나 이용할 수 없도록 처리됩니다.
            </p>
            <p>
                <strong>- 파기방법</strong>
            </p>
            <p>
                종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
            </p>
            <p>
                전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </p>
            <h3>
              <strong>5) 개인정보 제공</strong>
            </h3>
            <p>
                서비스 제공자는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            </p>
            <ul>
                <li>
                    이용자가 사전에 동의한 경우
                </li>
                <li>
                    법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                </li>
            </ul>
            <h3>
              <strong>6) 이용자 및 법정대리인의 권리와 그 행사방법</strong>
            </h3>
            <p>
                서비스를 이용하기 위해서는 개인정보의 수집, 이용 등의 동의가 수반되며 만 14세 미만 아동의 경우 이를 위해 법정대리인의 동의를 얻는 절차에 응할 것을 요구할 수 있습니다.
            </p>
            <p>
                회원님은 언제든지 등록되어 있는 본인의 개인정보에 접근하여 정보를 열람하고 수정, 혹은 삭제할 수 있습니다. 개인정보의 열람 및 수정은 [마이페이지] 메뉴에서 회원님이 원하시는 내용으로 변경할 수 있습니다.
            </p>
            <p>
                또한 회원님께서 더 이상 서비스 제공자의 서비스를 이용하실 의사가 없을 경우, [회원탈퇴]를 통하여 서비스 이용을 해지할 수 있습니다.
            </p>
            <p>
                또한 아래에 명시된 개인정보관리책임자의 연락처를 이용하여 귀하의 개인정보에 대해 문의하고 수정할 수 있습니다.
            </p>
            <h3>
              <strong>7) 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</strong>
            </h3>
            <p>
                서비스 제공자는 회원님에게 보다 적절하고 유용한 서비스를 제공하기 위하여 회원님이 로그인하는 회원 인증 부분에서 쿠키(Cookie)를 사용합니다. 쿠키란 서비스 제공자의 사이트 접속 시 자동으로 고객의 컴퓨터로 전송되는 텍스트 파일을 말합니다. 이 쿠키는 회원님께서 로그아웃(Log-out) 후, 사용 중인 브라우저를 닫을 경우 회원님의 PC에 저장되지 않고 자동으로 삭제됩니다. 서비스 제공자는 다음과 같은 목적을 위해 쿠키를 사용합니다.
            </p>
            <p>
                우리 사이트에 배너 광고를 보여주기 위해 외부 광고 업체를 활용할 수 있습니다. 그들의 서비스의 일부로써, 그들은 귀하의 컴퓨터에 별도의 쿠키를 저장할 수 있습니다. 서비스 제공자는 제3의 광고 서버에 귀하의 어떠한 개인정보나 구매와 관련된 정보를 제공하지 않습니다. 서비스 제공자와 제3의 광고 서버는 IP주소, 브라우저 종류, 접속한 서버, 서버의 위치, 특정 광고에 반응을 했는지 등에 대한 기타 정보만을 수집하고 활용합니다. 다른 광고주들도 유사한 방식으로 우리 사이트에 광고를 게재할 수 있으나 그들에게 개인정보를 노출하지 않습니다.
            </p>
            <p>
                <strong>[쿠키 설정 거부방법]</strong>
            </p>
            <p>
                사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
            </p>
            <p>
                - 쿠키 설정방법 예 (인터넷 익스플로어의 경우): 웹 브라우저 상단의 도구 → 인터넷 옵션 → 개인정보
            </p>
            <p>
                단, 쿠키의 저장을 거부할 경우에는 서비스의 이용에 제한이 생길 수 있으며 이에 대한 책임은 전적으로 회원님에게 있음을 유의하시기 바랍니다.
            </p>
            <h3>
              <strong>8) 개인정보에 대한 민원서비스</strong>
            </h3>
            <p>
                서비스 제공자는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.
            </p>
            <p>
                <strong>[개인정보 책임자]</strong>
            </p>
            <p>
                - 이름: 이규용
            </p>
            <p>
                - 소속 및 직책: LISN 개발팀, 팀장
            </p>
            <p>
                <strong>[개인정보 관리 담당자]</strong>
            </p>
            <p>
                - 이름 : 손정연
            </p>
            <p>
                - 소속 및 직책: LISN 개발팀, SW엔지니어
            </p>
            <p>
                - e-Mail: lisnhelp@gmail.com
            </p>
            <p>

            </p>
            <p>
                귀하께서는 서비스 제공자의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보 관리 담당자에게 신고하실 수 있습니다. 서비스 제공자는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
            </p>
            <p>
                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
            </p>
            <p></p>
            <p>
                개인정보침해신고센터 ( http://privacy.kisa.or.kr / 국번없이 118), 대검찰청 사이버수사과 (http://www.spo.go.kr / 국번없이 1301), 경찰청사이버안전국 (http://www.ctrc.go.kr / 국번없이 182)
            </p>
            <h3>
              <strong>9) 개인정보보호를 위한 기술적/제도적 대책</strong>
            </h3>
            <p>
                회원님의 개인정보는 비밀번호에 의해 보호되고 있습니다. 회원님의 비밀번호는 암호화되어 저장 및 관리되고 있어 회원님 본인만이 알 수 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 회원님 본인에 의해서만 가능합니다. 따라서 회원님은 비밀번호를 다른 사람에게 알려지지 않도록 주의하셔야 하며, 작업을 마친 후에는 즉시 로그아웃(log-out)하시고 웹브라우저를 종료하는 것이 바람직합니다.
            </p>
            <p>
                특히, 다른 사람과 컴퓨터를 공유하여 사용하시거나 공공장소에서 이용한 경우에는 개인정보가 다른 사람에게 알려지는 것을 막기 위하여 세심한 주의가 요구됩니다.
            </p>
            <p>
                서비스 제공자는 정보의 분실, 도난, 누출, 변조, 외부로부터의 공격, 해킹 등을 막기 위하여 개인정보관리 시스템에 대해 외부로부터 침입을 차단하고 보호하는 보안조치를 이용하고 있으며, 개인정보를 처리하는 직원을 최소한으로 제한하고 관련 직원에 대한 수시교육을 통해 본 정책의 이행 및 준수 여부를 관리하고 있으며 문제점이 발견될 경우 신속하게 시정조치를 하고 있습니다.
            </p>
            
          </div>
        </div>
    </div>
</template>

<script>
import Logo from '../assets/Logo'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
    components: {
        Logo,
    },
    data() {
        return {
            navOpen: false,
        }
    },
    computed: {
        ...mapState([
        
        ]),
    },
    created() {
      this.$amplitude.setUserId(this.user_id);
      this.$amplitude.logEvent('policies_privacy');
    },
    methods: {
        ...mapMutations([
        
        ]),
        openbar(){
            this.navOpen = true;
        },
        closebar(){
            if (window.innerWidth > 1000) {
                return;
            }
            this.navOpen = false;
            let docClasses = document.body.classList
        },
    }
}
</script>
<style scoped>

@keyframes slide {
  0% {
    transform: translateY(0);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-60px);
    opacity: 1;

  }
}
.body {
  position: relative;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
    display: block;
    object-fit: cover;
    margin-top:-1.2rem;
}
.body-container {
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 14px 30px;
}
h2 {
  font-size: 2.5rem;
  color:black;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  color:black;
}
strong {
  font-weight: bold;
}
h3 {
  font-size: 1.75rem;
  color:black;
}
ul {
    display: block;
    list-style-type:decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
/* @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
} */
.home-cont-1{
  
  position: absolute;
  top: 25%;
  right: 0;
  left: 0;
  z-index: 30;
}

.ani-slide-in {
  animation-duration: 2s;
  animation-delay: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-name: slideInFromLeft;
  padding-right: 400px;
  animation-fill-mode: forwards;
  opacity: 0.3;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(0px);
    opacity: 0;

  }
  100% {
    transform: translateX(400px);
    opacity: 1;
  }
}

.fade-enter-active {
  animation: go 0s;
}
@keyframes go {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
.lisn-wallpaper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: opacity .3s ease .2s;
    background-size:cover;
}
.lisn-background {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    pointer-events: auto;
    position: absolute;
    top: 0;
    left: 0;
    background-size:cover;
}
.footer {
  position: fixed;
    width: 100%;
    bottom: 0;
    height: 3rem;
    padding: 0;
    text-align: center;
    background:none;
}
.footer a {
  color: white;
}
.footer_text {
  font-size:1.2rem;
}
#home-header {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    background: #E2E2E2;
    box-shadow: 0 0 0 1px rgba(15,15,15,.1), 0 2px 4px rgba(15,15,15,.1);
    display:block;
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

.home-nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
}

.nav__right {
    background-color: #e2e2e2;
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
.nav__right.active{
    transform: translateX(0px);

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
    .menu-bar{
        display: none !important;
    }
    
}
@media ( max-width: 1000px ) {
  .home_title {
  color: white; 
  font-size:60px;
  text-align:center; 
  font-weight:700;
  }
  .home_subtitle {
  color: white; 
  font-size:2.0rem; 
  text-align: center;
  }
  .about-intro_title {
  font-weight: 800;
  color: #17181a;
  font-size: 2.5em;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-align: center;
  }
.about-intro_subtitle {
  font-weight: bold;
  color: #17181a;
  font-size: 1.5em;
  letter-spacing: -0.2px;
  line-height: 1.3636363636em;
  margin-left: auto;
  margin-right: auto;
  max-width: 540px;
  text-align: center;
  }
  .about-sample {
  position: relative;
  width:450px;
  overflow:hidden;
  display:block;
  margin: 20px auto;
  }
  .function_title {
  font-size: 1em;
  }
}
@media ( max-width: 767px ) {
  .help_section {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-right: 70px;
      margin-left: 20px;
  }
  .logo_section {
    display: flex;
    margin-left: 20px;
  }
  .home_title {
  color: white; 
  font-size:40px;
  text-align:center; 
  font-weight:700;
  }
  .home_subtitle {
  color: white; 
  font-size:1.5rem; 
  text-align: center;
  }
  .about-intro_title {
  font-weight: 800;
  color: #17181a;
  font-size: 2em;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-align: center;
  }
  .about-intro_subtitle {
  font-weight: bold;
  color: #17181a;
  font-size: 1em;
  letter-spacing: -0.2px;
  line-height: 1.3636363636em;
  margin-left: auto;
  margin-right: auto;
  max-width: 540px;
  text-align: center;
  }
  .about-sample {
  position: relative;
  width:250px;
  overflow:hidden;
  display:block;
  margin: 20px auto;
  }
  .introduction-section_function {
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-flow: column nowrap;
  }
  .introduction-section_container {
    max-width: none;
    padding: 40px 10px 20px;
  
  }
  .function_image {
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
  }
}
.menu-bar{
    color: white;
    font-size: 20px;
    padding: 6px;
    cursor: pointer;
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

.nav__middle {
    flex-grow: 1
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
</style>
