import React from 'react'
import './flow-analysis.css'

class FlowAnalysis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: ['购买数量','产品类型','有效时间','产品版本','总价'],
      count: '1',
      medium: '入门版',
      validTime: '半年',
      version: '客户版',
      totalPrice: '29',
      flagValidTime: 0,
      flagVersion: 0
    }
  }

  seleValidTime(e, num) {
    this.setState({
      flagValidTime: num,
      validTime: e.target.innerText
    })
  }
  seleVersion(e, num) {
    this.setState({
      flagVersion: num,
      version: e.target.innerText
    })
  }

  sub() {
    let temp = this.state.count
    temp = --temp
    this.setState({
      count: this.state.count>1?temp:this.state.count
    })
  }

  add() {
    let temp = this.state.count
    temp = ++temp
    this.setState({
      count: temp
    })
  }

  handleChange(e) {
    this.setState({
      medium: e.target.value
    })
  }

  render() {
    return (
    <div>
      <div className="FA-right">
        <div className="FA-right-top">
          <h1>流量分析</h1>
          <p className="right-top-content">是指在获得网站访问量基本数据的情况下对有关数据进行统计,分析,从中发现用户访问网站的规律,并将这些规律与网络营销策略等相结合,从而发现目前网络营销活动中可能存在的问题,并为进一步修正或重新指定网络营销策略提供依据.当然这样的定义时站在网络营销管理的角度来考虑的</p>
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
                <span className="bd-box subtract" onClick={() => this.sub()}>-</span>
                <input type="text" value={this.state.count} readOnly="readOnly" className="bd-box"/>
                <span className="bd-box add" onClick={() => this.add()}>+</span>
              </li>
              <li className="medium">
                <select
                value={this.state.medium}
                onChange={(e) => this.handleChange(e)}
                >
                  <option value="入门版">入门版</option>
                  <option value="测试版">测试版</option>
                  <option value="通用版">通用版</option>
                  <option value="正式版">正式版</option>
                </select>
              </li>
              <li className="validTime">
                <button className={0===this.state.flagValidTime?'active':null} onClick={(e) => this.seleValidTime(e,0)}>半年</button>
                <button className={1===this.state.flagValidTime?'active':null} onClick={(e) => this.seleValidTime(e,1)}>一年</button>
                <button className={2===this.state.flagValidTime?'active':null} onClick={(e) => this.seleValidTime(e,2)}>三年</button>
              </li>
              <li className="version">
                <button className={0===this.state.flagVersion?'active':null} onClick={(e) => this.seleVersion(e,0)}>客户版</button>
                <button className={1===this.state.flagVersion?'active':null} onClick={(e) => this.seleVersion(e,1)}>代理商版</button>
                <button className={2===this.state.flagVersion?'active':null} onClick={(e) => this.seleVersion(e,2)}>专家版</button>
              </li>
              <li>{this.state.totalPrice}元</li>
              <button className="buy" onClick={() => {
                this.props.onClick(this.state)
              }}>立即购买
              </button>
            </div>
          </div>
        </div>
        <div className="FA-right-bottom">
          <h1 className="product">产品说明</h1>
          <p>
            网站访问统计分析报告的基础数据源于网站流量统计信息,但其价值远高于原始数据资料.专业的网站访问统计分析报告对网络营销的价值,正如专业的财务分析报告对企业经营策略的价值
          </p>
          <h1>用户行为指标</h1>
          <p>用户行为指标主要反映用户时如何来到网站的,在网站上年停留了多长时间,访问了哪些页面等,主要的统计指标包括:</p>
          <p>用户在网站的停留时间;</p>
          <p>用户来源网站(也叫"引导网站");</p>
          <p>用户所使用的搜索引擎及其关键词;</p>
          <p>在不同时段的用户访问量情况等.</p>
          <h1>浏览网站方式</h1>
          <p>用户上网设备类型</p>
          <p>用户浏览器的名称和版本</p>
          <p>访问者电脑分辨率显示模式</p>
          <p>用户所使用到的操作系统名称和版本</p>
          <p>用户所在地理区域分布状况等</p>
        </div>
      </div>
    </div>
    )
  }
}

export default FlowAnalysis