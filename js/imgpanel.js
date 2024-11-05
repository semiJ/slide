$(function(){
    let total = $(".panel li").length;
    console.log(total);
    let i = 0;

    function bar(){
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on")
    }

    function move(){
        if(i == total - 1){
            i = 0;
            $(".panel").css({"margin-left":0})
        }else{
            i++
            $(".panel").stop().animate({"margin-left":-i * 500+"px"})
        }
        bar();
    }    

    // 무한 반복
    function start(){
        timer = setInterval(function(){
            move();
        }, 2000)
    }

    start();

    // 다음버튼
    $(".next").on("click", function(){
        clearInterval(start);
        move();
    })

    // 이전 버튼
    $(".prev").on("click", function(){
        clearInterval(start);
        i--;
        if(i < 0){
            $(".panel").css({"margin-left":"-2000px"});
            $(".panel").stop().animate({"margin-left":"-1500px"});
            i = 3;
        }else{
            $(".panel").stop().animate({"margin-left":-i * 500 });
        }
        bar();
    })

    // 내비게이션
    $(".navi li").on("click", function(){
        clearInterval(start);
        i = $(this).index();
        $(".panel").stop().animate({"margin-left":-i * 500})
        bar();
    })
})