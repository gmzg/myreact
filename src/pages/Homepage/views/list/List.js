import React,{Component} from 'react'
import {Listbox} from './stylelist'
import { Grid } from 'antd-mobile'
import http from 'http'

class  GridExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  render(){
    let data = this.state.data.map((value)=>({
      icon:value.imgUrl,
      text:value.content
    }))
    return (
      <Listbox>
        <Grid data={data}
            columnNum={5}
            carouselMaxRow={2}
            isCarousel={true}
            hasLine	= {false}
        >
        </Grid>
      </Listbox>
    )
  }
  async componentDidMount(){
    let data = (await http({url:"/pager/view/m-index/"})).data.modules[1].data.moduleList[0].ads
    this.setState({
      data
    })
  }
  
}
export default GridExample