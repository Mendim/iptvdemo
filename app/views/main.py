# coding: utf-8
from flask import render_template,  Blueprint
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
            content_title='收视率统计')

@mainView.route('/tv_analysis/')
@login_required
def tv_analysis():
    return render_template('main/pages/tv_analysis.html',
            content_title='节目内容统计')

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

@mainView.route('/user_info/')
@mainView.route('/user_info/<int:user_id>')
@login_required
def user_info(user_id=None):
    if user_id:
        return render_template('main/pages/user_detail.html',
            content_title='深度用户分析',
            content_id=user_id)

    return render_template('main/pages/user_info.html',
        content_title='深度用户分析')

@mainView.route('/voidad_analysis/')
@login_required
def voidad_analysis():
    return render_template('main/pages/voidad_analysis.html',
            content_title='直播广告分析')

@mainView.route('/epg_analysis/')
@login_required
def epg_analysis():
    return render_template('main/pages/epg_analysis.html',
            content_title='EPG展示分析')
