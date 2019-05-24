import React from 'react'
import './my-main.css'
import BuyInfo from '../buy/buy-info'
import LeftTitle from './left-title/left-title'
import DataStatistics from './right-content/data-statistics/data-statistics'
import DataForecasting from './right-content/data-forecasting/data-forecasting'
import FlowAnalysis from './right-content/flow-analysis/flow-analysis'
import Advertising from './right-content/advertising/advertising'
import {withRouter} from 'react-router-dom'

class MyMain extends React.Component {
    constructor(props) {
        super(props)
        let num = Number(this.props.location.search.replace(/[^0-9]/g,''))
        this.state = {
            show: 'none',
            obj: null,
            flag: num ? num+1 : 1
        }
    }

    open(params) {
        this.setState({
            show: 'block',
            obj: params
        })
    }

    close(params) {
        this.setState({
            show: params
        })
    }

    handleClick(e) {
        this.setState({
            flag: e
        })
    }

    render() {
        let flag = this.state.flag
        return (
            <div>
                <BuyInfo show={this.state.show} obj={this.state.obj} onClick={(params) => this.close(params)}/>
                <div className="F-parent">
                    <LeftTitle flag={flag} onClick={(e) => this.handleClick(e)}/>
                    {/*数据统计*/}
                    <div style={{display: flag === 1 ? 'block' : 'none'}}>
                        <DataStatistics onClick={(params) => {
                            this.open(params)
                        }}/>
                    </div>
                    {/*数据预测*/}
                    <div style={{display: flag === 2 ? 'block' : 'none'}}>
                        <DataForecasting onClick={(params) => {
                            this.open(params)
                        }}/>
                    </div>
                    {/*流量分析*/}
                    <div style={{display: flag === 3 ? 'block' : 'none'}}>
                        <FlowAnalysis onClick={(params) => {
                            this.open(params)
                        }}/>
                    </div>
                    {/*广告发布*/}
                    <div style={{display: flag === 4 ? 'block' : 'none'}}>
                        <Advertising onClick={(params) => {
                            this.open(params)
                        }}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(MyMain)