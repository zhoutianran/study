//var userInfo = JSON.parse($.cookie("userInfo"));
//
//var htmlStr = template("userInfoTpl", userInfo);
//
//$("#profile").html(htmlStr);
define(["jquery","template","cookie"],function($,template){
    if(!(location.pathname=="/login"||location.pathname=="/dashboard/login"||location.pathname=="/index.php/dashboard/login")){
        var userInfo= JSON.parse($.cookie("userinfo"));
        var htmlstr=template("userInfoTpl",userInfo);
        $("#profile").html(htmlstr);
    }
})

