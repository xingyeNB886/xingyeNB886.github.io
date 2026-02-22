$(function () {
    // 读取配置文件（确保setting.json路径正确）
    $.getJSON("setting.json", function (data) {
        // 1. 站点基础信息
        document.title = data.title;
        $("meta[name='description']").attr("content", data.description);
        $("meta[name='keywords']").attr("content", data.keywords);
        $("meta[name='author']").attr("content", data.author);

        // 2. 社交按钮跳转（关键：ID必须与index.html一致）
        $("#github").attr("href", "https://github.com/" + data.github);
        $("#qq").attr("href", data.qq ? "tencent://message/?uin=" + data.qq + "&Site=在线咨询&Menu=yes" : "#");
        $("#email").attr("href", "mailto:" + data.email);
        $("#telegram").attr("href", data.telegram ? "https://t.me/" + data.telegram : "#");
        $("#twitter").attr("href", data.twitter ? "https://twitter.com/" + data.twitter : "#");

        // 3. 快捷导航链接
        $("#link-url-1").attr("href", data.link_1[0]);
        $("#link-icon-1").attr("class", data.link_1[1]);
        $("#link-name-1").html(data.link_1[2]);
        $("#link-url-2").attr("href", data.link_2[0]);
        $("#link-icon-2").attr("class", data.link_2[1]);
        $("#link-name-2").html(data.link_2[2]);
        $("#link-url-3").attr("href", data.link_3[0]);
        $("#link-icon-3").attr("class", data.link_3[1]);
        $("#link-name-3").html(data.link_3[2]);
        $("#link-url-4").attr("href", data.link_4[0]);
        $("#link-icon-4").attr("class", data.link_4[1]);
        $("#link-name-4").html(data.link_4[2]);
        $("#link-url-5").attr("href", data.link_5[0]);
        $("#link-icon-5").attr("class", data.link_5[1]);
        $("#link-name-5").html(data.link_5[2]);
        $("#link-url-6").attr("href", data.link_6[0]);
        $("#link-icon-6").attr("class", data.link_6[1]);
        $("#link-name-6").html(data.link_6[2]);

        // 4. 版权信息
        $("#power-year").html(data.Copyright_year);
        $("#power-text").html(data.Copyright_text);

        // 5. 壁纸默认加载（可选）
        const randomWallpaper = data.wallpaper_api[Math.floor(Math.random() * data.wallpaper_api.length)][1];
        $("#bg").attr("src", randomWallpaper);
    }).fail(function () {
        alert("配置文件读取失败！请检查setting.json路径是否正确");
    });
});
