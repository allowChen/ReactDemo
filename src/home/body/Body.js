import React, {Component} from 'react'
import All from './All'
import Spell from './Spell'
import Linker from './Linker'

import './body.css'

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            all: [
                {
                    title: 'PC产品',
                    con: ['英雄联盟', '魔兽世界', '星际争霸', '地下城与勇士']
                },
                {
                    title: '手机应用',
                    con: ['和平精英', '王者荣耀', '自走棋', '炉石传说']
                }
            ],
            new: [
                {
                    title: null,
                    con: ['任正非：正解“华为被禁”是与非', '马化腾谈华为事件：拿来主义空间变小', '微软从在线商店中移除华为MateBook X Pro', '国家市场监管总局谈“浏览器主页劫持”']
                }
            ],
            link: [
                {
                    img: require('../../images/1.png'),
                    title: '数据统计',
                    con: '位于印度洋的西南方'
                },
                {
                    img: require('../../images/2.png'),
                    title: '数据预测',
                    con: '爱沙尼亚位于欧洲东北部'
                },
                {
                    img: require('../../images/3.png'),
                    title: ' 流量分析',
                    con: ' 位于南亚印度次大陆东南方外海的岛国，属于亚洲'
                },
                {
                    img: require('../../images/4.png'),
                    title: '广告发布',
                    con: '位于波罗的海东岸的北欧国家，是波罗的海国家之一'
                }
            ]
        }
    }

    links() {
        return this.state.link.map((item, index) => {
            return <Linker key={index} index={index} con={item}/>
        })
    }

    render() {
        return (
            <div className='body'>
                <div className='body-left'>
                    <All title='全部产品' con={this.state.all}/>
                    <All title='最新消息' con={this.state.new}/>
                </div>
                <div className='body-right'>
                    <Spell/>
                    <div className='link'>
                        {this.links()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body