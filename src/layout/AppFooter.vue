<template>
<footer id="app-footer" class="footer">
    <div class="footer__box">
        <div class="footer__cols">
            <div class="footer__logo">
              <logo></logo>
            </div>
            <div class="footer__col">
                <h4 class="footer__h">Address</h4>
                <div class="footer__address"> 서울특별시 강남구
                    <br> 테헤란로 311
                    <br> 아남타워빌딩
                 </div>
            </div>
            <div class="footer__col">
                <h4 class="footer__h">Product</h4>
                <ul class="footer__navi">
                    <li> <a>Pricing</a> </li>
                    <li> <a>Features</a> </li>
                    <li> <a>FAQs</a> </li>
                    <li> <a>Tutorials</a> </li>
                </ul>
            </div>
            <div class="footer__col">
                <h4 class="footer__h">Company</h4>
                <ul class="footer__navi">
                    <li> <a>About us</a> </li>
                    <li> <a>Press</a> </li>
                    <li> <a target="_blank" rel="noreferrer">Github</a> </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
import Logo from '../assets/Logo'

export default {
  name: 'app-footer',
  components: {
    Logo,
  }
};
</script>
<style>
#app-footer g.logo-color1{
  fill: #000;
}
#app-footer g.logo-color2{
  fill: #09b3af;
}
.arrow {
    transition: all 0.2s;
    width: 72px
}

.arrow.disabled {
    overflow: hidden;
    opacity: 0.2
}

.arrow.arrow--left.disabled {
    width: 40px
}

.arrow--left {
    margin-right: 50px
}

.arrow--left svg {
    transform: rotateY(180deg)
}

.article-o {
    font-size: 1.1rem;
    padding: 100px 0
}

.article-o__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    display: block
}

@media (min-width: 768px) {
    .article-o__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .article-o__box {
        display:flex
    }
}

.article-o__list {
    text-align: right;
    border-radius: 36px;
    box-sizing: border-box;
    background: linear-gradient(-140deg, #fff 10%, #F8F8F8 75%)
}

@media (min-width: 768px) {
    .article-o__list {
        padding-right:50px;
        padding-left: 10px;
        width: 50%
    }
}

.article-o__sidebar {
    box-sizing: border-box
}

@media (min-width: 768px) {
    .article-o__sidebar {
        padding-left:50px;
        width: 50%
    }
}

.article-o__h {
    position: relative;
    margin: 10px 0 80px
}

.article-o__h:after {
    position: absolute;
    width: 66px;
    left: 0;
    height: 4px;
    bottom: -30px;
    background: #09b3af;
    background: linear-gradient(to right, #05dec1 0%, #09b3af 100%);
    border-radius: 3px;
    content: "";
    display: block
}

.article-o__h--r:after {
    left: auto;
    right: 0
}

.article-o__item,.faq__item-link,.job-o__item-link,.mws__item-link {
    display: block;
    text-decoration: none;
    color: #303D4A;
    margin-bottom: 40px
}

.article-o__item:hover .article-o__h2,.faq__item-link:hover .article-o__h2,.job-o__item-link:hover .article-o__h2,.mws__item-link:hover .article-o__h2,.article-o__item:hover .faq__item-h2,.faq__item-link:hover .faq__item-h2,.job-o__item-link:hover .faq__item-h2,.mws__item-link:hover .faq__item-h2,.article-o__item:hover .job-o__item-h2,.faq__item-link:hover .job-o__item-h2,.job-o__item-link:hover .job-o__item-h2,.mws__item-link:hover .job-o__item-h2,.article-o__item:hover .mws__item-h2,.faq__item-link:hover .mws__item-h2,.job-o__item-link:hover .mws__item-h2,.mws__item-link:hover .mws__item-h2 {
    text-decoration: underline
}

.article-o__h2,.faq__item-h2,.job-o__item-h2,.mws__item-h2 {
    color: #303D4A;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    line-height: 1.5
}

.article-o__newsletter {
    margin: 20px 0 50px;
    padding: 10px 10px 0 10px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.25);
    border-radius: 10px;
    overflow: hidden
}

.article-o__tech {
    margin: 15px 0 0 0;
    display: flex;
    justify-content: flex-end
}

.article-o__tech--left {
    justify-content: flex-start
}

.article-o__tag {
    border-radius: 5px;
    margin-left: 10px;
    padding: 4px 10px;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #202227
}

.article-o__tag:first-child {
    margin-left: 0
}

.article-o__tag svg {
    margin-right: 6px
}

.article-o__author {
    color: #303D4A
}

.article-o__link {
    text-decoration: none;
    position: relative;
    display: block;
    border-bottom: 2px solid #eff1f5;
    padding: 18px 60px 18px 10px
}

.article-o__link .article-o__h2,.article-o__link .faq__item-h2,.article-o__link .job-o__item-h2,.article-o__link .mws__item-h2 {
    margin: 0 0 5px
}

.article-o__link:after {
    position: absolute;
    top: 50%;
    margin-top: -14px;
    right: 10px;
    display: block;
    content: "";
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEzIDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTkgNC45SDB2LTFoOXYtM2w0IDMuNS00IDMuNXYtM3oiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=") no-repeat 50% 50%;
    background-color: #1b253e;
    transition: background-color 0.2s;
    border-radius: 14px;
    width: 28px;
    height: 28px;
    box-shadow: 0 12px 14px 0 rgba(19,27,35,0.09)
}

.article-o__link:hover:after {
    background-color: #09b3af
}

.article-o__h--sm {
    margin-bottom: 50px
}

.author__wrap {
    padding: 20px 0
}

.author__wrap h3 {
    font-size: 1.3rem;
    padding-bottom: 5px;
    margin: 0;
    border-bottom: 2px solid #eff1f5
}

.author {
    padding: 20px 0;
    display: flex
}

.author h4 {
    font-size: 1.1rem
}

.author__gravatar {
    margin: 0 10px 0 0;
    width: 8%
}

.author__gravatar img {
    border-radius: 50%;
    width: 50px;
    max-width: 100%;
    border: 1 px solid #eee
}

.author__text {
    width: 84%
}

.author__text h4 {
    margin: 0;
    padding: 0
}

.author__text p {
    margin: 10px 0 15px 0;
    font-style: italic
}

.author__social a {
    margin-right: 10px;
    display: inline-block;
    text-decoration: none
}

.author__social a svg {
    vertical-align: middle;
    display: inline-block;
    margin-right: 5px;
    margin-top: -3px
}

.faq,.job-o,.mws {
    padding: 0 0 100px;
    margin-top: 40px
}

.prices+.faq,.prices+.job-o,.prices+.mws {
    margin-top: 0px
}

.faq__box,.job-o__box,.mws__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block
}

