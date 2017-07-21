$(function() {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0") {
            $('.J-mask').show()
            alert("您使用的版本是IE6,出于安全考虑,请使用IE8及以上版本或其他浏览器");
        } else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $('.J-mask').show()
            alert("您使用的版本是IE7,出于安全考虑,请使用IE8及以上IE版本或其他浏览器");
        }
    })