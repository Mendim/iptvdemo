function userDetail(user_id) {
    return "<a href='/main/user_info/" + user_id + "'> " + user_id + "</a>";
}

function userStatus(value) {
    if(value == 0) {
        return "<i class='fa fa-check-square status-ok'></i>";
    }
    else {
        return "<i class='fa fa-minus-square status-error'></i>";
    }
}

function tvType(value) {
    switch(value) {
        case 1:
            return "电视剧";
        case 2:
            return "电影";
        case 3:
            return "新闻";
        case 4:
            return "体育";
        case 5:
            return "综艺";
        case 6:
            return "本地生活";
        case 7:
            return "家庭伦理";
        default :
            return "未定义";
    }
}


function pushAD(value) {
    if(value == 0) {
        return "<i class='fa fa-send-o status-ok'></i>";
    }
    else {
        return "<i class='fa fa-ban status-error'></i>";
    }
}


$(function() {
    "use strict";

    // 业务收入统计
    var $accountTable = $("#account-table");

    $accountTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "order": [[ 0, "asc" ]],
        "columns": [
            { "title": "用户ID", "class": "center" },
            { "title": "在线状态", "class": "center" },
            { "title": "平均在线时长", "class": "center" },
            { "title": "最爱节目类型", "class": "center" },
            { "title": "直播广告切换率 (%)", "class": "center"},
            { "title": "广告更新状态", "class": "center"}
        ],
        "data": [
            [userDetail(302105), userStatus(0), 1.7, tvType(2), 39.7, pushAD(0)],
            [userDetail(302106), userStatus(0), 1.7, tvType(4), 59.7, pushAD(1)],
            [userDetail(302107), userStatus(0), 5.0, tvType(2), 21.6, pushAD(0)],
            [userDetail(302108), userStatus(0), 5.3, tvType(6), 61.9, pushAD(0)],
            [userDetail(302109), userStatus(1), 5.7, tvType(5), 28.8, pushAD(1)],
            [userDetail(302110), userStatus(0), 2.8, tvType(5), 31.3, pushAD(0)],
            [userDetail(302111), userStatus(0), 5.0, tvType(7), 57.6, pushAD(1)],
            [userDetail(302112), userStatus(0), 1.5, tvType(5), 41.0, pushAD(0)],
            [userDetail(302113), userStatus(1), 5.3, tvType(6), 63.7, pushAD(1)],
            [userDetail(302114), userStatus(0), 2.9, tvType(5), 54.0, pushAD(0)],
            [userDetail(302115), userStatus(0), 2.2, tvType(5), 62.7, pushAD(0)],
            [userDetail(302116), userStatus(1), 1.2, tvType(2), 52.0, pushAD(1)],
            [userDetail(302117), userStatus(0), 3.7, tvType(1), 44.6, pushAD(0)],
            [userDetail(302118), userStatus(0), 5.0, tvType(1), 42.1, pushAD(0)],
            [userDetail(302119), userStatus(0), 5.3, tvType(4), 41.0, pushAD(0)],
            [userDetail(302120), userStatus(0), 6.0, tvType(5), 67.2, pushAD(0)],
            [userDetail(302121), userStatus(1), 5.1, tvType(4), 40.3, pushAD(1)],
            [userDetail(302122), userStatus(0), 1.8, tvType(7), 24.0, pushAD(0)],
            [userDetail(302123), userStatus(0), 4.1, tvType(3), 28.8, pushAD(0)],
            [userDetail(302124), userStatus(0), 1.8, tvType(3), 43.6, pushAD(0)],
            [userDetail(302125), userStatus(1), 1.6, tvType(5), 50.1, pushAD(1)]
        ]
    });
});