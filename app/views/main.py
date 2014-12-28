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
            content_title='频道统计')

@mainView.route('/tv_analysis/')
@login_required
def tv_analysis():
    return render_template('main/pages/tv_analysis.html',
            content_title='节目统计')

@mainView.route('/user_analysis/')
@login_required
def user_analysis():
    return render_template('main/pages/user_analysis.html',
            content_title='在线人数统计')

@mainView.route('/time_analysis/')
@login_required
def time_analysis():
    return render_template('main/pages/time_analysis.html',
            content_title='收视时长分析')

@mainView.route('/action_analysis/')
@login_required
def action_analysis():
    return render_template('main/pages/action_analysis.html',
            content_title='用户行为分析')

@mainView.route('/user_info/')
@mainView.route('/user_info/<int:user_id>')
@login_required
def user_info(user_id=None):
    if user_id:
        return render_template('main/pages/user_detail.html',
            content_title='深度用户挖掘',
            content_id=user_id)

    return render_template('main/pages/user_info.html',
        content_title='深度用户挖掘')

@mainView.route('/accurate_adpush/')
@mainView.route('/accurate_adpush/<int:user_id>')
@login_required
def accurate_adpush(user_id=None):
    if user_id:
        return render_template('main/pages/adpush_detail.html',
            content_title='精准广告投放',
            content_id=user_id)

    return render_template('main/pages/accurate_adpush.html',
            content_title='精准广告投放')

@mainView.route('/epg_analysis/')
@login_required
def epg_analysis():
    return render_template('main/pages/epg_analysis.html',
            content_title='EPG展示分析')
