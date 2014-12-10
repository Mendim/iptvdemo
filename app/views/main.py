# coding: utf-8
from flask import render_template,  Blueprint, request, abort
from flask.ext.login import login_required

mainView = Blueprint('main', __name__)

@mainView.route('/')
@login_required
def index():
    return render_template('main/pages/main.html',
        content_title='收视概况')

@mainView.route('/tvcrm/')
@login_required
def tvcrm():
    return render_template('main/pages/tvcrm.html',
            content_title='收视率分析')


@mainView.route('/user_analysis/')
@login_required
def user_analysis():
    return render_template('main/pages/user_analysis.html',
            content_title='用户在线统计')

@mainView.route('/time_analysis/')
@login_required
def time_analysis():
    return render_template('main/pages/time_analysis.html',
            content_title='收视时长分析')


@mainView.route('/room/')
@mainView.route('/room/<int:room_name>')
@login_required
def room(room_name=None):
    if room_name == 1:
        return render_template('main/pages/room_detail.html',
            content_title='石家庄金石机房',
            web_3d_url = "#")

    return render_template('main/pages/room.html',
            content_title='机房资源统计')

@mainView.route('/flow/')
@login_required
def flow():
    return render_template('main/pages/flow.html',
            content_title='流量核算')

@mainView.route('/port/', methods=['GET'])
@login_required
def port():
    try:
        port_name = request.args.get('port').strip("\"")
        dev_name = request.args.get('device').strip("\"")
        month_value = request.args.get('month').strip("\"")
    except:
        return abort(404)

    return render_template('main/pages/port.html',
            port_name = port_name,
            dev_name = dev_name,
            month_value = month_value,
            content_title='端口详情')

@mainView.route('/business/')
@login_required
def business():
    return render_template('main/pages/business.html',
            content_title='收入评估')


@mainView.route('/customer/')
@login_required
def customer():
    return render_template('main/pages/customer.html',
            content_title='客户评估')

@mainView.route('/analyze-room/')
@login_required
def analyze_room():
    return render_template('main/pages/analyze_room.html',
            content_title='机房投资分析')

@mainView.route('/analyze-business/')
@login_required
def analyze_business():
    return render_template('main/pages/analyze_business.html',
            content_title='业务投资分析')