@media (min-width: 768px) {
    .faq__box,.job-o__box,.mws__box {
        padding:0 45px
    }
}

.faq__items,.job-o__items,.mws__items {
    padding: 20px 0 0;
    justify-content: space-between;
    flex-wrap: wrap
}

@media (min-width: 768px) {
    .faq__items,.job-o__items,.mws__items {
        display:flex
    }
}

.faq__item,.job-o__item {
    padding: 0 0 30px
}

@media (min-width: 768px) {
    .faq__item,.job-o__item {
        width:47%
    }
}

.faq__question,.mws__question {
    font-size: 1.3rem;
    margin: 0 0 5px
}

.footer {
    background: #eff1f5;
    padding: 100px 0
}

.footer__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block
}

@media (min-width: 768px) {
    .footer__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .footer__cols {
        display:flex
    }
}

.footer__logo {
    flex-grow: 1
}

.footer__col {
    padding-top: 20px
}

@media (min-width: 768px) {
    .footer__col {
        width:20%;
        padding-top: 0
    }
}

.footer__h {
    margin: 5px 0 10px 0
}

.footer__navi {
    list-style: none;
    margin: 0;
    padding: 0
}

.footer__navi a {
    text-decoration: none;
    color: #6F7279;
    transition: all .3s
}

.footer__navi a:hover {
    color: #000
}

.footer__address {
    color: #6F7279
}

.form {
    color: #000
}

.form__row {
    margin: 10px 0
}

.i2__icon {
    opacity: 0;
    transform: scale(0.5);
    transform-origin: 35px 35px;
    animation: i2-icon-animation 9s ease-out infinite
}

.i2__dl {
    opacity: 0;
    transform: translate(0, -30px);
    animation: i2-dl-animation 9s ease-out infinite
}

.i2__step1 {
    padding-top: 120px
}

