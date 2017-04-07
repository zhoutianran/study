define(["jquery","cookie","form"],function($){
    //获取用户登录之前的头像信息
  var userinfostr= $.cookie("userinfo");
    if(userinfostr){
        var userinfo=JSON.parse(userinfostr);
        $(".avatar .img-circle").attr("src",userinfo.tc_avatar)
    }


    $("form").submit(function(){
        $("form").ajaxSubmit({
            success:function(data){
                //alert(2)
                if(data.code==200){
                    $.cookie("userinfo",JSON.stringify(data.result));
//                        跳转页面
                    location.href='/'
                }else {
                    alert(data.msg);
                }
            }
        })
        return false;
    })
})

