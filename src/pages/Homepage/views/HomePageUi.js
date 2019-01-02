import React,{Component} from "react"

import {Homebox,Containerbox} from './styleHomepage'

import Homepageheader from './Homepageheader'
import Swiperbox from './swiper/Swiper'
import List from './list/List'
import Middle from "./middleimg/Middleimg"
import Fasttool from "./fasttool/Fasttool"
import Mainlist from './mainlist/Mainlist' 
import {connect} from 'react-redux'
const mapState = (state)=>{
    return {
        scrolllist:state.Myscroll.scrolllist
    }
}
const mapDispatch = (dispatch)=>{
    return {
      scroll(scroll){
          dispatch({
              type:"scroll",
              myscroll: scroll
          })
      }    
    }
}
class HomePageUi extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     myScroll:null
        // }
    }
    render(){
        return(
            <Homebox>
               
                <Homepageheader {...this.props}></Homepageheader>
                <Containerbox ref= {div=>this.scroll=div} id="scrollbox">
                    <div>
                        <Swiperbox></Swiperbox>
                        <List></List>
                        <Middle></Middle>
                        <Fasttool></Fasttool>
                        <Mainlist></Mainlist>
                    </div>
                </Containerbox>
               
            </Homebox>
        )
    }
    componentDidMount(){
        this.props.scroll(this.scroll)
        console.log(this.props.scrolllist,78978)
        // this.props.setscroll(this.scroll)
    }
}
// const mapDispatch = (dispatch)=>{
//     return {
//       scroll(scroll){
//           dispatch({
//               type:"scroll",
//               myscroll: scroll
//           })
//       }    
//     }
// }
export default connect(mapState,mapDispatch)(HomePageUi)