.i2__step2 {
    padding: 80px 70px 0 40px;
    text-align: left;
    color: #FFF;
    opacity: 0;
    animation: i2-step2-animation 9s ease-out infinite
}

.i2__step3 {
    padding: 72px 55px 0 30px;
    text-align: left;
    color: #FFF;
    opacity: 0;
    display: flex;
    position: relative;
    animation: i2-step3-animation 9s ease-out infinite
}

.i2__ttext {
    position: absolute;
    left: 162px;
    top: 156px;
    color: #313562;
    font-size: 18px;
    font-weight: bold;
    animation: i2-typing2 9s ease-out infinite;
    width: 0;
    overflow: hidden;
    white-space: nowrap
}

.i2__sidebar {
    padding: 0 0 0 15px;
    font-size: 12px
}

.i2__sidebar .i2__input {
    width: 100%
}

.i2__label {
    padding: 10px 0 5px 0
}

.i2__site {
    width: 275px;
    flex-shrink: 0
}

.i2__title {
    padding: 0 0 5px
}

.i2__input-group {
    display: flex
}

.i2__input {
    flex-grow: 1;
    background: #FFF;
    color: #000;
    border-radius: 5px;
    padding: 10px
}

.i2__add {
    background: #09b3af;
    color: #FFF;
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px
}

.i2__field {
    border: 2px dotted #09b3af;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px
}

.i2__new-field {
    opacity: 0;
    height: 0;
    overflow: hidden;
    animation: i2-new-field-animation 9s ease-out infinite
}

.i2__write {
    animation: i2-typing 9s ease-out infinite;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    display: block
}

.i2__davi {
    display: inline-block;
    width: 0;
    overflow: hidden;
    line-height: 13px;
    animation: i2-typing-davi 9s ease-out infinite
}

@keyframes i2-typing-davi {
    33% {
        width: 0
    }

    66% {
        width: 100%
    }

    100% {
        width: 100%
    }
}

@keyframes i2-typing {
    71% {
        width: 0
    }

    100% {
        width: 100%
    }
}

@keyframes i2-typing2 {
    71% {
        width: 0
    }

    100% {
        width: 120px
    }
}

@keyframes i2-new-field-animation {
    40% {
        opacity: 0;
        height: 0
    }

    45% {
        opacity: 1;
        height: 60px
    }

    66% {
        opacity: 1;
        height: 60px
    }
}

@keyframes i2-step3-animation {
    66% {
        opacity: 0
    }

    71% {
        opacity: 1
    }

    95% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

@keyframes i2-step2-animation {
    33% {
        opacity: 0
    }

    36% {
        opacity: 1
    }

    66% {
        opacity: 1
    }

    67% {
        opacity: 0
    }
}

@keyframes i2-dl-animation {
    25% {
        opacity: 0
    }

    26% {
        transform: translate(0, -30px);
        opacity: 1
    }

    33% {
        opacity: 0;
        transform: translate(0, 40px)
    }
}

@keyframes i2-icon-animation {
    5% {
        opacity: 1;
        transform: scale(1)
    }

    25% {
        opacity: 1;
        transform: scale(1)
    }

    30% {
        opacity: 0;
        transform: scale(0)
    }
}

.job-o__item-tags {
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none
}

.job-o__item-tag {
    border-radius: 5px;
    margin: 15px 10px 5px 0px;
    padding: 4px 10px;
    box-shadow: 0 0 7px 0 rgba(0,0,0,0.25);
    font-size: 0.75rem;
    color: #202227
}

.logogroup {
    padding: 70px 0
}

.logogroup__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block;
    padding: 0 -15px
}

@media (min-width: 768px) {
    .logogroup__box {
        padding:0 45px
    }
}

.logogroup__h {
    text-align: center;
    position: relative;
    margin-bottom: 60px;
    margin-top: 0
}

.logogroup__h:after {
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

.logogroup__logos {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around
}

.logogroup__item a {
    display: block
}

.logogroup__item img {
    padding: 0px 10px 10px 10px;
    box-sizing: border-box
}

@media (min-width: 768px) {
    .logogroup__item {
        width:25%
    }
}

@media (min-width: 1200px) {
    .logogroup__item {
        width:20%
    }
}

.mws-section__entry {
    display: block;
    background: #FFF;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    border-bottom-right-radius: 0;
    padding: 20px;
    box-sizing: border-box;
    transition: all 0.2s
}

.mws-section__entry:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
}

