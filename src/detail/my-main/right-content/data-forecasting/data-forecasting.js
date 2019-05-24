import React from 'react'
import './data-forecasting.css'

class DataForecasting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: ['购买数量','媒介','有效时间','总价'],
      count: '1',
      medium: '纸质报告',
      validTime: '一年',
      totalPrice: '500',
      flag: 0
    }
  }

  sele(e, num) {
    this.setState({
      flag: num,
      medium: e.target.innerText
    })
  }

  sub() {
    let temp = this.state.count
    temp = --temp
    this.setState({
      count: this.state.count>1?temp:this.state.count,
      totalPrice: this.state.count>1?500*temp:500
    })
  }

  add() {
    let temp = this.state.count
    temp = ++ temp
    this.setState({
      count: temp,
      totalPrice: 500*temp
    })
  }

  render() {
    return (
    <div>
      <div className="DF-right">
        <div className="DF-right-top">
          <h1>数据预测</h1>
          <p className="right-top-content">未来,大数据会变得越来越重要,其核心应用预测也会成为互联网行业以及产业变革的重要力量,我们很有
            必要对数据预测及其分析方法进行全面目且深入的了解.在这一点上,《大数据预测》是本很好的读物,适合大数据所有相关行业的人阅读</p>
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
                <button className={0===this.state.flag?'active':null} onClick={(e) => this.sele(e,0)}>纸质报告</button>
                <button className={1===this.state.flag?'active':null} onClick={(e) => this.sele(e,1)}>pdf</button>
                <button className={2===this.state.flag?'active':null} onClick={(e) => this.sele(e,2)}>页面报告</button>
                <button className={3===this.state.flag?'active':null} onClick={(e) => this.sele(e,3)}>邮件</button>
              </li>
              <li>{this.state.validTime}</li>
              <li>{this.state.totalPrice}元</li>
              <button className="buy" onClick={() => {
                this.props.onClick(this.state)
              }}>立即购买
              </button>
            </div>
          </div>
        </div>
        <div className="DF-right-bottom">
          <h1>产品说明</h1>
          <p className="right-bottom-content">2020年的一天,在你驱车前往公司的路上,导航系统通过预测交通流量,会自动帮你选择一条最合适的交通路线;车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么,并推荐沿途的早餐店;你的电子社交助理已经为你自动选择了你可能感兴趣的社交网站信息;当车内系统预测到你驾车有些分心时,座椅会自动震动进行提醒......以上这些情景不是科幻大片独有的,他们有的已经或会在未来的某一天成为现实.而这一切所依靠的就是预测分析技术.大数据时代下,作为其核心,预测分析已在商业和社会中得到广泛应用.随着越来越多的数据被记录和整理,未来预测分析必定会成为所有领域的关键技术.作为预测分析领域的专家,埃里克'西格尔博士深谙预测分析界已经实现和正在发生的事情.面临的问题和将来可能的前景.在《大数据预测》一书中,他结合预测分析的应用实例,对其进行了深入,细致且全面的解读.关于预测分析,你想了解的全部,你的生活以及这个世界会因为预测分析改变到什么程度,《大数据预测》都会告诉你.</p>
        </div>
      </div>
    </div>
    )
  }
}

export default DataForecasting