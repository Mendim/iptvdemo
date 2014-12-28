function userDetail(user_id) {
    return "<a href='/main/user_info/" + user_id + "'> " + user_id + "</a>";
}

function adDetail(user_id) {
    return "<a href='/main/accurate_adpush/" + user_id + "'> " + "查看" + "</a>";
}

function pushStatus(value) {
    if(value == 0) {
        return "<i class='fa fa-check-square status-ok'></i>";
    }
    else {
        return "<i class='fa fa-minus-square status-error'></i>";
    }
}

function pushAD() {
    return "<a href='#'><i class='fa fa-send-o'></i></a>";
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
            { "title": "最近更新时间", "class": "center" },
            { "title": "个性广告包", "class": "center" },
            { "title": "投放状态", "class": "center" },
            { "title": "立即投放", "class": "center"}
        ],
        "data": [
            [userDetail(302105), "2014-12-28", adDetail(302105), pushStatus(0), pushAD()],
            [userDetail(302106), "2014-12-28", adDetail(302106), pushStatus(0), pushAD()],
            [userDetail(302107), "2014-12-28", adDetail(302107), pushStatus(0), pushAD()],
            [userDetail(302108), "2014-12-28", adDetail(302108), pushStatus(0), pushAD()],
            [userDetail(302109), "2014-12-28", adDetail(302109), pushStatus(1), pushAD()],
            [userDetail(302110), "2014-12-28", adDetail(302110), pushStatus(0), pushAD()],
            [userDetail(302111), "2014-12-28", adDetail(302111), pushStatus(0), pushAD()],
            [userDetail(302112), "2014-12-28", adDetail(302112), pushStatus(0), pushAD()],
            [userDetail(302113), "2014-12-28", adDetail(302113), pushStatus(1), pushAD()],
            [userDetail(302114), "2014-12-28", adDetail(302114), pushStatus(0), pushAD()],
            [userDetail(302115), "2014-12-28", adDetail(302115), pushStatus(0), pushAD()],
            [userDetail(302116), "2014-12-28", adDetail(302116), pushStatus(1), pushAD()],
            [userDetail(302117), "2014-12-28", adDetail(302117), pushStatus(0), pushAD()],
            [userDetail(302118), "2014-12-28", adDetail(302118), pushStatus(0), pushAD()],
            [userDetail(302119), "2014-12-28", adDetail(302119), pushStatus(0), pushAD()],
            [userDetail(302120), "2014-12-28", adDetail(302120), pushStatus(0), pushAD()],
            [userDetail(302121), "2014-12-28", adDetail(302121), pushStatus(1), pushAD()],
            [userDetail(302122), "2014-12-28", adDetail(302122), pushStatus(0), pushAD()],
            [userDetail(302123), "2014-12-28", adDetail(302123), pushStatus(0), pushAD()],
            [userDetail(302124), "2014-12-28", adDetail(302124), pushStatus(0), pushAD()],
            [userDetail(302125), "2014-12-28", adDetail(302125), pushStatus(1), pushAD()]
        ]
    });
});