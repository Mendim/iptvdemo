$(function() {
    "use strict";

    // 用户分析
    var $polarChartDom = document.getElementById('polar-chart');
    var $polarChart = echarts.init($polarChartDom);
    var $polarChartOption = {
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
    $polarChart.setOption($polarChartOption);

    // 电视台收视率
    var tvcrmChartDom = document.getElementById('tvcrm-chart');
    var tvcrmChart = echarts.init(tvcrmChartDom);
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

    tvcrmChart.setOption(tvcrmOption);

    // 每日观看时长
    var $onlineChart = $('#online-chart');
    $onlineChart.highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: '每日观看时长'
        },
        subtitle: {
            text: '2014年 11月'
        },
        xAxis: {
            categories: ['01号','04号','07号','10号','13号','16号','19号','22号','25号','28号','30号']
        },
        yAxis: {
            title: {
                text: '时长（小时）'
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

    // 节目型分布
    var $tcChartDom = document.getElementById('tv-chart');
    var $tvChart = echarts.init($tcChartDom);
    var $tvChartOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>收视率 : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['金牌调解', '新神雕侠侣', '满仓进城', '新闻联播', '包公来了', 'Top Gear', '早间新闻', '综艺', '电视剧', '新闻','其他']
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
    $tvChart.setOption($tvChartOption);



});