import React,{Component} from 'react'
import http from 'http'
import {Swiperbox} from './styleswiper'
import Swiper from 'swiper'
class Swipers extends Component{
    constructor(props){
        super(props)
        this.state = {
            swiperimg:[]
        }
    }
    render(){
        return (
            <Swiperbox>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                       this.state.swiperimg.map((value,index)=>{
                           return (
                            <div className="swiper-slide" key={index}>
                                <img src={value.imgUrl} alt={value.imgTargetValue}/>
                            </div>
                           )
                       })   
                    }
                </div>
              </div>     
            </Swiperbox>
            
        )
    }
    async componentDidMount(){
      let img = (await http({url:"/pager/view/m-index/"})).data.modules[0].data.moduleList[0].ads
      this.setState({
          swiperimg:img
      }
      )       
    }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            loop: true,
            autoplay: true
            },
          ) 
    }
}
export default Swipers