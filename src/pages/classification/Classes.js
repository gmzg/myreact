import React,{Component} from "react"

import http from "http"

import {
  Box,
  Listheader,
  Mainclass,
  Mainleft
} from "./styleClass"
import BScroll from 'better-scroll'
import left from '../../assets/images/left.png'
class Classes extends Component{
    constructor(){
      super()
      this.state = {
        leftlist:[],
        index:Number
      }
    }
    render(){
      return(
        <Box>
          <Listheader>
              <img src={left}/>
              <div>
                  <i className="iconfont icon-sousuo"></i>
                  <input type ="text" placeholder="搜索专业人才为您服务，如:包装设计"/>
              </div>
            </Listheader>
          <Mainclass>
            <Mainleft ref={div=>this.scroll=div}>
              <ul>
                {
                  this.state.leftdata&&this.state.leftdata.map((value,index)=>{
                    return (
                      <li key={index} onTouchStart={(e)=>
                         this.Click(index,e)  
                      }
                      className={this.state.index==index?"heightcolor":""}
                      >{value.name}</li>
                    )
                  })
                }
              </ul>
            </Mainleft>
          </Mainclass>
        </Box>
      )
    }
    async componentDidMount(){
      console.log('19879878')
      let data = (await http({
          url:"/getClassification/",
          method:"get"
      })).data.classifications
      console.log(data)
      this.setState({
        leftdata:data
      })
      this.bscroll = new BScroll(this.scroll,{
        click: true,
      })
    }
    Click(index,e){
      this.setState({
        index
      })
      this.getCriticalPoint(e)
    }
    getCriticalPoint(e){
      if(e){
        let clientY = e.touches[0].clientY
        let top = clientY-44<64
        let bottom = clientY-44-(window.innerHeight-90)>-64
        if(top){
          console.log(11111)
          this.bscroll.scrollBy(0,64,100)
          this.bscroll.refresh()
        }
        if(bottom){
          this.bscroll.scrollBy(0,-64,100)
          this.bscroll.refresh()
        }
      }
    }
}
export default Classes