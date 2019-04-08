
jQuery(function($) {
    $('#form-private').on('submit', function(event) {
        event.preventDefault();                         // отменяем событие по умолчанию
        if ( sendForm()===false ) {                     // если есть ошибки возвращает false
            return false;                               // прерываем выполнение скрипта
        }
        else {
            // alert("Все поля заполнены успешно");
        }
    });

    $(".textfield").on('focus', function() {            // textfield -текстовые поля
        if ($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).nextAll(".hidden_err").hide();

        }
    });

});

function sendForm() {
    var result=true;

    //Проверка имени
    var name=$("input[name=nameinfo]");
    if (name.val()=="") {
        $("#hidden_name").show();
        name.addClass("error");
        result=false;
    }

    //Проверка фамилии
     var lastName=$("input[name=surname]");
        if (lastName.val()=="") {
            $("#hidden_surname").show();
            lastName.addClass("error");
            result=false;
        }
    
    //Проверка email
    var email=$("input[name=email]");
    var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.val()=="") {
        $("#hidden_email").show();
        email.addClass("error");
        result=false;
    } else {
        if(pattern.test(email.val())==false){
            $("#hidden_email").show();
            email.addClass("error");
            result=false;
        }
    }

    //Проверка моб телефона
     var ph=$("input[name=phone]");
        if (ph.val()=="") {
            $("#hidden_phone").show();
            ph.addClass("error");
            result=false;
        }

    //Проверка индекса
     var post=$("input[name=index]");
        if (post.val()=="") {
            $("#hidden_index").show();
            post.addClass("error");
            result=false;
        }
    
    //Проверка адреса
     var city=$("input[name=adress]");
        if (city.val()=="") {
            $("#hidden_adress").show();
            city.addClass("error");
            result=false;
        }

}

jQuery(function($) {
        $(".showpic1").click(function(){
        $(".top-blocks__left").css("transition","5s");   
        $(".top-blocks__left").css("z-index","1");
        $(".top-blocks__left-fadepic1").fadeOut();
        $(".top-blocks__left-fadepic2").fadeOut();  
    });

        $(".showpic2").click(function(){
        $(".top-blocks__left").css("transition","5s");
        $(".top-blocks__left").css("z-index","0");
        $(".top-blocks__left-fadepic1").fadeIn(800);
        $(".top-blocks__left-fadepic2").fadeOut();
    });

        $(".showpic3").click(function(){
        $(".top-blocks__left").css("z-index","0");
        $(".top-blocks__left-fadepic2").fadeIn(800);
    });
    
});


function backTop() {
    let button = $(".back-to-top");

    $(window).on("scroll" , () => {                 //навешиваем событие скрол
        if ($(this).scrollTop() >= 100) {           // если больше 100px прокрутили - показываем кнопку
            button.fadeIn();                
        } else {
            button.fadeOut();
        }
    });

    button.on("click", (e) => {                     //навешиваем событие click
        e.preventDefault();                         //отменяем действие по умолчанию
        $("html").animate({scrollTop: 0}, 1000);    //анимируем скролтоп на 0
    })
}

backTop();