.mws-section__entry img {
    border-radius: 20px;
    border-bottom-right-radius: 0
}

.mws-section__footer {
    padding-top: 80px;
    text-align: center
}

.mws__item {
    padding: 0 0 30px
}

@media (min-width: 768px) {
    .mws__item {
        width:31%
    }
}

.pagination {
    list-style: none;
    margin: 10px 0 50px;
    padding: 0
}

.pagination li {
    padding: 0 0 0 10px;
    display: inline-block
}

.pagination__link {
    text-decoration: none;
    display: inline-block;
    border-radius: 16px;
    line-height: 28px;
    width: 28px;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
}

.pagination__active .pagination__link {
    background: #09b3af;
    color: #FFF
}

.prices {
    padding: 100px 0
}

.prices__toggle {
    margin: 0 15px
}

.prices__toggle input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    font-size: 0
}

.prices__toggle label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 26px;
    background: #CCC;
    display: inline-block;
    border-radius: 26px;
    position: relative
}

.prices__toggle label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 10px;
    transition: 0.3s
}

.prices__toggle input:checked+label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%)
}

.prices__toggle label:active:after {
    width: 30px
}

.prices__columns {
    justify-content: space-between;
    flex-wrap: wrap
}

@media (min-width: 768px) {
    .prices__columns {
        display:flex
    }
}

.prices__columns .prices__column:nth-child(2) {
    overflow: hidden;
    border: 2px solid #1b253e
}

.prices__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block
}

@media (min-width: 768px) {
    .prices__box {
        padding:0 45px
    }
}

.prices__column {
    position: relative;
    background: #FFF;
    box-shadow: 0 3px 16px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 35px 30px 30px 30px;
    max-width: 400px;
    margin: 20px auto;
    box-sizing: border-box
}

@media (min-width: 768px) {
    .prices__column {
        width:30%;
        margin: 0
    }
}

.prices__hot {
    position: absolute;
    right: 0;
    top: 0;
    background: #1b253e;
    padding: 3px 15px 3px 15px;
    border-bottom-left-radius: 5px;
    color: #FFF;
    text-transform: uppercase;
    font-size: 10px;
    display: flex;
    align-items: center
}

.prices__hot svg {
    margin-right: 6px;
    width: 14px
}

.prices__plan-name {
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px
}

.prices__price {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold
}

.prices__price-desc {
    text-align: center;
    color: #a5a5a5
}

.prices__img {
    display: block
}

.prices__toggle-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px
}

.prices__monthly {
    display: none
}

.prices--monthly .prices__monthly {
    display: block
}

.prices--monthly .prices__yearly {
    display: none
}

.prices__features {
    border-top: 2px solid #eff1f5;
    margin-top: 20px;
    padding-top: 20px;
    text-align: center
}

.prices__features ul {
    list-style: none;
    margin: 0;
    padding: 0
}

.prices__features li {
    padding: 3px 10px
}

.prices__note {
    text-align: center;
    padding: 50px 30px;
    opacity: 0.6
}

.quickstart__langc {
    text-align: center;
    margin-top: 20px
}

.quickstart__lang {
    display: inline-block;
    margin-top: 10px;
    width: 70px;
    text-align: center;
    opacity: 0.5;
    cursor: pointer;
    text-decoration: none !important
}

.quickstart__lang img {
    width: 33px;
    height: 33px
}

.quickstart__lang:hover {
    opacity: 1
}

.quickstart__lang span {
    margin: 5px 0;
    display: block;
    color: #000;
    font-size: 11px
}

.quickstart__t {
    display: none
}

.quickstart__t pre {
    margin-top: 0
}

.quickstart__t--borderless {
    padding-top: 10px;
    padding-bottom: 10px
}

.quickstart__t--borderless pre {
    border-top: 0px
}

.quickstart__lang--active {
    opacity: 1;
    border-bottom: 2px solid #CCC;
    z-index: 100;
    position: relative
}

.quickstart__t--active {
    display: block
}

.roadmap {
    padding: 100px 0
}

.roadmap__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block
}

@media (min-width: 768px) {
    .roadmap__box {
        padding:0 45px
    }
}

.roadmap__cat-name {
    font-size: 1.6rem;
    margin: 20px 0 0 0;
    text-align: center
}

