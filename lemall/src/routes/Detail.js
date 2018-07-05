import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {Icon} from "antd"
import Qs from "qs"
import action from "../store/action/index.js"
import Banner from "./../routes/Detail/Banner.js"
import "./../static/css/detail.less"
import {queryDetail} from "../api/detail.js"
import result from "../static/json/detail.json"
import Linkage from "./Detail/linkage.js"


class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            rote: false,
            rote_one: false,
            memberDiscount: [
                {time: "1个月", dec: "裸机赠送1个月超级影视会员", price: 0.00},
                {time: "6个月", dec: "电影立减150元，含6个月超级影视会员", price: 290.00},
                {time: "1年", dec: "电影立减150元，含12个月超级影视会员", price: 490.00},
                {time: "2年", dec: "电影立减150元，含24个月超级影视会员", price: 980.00}
            ],
            detail: {content: "1个月", price: 0.00},
            evaluate: [{
                name: "鑫龙哥",
                star: "http://img1-lemall.letvimg.com/wap/20150703/default/1269149961952114",
                dec: "唯一遗憾的就是居然不配语音功能的遥控器，后来自己又买了一个语音功能的遥控器。",
                time: "2018-06-05 21:12:41"
            }, {
                name: "快乐观点2446",
                star: "http://img1-lemall.letvimg.com/wap/20150703/default/1269149761687662",
                dec: "安裝費居然收了179，掛羊頭賣狗肉，有名無實；含七啊！",
                time: "2018-05-04 10:41:04"
            }, {
                name: "北京乐迷",
                star: 'http://img1-lemall.letvimg.com/wap/20150703/default/1269150025591070',
                dec: "已收到货，增值税开票相关信息已发至你们的邮箱，请查阅！",
                time: "2018-05-02 15:59:13"
            }],
            img: ["https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667682242.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1514281833166.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667694409.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667697576.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1514281853836.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667705223.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667709478.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667713275.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201801/1515575021606.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201801/1515575059117.jpg@imageview/3/p/100", "https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667727602.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513752116359.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513752121418.jpg@imageview/3/p/100", "https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513752125560.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/wap/20170405/default/14434802091893746"]
        }
    }

    render() {
        let {location: {search}, select} = this.props,
            queryObj = Qs.parse(search.substr(1));
        if(!search || !select.toString()) return "";
        let name,bigpic,dec,price;
        if (queryObj.idlx === "classify"){
            name=select[parseFloat(queryObj.id)-1].name;
            bigpic=select[parseFloat(queryObj.id)-1].bigpic;
            dec=select[parseFloat(queryObj.id)-1].dec;
            price=select[parseFloat(queryObj.id)-1].price
        }
        let size = /(\d)+/g.exec(name)[0];
        return <div className="detailBox">
            {/*回退按钮*/}
            <div className="backButton" onClick={() => {
                this.props.history.go(-1)
            }}>
                <Icon type="left-circle"></Icon>
            </div>
            {/*商品详情轮播图*/}
            <Banner imgData={bigpic}/>
            {/*商品简介*/}
            <div className="intro">
                <h3><span>乐视自营</span>{name}</h3>
                <p>{dec}</p>
                <p className="price">￥{price}</p>
                <Linkage></Linkage>
            </div>
            {/*商品规格*/}
            <div className="specification">
                <p><b>已选</b><span>{name}</span><span>{size}寸</span><span>1件</span></p>
                <div className="clickShow">
                    <div className={this.state.rote === true ? "show" : "unShow"}>
                        <p>型号</p>
                        <span>{name}</span>
                        <p>尺寸</p>
                        <span>{size}寸</span>
                    </div>
                </div>
                <div className="active">
                    <i onClick={this.rotate} className={this.state.rote === true ? "rotateLeft" : "rotateRight"}></i>
                </div>
            </div>
            {/*会员*/}
            <div className="member">
                <div className="title">
                    <p>影视会员</p>
                    <div className="center">超级影视会员({this.state.detail.content}会员)</div>
                    <div className="memberPrice">￥{this.state.detail.price}</div>
                    <i onClick={this.rotate_one}
                       className={this.state.rote_one === true ? "rotateLeft" : "rotateRight"}></i>
                </div>
                <ul className={this.state.rote_one === true ? "show" : "unShow"}>
                    {
                        this.state.memberDiscount.map((item, index) => {
                            return <li key={index}>
                                <div className="memberLeft">
                                    <p>{`超级影视会员(${item.time}会员)x1`}</p>
                                    <p>{item.dec}</p>
                                </div>
                                <div className="memberPrice">￥{item.price}</div>
                                <div className="memberRadio">
                                    <input type="radio" id={`check${index}`} name="member"
                                           onClick={this.checked.bind(this, index)}/>
                                    <label htmlFor={`check${index}`}><Icon type="check"></Icon></label>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            {/*评估*/}
            <div className="evaluate">
                <div className="title">
                    <p>全部评价({this.state.evaluate.length})</p>
                    <p>好评度<span>95%</span></p>
                    <i></i>
                </div>
                {
                    this.state.evaluate.map((item, index) => {
                        return <div className="evaluateDetail" key={index}>
                            <div className="person">
                                <div className="icon">
                                    <img src="http://img1-lemall.letvimg.com/wap/20150701/default/1094985529810084"
                                         alt=""/>
                                </div>
                                <div className="name">
                                    <span>{item.name}</span>
                                </div>
                                <div className="star">
                                    <img src={item.star} alt=""/>
                                </div>
                            </div>
                            <p>{item.dec}</p>
                            <span>{item.time}</span>
                        </div>
                    })
                }
                <div className="more">
                    <span>查看更多评价</span>
                </div>
            </div>
            {/*图文详情*/}
            <div className="picDetail">
                <div className="picTitle"><span>图文详情</span></div>
                {
                    this.state.img.map((item, index) => {
                        return <p key={index}><img src={item} alt=""/></p>
                    })
                }
            </div>
            {/*加入购物车*/}
            <div className="add">
                <div className="shoppingCartIcon"><Link to={"/shopCart"}><Icon type="shopping-cart"></Icon>
                    <p>0ddasda</p></Link></div>
                <div className="addCart" onClick={this.addCart}>加入购物车</div>
            </div>
            {/*弹出框*/}
            <div ref={x => this.alertBox = x} className={"alertUnshow"}>
                {this.props.addBack ? "请稍后重试" : "商品已加入购物车"}
            </div>
        </div>
    }

    rotate = (ev) => {
        this.setState({
            rote: !this.state.rote
        })
    };
    rotate_one = () => {
        this.setState({
            rote_one: !this.state.rote_one
        })
    };
    checked = (index) => {
        this.setState({
            detail: {
                content: this.state.memberDiscount[index]["time"],
                price: this.state.memberDiscount[index]["price"]
            }
        })
    };
    addCart = async () => {

        let {location, add} = this.props;
        let obj = Qs.parse(location.search.substr(1));
        console.log(obj);
        await this.props.add(obj);
        this.alertBox.classList.add("alertBox");
        this.timer=setTimeout(() => {
            this.alertBox.classList.remove("alertBox")
        },1500);
    }


}

export default connect(state => ({...state.detail, ...state.select}), action.detail)(Detail);