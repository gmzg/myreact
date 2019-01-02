import React,{Component} from 'react'

import HomePageUi from './HomePageUi'
import BScroll from 'better-scroll'
class HomeContainer extends Component{
    constructor(props){
        super(props)
        this.setscroll = this.setscroll.bind(this) 
    }
    render(){
        return (
            <HomePageUi setscroll={this.setscroll} {...this.props}></HomePageUi>
        )
    }
    // componentDidMount(){
    //    this.scroll =  new BScroll(this.id,{
    //     scrollY: true,
    //     click: true
    // })   
    // }
    setscroll(id){
      this.scroll =  new BScroll(id,{
        scrollY: true,
        click: true,
        
    })   
    }
    
}


export default HomeContainer