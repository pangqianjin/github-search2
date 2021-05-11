import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
      }

    componentDidMount(){
        this.token = PubSub.subscribe('addUsers', (_, stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state;
        return (
            <div className="result">
                {
                    isFirst ? <h1>输入关键字，然后点击搜索</h1>:
                    isLoading ? <h1>加载中......</h1>:
                    err ? <h1>{err.message}</h1>:
                    users.length===0 ?<h1>未找到相关用户...</h1>:
                    users.map((user)=>{
                        return <Item key={user.id} html_url={user.html_url} img_src={user.avatar_url} img_desp={user.login} />
                    })
                }   
            </div>
        )
    }
}
