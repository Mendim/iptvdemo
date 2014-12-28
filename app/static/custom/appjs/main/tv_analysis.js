$(function() {
    "use strict";

    // 本月热门节目
    var entertainmentChartDom = document.getElementById('entertainment-chart-pane');
    var entertainmentChart = echarts.init(entertainmentChartDom);
    var entertainmentOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>收视率 : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['金牌调解','满仓进城','非你莫属','新神雕侠侣','我是大医生','变形记','决胜制高点',
                '中国好声音','我该怎么办','包公来了', '电视剧', '综艺', '本地生活', '新闻', '访谈', '其他']
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
                    {value:26.5, name:'电视剧', selected:true},
                    {value:32.3, name:'综艺'},
                    {value:16.3, name:'本地生活'},
                    {value:7.6, name:'新闻'},
                    {value:11.5, name:'访谈'},
                    {value:5.8, name:'其他'}
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
                    {value:0.634, name:'金牌调解'},
                    {value:0.587, name:'满仓进城'},
                    {value:0.560, name:'非你莫属'},
                    {value:0.504, name:'新神雕侠侣'},
                    {value:0.484, name:'我是大医生'},
                    {value:0.424, name:'变形记'},
                    {value:0.385, name:'决胜制高点'},
                    {value:0.380, name:'中国好声音'},
                    {value:0.371, name:'我该怎么办'},
                    {value:0.337, name:'包公来了'}
                ]
            }
        ]
    };

    entertainmentChart.setOption(entertainmentOption);

    // 本月热门节目
    var $entertainmentTable = $("#entertainment-table");

    $entertainmentTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "节目名称",  "class": "center" },
            { "title": "播出频道",  "class": "center" },
            { "title": "节目分类",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ["1" , "金牌调解", "江西卫视", "专题", 0.260, 2.41],
            ["2" , "我不是明星", "浙江卫视", "综艺", 0.203, 1.89],
            ["3" , "非你莫属", "天津卫视", "综艺", 0.198, 1.84],
            ["4" , "家庭幽默录", "江西卫视", "综艺", 0.172, 1.59],
            ["5" , "我是大医生", "北京卫视", "生活", 0.170, 1.46],
            ["6" , "变形记", "湖南卫视", "专题", 0.157, 1.58],
            ["7" , "决胜制高点", "深圳卫视", "专题", 0.153, 1.46],
            ["8" , "直播上海", "东方卫视", "生活", 0.141, 1.42],
            ["9" , "我该怎么办", "云南卫视", "生活", 0.126, 1.39],
            ["10", "包公来了", "湖北卫视", "综艺", 0.119, 1.31]
        ]
    });

     // 热门综艺节目对比
    var $compareTable = $("#compare-table");

    $compareTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "节目名称",  "class": "center" },
            { "title": "播出频道",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ['1' ,'爸爸去哪儿第二季' , '湖南卫视', 3.749, 16.11],
            ['2' ,'非诚勿扰' , '江苏卫视', 2.392, 7.47],
            ['3' ,'我是歌手' , '湖南卫视', 2.294, 6.38],
            ['4' ,'快乐大本营' , '湖南卫视', 1.989, 5.38],
            ['5' ,'花儿与少年' , '湖南卫视', 1.809, 8.3],
            ['6' ,'最强大脑' , '江苏卫视', 1.705, 7.19],
            ['7' ,'中国喜剧星' , '浙江卫视', 1.528, 4.38],
            ['8' ,'笑傲江湖' , '东方卫视', 1.403, 4.42],
            ['9' ,'中国梦想秀' , '浙江卫视', 1.333, 4.21],
            ['10','中国达人秀' , '东方卫视', 1.306, 4.12]
        ]
    });

    // 热门综艺节目对比

    var $compareChart = $('#compare-chart-pane');

    $compareChart.highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '热门综艺节目对比'
        },
        subtitle: {
            text: '2014年'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '市场份额 (%)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} %</b>'
        },
        series: [{
            name: '市场份额',
            data: [
                ['爸爸去哪儿(二)', 16.11],
                ['非诚勿扰', 7.47],
                ['我是歌手', 6.38],
                ['快乐大本营', 5.38],
                ['花儿与少年', 8.3],
                ['最强大脑', 7.19],
                ['中国喜剧星', 4.38],
                ['笑傲江湖', 4.42],
                ['中国梦想秀', 4.21],
                ['中国达人秀', 4.12]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });

    // 黄金时段电视剧
    var goldChartDom = document.getElementById('gold-chart-pane');
    var goldChart = echarts.init(goldChartDom);
    var goldOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>{a} : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['满仓进城','少林寺传奇','四十九日祭','姥爷的抗战','团圆饭','一仆二主','盾神','新神雕侠侣']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        series : [
            {
                name:'收视率',
                type:'pie',
                radius : [30, 160],
                roseType : 'radius',
                selectedMode: 'single',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:1.020, name:'满仓进城'},
                    {value:0.783, name:'少林寺传奇'},
                    {value:0.743, name:'四十九日祭'},
                    {value:0.642, name:'姥爷的抗战'},
                    {value:0.588, name:'团圆饭'},
                    {value:0.545, name:'一仆二主'},
                    {value:0.545, name:'盾神'},
                    {value:0.502, name:'新神雕侠侣'}
                ]
            }
        ]
    };

    goldChart.setOption(goldOption);

    // 黄金时段电视剧
    var $goldTable = $("#gold-table");

    $goldTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "电视剧名称",  "class": "center" },
            { "title": "播出频道",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ["1" , "满仓进城", "江西卫视", 0.260, 2.41],
            ["2" , "少林寺传奇", "浙江卫视", 0.203, 1.89],
            ["3" , "四十九日祭", "天津卫视", 0.198, 1.84],
            ["4" , "姥爷的抗战", "江西卫视", 0.172, 1.59],
            ["5" , "团圆饭", "北京卫视", 0.170, 1.46],
            ["6" , "一仆二主", "湖南卫视", 0.157, 1.58],
            ["7" , "盾神", "深圳卫视", 0.153, 1.46],
            ["8" , "新神雕侠侣", "湖南卫视", 0.141, 1.42]
        ]
    });


    // 晚间时段热门节目
    var nightChartDom = document.getElementById('night-chart-pane');
    var nightChart = echarts.init(nightChartDom);
    var nightOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} <br/>收视率 : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['金牌调解','我不是明星','非你莫属','家庭幽默录像','我是大医生','变形记','决胜制高点',
                '直播上海','我该怎么办','包公来了', '综艺', '专题', '生活']
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
                    {value:7.35, name:'综艺', selected:true},
                    {value:3.56, name:'专题'},
                    {value:2.13, name:'生活'}
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
                    {value:0.634, name:'金牌调解'},
                    {value:0.587, name:'我不是明星'},
                    {value:0.560, name:'非你莫属'},
                    {value:0.504, name:'家庭幽默录像'},
                    {value:0.484, name:'我是大医生'},
                    {value:0.424, name:'变形记'},
                    {value:0.385, name:'决胜制高点'},
                    {value:0.380, name:'直播上海'},
                    {value:0.371, name:'我该怎么办'},
                    {value:0.337, name:'包公来了'}
                ]
            }
        ]
    };

    nightChart.setOption(nightOption);

    // 晚间时段热门节目
    var $nightTable = $("#night-table");

    $nightTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "排名", "class": "center" },
            { "title": "节目名称",  "class": "center" },
            { "title": "播出频道",  "class": "center" },
            { "title": "节目分类",  "class": "center" },
            { "title": "收视率",  "class": "center" },
            { "title": "市场份额",  "class": "center" }
        ],
        "data": [
            ["1" , "金牌调解", "江西卫视", "专题", 0.260, 2.41],
            ["2" , "我不是明星", "浙江卫视", "综艺", 0.203, 1.89],
            ["3" , "非你莫属", "天津卫视", "综艺", 0.198, 1.84],
            ["4" , "家庭幽默录", "江西卫视", "综艺", 0.172, 1.59],
            ["5" , "我是大医生", "北京卫视", "生活", 0.170, 1.46],
            ["6" , "变形记", "湖南卫视", "专题", 0.157, 1.58],
            ["7" , "决胜制高点", "深圳卫视", "专题", 0.153, 1.46],
            ["8" , "直播上海", "东方卫视", "生活", 0.141, 1.42],
            ["9" , "我该怎么办", "云南卫视", "生活", 0.126, 1.39],
            ["10", "包公来了", "湖北卫视", "综艺", 0.119, 1.31]
        ]
    });
});