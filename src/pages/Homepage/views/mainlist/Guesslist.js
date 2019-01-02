import React,{Component,Fragment} from 'react'

import http from "http"
import {
    Guessitem,
    Guessitemlist,
    Mainbottom
} from './styleguess'

class Guesslist extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            count:1
        }
    }
    render(){
        // console.log(this.props.active)
        return (
            <Fragment>
                <Guessitem active={this.props.active}>
                <ul>
                    <li>本地优选
                        <span className="down-label"></span>
                    </li>
                    <li>综合</li>
                    <li>成交</li>
                    <li>好评</li>
                </ul> 
                </Guessitem>
                {
                this.props.active.guessdata.map((value,index)=>{
                    return (
                        <Guessitemlist key={index}>
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
                    )
                })
            }
               
            </Fragment>
        )
    }
}
export default Guesslist