$(function () {
    $(window).on('load',function(){
        $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
        $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
        $("#splash-text").delay(1000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
        setTimeout(function(){
            $('#video')[0].play();
        },1000);
     });

      $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;	//idの上部の距離を取得
        $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
     });

     $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        let elem1Top = $('.elem1').offset().top;
        let elem2Top = $('.elem2').offset().top;

        if(scroll > elem1Top - windowHeight + 200){
          $('.elem1').animate({opacity: 1},1000);
        }

        if(scroll > elem2Top - windowHeight + 200){
          $('.elem2').animate({left: 0},500);
        }

      });
});

