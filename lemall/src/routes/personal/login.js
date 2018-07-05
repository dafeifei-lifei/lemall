import React from "react"
import {connect} from "react-redux"
import {Icon,Button} from "antd"
import {Link} from "react-router-dom"
class Login extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="loginBox">
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
                <Button type="primary">登录</Button>
                <div>
                    <span>短信验证码登录</span>
                    <span>重置密码</span>
                </div>
            </div>
            <div className="bottom">
                <p>从这里出发，开启乐视生态世界 <Link to="/personal/register"><span>立即注册</span></Link></p>
                <div className="other"><span></span><b>其他方式登录</b><span></span></div>
                <div className="logo">
                    <div>
                        <a href="javascript:;"><img src="https://i1.letvimg.com/lc02_iscms/201601/08/17/00/9574f0c68c0a45e8be319cddbb988bba.png"
                                                  alt=""/></a>
                    </div>
                    <div>
                        <a href="javascript:;"><img src="https://i2.letvimg.com/lc04_iscms/201601/08/17/00/06f459f0af924694bc362a37b487fed4.png" alt=""/></a>
                    </div>

                </div>
                <div className="language">
                    <p>语文:简体中文 国家/地区:中国</p>
                    <p>客服电话:1010 9000</p>
                </div>
            </div>
        </div>
    }
}
export default connect()(Login);