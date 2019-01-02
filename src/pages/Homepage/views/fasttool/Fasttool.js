import React,{Component,Fragment} from 'react'

import {
    Title,
    List
} from './stylefast'

import http from 'http'

class FastTool extends Component {
    constructor(props){
        super(props)
        this.state = {
            item:[]
        }
    }
    render(){
        return (
            <Fragment>
                <Title>快捷工具</Title>
                <List>
                  {
                      this.state.item.map((value,index)=>{
                        return (
                            <li key={index}>
                                <img src={value.imgUrl}/>
                                <span>{value.content}</span>
                            </li>
                        )
                      })
                  }
                </List>
            </Fragment>
        )
    }
   async componentDidMount(){
     let data = (await http({url:"/pager/view/m-index/"})).data.modules[3].data.moduleList[0].ads
     this.setState({
        item:data
    })
   }
   
}
export default FastTool