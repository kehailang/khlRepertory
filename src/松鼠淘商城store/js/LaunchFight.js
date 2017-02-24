//上传图片
function clearFile(o) {
    $(o).parent().remove();
    var _length = $("#warp").find("li").length;
    if ($("#warp").find("li").eq(_length - 1).find("input").val() != "")
        $("#warp").append('<li><input type="file"  onchange="fileChange(this)" class="warp-img" name="f"><img src="images/add_tupian.jpg"><span class="del cIcon" onclick="clearFile(this)" style="display:none"></span><input type="hidden" value="0" name="imageId" /></li>');
    orderFile();
}

function fileChange(o) {
    var $file = $(o);
    $file.parent().find("span").css("display", "block");
    var fileObj = $file[0];
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    var $img = $(o).parent().find("img");
    if (fileObj && fileObj.files && fileObj.files[0]) {
        dataURL = windowURL.createObjectURL(fileObj.files[0]);
        $img.attr('src', dataURL);
    }
    var _length = $("#picture_file").find("div").length;
    if ($file.parent().index() + 1 == _length && _length < 9) {
        var _index = $file.parent().index() + 1;
        $file.parent().parent().append('<div class="refund_picture"><input type="file"  onchange="fileChange(this)" class="warp-img" name="f' + _index + '"><img src="images/add_tupian.jpg"><span class="del cIcon" onclick="clearFile(this)" style="display:none"></span><input type="hidden" value="0" name="imageId" /></div>');
        orderFile();
        $(".refund_picture").css({"height":$(".refund_picture").width()});
    }
}

function orderFile()
{
    $("#picture_file div").each(function () {
        var _index = $(this).index();
        $(this).find("[type=file]").attr("name", "f" + _index + "");
        $(this).find("[type=hidden]").attr("name", "imageId" + _index + "");
    });
}