.roadmap__cats {
    justify-content: space-between;
    flex-wrap: wrap
}

@media (min-width: 768px) {
    .roadmap__cats {
        display:flex
    }
}

.roadmap__category {
    max-width: 500px;
    margin: 0 auto
}

@media (min-width: 768px) {
    .roadmap__category {
        width:47%;
        max-width: none
    }
}

.roadmap__item {
    background: #FFF;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.1);
    border-radius: 20px;
    border-bottom-right-radius: 0;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 30px
}

.roadmap__item-title {
    background: #09b3af;
    color: #FFF;
    padding: 15px 20px;
    display: flex
}

.roadmap__item-title h3 {
    flex-grow: 1;
    font-size: 1.3rem;
    margin: 0
}

.roadmap__item-title h3 .anchorjs-link {
    color: #FFF
}

.roadmap__date {
    background: #FFF;
    color: #09b3af;
    display: inline-block;
    padding: 0 5px;
    border-radius: 3px;
    font-size: 1rem
}

.roadmap__item-desc {
    padding: 15px 20px
}

.roadmap__cat-intro {
    text-align: center;
    margin: 5px 0 30px 0;
    font-weight: normal;
    font-size: 1rem;
    color: #6F7279
}

.slides__frame {
    position: relative;
    margin: 0 -25px
}

.slides__list {
    white-space: nowrap;
    font-size: 0
}

.slides__list>div {
    white-space: normal;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
    display: inline-block
}

@media (min-width: 768px) {
    .slides__list>div {
        width:50%
    }
}

.slides__next,.slides__prev {
    cursor: pointer
}

.start {
    background: #09b3af
}

.start a {
    color: #FFF
}

.start__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block;
    color: #FFF;
    padding: 60px 0 60px 0
}

@media (min-width: 768px) {
    .start__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .start__box {
        padding:60px 0 100px 0
    }
}

.start__h {
    text-align: center;
    margin: 0 0 50px 0
}

.start__h2 {
    margin: 0 0 15px
}

@media (min-width: 768px) {
    .start__cols {
        display:flex
    }
}

.start__form {
    width: 100%;
    overflow: auto
}

.start__col {
    padding: 0px 25px 20px 25px;
    box-sizing: border-box
}

@media (min-width: 768px) {
    .start__col {
        padding:0px 50px 0 50px;
        width: 50%
    }

    .start__col:first-child {
        border-right: 1px solid #70c7c3
    }
}

.start--illu {
    background: transparent
}

.start--illu .start__box {
    color: #202227
}

.start--illu .start__col:first-child {
    border: none
}

.start--illu .start__col:last-child {
    padding: 40px 50px;
    position: relative;
    background: #09b3af;
    border-radius: 10px 0 0 10px;
    color: #FFF
}

.start--illu .start__col:last-child:after {
    content: "";
    display: block;
    position: absolute;
    background: #09b3af;
    height: 100%;
    top: 0;
    z-index: -1;
    width: calc(50vw - 50px)
}

.start__img {
    z-index: -1;
    position: relative;
    max-width: 400px;
    display: block;
    margin: 0 auto
}

@media (min-width: 768px) {
    .start__img {
        max-width:none;
        margin-top: -80px
    }
}

.start__desc {
    font-size: 1.1rem
}

.start__desc ul {
    margin: 0;
    padding: 0 0 0 18px
}

.start__desc ol {
    margin: 0;
    padding: 0 0 0 18px;
    font-weight: bold
}

.start__desc ol p {
    font-weight: normal
}

.start__desc ol h4 {
    margin: 0;
    font-size: 1.1rem
}

.start__desc ol li {
    padding-bottom: 10px
}

.step {
    text-align: center;
    padding: 25px 25px;
    max-width: 300px;
    margin: 0 auto
}

@media (min-width: 768px) {
    .step {
        max-width:none;
        border-right: 1px solid #e3e3e3;
        width: 33.3%;
        transform: translateY(0)
    }

    .step:last-child {
        border-right: none
    }

    .step:nth-child(1) {
        animation: step-1 9s ease-out infinite
    }

    .step:nth-child(2) {
        animation: step-2 9s ease-out infinite
    }

    .step:nth-child(3) {
        animation: step-3 9s ease-out infinite
    }
}

.step h3 {
    margin: 0
}

