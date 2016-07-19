
//晒单页面
$(function(){
	var w=$('.shai-pic').width()-24
	$('.shai-pic dd').width(w/4)
	$('.shai-pic dd').height(w/4)
})

var loginPhone=/^1[34578][0-9]{9}$///手机号
var loginPatrn=/^[^\s]{6,20}$/;//密码不能小于六位或大于20位
//登录验证
$(".login-login").click(function(){
	var phone=$(".login-phone").val()
	var paw=$(".login-paw").val()
	if(!loginPhone.test(phone)){
    		layer.open({
		    content: '请输入正确的手机号',
		    btn: ['确定']
		});
    		return;
  	}
	else if(paw.length<6){
    		layer.open({
		    content: '请输入正确的密码',
		    btn: ['确定']
		});
    		return;
  	}
})
//注册第一步
$(".login-next").click(function(){
	var phone=$(".login-phone").val()
	var sms=$(".login-sms").val()
	if(!loginPhone.test(phone)){
    		layer.open({
		    content: '请输入正确的手机号',
		    btn: ['确定']
		});
    		return;
  	}
	else if(sms.length!=4){
    		layer.open({
		    content: '请输入正确的验证码',
		    btn: ['确定']
		});
    		return;
  	}
})
//注册第二步
$(".login-yes").click(function(){
	var paw1=$(".login-sp1").val()
	var paw2=$(".login-sp2").val()
	if(paw1.length<6){
    		layer.open({
		    content: '密码不能小于6位',
		    btn: ['确定']
		});
    		return;
  	}
	else if(paw1!=paw2){
    		layer.open({
		    content: '两次输入的密码必须相同',
		    btn: ['确定']
		});
    		return;
  	}
})
//验证码
var smsTime=60;
function setsms(obj) { 
    var phone=$(".login-phone").val()
    if(smsTime==60){
		if(!loginPhone.test(phone)){
	    		layer.open({
			    content: '请输入正确的手机号',
			    btn: ['确定']
			});
	    		return;
	  	}
		else{
			$("#login-next").attr("disabled",false);
			obj.style.background="#FAC4C6";
	        obj.setAttribute("disabled", true);
	        obj.value="" + smsTime + "s"; 
	        smsTime--; 
		}
	}
    else if (smsTime == 0) {
        obj.style.background="#F96064";
        obj.removeAttribute("disabled");    
        obj.value="发送验证码"; 
        smsTime = 60; 
        return;
    }
    else{
		obj.style.background="#FAC4C6";
        obj.setAttribute("disabled", true);
        obj.value="" + smsTime + "s"; 
        smsTime--; 
	}
	setTimeout(function(){ 
	    setsms(obj)
	},1000)
}

//提现
$(function(){
	$(".dis-text").on('input', function(){
		var v=$(this).val()
		if(v!=''){
			$(".dis-btn").attr("disabled",false);
		}
		else
		$(".dis-btn").attr("disabled",true);
	})
	$(".tx-form-cle").click(function(){
		$(this).parent().find(".tx-form-con .tx-form-text").val('')
		$(".dis-btn").attr("disabled",true);
	})
})
