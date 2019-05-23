import React from 'react'
import './advertising.css'

class Advertising extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: ['购买数量', '行业', '产品版本', '有效时间', '总价'],
      count: '1',
      medium: '出版业',
      validTime: '初级版',
      version: '半年',
      totalPrice: '500',
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

  sub() {
    let temp = this.state.count
    temp = --temp
    this.setState({
      count: this.state.count > 1 ? temp : this.state.count
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
          <p
          className="right-top-content">是指在获得网站访问量基本数据的情况下对有关数据进行统计,分析,从中发现用户访问网站的规律,并将这些规律与网络营销策略等相结合,从而发现目前网络营销活动中可能存在的问题,并为进一步修正或重新指定网络营销策略提供依据.当然这样的定义时站在网络营销管理的角度来考虑的</p>
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
                  <option value="出版业">出版业</option>
                  <option value="测试业">测试业</option>
                  <option value="通用业">通用业</option>
                  <option value="正式业">正式业</option>
                </select>
              </li>
              <li className="validTime">
                <button className={0 === this.state.flagValidTime ? 'active' : null}
                        onClick={(e) => this.seleValidTime(e, 0)}>初级版
                </button>
                <button className={1 === this.state.flagValidTime ? 'active' : null}
                        onClick={(e) => this.seleValidTime(e, 1)}>中级版
                </button>
                <button className={2 === this.state.flagValidTime ? 'active' : null}
                        onClick={(e) => this.seleValidTime(e, 2)}>高级版
                </button>
                <button className={3 === this.state.flagValidTime ? 'active' : null}
                        onClick={(e) => this.seleValidTime(e, 3)}>专家版
                </button>
              </li>
              <li className="version">
                {this.state.version}
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
          <p className="right-bottom-content">
            广告活动按照广告计划执行,到完成广告创作并形成广告作品之后,经过广告主的最后审核同意,即可送到预定的媒介发布刊播.这项工作一般由媒介部门的有关专业人员负责,他们的任务就是专门负责与有光媒介单位接洽,安排有关广告的发搏事宜,并对发搏质量实施监督.
          </p>
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

export default Advertising