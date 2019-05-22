import React from 'react'
import './flow-analysis.css'

class FlowAnalysis extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="F-parent">
        <div className="F-left">
          <img src={require('../../images/1.png')} alt=""/>
          <ul>
            <li>数据统计</li>
            <li>数据预测</li>
            <li>流量分析</li>
            <li>广告发布</li>
          </ul>
        </div>
        <div className="F-right">
          <div className="F-right-top">
            <h1>数据统计</h1>
            <p className="right-top-content">历史资料,科学实验,检验,统计等所获得的和用于科学研究,技术设计,查证,决策等的数值加以统计为解决方案做前期准备</p>
            <div className="right-top-form">
              <div className="form-left">
                <ul>
                  <li>产品类型:</li>
                  <li>适用地区:</li>
                  <li>有效时间:</li>
                  <li>总价:</li>
                </ul>
              </div>
              <div className="form-right">
                <li className="buy-count">
                  <button className="active">红色版</button>
                  <button>绿色版</button>
                  <button>紫色版</button>
                </li>
                <li>
                  <select name="" id="">
                    <option value="">北京</option>
                    <option value="">上海</option>
                    <option value="">广州</option>
                    <option value="">深圳</option>
                  </select>
                </li>
                <li>半年</li>
                <li>500元</li>
                <button>立即购买</button>
              </div>
            </div>
          </div>
          <div className="F-right-bottom">
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

export default FlowAnalysis