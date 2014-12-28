$(function() {
    "use strict";

    // 用户分析
    var $polarChartDom = document.getElementById('polar-chart');
    var $polarChart = echarts.init($polarChartDom);
    var polarChartOption = {
        tooltip : {
            trigger: 'axis'
        },


        polar : [
           {
               indicator : [
                   { text: '娱乐综艺', max: 10},
                   { text: '新闻综合', max: 10},
                   { text: '本地生活', max: 10},
                   { text: '电视剧',  max: 10},
                   { text: '经济教育', max: 10}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '用户深度分析',
                type: 'radar',
                data : [
                    {
                        value : [3.6, 6.3, 7.5, 2.2, 7.8],
                        name : '用户深度分析'
                    }
                ]
            }
        ]
    };
    $polarChart.setOption(polarChartOption);

    // 电视台收视率
    var $tvcrmChartDom = document.getElementById('tvcrm-chart');
    var $tvcrmChart = echarts.init($tvcrmChartDom);
    var tvcrmOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} %'
        },
        grid: {
            borderWidth: 0,
            y: 5
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                data: ['湖南卫视', '江苏卫视', '浙江卫视', '上海卫视', '北京卫视']
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }
        ],
        series: [
            {
                name: '电视台收视率',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c} 小时'
                        }
                    }
                },
                data: [6.1, 2.8, 3.2, 1.9, 1.3],
                markPoint: {
                    tooltip: {
                        show: false
                    },
                    data: [
                        {xAxis:0 , y: 270, name:'湖南', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/hn.png'},
                        {xAxis:1 , y: 270, name:'江苏', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/js.png'},
                        {xAxis:2 , y: 270, name:'浙江', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/zj.png'},
                        {xAxis:3 , y: 270, name:'上海', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/sh.png'},
                        {xAxis:4 , y: 270, name:'北京', symbolSize:20, symbol:'image:///static/cdn/images/tvlogo/bj.png'}
                    ]
                }
            }
        ]
    };

    $tvcrmChart.setOption(tvcrmOption);

    // 每日在线时长
    var $onlineChart = $('#online-chart');
    $onlineChart.highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: '每日在线时长'
        },
        subtitle: {
            text: '2014年 11月'
        },
        xAxis: {
            categories: ['01号','04号','07号','10号','13号','16号','19号','22号','25号','28号','30号']
        },
        yAxis: {
            title: {
                text: '在线时长（小时）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '（小时）'
        },
        legend: {
            align: 'center',
            borderWidth: 0
        },
        series: [{
            name: '每日总时长',
            data: [3.2, 2.8, 1.9, 2.6, 3.1, 3.7, 2.6, 2.3, 3.2, 3.4, 2.5]
        },{
            name: '00 ~ 04 点',
            data: [0.1, 0.0, 0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0]
        }, {
            name: '04 ~ 08 点',
            data: [0.2, 0.1, 0.0, 0.1, 0.0, 0.1, 0.2, 0.2, 0.0, 0.1, 0.2]
        }, {
            name: '08 ~ 12 点',
            data: [0.4, 0.6, 0.5, 0.3, 0.5, 0.5, 0.3, 0.5, 0.4, 0.4, 0.3]
        }, {
            name: '12 ~ 16 点',
            data: [0.4, 0.3, 0.6, 0.5, 0.4, 0.6, 0.3, 0.4, 0.3, 0.4, 0.4]
        },{
            name: '16 ~ 20 点',
            data: [0.4, 0.3, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.4, 0.3, 0.1]
        },{
            name: '20 ~ 24 点',
            data: [1.5, 1.0, 0.2, 1.1, 1.0, 1.4, 1.6, 1.7, 1.1, 1.7, 1.9]
        }]
    });

    // 每日在线时长
    var $onlineTimeTable = $("#online-time-table");

    $onlineTimeTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "日期", "class": "center" },
            { "title": "00~04点 (小时)",  "class": "center" },
            { "title": "04~08点 (小时)",  "class": "center" },
            { "title": "08~12点 (小时)",  "class": "center" },
            { "title": "12~16点 (小时)", "class": "center" },
            { "title": "16~20点 (小时)", "class": "center" },
            { "title": "20~24点 (小时)", "class": "center" }
        ],
        "data": [
            ["11/01/14", 1.9, 0.9, 1.5, 0.6, 2.2, 2.7],
            ["11/02/14", 1.3, 0.9, 1.5, 0.6, 2.4, 2.5],
            ["11/03/14", 1.2, 0.8, 1.6, 0.6, 2.6, 2.0],
            ["11/04/14", 1.9, 0.5, 1.9, 0.6, 1.7, 2.3],
            ["11/05/14", 1.5, 0.6, 1.3, 0.6, 2.7, 2.9],
            ["11/06/14", 1.1, 0.6, 1.0, 0.6, 2.7, 2.7],
            ["11/07/14", 1.1, 0.7, 1.4, 0.6, 2.1, 2.2],
            ["11/08/14", 1.0, 0.9, 1.1, 0.6, 2.8, 2.8],
            ["11/09/14", 1.0, 0.6, 1.4, 0.6, 1.8, 2.9],
            ["11/10/14", 1.1, 0.7, 1.4, 0.6, 2.3, 2.1],
            ["11/11/14", 1.4, 0.9, 1.1, 0.6, 2.5, 2.1],
            ["11/12/14", 1.6, 0.7, 1.6, 0.6, 2.4, 2.1],
            ["11/13/14", 1.0, 0.8, 1.5, 0.6, 2.7, 2.6],
            ["11/14/14", 1.1, 0.9, 1.2, 0.6, 2.2, 2.7],
            ["11/15/14", 1.5, 0.8, 1.0, 0.6, 2.5, 2.9],
            ["11/16/14", 1.8, 0.6, 1.5, 0.6, 1.6, 2.4],
            ["11/17/14", 1.6, 0.7, 1.8, 0.6, 2.2, 2.7],
            ["11/18/14", 1.1, 0.8, 1.5, 0.6, 2.3, 2.9],
            ["11/19/14", 1.8, 0.6, 1.5, 0.6, 2.5, 2.2],
            ["11/20/14", 1.5, 0.8, 1.9, 0.6, 2.4, 2.4],
            ["11/21/14", 1.1, 0.8, 1.0, 0.6, 2.2, 2.5],
            ["11/22/14", 1.0, 0.8, 1.1, 0.6, 2.9, 2.7],
            ["11/23/14", 1.6, 0.7, 1.9, 0.6, 2.2, 2.3],
            ["11/24/14", 1.3, 0.7, 1.5, 0.6, 2.3, 2.2],
            ["11/25/14", 1.9, 0.7, 1.8, 0.6, 2.7, 2.9],
            ["11/26/14", 1.7, 0.8, 1.5, 0.6, 2.0, 2.0],
            ["11/27/14", 1.7, 0.9, 1.2, 0.6, 2.9, 2.3],
            ["11/28/14", 1.6, 0.6, 1.2, 0.6, 2.5, 2.5],
            ["11/29/14", 1.4, 0.8, 1.6, 0.6, 2.2, 2.4],
            ["11/30/14", 1.6, 0.9, 1.3, 0.6, 2.1, 2.2]
        ]
    });

    // 节目型分布
    var $tcChartDom = document.getElementById('tv-chart');
    var $tvChart = echarts.init($tcChartDom);
    var tvChartOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>观看时间 : {c} 小时 <br/>时间占比 : {d} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['金牌调解', '新神雕侠侣', '满仓进城', '新闻联播', '包公来了', 'Top Gear', '早间新闻', '综艺', '电视剧', '新闻', '生活', '其他']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        series : [
            {
                name:'节目类型',
                type:'pie',
                selectedMode: 'single',
                radius : [0, 70],

                // for funnel
                x: '20%',
                width: '40%',
                funnelAlign: 'right',
                max: 1548,

                itemStyle : {
                    normal : {
                        label : {
                            position : 'inner'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:6.35, name:'综艺', selected:true},
                    {value:8.56, name:'电视剧'},
                    {value:3.56, name:'新闻'},
                    {value:2.18, name:'生活'},
                    {value:5.13, name:'其他'}
                ]
            },
            {
                name:'节目名称',
                type:'pie',
                radius : [100, 140],

                // for funnel
                x: '60%',
                width: '35%',
                funnelAlign: 'left',
                max: 1048,

                data:[
                    {value:1.6, name:'金牌调解'},
                    {value:3.5, name:'新神雕侠侣'},
                    {value:2.5, name:'满仓进城'},
                    {value:3.2, name:'新闻联播'},
                    {value:1.9, name:'包公来了'},
                    {value:1.1, name:'Top Gear'},
                    {value:0.3, name:'早间新闻'}
                ]
            }
        ]
    };
    $tvChart.setOption(tvChartOption);

    // 节目型分布
    var $tvTable = $("#tv-table");

    $tvTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "日期", "class": "center" },
            { "title": "综艺（小时）",  "class": "center" },
            { "title": "电视剧（小时）",  "class": "center" },
            { "title": "新闻（小时）",  "class": "center" },
            { "title": "生活（小时）",  "class": "center" },
            { "title": "其他（小时）", "class": "center" }
        ],
        "data": [
            ["11/01/14", 1.9, 0.9, 1.5, 1.9, 0.9],
            ["11/02/14", 1.3, 0.9, 1.5, 1.3, 0.9],
            ["11/03/14", 1.2, 0.8, 1.6, 1.2, 0.8],
            ["11/04/14", 1.9, 0.5, 1.9, 1.9, 0.5],
            ["11/05/14", 1.5, 0.6, 1.3, 1.5, 0.6],
            ["11/06/14", 1.1, 0.6, 1.0, 1.1, 0.6],
            ["11/07/14", 1.1, 0.7, 1.4, 1.1, 0.7],
            ["11/08/14", 1.0, 0.9, 1.1, 1.0, 0.9],
            ["11/09/14", 1.0, 0.6, 1.4, 1.0, 0.6],
            ["11/10/14", 1.1, 0.7, 1.4, 1.1, 0.7],
            ["11/11/14", 1.4, 0.9, 1.1, 1.4, 0.9],
            ["11/12/14", 1.6, 0.7, 1.6, 1.6, 0.7],
            ["11/13/14", 1.0, 0.8, 1.5, 1.0, 0.8],
            ["11/14/14", 1.1, 0.9, 1.2, 1.1, 0.9],
            ["11/15/14", 1.5, 0.8, 1.0, 1.5, 0.8],
            ["11/16/14", 1.8, 0.6, 1.5, 1.8, 0.6],
            ["11/17/14", 1.6, 0.7, 1.8, 1.6, 0.7],
            ["11/18/14", 1.1, 0.8, 1.5, 1.1, 0.8],
            ["11/19/14", 1.8, 0.6, 1.5, 1.8, 0.6],
            ["11/20/14", 1.5, 0.8, 1.9, 1.5, 0.8],
            ["11/21/14", 1.1, 0.8, 1.0, 1.1, 0.8],
            ["11/22/14", 1.0, 0.8, 1.1, 1.0, 0.8],
            ["11/23/14", 1.6, 0.7, 1.9, 1.6, 0.7],
            ["11/24/14", 1.3, 0.7, 1.5, 1.3, 0.7],
            ["11/25/14", 1.9, 0.7, 1.8, 1.9, 0.7],
            ["11/26/14", 1.7, 0.8, 1.5, 1.7, 0.8],
            ["11/27/14", 1.7, 0.9, 1.2, 1.7, 0.9],
            ["11/28/14", 1.6, 0.6, 1.2, 1.6, 0.6],
            ["11/29/14", 1.4, 0.8, 1.6, 1.4, 0.8],
            ["11/30/14", 1.6, 0.9, 1.3, 1.6, 0.9]
        ]
    });

    // 广告时长与切换率
    var $switchAllChart = $('#switch-all-chart');

    $switchAllChart.highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '广告时长与切换率'
        },
        subtitle: {
            text: '2014年11月'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            max: 70,
            title: {
                text: '切换率（%）'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} %</b>'
        },
        series: [{
            name: '新闻节目后贴片',
            data: [
                ['0 ~ 15 秒钟' , 6.7 ],
                ['15 ~ 30 秒钟', 9.1 ],
                ['0.5 ~ 1 分钟', 14.2],
                ['1 ~ 2 分钟'  , 28.0],
                ['2 ~ 3 分钟'  , 32.5],
                ['3 ~ 4 分钟'  , 39.1],
                ['4 ~ 5 分钟'  , 41.8],
                ['5 ~ 6 分钟'  , 46.8],
                ['6 ~ 7 分钟'  , 51.8],
                ['7 ~ 8 分钟'  , 56.8],
                ['8 ~ 9 分钟'  , 63.8],
                ['9 ~ 10 分钟' , 68.8],
                ['10 分钟以上'  , 71.7]
            ]
        },{
            name: '电视剧后贴片',
            data: [
                ['0 ~ 15 秒钟' , 5.7 ],
                ['15 ~ 30 秒钟', 6.1 ],
                ['0.5 ~ 1 分钟', 12.2],
                ['1 ~ 2 分钟'  , 27.0],
                ['2 ~ 3 分钟'  , 31.5],
                ['3 ~ 4 分钟'  , 34.1],
                ['4 ~ 5 分钟'  , 40.8],
                ['5 ~ 6 分钟'  , 43.8],
                ['6 ~ 7 分钟'  , 49.8],
                ['7 ~ 8 分钟'  , 52.8],
                ['8 ~ 9 分钟'  , 60.8],
                ['9 ~ 10 分钟' , 69.8],
                ['10 分钟以上'  , 69.7]
            ]
        }, {
            name: '综艺节目后贴片',
            data: [
                ['0 ~ 15 秒钟' , 8.7 ],
                ['15 ~ 30 秒钟', 12.1 ],
                ['0.5 ~ 1 分钟', 16.2],
                ['1 ~ 2 分钟'  , 24.0],
                ['2 ~ 3 分钟'  , 36.5],
                ['3 ~ 4 分钟'  , 33.1],
                ['4 ~ 5 分钟'  , 45.8],
                ['5 ~ 6 分钟'  , 49.8],
                ['6 ~ 7 分钟'  , 56.8],
                ['7 ~ 8 分钟'  , 58.8],
                ['8 ~ 9 分钟'  , 60.8],
                ['9 ~ 10 分钟' , 64.8],
                ['10 分钟以上'  , 76.7]
            ]
        },{
            name: '生活节目后贴片',
            data: [
                ['0 ~ 15 秒钟' , 3.7 ],
                ['15 ~ 30 秒钟', 5.1 ],
                ['0.5 ~ 1 分钟', 8.2],
                ['1 ~ 2 分钟'  , 15.0],
                ['2 ~ 3 分钟'  , 22.5],
                ['3 ~ 4 分钟'  , 29.1],
                ['4 ~ 5 分钟'  , 34.8],
                ['5 ~ 6 分钟'  , 39.8],
                ['6 ~ 7 分钟'  , 45.8],
                ['7 ~ 8 分钟'  , 48.8],
                ['8 ~ 9 分钟'  , 53.8],
                ['9 ~ 10 分钟' , 58.8],
                ['10 分钟以上'  , 67.7]
            ]
        }]
    });

    window.onresize = function() {
        $polarChart.resize();
        $tvcrmChart.resize();
        $tvChart.resize();
    };

});