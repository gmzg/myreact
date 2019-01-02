import React,{Component,Fragment} from 'react'

import {
    Homeheader,
    Searchmain,
    Searchhot,
    Searchlisttop,
    Searchlistbox
} from './stylesearch'
import {withRouter} from 'react-router-dom'
import http from 'http'
class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            hotdata:[],
            hotstatic:false,
            listdata:[],
            inputvalue:''
        }
        this.value = this.value.bind(this)
        this.back = this.back.bind(this) 
    }
    render(){
        console.log(this.state.inputvalue)
        return (
            <Fragment>
              <Homeheader>
                <div>
                    <i className="iconfont icon-sousuo"></i>
                    <input type ="text"  onChange={this.value} placeholder="搜索专业人才为您服务，如:包装设计"/>
                </div>
                    <span onClick={this.back}>取消</span>
              </Homeheader>
            <Searchmain>
                <Searchhot className={this.state.hotstatic ? 'none' : ''}>
                    <h1>热门搜索</h1>
                    <ul>
                        {
                            this.state.hotdata.map((value,index)=>{
                               return (
                                  <li key={index} onClick={()=>{
                                      this.onClick(value)
                                  }}>{value}</li> 
                               )   
                            })
                        }
                        
                    </ul>
                </Searchhot>
                <Searchlistbox className={this.state.hotstatic ? '' : 'none'}>
                    <Searchlisttop className={this.state.hotstatic ? '' : 'none'}>
                        <i>搜索“{this.state.inputvalue}”相关内容</i>
                    </Searchlisttop>
                    <ul>
                        {
                            this.state.listdata.map((value,index)=>{
                            return (
                                <li key={index} onClick={()=>{
                                    this.onClick(value.keyword)
                                }}>{value.keyword}</li>
                            )
                        })
                        }
                    </ul>
                </Searchlistbox>
                
            </Searchmain>
            </Fragment>
        )
    }
    async value(e){
        if(e.target.value){
            // this.setState({
            //     hotstatic:true
            // })
            let value = e.target.value;
            let data = (await http({
                url:"/search/prompt/intelligent/",
                method:"post",
                body:"keyword="+value,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })).data
            console.log(value,1)
            if(data.length>0){
                this.setState({
                    hotstatic:true,
                    listdata:data,
                    inputvalue:value
                })    
            }
        }else{
            this.setState({
                hotstatic:false
            })  
        }
    }
    async componentDidMount(){
        let data =  (await http({
            url:"/getHotWord/",
            method:"get"
        })).data
        console.log(data)
        this.setState({
            hotdata:data
        })
    }
    back(){
        this.props.history.go(-1)
    }
    onClick(value){
      this.props.history.push("/list",value)
    }
    componentDidUpdate(){
        console.log(88888)
    }

}
export default withRouter(Search)
