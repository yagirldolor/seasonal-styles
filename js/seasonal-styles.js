$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);


        $("html").css("background-color", "pink");

        //left what is the attribute, right what to change the attribute to
        $("#wear").attr("src", "images/spring-wear.jpg");

        $("#logo").attr("src", "images/spring.gif");

        $("header h3").text("Jump into Spring wear!");


    });
});