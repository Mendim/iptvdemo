$(function() {
    "use strict";

    var $onlineTimeChart = $('#online-time-chart');

    $onlineTimeChart.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '用户观看广告时长'
        },
        subtitle: {
            text: '2014年 11月'
        },
        tooltip: {
            pointFormat: '观看次数: <b>{point.y} 万</b><br/>{series.name}: <b>{point.percentage:.1f} %</b>'
        },
        series: [{
            type: 'pie',
            name: '人数占比',
            innerSize: '45%',
            data: [
                ['0 ~ 15 秒', 16.4],
                ['15 ~ 60 秒', 9.4],
                {
                    name: '60 ~ 120 秒',
                    y: 15.4,
                    sliced: true,
                    selected: true
                },
                ['2 ~ 5 分钟', 12.4],
                ['5 ~ 8 分钟', 18.5],
                ['8 分钟以上', 22.6]
            ]
        }]
    });

});