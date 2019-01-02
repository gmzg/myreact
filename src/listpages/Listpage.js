import React,{Component,Fragment} from 'react'

import {
    Listheader,
    Guessitem,
    Guessitemlist,
    Mainbottom,
    Shopinfor,
    P,
    Scroll,
    Meng,
    Place,
} from './stylelist'
import left from '../assets/images/left.png'
import http from 'http'
import {withRouter} from "react-router-dom"
class Listpage extends Component{
    constructor(){
        super()
        this.state = {
            datalist:[],
            active:2,
            citydata:[],
            allcity:[],
            local:false,
            cityindex:Number,
            provinceindex:Number,
            choosecity:false,
            provinceid:''
        }
        this.goback = this.goback.bind(this)
        this.local = this.local.bind(this)
    }
    render(){
        console.log(this.state.datalist)
        return (
            <Fragment>
                {
                    this.state.choosecity?(<Meng></Meng>):null
                }
               <Listheader>
                    <img src={left} onClick={this.goback}/>
                    <div>
                        <i className="iconfont icon-sousuo"></i>
                        <input type ="text" placeholder={this.props.location.state}/>
                    </div>
                    <span></span>
               </Listheader>
               <Guessitem active={this.props.active}>
                    <ul>
                        <li onClick={()=>{
                            this.onClick(1)
                        }}
                        className="active"
                        >本地优选
                            <span className="down-label"></span>
                        </li>
                        <li onClick={()=>{
                            this.onClick(2)
                        }}
                        className={this.state.active==2?'active':''}
                        >综合</li>
                        <li onClick={()=>{
                            this.onClick(3)
                        }}
                        className={this.state.active==3?'active':''}
                        >成交</li>
                        <li onClick={()=>{
                            this.onClick(4)
                        }}
                        className={this.state.active==4?'active':''}
                        >好评</li>
                        <li onClick={()=>{
                            this.onClick(5)
                        }}
                        className={this.state.active==5?'active':''}
                        >筛选</li>
                    </ul> 
               </Guessitem>
               {
                   this.state.choosecity?(
                    <Place>
                    <div className="placeleft " >
                        <ul>
                            <li className={this.state.local?"active":''} onClick={this.local}>本地优选</li>
                            {
                                this.state.citydata.map((value,index)=>{
                                    return (
                                     <li key={index} onClick={()=>{
                                         this.changecity(value.id,index)
                                     }} className={this.state.provinceindex==index?"active":''}>{value.city}</li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="placeright">
                        <ul>
                            {
                                this.state.allcity.length>0?(
                                 
                                     this.state.allcity.map((value,index)=>{
                                         return (
                                            <li key={index} onClick={()=>{
                                                this.citycolor(index,value.cityId)
                                            }} className={this.state.cityindex==index?"active":''}>{value.cityName}</li>
                                         )
                                     })
                                  
                                ):<li className={this.state.local?"active":''} onClick={this.local}>本地优选</li>
                            }
                        </ul>
                    </div>
                </Place>
                   ):null
               }
               <Scroll>
               {
                   this.state.datalist.map((value,index)=>{
                       return (
                           <div key={index}>
                            <Guessitemlist>
                                <div>
                                    <img src={value.shopPhoto}/>
                                    <div className="main">
                                        <p>
                                            <span>{value.brandName}</span>
                                            <span>{value.cityName}</span>
                                        </p>
                                        <div className="company"> 
                                            <span>企业</span>
                                            <span>{value.abilityVO.abilityName}</span>
                                        </div>
                                        <div className="shop-tags-add">
                                           {
                                               value.expertTagNames.slice(0,4).map((value,index)=>{
                                                   return (
                                                    <i key={index}>
                                                        <span>{value}</span>
                                                        <em>&nbsp;|&nbsp;</em>
                                                    </i>    
                                                   )
                                               })
                                           }  
                                        </div>
                                        <Mainbottom>
                                        <p>雇主回头率><span>{Math.round(value.secondGlance*100)}</span>同行，收入<span>{(value.lastQuarterIncome/1000).toFixed(2)}</span>万，诚信分<span>{value.integrity}</span></p>
                                        </Mainbottom> 
                                   </div>   
                                </div>    
                            </Guessitemlist> 
                            {
                                value.services && value.services.slice(0,2).map((value,index)=>{
                                    return (
                                        <Shopinfor key={index}>
                                            <div>
                                                <P>{value.title}</P>
                                                <div className="number">
                                                    <span>￥{value.price}</span>
                                                    <i>成交量{value.saleCount}</i>
                                                </div>
                                            </div>
                                        </Shopinfor>   
                                    )
                                })
                            }
                            </div>  
                       )
                   })
               }
            </Scroll>
            </Fragment>
        )
    }
    async componentDidMount(){
        let data = (await http({
            url:"/shop/search/v2",
            method:"post",
            body:"keyword="+this.props.location.state+"&page=0&pagesize=10&sort=1&minOpenShopDays=0&userType=0&platform=0",
            headers:{
                'Content-Type':' application/x-www-form-urlencoded'
            }
        })).data.list
        //获取城市数据
        this.citydata = (await http({
            url:"/city/getCityList",
            method:"POST"
        })).data
        console.log(this.citydata)
        let city = []
        for(var i in this.citydata){
            var obj = {}
            // console.log(citydata[i].provinceId)
              obj.id = this.citydata[i].provinceId
              obj.city =this.citydata[i].provinceName              
                city.push(obj)   
            //   city.push(obj)
        }
        let id = []
        let idlist = []
        let citylist =[]
        for (var j in city){
            id.push(city[j].id)
        }
        for (var k in id){
            if(idlist.indexOf(id[k])===-1){
                idlist.push(id[k])
                citylist.push(city[k])
            }
        }
        // citylist.unshift({id:""})
        this.setState({
           datalist:data,
           citydata:citylist
        })
    }
    onClick(number){
        if(number==1){
          this.setState((prevState)=>{
            //   let reserve = !prevState.
              return{
                  choosecity:!prevState.choosecity
              }
          })
        }
        this.setState({
            active:number
        })
    }
    goback(){
        this.props.history.go(-1)
    }
    changecity(city,index){
      let allcity = this.citydata.filter((item)=>{
          return item.provinceId==city
      }) 
      this.setState({
          allcity,
          provinceindex:index,
          local:false,
          provinceid:city
      })
    }
    local(){
        this.setState({
            local:true
        })
    }
    async citycolor(index,id){
        let data = (await http({
            url:"/shop/search/v2",
            method:"post",
            body:"keyword="+this.props.location.state+"&listType=A&page=0&pagesize=10&sort=1&minOpenShopDays=0&userType=0&platform=0&newest=false&cityidfilter%5B0%5D="+id+"&provinceidfilter%5B0%5D="+this.state.provinceid,
            headers:{
                'Content-Type':' application/x-www-form-urlencoded'
            }
        })).data.list
        console.log(data)
        this.setState({
            cityindex:index,
            choosecity:false,
            datalist:data
        })
    }

}
export default withRouter(Listpage)