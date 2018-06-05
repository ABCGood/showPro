// var result = "";
// $(document).ready(function () {
//     $.ajax({
//         url : "https://www.easy-mock.com/mock/5b0b98f01d8d252e99077df3/showPro/tabContent",//请求地址
//         dataType : "json",//数据格式
//         type : "get",//请求方式
//         async : false,//是否异步请求
//         success : function(data) {   //如果发送成功
//             result = data;
//         }
//     });
//     console.log(result);
//     laytpl($('#tabContent').html()).render(result.tabContent, function (html) {
//         // console.log(result.data.content.length)
//         if (result.data){
//             $('#tabTextContent').append(html);
//         } else {
//             $('#tabTextContent').html(html)
//         }
//     });
// });
// var mySwiper = new Swiper('.swiper-container',{
//     slidesPerView: 'auto',
//     loopedSlides: 2,
// });

// $(function() {
//     function setCurrentSlide(ele, index) {
//         $(".swiper1 .swiper-slide").removeClass("selected");
//         ele.addClass("selected");
//         //swiper1.initialSlide=index;
//     }
//
//     var swiper1 = new Swiper('.swiper1', {
// //		设置slider容器能够同时显示的slides数量(carousel模式)。
// //		可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
// //		loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
//         slidesPerView: 4.2,
//         paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
//         spaceBetween: 10,//slide之间的距离（单位px）。
//         freeMode: true,//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
//         loop: false,//是否可循环
//         onTab: function(swiper) {
//             var n = swiper1.clickedIndex;
//         }
//     });
//     swiper1.slides.each(function(index, val) {
//         var ele = $(this);
//         ele.on("click", function() {
//             setCurrentSlide(ele, index);
//             swiper2.slideTo(index, 500, false);
//         });
//     });
//
//     var swiper2 = new Swiper('.swiper2', {
//         //freeModeSticky  设置为true 滑动会自动贴合
//         direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
//         loop: false,
//         centeredSlides:false,
// //					effect : 'fade',//淡入
//         //effect : 'cube',//方块
//         //effect : 'coverflow',//3D流
// //					effect : 'flip',//3D翻转
//         autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
//         onSlideChangeEnd: function(swiper) {  //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
//             var n = swiper.activeIndex;
//             setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
//             swiper1.slideTo(n, 500, false);
//         }
//     });
// });
var mySwiper = new Swiper('.swiper-container',{
    slidesPerView: 'auto',
    loopedSlides: 2,
});

layui.use('element', function(){
    var $ = layui.jquery
        ,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
});

layui.use('rate', function(){
    var rate = layui.rate;
    //只读
    rate.render({
        elem: '#test1'
        ,value: 5
        ,readonly: true
        ,theme: '#FA2F32'
    });
    rate.render({
        elem: '#test2'
        ,value: 5
        ,readonly: true
        ,theme: '#FA2F32'
    });
});
