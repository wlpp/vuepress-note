# 暂时唔知写咩

<div class="weapon">
    <a class="type" href="https://www.runoob.com/html/html-tutorial.html" target="_blank">
        <img src="/img/html.png" alt="">
        <p class="flow-wave">Html</p>
    </a>
    <a class="type" href="https://www.runoob.com/css/css-align.html" target="_blank">
        <img src="/img/css.png" alt="">
        <p class="flow-wave">Css</p>
    </a>
    <a class="type" href="https://developer.mozilla.org/zh-CN/" target="_blank">
        <img src="/img/js.png" alt="">
        <p class="flow-wave">JavaScript</p>
    </a>
    <a class="type" href="https://cn.vuejs.org/v2/guide/" target="_blank">
        <img src="/img/vue.png" alt="">
        <p class="flow-wave">Vue</p>
    </a>
    <a class="type" href="https://react.docschina.org/docs/getting-started.html" target="_blank">
        <img src="/img/react.png" alt="">
        <p class="flow-wave">React</p>
    </a>

</div>
<style>
    .weapon{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 50px;
    }
    .type{
        font-weight: 500;
        width: 100px;
        text-decoration: none!important;    
        text-align: center;
        cursor: pointer;
        color:#444;
    }
    .type:hover img{
        animation:popIn 1.5s;
    }
    .type:hover .flow-wave{
        color:#ff0000;
    }
    @keyframes popIn {
        0% {
            transform: scale3d(0, 0, 0);
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        40% {
            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
            transform: scale3d(1.08, 1.08, 1.08);
        }
        60% {
            animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
            transform: scale3d(1, 1, 1);
        }
        80% {
            animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
            transform: scale3d(1.03, 1.03, 1.03);
        }
        100% {
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: scale3d(1, 1, 1);
        }
}
</style>
