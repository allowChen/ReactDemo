import React from 'react'

class LeftTitle extends React.Component {

  render() {
    let flag = this.props.flag
    return (
      <div>
        <div className="F-left">
          <img src={require(`../../../images/${flag}.png`)} alt=""/>
          <ul>
            <li className={flag === 1 ? 'active' : null} onClick={() => this.props.onClick(1)}>数据统计</li>
            <li className={flag === 2 ? 'active' : null} onClick={() => this.props.onClick(2)}>数据预测</li>
            <li className={flag === 3 ? 'active' : null} onClick={() => this.props.onClick(3)}>流量分析</li>
            <li className={flag === 4 ? 'active' : null} onClick={() => this.props.onClick(4)}>广告发布</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default LeftTitle