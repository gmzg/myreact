import React,{Component,Fragment} from 'react'


import{
  Guess,
  Listitem,
  Mainitem

} from './stylemainlist'
import Guesslist from './Guesslist'
import BScroll from "better-scroll"
import http from 'http'
import {connect} from 'react-redux'
const mapState = (state) => {
    return {
        myscroll:state.Myscroll.myscroll
    }
  }

  const mapDispatch = (dispatch) =>{
    return {
        static(statics){
            dispatch({
                type:"interval",
                static:statics
            })
        }
    }
}
class Mainlist extends Component{
    constructor(props){
      super(props)
      this.state = {
          data:[],
          index:0,
          listitem:[],
          guessdata:[],
          favorite:true,
          id:'',
          scroll:null,
          count:0,
          static:false,
          position:false,
      }
    }
    render(){
        console.log(this.state.position)
        return (
          <Fragment>
              <Guess active='aaa'>
              {/* categoryId */}
                <div ref = {div => this.mainscroll=div} className={this.state.position ? "position" : ""}>
                  <ul>
                    {
                        this.state.data.map((value,index)=>{
                            return (
                            <li key={index} className={this.state.index===index ? "active":'' } onTouchStart = {()=>{this.change(index,value.categoryId)}}>{value.title}</li>
                            )
                        })
                    }
                  </ul>
                  <span>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA3klEQVQ4T+XUPQ/BUBTG8f8JNiPxyRqJRARJk4bdxGAyGdsSLykx+WbYDCa54karqDZubL3zOb/c89wX4c9L/uyRV1A5jIAhUDTI9IJiLD6Te6/OUDmcgbIBFrYcxKMWBxdA1xhUuOLTe4I2JQrsAMsA3XKiLXuuEajHtihQ0Wj9BzTgRDfEXsAYugEamaiw4ogdxz7AGLoGminoAg9bQL3XJL6Ux/hLoPWBCjNcnCQscYchoNEqcxSdCFW4+PS/YamgHv9+Tx2mj0wDPAZpWCaYeTAJBXn9bUyy+tZzA3oCNxVFyfH0AAAAAElFTkSuQmCC"/>
                  </span>
                  </div>
              </Guess>
              {
                this.state.listitem.map((value,index) => {
                    return (
                        <Listitem key={index} active={this.state.favorite}>
                        <div className="top">
                            <img src={value.imgUrl}/>
                            <Mainitem>
                                <p>{value.title}</p>
                                <span>成交{value.saleCount} 服务评分{value.comprehensiveScore}</span>
                                <div>
                                    <span>￥{value.price}</span>
                                    <em className={value.unit ? 'unit' :''}>/{value.unit}</em>
                                    {/* className="none" */}
                                    <i className={value.priceMinus ? "priceMInus" : '' } >手机省{value.priceMinus}</i>
                                </div>
                            </Mainitem>
                        </div>
                        <div className="footer">
                          <div className="left">
                            <img src={value.shopPhoto}/>
                            <p>{value.shopName}</p>
                          </div>
                          <div className="right">{value.cityName}</div>
                        </div>
                    </Listitem>   
                    )
                })  
              }
              <Guesslist active={this.state} scroll={this.scroll}></Guesslist>
          </Fragment>
        )
    }

    async componentDidMount(){
    //  console.log(this.props) 
    console.log("iuhfisw")
      let data = (await http({url:"/category/getLabelNavigation/"})).data
      data.unshift({title:'猜你喜欢'})
      let itemdata = (await http({
          url:"/shunt/favorite/",
          method:"GET"
        })).data.list 
      this.scroll =  new BScroll(this.mainscroll,{
        scrollX: true,
        click: true,
    }) 
    
    this.scrolllist = new BScroll(this.props.myscroll,{
        click:true,
        probeType:2,
        pullUpLoad: {
            threshold: 50
          }
    })

    this.setState({
        data,
        listitem:itemdata,
    })
    this.scrolllist.on('scroll',() =>{
        if(this.scrolllist.y<-200){
           this.state.static = true
        }else{
           this.state.static = false
        }
        this.props.static(this.state.static)
    })
    // this.scrolllist.on('scroll',() =>{
    //     if(this.scrolllist.y<-400){
    //         this.setState({
    //             position:true
    //         })
    //     }else{
    //         this.setState({
    //             position:false
    //         })
    //     }
    //     // console.log(this.state.position)
    // })
    this.scrolllist.on("pullingUp",async()=>{
        console.log(2222)
        this.state.count++;
        let data = (await http({
            url:'/shop/search/v2',
            body:"page="+this.state.count+"&pagesize=10&keyword=&sort=1&minOpenShopDays=0&userType=0&platform=0&guidCategoryIds="+this.state.id,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
 
         })).data.list
         this.setState((prevState)=>{
            let newdata = [...prevState.guessdata,...data]
             return {
                 guessdata:newdata
             }               
              
         },()=>{
             this.scrolllist.refresh();
             
             // 告诉better-scroll, 可以进行下次滑动了
             this.scrolllist.finishPullUp();
         })
     })  
    }
    //点击事件改变渲染数据
    async change(index,id){
        this.setState({
            id,
            index
        })
        if(index>=1){
            this.setState({
              favorite:false,
                
            })
        }else{
            this.setState({
                favorite:true  
              }) 
        }
        //第二个页面数据
        let guessdata = (await http({
            url:'/shop/search/v2',
            body:"page="+this.state.count+"&pagesize=10&keyword=&sort=1&minOpenShopDays=0&userType=0&platform=0&guidCategoryIds="+id,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })).data.list
        this.setState({
            guessdata
        })
    }
//     showShareActionSheet = () => {
//         ActionSheet.showShareActionSheetWithOptions({
//           options: this.dataList,
//           // title: 'title',
//           message: 'I am description, description, description',
//         },
//         (buttonIndex) => {
//           this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
//           // also support Promise
//           return new Promise((resolve) => {
//             Toast.info('closed after 1000ms');
//             setTimeout(resolve, 1000);
//           });
//         });
//       }
// }

// const mapDispatch = (dispatch) =>{
//     return {
//         scrolleinterval(){
//             dispatch({
//                 type:"interval",
//                 scrolleinterval:this.scrolllist
//             })
//         }
//     }
// }
}

export default connect(mapState,mapDispatch)(Mainlist)