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
            <h2 class="ns-kr">LISN 이용 약관</h2>
            <p class="ns-kr">최종수정일 2019.11.19.</p>
            <p class="ns-kr">
              <strong>LISN</strong>을 사용하기 이전에, 알아둘 필요가 있는 사항이 몇 가지 있습니다. 아래와 같은 사용 조건(이하, 「약관」이라고 함)을 주의 깊게 읽어 주세요. <strong>LISN</strong>(이하, 「서비스」라고 함)의 이용은, 약관에 준합니다.
            </p>
            <p>
              <strong>ListenCarefully</strong>(이하, 「회사」)는, 고객에게 통지 없이 약관을 수시로 갱신, 변경 또는 개정할 권리를 가지고 있습니다. 약관은 수시로 변경될 수 있기 때문에, 회사는 고객이 약관을 자주 확인할 것을 권장합니다. 본 약관에 동의하는 것은, 고객이 서비스 이용 기간 중에 행해지는 모든 변경 사항들에 동의하는 것을 의미합니다. 약관의 어떠한 조항도, 제3자에 대해 어떠한 권리 또는 이익을 부여하지 않습니다.
            </p>
            <p>
              또한, 본 약관에서 정하지 아니한 사항은 준거법, 규정, 상관습 및 서비스 웹사이트 내 개별서비스 운영정책(해당 시)에 따릅니다. 회사는 각각의 개별서비스에 대한 별도 운영정책을 실시할 수 있습니다.
            </p>
            <h3>
              <strong>1) 기본 조건</strong>
            </h3>
            <p>
              회사는 고객에 대한 공지의 유무에 상관없이, 또 회사에 어떠한 책임이 돌아가는 일 없이, 서비스를 수시로 변경, 일시 정지 또는 종료할 권리를 가집니다.
            </p>
            <p>
              서비스를 이용하기 위해서는 개인정보의 수집, 이용 등의 동의가 수반되며 만 14세 미만 아동의 경우 이를 위해 법정대리인의 동의를 얻는 절차에 응할 것을 요구할 수 있습니다. 고객이 본 서비스의 다른 사용자에 대해서 비방, 질타, 협박, 위협하는 것, 또는 다른 사용자를 사칭하는 것을 금지합니다.
            </p>
            <p>
              어떠한 종류의 웜, 바이러스 또는 파괴적인 성질의 코드의 송신을 금지합니다. 약관의 조항을 위반했을 경우에는, 고객의 서비스 계정의 해지 사유가 됩니다. 회사는 웹사이트 상에 게재된 콘텐츠에 관해서 책임을 지지 않습니다.
            </p>
            <h3>
              <strong>2) 보장 및 면책, 책임의 제한</strong>
            </h3>
            <p>
              고객과 서비스 사이에 특별히 명시된 동의가 있는 경우를 제외하고는, 본 웹사이트상의 정보 및 소프트웨어는 어떠한 보증이나 조건(상품성, 특정 목적에의 적합성 또는 권리침해가 없음에 관한 묵시적인 보장 또는 조건을 포함하지만 이것들에 한정되지 않는다)이 추가되지 않은 채로 제공됩니다.
            </p>
            <p>
              회사는, 본 웹사이트에 참조되거나 또는 링크된 정보, 소프트웨어 또는 그 외의 문서들이 누락되는 것에 대해 책임을 지지 않습니다.
            </p>
            <p>
              회사는, 회사에 대한 손해의 발생 가능성에 관한 고지의 유무에 관계없이, 특별 손해, 부수적 손해, 간접적 손해, 파생적 손해를 포함한 모든 손해(예를 들면, 정보의 이용 및 그에 따른 결과와 관련해, (1) 제공되는 자료의 신뢰성, (2) 설비의 교체를 위해 필요한 비용, (3) 사용 장애, 데이터의 소실 또는 이익의 손실, (4) 서비스 지연 또는 중단, (5) 사용자 간, 또는 정보에 의해 발생할 수 있는 손해 등을 포함하며 이것들에 한정되지 않는다.)에 대해 책임을 지지 않습니다.
            </p>
            <p>
              본 웹사이트는 기술적으로나 또는 그 외의 오류를 포함하고 있을 가능성이 있습니다. 본 웹사이트의 정보는 정기적으로 변경 또는 갱신됩니다. 하지만, 회사는 본 웹사이트 상의 자료에 대해 반드시 갱신해야 할 책임을 지지 않습니다.
            </p>
            <h3>
              <strong>3) 일반적 조건</strong>
            </h3>
            <p>
                 ⁃   귀하는 서비스로부터 취득하는 모든 정보, 소프트웨어, 제품 또는 서비스에 관해서 변경, 전송, 배포, 복제, 출판, 공중송신, 전시, 대여, 이차적 저작물의 작성, 양도 또는 판매를 하지 않을 것에 동의하는 것으로 합니다.
            </p>
            <p>
                 ⁃   귀하에게 부여되는 무료 서비스 계정은, 1명에 대해 1개만으로 합니다.
            </p>
            <p>
                 ⁃   귀하는 서비스로부터 얻을 수 있는 콘텐츠를 감시 또는 카피할 목적으로, 로봇, 스파이더 혹은 그 외의 자동 도구의 사용 또는 수작업을 하지 않는 것에 동의하는 것으로 합니다.
            </p>
            <p>
                 ⁃   귀하는 서비스의 온라인 계정을 판매, 교환, 재판매 혹은 그 외의 방법으로 무단 이용 또는 양도를 하지 않는 것에 동의하는 것으로 합니다.
            </p>
            <h3>
              <strong>4) 콘텐츠</strong>
            </h3>
            <p>
                 ⁃   귀하는 위법, 중상, 질타, 비방, 사기, 타인의 권리침해, 외설 또는 그 외의 바람직하지 않은 콘텐츠에 관한 전송, 업로드, 블로그 게재, 전달, 게시물 게재 또는 전파 행위를 행하거나 또는 그에 상응하는 행위를 해서는 안 되는 것에 동의하며 회사는 해당 행위 발견 시 별도 고지 없이 조치를 취할 수 있습니다.
            </p>
            <p>
                 ⁃   회사는 귀하가 전송, 업로드 또는 자신의 서비스•계정에 저장하는 모든 콘텐츠(모든 텍스트, 음성, 데이터, 정보, 영상, 사진, 음악, 소리, 비디오 또는 그 외의 자료를 포함한다)에 대해 소유권을 주장하지 않습니다.
            </p>
            <p>
                 ⁃   회사는 약관에 특별한 규정이 있는 경우를 제외하고, 서비스의 제공을 목적으로 고객의 콘텐츠를 무단으로 사용하지 않습니다.
            </p>
            <p>
                 ⁃   제3자 또는 그 외의 소유권을 침해하는 모든 콘텐츠를 업로드 또는 이용 가능한 상태로 배포하는 것을 금지합니다.
            </p>
            <p>
                 ⁃   회사는 약관에 위반하는 콘텐츠에 대해 서비스 상의 모든 콘텐츠를 삭제, 또는 전송을 거부할 수 있습니다. 다만, 이러한 콘텐츠를 삭제 또는 거부하는 것이 회사의 의무는 아닙니다.
            </p>
            <h3>
              <strong>5) 제3자 콘텐츠 및 서비스 제공</strong>
            </h3>
            <p>
              본 서비스는 제3자와의 제휴를 통해 좀 더 다양한 기능을 제공할 수 있습니다. 본 서비스의 기능과 제3자 서비스의 기능을 연결하거나 특정 기능 및 웹사이트, 디렉토리, 서버, 네트워크, 시스템, 정보 및 데이터베이스, 애플리케이션, 소프트웨어, 프로그램, 제품 또는 서비스를 포함한 제3자 콘텐츠에 대한 액세스를 포함할 수 있습니다. 회사는 또한 서비스의 일부로 고객에게 타사의 콘텐츠를 제공할 수 있습니다. 그러나 본 서비스는 거래 당사자의 대리인이 아니며, 이러한 트랜잭션의 직접 당사자도 아닙니다. 이러한 활동은 전적으로 고객과 제3의서비스 제공자 사이의 문제입니다. 따라서, 회사는 고객이 액세스한 제3자의 모든 콘텐츠에 대해 책임을 지지 않습니다.
            </p>
            <h3>
              <strong>6) 테스트 목적의 서비스 제공</strong>
            </h3>
            <p>
              회사는 고객을 대상으로 일정 기간 동안 테스트 목적의 서비스(이하 “테스트 서비스”)를 실시할 수 있습니다. 테스트 서비스 기간 동안 서비스 안정성을 위해 데이터의 변경, 수정, 추가, 삭제 등이 실시될 수 있으며, 회사는 이에 대한 복구 의무가 없습니다. 또한 이 기간 동안 고객이 취득한 캐릭터, 이용정보 등은 테스트 서비스 기간 종료 후 초기화 될 수 있습니다.
            </p>
            <h3>
              <strong>7) 정보의 제공 및 광고의 게재</strong>
            </h3>
            <p>
              회사는 서비스의 운영과 관련하여 서비스 웹페이지, 이메일 등에 광고를 게재할 수 있습니다. 광고가 게재된 이메일 등을 수신한 회원은 회사에게 수신거부를 할 수 있습니다. 회사가 제공하는 서비스에는 배너와 링크(Link) 등 다양한 형태의 광고가 포함되어 있으며, 이는 제3자가 제공하는 페이지로 연결될 수 있습니다.
            </p>
            <p>
              전항에 따라 제3자가 제공하는 페이지로 연결될 경우 해당 페이지는 회사의 서비스 영역이 아니므로 회사가 신뢰성, 안정성 등을 보장하지 않으며 그로 인한 고객의 손해에 대해서도 회사는 책임을 지지 않습니다.
            </p>
            <h3>
              <strong>8) 서비스 중단</strong>
            </h3>
            <p>
              다음에 해당하는 경우 회사는 서비스 제공을 중단할 수 있습니다.
            </p>
            <ul>
              <li>
                설비 수리 및 기타 유지보수 작업 등 불가피한 사유
              </li>
              <li>
                국가적 비상사태, 설비 결함 또는 서비스 이용 급증 등으로 정상적인 서비스 운영에 장애가 발생할 위험이 있는 경우
              </li>
              <li>
                천재지변 등 불가피한 사유로 인해 회사가 실질적으로 안정적인 서비스를 제공할 수 없는 경우
              </li>
              <li>
                전기통신 서비스 제공업체(전기통신사업법에 명시)가 통신 서비스를 중단한 경우
              </li>
            </ul>
            <p>
              회사는 위에 명시된 1 항에 따라 서비스를 중단할 경우, 서비스 접속화면이나 서비스 웹사이트 상에 게재함으로써 서비스 중단을 공지합니다. 또한 2, 3, 4항에 명시된 상항에 대해서는 사전 통지 없이 해당 서비스를 일시 중단할 수 있습니다.
            </p>
            <h3>
              <strong>9) 서비스 사용권</strong>
            </h3>
            <p>
              회사는 서비스의 이용기간 동안 서비스 및 서비스에 포함 또는 병행되어 제공하는 관련 콘텐츠에 대해 사용할 권리를 드립니다. 콘텐츠의 사용권은 기본적으로 콘텐츠의 사용권 계약서에 명시된 내용을 따르며, 서비스 이용약관과 콘텐츠 사용권 계약서 간 공통적인 내용이 존재할 경우, 서비스의 이용약관이 개별 콘텐츠 사용권 계약서보다 우선 시 됨을 안내 드립니다. 서비스는 사용자가 이용 중인 요금제가 보장하는 범위의 서비스 및 콘텐츠 사용권만을 제공하며, 계약의 만료, 해지, 중도 해약 등으로 서비스 사용이 종료되었을 때는 서비스 및 서비스에 포함 또는 병행되어 제공되는 콘텐츠의 사용권 역시 소멸됩니다.
            </p>
            <h3>
              <strong>10) 콘텐츠의 공개 및 공유</strong>
            </h3>
            <p>
              사용자는 자신의 콘텐츠를 공개할 권리 또는 공개하지 않을 권리를 가집니다. 사용자는 자신이 공개한 콘텐츠에 대해 본 서비스를 이용하는 모든 사람이 제한 없이 그 콘텐츠를 이용하는 것에 동의하는 것으로 합니다. 회사는 공개된 콘텐츠를 서비스를 위해 사용 및 활용할 수 있습니다. 또한 사용자는 자신이 작성한 콘텐츠에 대해 다른 사용자가 접근 및 공동 작업을 할 수 있도록 허가할 수 있습니다. 회사는 사용자가 콘텐츠를 공유 또는 공개함으로 인해 발생할 수 있는 모든 문제에 대해 책임을 지지 않습니다.
            </p>
            <h3>
              <strong>11) 소프트웨어 및 업데이트</strong>
            </h3>
            <p>
              회사는 본 약관에서 명시되지 않은 모든 권리를 보유합니다. 사용자는 해당 소프트웨어를 분해 또는 디컴파일하는 등의 시도를 하거나 그러한 타인의 시도를 도와주지 않아야 합니다. 본 서비스는 새 버전이 출시되면 소프트웨어를 자동으로 업데이트할 수 있습니다.
            </p>
            <h3>
              <strong>12) 서비스 브랜드</strong>
            </h3>
            <p>
              LISN의 상호, 상표, 서비스마크, 로고, 도메인명 및 그 외의 식별할 수 있는 브랜드의 특징(이하, 「브랜드」라고 함)의 모든 사용은 약관에 따라, 그리고 그 시점에 있어 유효한 회사의 브랜드 사용 가이드 라인에 의거하여 행해져야 합니다. 귀하는 아래의 행위를 행하지 않는 것에 동의하는 것으로 합니다.
            </p>
            <p>
              ⁃   위에 명시된 서비스에 포함되어, 또는 표시되고 있는 저작권, 상표권 또는 그 외의 소유권의 표시를 삭제하는 것.
            </p>
            <p>
              ⁃   위에 명시된 서비스의 일부를 이루는 웹페이지를 수정하거나 또는 프레임을 작성하는 것.
            </p>
            <h3>
              <strong>13) 해지 및 중도 해약</strong>
            </h3>
            <p>
              회사는 언제든지 이유에 상관없이 고객의 서비스 이용을 제한할 수 있으며, 고객의 서비스 계정을 일시 정지 혹은 해지할 수 있습니다. 서비스가 해지되었을 경우 고객의 계정은 사용 불능이 되며, 회사의 시스템에 귀하의 자료가 남아 있을 가능성이 있다고 해도, 고객은 자신의 계정 또는 계정에 포함되는 모든 파일이나 콘텐츠에 접근할 수 없습니다. 회사는 고객의 계정을 해지할 시에, 고객이 마지막에 지정한 이메일 주소를 통해서 해지 통지를 하게 됩니다. 해지 통지는 회사가 이미 고객의 서비스의 이용을 해지한 상태인 경우(이러한 경우에는, 회사가 그 후의 통지하는 것은 의무 사항이 아닙니다.)를 제외하고, 회사가 통지 메일을 보낸 즉시 효력이 발생합니다.
            </p>
            <h3>
              <strong>14) 제3자의 사이트로의 링크</strong>
            </h3>
            <p>
              회사 웹사이트 상의 일부 링크는 고객이 회사 웹사이트로부터 벗어나게 할 수 있습니다. 링크된 제3자의 웹사이트는 회사가 관리하지 않으며, 회사는 링크된 웹사이트의 콘텐츠 및 링크된 웹사이트의 변경 사항 등에 대해 책임을 지지 않습니다. 회사는 몇 개의 링크처 웹사이트로부터 받을 수 있는 웹 캐스팅 또는 그 외 모든 송신 형태에 대해 책임을 지지 않습니다. 회사는 단지 고객의 편의를 위해서 이러한 링크를 제공하는 것이며, 이러한 링크가 회사의 해당 사이트로의 추천을 의미하는 것은 아닙니다.
            </p>
            <h3>
              <strong>15) 계정의 미사용</strong>
            </h3>
            <p>
              ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’ 상의 ‘개인정보 유효기간제’에 따라 회사는 고객이 1년간 자신의 계정에 로그인하지 않는 경우에는 계정을 휴면 상태로 전환하여 서비스에 제한을 가할 수 있습니다. 휴면 계정으로 전환 30일 전에 이메일로 사전 통지되며, 휴면 전환과 동시에 해당 계정의 모든 데이터는 삭제됩니다.
            </p>
            <h3>
              <strong>16) 관할권</strong>
            </h3>
            <p>
              약관은 관할법원을 서울중앙지방법원으로하며 고객은 이러한 재판소의 관할권에 동의하는 것으로 합니다.
            </p>
            <h3>
              <strong>17) 사용자 계정(이메일), 암호 및 보안</strong>
            </h3>
            <p>
              서비스를 이용함에 있어 고객이 계정을 개설하고자 할 경우에는, 고객은 제공된 등록 양식에 따라서 최신의 정확한 정보를 회사에 제공하여 등록을 완료할 필요가 있습니다. 고객은 암호 및 사용자 이메일을 입력할 수 있습니다. 고객은 자신의 암호 및 계정 정보의 비밀 보관 유지에 대해 전면적으로 책임을 집니다. 또한 고객은 고객의 계정으로부터 발생하는 모든 활동에 대해 책임을 집니다. 고객은 자신의 계정의 무단 사용 또는 그 외의 보안 침해가 있을 경우에는, 즉시 회사에 통지하는 것에 동의하는 것으로 합니다. 회사는 고객의 암호 또는 계정을 타인이 이용한 결과 고객이 입을 수 있는 손실에 대해 책임을 지지 않습니다. 단, 고객은 타인이 고객의 계정 또는 암호를 사용함으로 인해 발생할 수 있는 회사 또는 제3자의 손실에 대해 책임을 질 수 있습니다. 고객은 어떠한 경우에도 타인의 계정을 그 소유자의 승낙 없이 사용해서는 안 됩니다.
            </p>
            <p>
              고객의 암호 또는 계정 정보의 보안에 만전을 기하기 위해, 작업 종료 시에는 반드시 로그아웃 할 것을 권합니다.
            </p>
            <p>
              비밀번호를 정기적으로 변경하여 관리하는 것을 권장합니다.
            </p>
            <h3>
              <strong>18) 정보의 이전</strong>
            </h3>
            <p>
              회사는, 타사로부터의 매수 또는 타사와의 합병 등 회사의 소유권에 대한 양도가 행해졌을 경우에는, 고객의 개인정보를 이전할 권리를 가집니다. 이러한 경우에는, 회사는 정보를 이전하기 전에 고객에게 그 취지를 통지하여, 또 다른 사용 약관에 준하게 됨을 알리도록 합니다.
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
      this.$amplitude.logEvent('policies_service');
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
