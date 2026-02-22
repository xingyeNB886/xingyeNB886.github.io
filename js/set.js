$(function () {
    // 读取配置文件
    $.getJSON("setting.json", function (data) {
        // 设置网站标题和描述
        document.title = data.title;
        $("meta[name='description']").attr("content", data.description);
        $("meta[name='keywords']").attr("content", data.keywords);
        $("#author").text(data.author);

        // 设置社交链接
        $("#github").attr("href", "https://github.com/" + data.github);
        $("#qq").attr("href", "tencent://message/?uin=" + data.qq + "&Site=在线咨询&Menu=yes");
        $("#email").attr("href", "mailto:" + data.email);
        $("#telegram").attr("href", "https://t.me/" + data.telegram);
        $("#twitter").attr("href", "https://twitter.com/" + data.twitter);

        // 设置快捷导航链接
        $("#blog").attr("href", data.blog);
        $("#drive").attr("href", data.drive);
        $("#music").attr("href", data.music);
        $("#photo").attr("href", data.photo);
        $("#video").attr("href", data.video);

        // 设置壁纸API
        if (data.wallpaper) {
            $(".tech-bg").css("background-image", "url(" + data.wallpaper + ")");
        }

        // 设置版权信息
        $("#copyright-year").text(new Date().getFullYear());
        $("#copyright-name").text(data.author);
    });
});
