function upImg(obj) {
    console.log(1)
    initUploadImg($(obj))
}

function deleteLi(obj) {
    $(obj).parents('li').remove()
    // if (!$('.on').length) {
    //     $('.prompt').show()
    // }
    var str = '<li class="col-25">\
                        <div class="pos-wrap">\
                            <input class="upload-input-btn" type="file" name="file" accept="image/*" onclick="upImg(this)">\
                            <img class="preview">\
                            <a href="javascript:;" class="delete-img" onclick="deleteLi(this)"></a>\
                        </div>\
                    </li>'
    $('.upload-img-wrap ul').append(str)
}

function initUploadImg(dom) {
    //初始化每个图片上传提示UI
    var preview = dom.next(),
        deleteImg = preview.next()
    dom.UploadImg({
        url: "//m.tnc.com.cn/up/upload/bit/result.htm?adminId=0&modelCode=buy&src=mqfc&userAuth=HxZKAaOG4ww=",
        width: "320",
        quality: "0.8",
        mixsize: "1000000000",
        type: "image/png,image/jpg,image/jpeg,image/pjpeg,image/gif,image/bmp,image/x-png",
        before: function() {
            preview.attr('src', 'loading.gif').show()
            deleteImg.show()
            //$('.prompt').hide()
            dom.addClass('on').parents('li').next().css({ 'opacity': 1 }).find('.upload-input-btn').show()
        },
        success: function(b) {
            if (b.code == 0) {
                preview.attr({
                    "src": b.file,
                    "data-id": b.imageCode
                })
            } else {
                //图片上传失败提示 b.message
            }
        }
    })
}