@keyframes step-1 {
    0% {
        transform: translateY(-5px)
    }

    33% {
        transform: translateY(-5px)
    }

    34% {
        transform: translateY(0)
    }
}

@keyframes step-2 {
    0% {
        transform: translateY(0)
    }

    33% {
        transform: translateY(0)
    }

    34% {
        transform: translateY(-5px)
    }

    66% {
        transform: translateY(-5px)
    }

    67% {
        transform: translateY(0)
    }
}

@keyframes step-3 {
    0% {
        transform: translateY(0)
    }

    66% {
        transform: translateY(0)
    }

    67% {
        transform: translateY(-5px)
    }

    100% {
        transform: translateY(-5px)
    }
}

.steps {
    padding: 0 0 50px
}

@media (min-width: 768px) {
    .steps {
        padding:50px 0 70px
    }
}

.steps__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    font-size: 1.1rem;
    display: block
}

@media (min-width: 768px) {
    .steps__box {
        padding:0 45px
    }
}

@media (min-width: 768px) {
    .steps__box {
        display:flex
    }
}

.steps__cta {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block;
    margin-top: 35px;
    text-align: center
}

@media (min-width: 768px) {
    .steps__cta {
        padding:0 45px
    }
}

.testimonial {
    background: #FFF;
    box-shadow: 0 6px 16px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    border-bottom-right-radius: 0;
    padding: 30px;
    box-sizing: border-box;
    transition: all 0.2s
}

@media (min-width: 768px) {
    .testimonial {
        padding:50px
    }
}

.testimonial:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
}

.testimonial__avatar {
    display: flex;
    align-items: center
}

.testimonial__image {
    width: 60px;
    margin-right: 20px;
    border-radius: 50%
}

.testimonial__twitter {
    color: #202227;
    text-decoration: none
}

.testimonial__text {
    font-size: 1.2rem;
    margin: 0 0 40px;
    min-height: 85px
}

@media (min-width: 768px) {
    .testimonial__text {
        min-height:125px
    }
}

.testimonial__name {
    font-size: 1.1rem
}

.testimonial__job {
    font-size: 0.8rem;
    color: #8f8f8f
}

.testimonials,.mws-section {
    background: #eff1f5;
    padding: 100px 0;
    position: relative;
    z-index: 2;
    overflow: hidden
}

.testimonials__box,.mws-section__box {
    max-width: 1200px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    display: block
}

@media (min-width: 768px) {
    .testimonials__box,.mws-section__box {
        padding:0 45px
    }
}

.testimonials__h,.mws-section__h {
    margin: 0 0 40px 0;
    max-width: 300px
}

@media (min-width: 1200px) {
    .testimonials__h,.mws-section__h {
        margin:0 0 80px 0
    }
}

.testimonials__arrows,.mws-section__arrows {
    display: flex;
    float: right
}

.timeline ul {
    padding: 25px 0 100px 0
}

.timeline ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-bottom: 50px;
    background: #09b3af;
    border: none;
    border-radius: 3px
}

.timeline ul li:last-child {
    padding-bottom: 10px
}

.timeline ul li::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -5px;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    z-index: 1;
    border-radius: 50%;
    background: #FFF;
    box-shadow: 0px 1px 9px 0px rgba(50,50,50,0.5)
}

.timeline ul li div {
    position: relative;
    top: -5px;
    width: 400px;
    box-sizing: border-box
}

.timeline ul li:nth-child(odd) div {
    left: 45px;
    padding-right: 30px
}

.timeline ul li:nth-child(even) div {
    left: -449px;
    text-align: right;
    padding-left: 30px
}

.timeline time {
    display: block;
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 8px;
    line-height: 1
}

.timeline ul li::after {
    transition: background .5s ease-in-out
}

.timeline ul li.in-view::after {
    background: #F45B69
}

@media screen and (max-width: 900px) {
    .timeline ul li div {
        width:250px
    }

    .timeline ul li:nth-child(even) div {
        left: -289px;
        text-align: left;
        padding-right: 30px;
        padding-left: 0
    }
}

@media screen and (max-width: 600px) {
    .timeline ul li {
        margin-left:20px
    }

    .timeline ul li div {
        width: calc(100vw - 91px)
    }

    .timeline ul li:nth-child(even) div {
        left: 45px
    }
}
</style>
