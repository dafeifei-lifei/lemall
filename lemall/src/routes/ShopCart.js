import React from "react"
import {connect} from "react-redux"
import {Icon} from "antd"
import "../static/css/shopCart.less"
import "../static/css/reset.min.css"
import action from "../store/action"

class ShopCart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            state:this.props.shopCart.state
        }
    }

    render() {
        console.log(this);
        let {count} = this.props.shopCart;
        let {state} = this.props.shopCart;
        return <div className={"shopCartBox"}>
            <div className={"shopHead"}>
                <Icon type="left" onClick={() => this.props.history.go(-1)}/>
                <span>购物车</span>
                <Icon type="form"/>
            </div>

            <div className={"shopBody"}>
            <div><span>乐视自营</span></div>
            <div>
                <div className={"select_check"}>
                    <input type={"checkbox"} id={"ipt"} checked={!!state} onClick={this.select}/>
                    <label htmlFor={"ipt"}><Icon type={"check"}/></label>
                </div>
                <div>
                    <a><img
                        src={"https://img2-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513648027217.jpg"}
                        alt={""}/></a>
                    <div className={"shop"}>
                        <span>X55L超级影视会员</span>
                        <span>(一个月会员)</span>
                        <span>X55L 55吋</span>
                    </div>
                </div>
                <div>
                    <span className={"span1"}>¥{2799.00*count}</span>
                    <p>
                        <span onClick={this.minus}><Icon type="minus"/></span>
                        <span>{count}</span>
                        <span onClick={this.plus}><Icon type="plus"/></span>
                    </p>
                </div>
            </div>
        </div>

            <div className={"shopBody"}>
                <div><span>乐视自营</span></div>
                <div>
                    <div className={"select_check"}>
                        <input type={"checkbox"} id={"ipt2"}/>
                        <label htmlFor={"ipt2"}><Icon type={"check"}/></label>
                    </div>
                    <div>
                        <a><img
                            src={"https://img2-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513648027217.jpg"}
                            alt={""}/></a>
                        <div className={"shop"}>
                            <span>X55L超级影视会员</span>
                            <span>(一个月会员)</span>
                            <span>X55L 55吋</span>
                        </div>
                    </div>
                    <div>
                        <span className={"span1"}>¥2799.00</span>
                        <p>
                            <span><Icon type="minus"/></span>
                            <span>1</span>
                            <span><Icon type="plus"/></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={"shopBody"}>
                <div><span>乐视自营</span></div>
                <div>
                    <div className={"select_check"}>
                        <input type={"checkbox"} id={"ipt3"}/>
                        <label htmlFor={"ipt3"}><Icon type={"check"}/></label>
                    </div>
                    <div>
                        <a><img
                            src={"https://img2-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513648027217.jpg"}
                            alt={""}/></a>
                        <div className={"shop"}>
                            <span>X55L超级影视会员</span>
                            <span>(一个月会员)</span>
                            <span>X55L 55吋</span>
                        </div>
                    </div>
                    <div>
                        <span className={"span1"}>¥2799.00</span>
                        <p>
                            <span><Icon type="minus"/></span>
                            <span>1</span>
                            <span><Icon type="plus"/></span>
                        </p>
                    </div>
                </div>
            </div>

            {/*<div className={"shopFooter"}>
                <div className="shopFooter_left">
                    <input type={"checkbox"} id={"ipt1"}/>
                    <label htmlFor={"ipt1"}><Icon type={"check"}/></label>
                    <span>全选</span>
                </div>
                <div className="shopFooter_mid">
                    <div>
                        <span>商品总额</span>
                        <span>¥ 0.00</span>
                    </div>
                    <div>
                        <span>已优惠</span>
                        <em>¥ 0.00</em>
                        <i>不含运费</i>
                    </div>
                </div>
                <div className="shopFooter_right">
                    <a href="#">去结算</a>
                </div>
            </div>*/}
            <div className={"shopFooter"}>
                 <div className="shopFooter-left">
                     <input type={"checkbox"} id={"iptAll"}/>
                     <label htmlFor={"iptAll"}><Icon type={"check"}/></label>
                     <span>全选</span>
                 </div>
                <div className="shopFooter-mid clearfix">
                     <h4 className="shopFooter-mid-t">
                         <span>商品总额</span>
                         <i>¥0.00</i>
                     </h4>
                    <h4 className="shopFooter-mid-b">
                        <span>商品总额</span>
                        <i>¥0.00</i>
                        <em>不含运费</em>
                    </h4>
                </div>
                <div className="shopFooter-right">
                    <a href="#">去结算</a>
                </div>
            </div>


        </div>
    }

    minus=()=>{
        let {count,state} =  this.props.shopCart;
        if(count<1){
            return;
        }
        count-=1;
        this.props.shopCartCount(count,state);


    }

    plus=()=>{
        let {count,state} =  this.props.shopCart;
        count+=1;
        this.props.shopCartCount(count,state);

    }

    select=()=>{
        let {count} = this.props.shopCart;
        console.log(this.state.state);
        let tongbuState=this.state.state==1?0:1;
        this.setState({
            state:this.state.state==1?0:1
        });
        this.props.shopCartCount(count,tongbuState);
    }



}

export default connect(state=>state.shopCart,action.shopCart)(ShopCart);