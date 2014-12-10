$(function() {
    "use strict";

    // 用户最喜欢的节目类型
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
            data:['电视剧','综艺节目','新闻','体育','电影','本地生活','家庭伦理','教育']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        series : [
            {
                name:'最喜爱的类型',
                type:'pie',
                radius : [30, 160],
                roseType : 'radius',
                selectedMode: 'single',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:1.020, name:'电视剧'},
                    {value:0.783, name:'综艺节目'},
                    {value:0.743, name:'新闻'},
                    {value:0.642, name:'体育'},
                    {value:0.588, name:'电影'},
                    {value:0.545, name:'本地生活'},
                    {value:0.545, name:'家庭伦理'},
                    {value:0.502, name:'教育'}
                ]
            }
        ]
    };

    goldChart.setOption(goldOption);

    // 用户最喜欢的节目类型
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
                '中国好声音','我该怎么办','包公来了', '直播', '点播']
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
                    {value:7.35, name:'直播', selected:true},
                    {value:0.56, name:'点播'}
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

    // 晚间节目收视率
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
});