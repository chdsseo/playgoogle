
    // 检测用户代理是否是 Googlebot
    var ua = navigator.userAgent;
    if (ua.indexOf("Googlebot") !== -1) {
        // 如果是 Googlebot，将 <p> 标签内容清空
        document.getElementById("content").innerHTML = "";
    }