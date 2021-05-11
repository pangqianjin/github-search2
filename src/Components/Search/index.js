import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
    
    search = ()=>{
        const {value} = this.keywordNode
        // 发送请求前，通知App组件更新状态
        PubSub.publish('addUsers', {isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response=>{
                PubSub.publish('addUsers', {isLoading: false, users: response.data.items})
            },
            error=>{
                PubSub.publish('addUsers', {isLoading: false, err: error})
            }
        )
    }

    render() {
        return (
            <div className='search-bar'>
                <h2>搜索Github用户</h2>
                <input ref={c=>this.keywordNode=c} placeholder='请输入关键字' className='search-area' />
                <button onClick={this.search} className='search-btn'>搜索</button>
            </div>
        )
    }
}
