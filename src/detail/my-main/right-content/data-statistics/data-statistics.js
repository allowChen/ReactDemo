import React from 'react'
import './data-statistics.css'

class DataStatistics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ['产品类型', '适用地区', '有效时间', '总价'],
            count: '红色版',
            medium: '北京',
            validTime: '半年',
            totalPrice: '500',
            flag: 0
        }
    }

    sele(e, num) {
        this.setState({
            flag: num,
            count: e.target.innerText
        })
    }

    handleChange(e) {
        this.setState({
            medium: e.target.value
        })
    }

    render() {
        let flag = this.state.flag
        return (
            <div>
                <div className="DS-right">
                    <div className="DS-right-top">
                        <h1>数据统计</h1>
                        <p className="right-top-content">历史资料,科学实验,检验,统计等所获得的和用于科学研究,技术设计,查证,决策等的数值加以统计为解决方案做前期准备</p>
                        <div className="right-top-form">
                            <div className="form-left">
                                <ul>
                                    {this.state.arr.map((el, index) => {
                                        return <li key={index}>{el}:</li>
                                    })}
                                </ul>
                            </div>
                            <div className="form-right">
                                <li className="buy-count">
                                    <button className={flag === 0 ? 'active' : null}
                                            onClick={e => this.sele(e, 0)}>红色版
                                    </button>
                                    <button className={flag === 1 ? 'active' : null}
                                            onClick={e => this.sele(e, 1)}>绿色版
                                    </button>
                                    <button className={flag === 2 ? 'active' : null}
                                            onClick={e => this.sele(e, 2)}>紫色版
                                    </button>
                                </li>
                                <li>
                                    <select
                                        value={this.state.medium}
                                        onChange={(e) => this.handleChange(e)}
                                    >
                                        <option value="北京">北京</option>
                                        <option value="上海">上海</option>
                                        <option value="广州">广州</option>
                                        <option value="深圳">深圳</option>
                                    </select>
                                </li>
                                <li>半年</li>
                                <li>500元</li>
                                <button onClick={() => {
                                    this.props.onClick(this.state)
                                }}>立即购买
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="DS-right-bottom">
                        <h1>产品说明</h1>
                        <p className="right-bottom-content">历史资料,科学实验,检验,统计等所获得的和用于科学研究,技术设计,查证,决策等的数值加以统计为解决方案做前期准备</p>
                        <div className="right-bottom-form">
                            <table>
                                <tbody>
                                <tr>
                                    <td>安全安保</td>
                                    <td>办公文教</td>
                                    <td>彩票</td>
                                    <td>车辆物流</td>
                                    <td>车辆物流</td>
                                    <td>出版传媒</td>
                                    <td>电脑硬件</td>
                                </tr>
                                <tr>
                                    <td>电子电工</td>
                                    <td>房地产建筑装修</td>
                                    <td>分类平台</td>
                                    <td>服装鞋帽</td>
                                    <td>箱包饰品</td>
                                    <td>化工原料制品</td>
                                    <td>机械设备</td>
                                </tr>
                                <tr>
                                    <td>家庭日用品</td>
                                    <td>家用电器</td>
                                    <td>教育培训</td>
                                    <td>节能环保</td>
                                    <td>金融服务</td>
                                    <td>礼品</td>
                                    <td>旅游住宿</td>
                                </tr>
                                <tr>
                                    <td>美容化妆</td>
                                    <td>母婴护理</td>
                                    <td>农林牧渔</td>
                                    <td>软件</td>
                                    <td>商务服务</td>
                                    <td>生活服务</td>
                                    <td>食品保健品</td>
                                </tr>
                                <tr>
                                    <td>手机数码</td>
                                    <td>通讯服务设备</td>
                                    <td>网络服务</td>
                                    <td>医疗服务</td>
                                    <td>游戏</td>
                                    <td>运动休闲娱乐</td>
                                    <td>招商加盟</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataStatistics