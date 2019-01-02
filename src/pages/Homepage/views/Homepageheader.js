import React,{Component,Fragment} from "react"
import {
    Homeheader
}from "./styleHomepage"
// import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
const mapState = (state)=>{
    return {
        static:state.Myscroll.static
    }
}
class Homepages extends Component{
    constructor(props){
        super(props)
        this.search=this.search.bind(this)
    }
    render (){
        console.log(this.props.static,1)
      return (
          <Fragment>
            <Homeheader className={this.props.static ? "color" :""}>
              <div>
                  <i className="iconfont icon-zuobiao"></i>
                  <span>全国</span>
              </div>
              <div>
                  <i className="iconfont icon-sousuo"></i>
                  <span onClick={this.search}>搜索专业人才为您服务，如包装设</span>
              </div>
              <div>
                  <i className='iconfont icon-sousuoleimu'></i>
                  <span>分类</span>
              </div>
            </Homeheader>
        </Fragment>   
      )
    }
    search(){
        console.log(this.props)
        this.props.history.push("/search")
        // history.push("/search")
    }
    componentDidMount(){
        
    }
}
export default connect(mapState)(Homepages)