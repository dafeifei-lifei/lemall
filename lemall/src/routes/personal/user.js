import React from "react"
import {connect} from "react-redux"
import {Icon} from "antd"
import {Link} from "react-router-dom"

class User extends React.Component {
    constructor() {
        super()
    }

    render() {

        return <div className="userBox">
            <div className="person">
                <div className="pic">
                    <img src="http://img2-lemall.letvimg.com/wap/20160318/default/4942896749464113" alt=""/>
                    <img src="https://img3-lemall.letvimg.com/wap/20160318/default/4943586322834628"/>
                </div>
                <div className="unlogin">
                    <p><Link to="/personal/login">登录 注册</Link></p>
                    <p>登录后查看个人信息</p>
                </div>
                <div className="login">
                    <p>用户名</p>
                    <p><Icon type="mobile"></Icon>已与手机绑定</p>
                </div>
            </div>
            <div className='order'>
                <div className="title">
                    <Link to="/personal/order?type=0">
                        <p>全部订单</p>
                        <p>查看全部订单</p>
                        <i></i>
                    </Link>
                </div>
                <div className="classify">
                    <ul className="clearfix">
                        <li>
                            <Link to="/personal/order?type=1">
                                <img src="http://img3-lemall.letvimg.com/wap/20160318/default/4948274489422075" alt=""/>
                                <p>待付款</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/personal/order?type=2">
                                <img src="http://img0-lemall.letvimg.com/wap/20160318/default/4948274672719886" alt=""/>
                                <p>待收货</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/personal/order?type=3">
                                <img src="http://img0-lemall.letvimg.com/wap/20160318/default/4948274754314100" alt=""/>
                                <p>待评价</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/personal/service">
                                <img src="http://img1-lemall.letvimg.com/wap/20160318/default/4948274846979592" alt=""/>
                                <p>维修/退换</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="asset">
                <div className="title">
                    <p>我的资产</p>
                </div>
                <div className="list">
                    <ul className="clearfix">
                        <li>
                            <Link to="/personal/coupon">
                                <p>0</p>
                                <p>优惠券</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/personal/bean">
                                <p>0</p>
                                <p>乐豆</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/personal/ecology">
                                <p>0</p>
                                <p>生态券</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="List top">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span>收货地址</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>乐迷俱乐部</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>分享邀请</span>
                            <i></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="List bottom">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span>离城公告</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>真伪查询</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>售后服务</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>配送范围查询</span>
                            <b>仅适用超级电视</b>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>意见反馈</span>
                            <i></i>
                        </a>
                    </li>
                </ul>
            </div>
            <h3>©2017乐视商城</h3>
        </div>
    }
}

export default connect()(User);