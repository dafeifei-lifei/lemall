import React from "react"
import {connect} from "react-redux"
import {Icon,Button} from "antd"
class Register extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="registerBox">
            <div className="title">
                <div className="logo">
                    <img src="http://i2.letvimg.com/lc04_img/201803/12/17/36/CNlogo2x.png" alt=""/>
                </div>
                <p>一个帐号玩转所有乐视服务</p>
            </div>
            <div className="loginMessage">
                <div className="userName">
                    <Icon type="user"></Icon>
                    <input type="text" placeholder="邮箱/手机号"/>
                </div>
                <div className="userPassword">
                    <Icon type="lock"></Icon>
                    <input type="password" placeholder="密码"/>
                    <Icon type="eye-o"></Icon>
                </div>
            </div>
            <div className="checkIn">
                <div>
                    <img src="https://i2.letvimg.com/lc02_iscms/201510/12/18/40/68f6330f9aca42db8e89c70fc459e28b.png" alt=""/>
                    <span>我已阅读并同意</span>
                    <b>乐视用户协议</b>
                </div>
                <Button type="primary">注册</Button>
                <p><Icon type="mail"></Icon>短信验证</p>
            </div>
            <div className="bottom">
                <p>语言:简体中文 国家/地区:中国</p>
                <p>客服电话:10109000</p>
            </div>
        </div>
    }
}
export default connect()(Register);