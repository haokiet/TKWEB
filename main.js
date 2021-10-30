//hiện mật khẩu
var k = 0;

$(function() {
    $("#test").click(function() {
        k++;
        if (k % 2 != 0)
            $(".abc").attr("type", "text");
        else
            $(".abc").attr("type", "password");
    });
})
// mua sách
$(document).ready(function (){
    $("#mua1").hide();
})
    $(document).ready(function (){
        $("#mua").click(function(){
            var i="";
            var tenmua=document.getElementById("tenmua");
            if(tenmua.value=="")
            {
                i+="không được bỏ trống tên. ";
            }
            var sdtmua=document.getElementById("sdtmua");
            if(sdtmua.value=="")
            {
                i+="không được bỏ trống số điện thoại. "
            }
            var diachimua=document.getElementById("diachi");
            if(diachimua.value=="")
            {
                i+="không được để trống địa chỉ. "
            }
            var chek=document.getElementById("check");
            if(chek.checked==false)
            {
                i+="chưa chấp nhận điều khoản của BUYBOOK."
            }
            if(i!="")
            document.getElementById("chung").innerHTML=i+"\n";
            else
            {
                document.getElementById("thanhcong").innerHTML="nhận thông tin thành công xin quý khách đợi trong vài ngày để được giao hàng";
                tenmua.value="";
                sdtmua.value="";
                diachimua.value="";
                chek.checked= false;
                document.getElementById("chung").innerHTML="";
                $("#mua1").show();
            }
           
        })
    })
    // đăng nhập
    $(document).ready(function (){
        $("#tieptuc").hide();
        $("#dangnhap").click(function(){
            var i="";
            var ten=document.getElementById("tendangnhap");
            if(ten.value=="")
            {
                i+="chưa nhập tên đăng nhập. ";
            }
           var matkhau=document.getElementById("matkhau");
           if(matkhau.value=="")
           {
               i+="chưa nhập mật khẩu";
           }
           if(i!="")
            document.getElementById("chung1").innerHTML=i+"\n";
            else
            {
                document.getElementById("thanhcong1").innerHTML="đăng nhập thành công. ấn vào tiếp tục để mua sách";
                document.getElementById("thanhcong1").style.textAlign="center";
                $("#tieptuc").show();
            }
        })
    })
