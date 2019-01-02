import { TabBar } from 'antd-mobile'
import React,{Component} from "react"
import Classes from "pages/classification/Classes"
import {HomeContanier} from 'pages/Homepage' 
import "styles/position.css"
import {withRouter} from "react-router-dom"
import Need from "pages/need/Need"
import {connect} from 'react-redux'

const mapState = (state) => {
  return {
      tab:state.Tab.Tab
  }
}

const mapDispatch = (dispatch) =>{
  return {
      changeTab(tab){
          dispatch({
              type:"tab",
              tab
          })
      }
  }
}
class TabBarContainer extends Component {
  constructor(props) {
    console.log(1111)
    super(props);
    this.state = {
      selectedTab: this.props.tab,
      fullScreen: true,
    };
  }

  render() {
    console.log(this.props.tab)
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#f60"
          barTintColor="white"
          prerenderingSiblingsNumber="0"
        >
          <TabBar.Item
            title="首页"
            key="first"
            icon={<i className="iconfont icon-shouye"style={{
              "fontSize": '21px',
              display:"block"
             }}
            />
            }
            selectedIcon={<i className="iconfont icon-shouye" style={{
              "fontSize": '21px',           
              color:"#f60",
              dispay:"block"
             }}
            />
            }
            selected={this.state.selectedTab === 'first'}
            onPress={() => {
                this.props.changeTab("first")
                this.setState({
                  selectedTab:"first"
                })
              // this.props.history.push("/home")
              // this.changeTab()
            }}
            data-seed="logId"
          >
            <HomeContanier {...this.props}></HomeContanier>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-danpin"style={{
              "fontSize": '21px',
              display:"block"
              }}
            />
            }
            selectedIcon={<i className="iconfont icon-danpin" style={{
              "fontSize": '21px',           
              color:"#f60",
              dispay:"block"
             }}
            />
            }
            title="类目"
            key="two"
            selected={this.state.selectedTab === 'two'}
            onPress={() => {
              // this.setState({
              //   selectedTab: 'two',
              // },()=>{
                this.props.changeTab("two")
                this.setState({
                  selectedTab:"two"
                })
              // });
              // this.props.history.push('/home/classes')
            }}
            data-seed="logId1"
          >
           <Classes></Classes>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-jiahao" style={{
              "fontSize": '45px',
              // position:"relative",
              // left:"0",
              // top:'-23px',
              display:"block"
              }}
            />
            }
            selectedIcon={<i className="iconfont icon-jiahao" style={{
              "fontSize": '45px',           
              color:"#f60",
              dispay:"block"
             }}
            />
            }
            title="发需求"
            key="three"
            selected={this.state.selectedTab === 'three'}
            onPress={() => {
                this.props.changeTab("three")
                this.setState({
                  selectedTab:"three"
                })
              this.props.history.push('/home/need')
            }}
          >
           <div>three</div>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-same"style={{
              "fontSize": '21px',
              display:"block"
              }}
            />
            }
            selectedIcon={<i className="iconfont icon-same" style={{
              "fontSize": '21px',           
              color:"#f60",
              dispay:"block"
             }}
            />
            }
            title="发现"
            key="four"
            selected={this.state.selectedTab === 'four'}
            onPress={() => {
                this.props.changeTab("four")
                this.setState({
                  selectedTab:"four"
                })
              this.props.history.push('/home/find')
            }}
          >
            <Need></Need>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-wode"style={{
              "fontSize": '21px',
              display:"block"
              }}
            />
            }
            selectedIcon={<i className="iconfont icon-wode" style={{
              "fontSize": '21px',           
              color:"#f60",
              dispay:"block"
             }}
            />
            }
            title="我的"
            key="five"
            selected={this.state.selectedTab === 'five'}
            onPress={() => {
        
                this.props.changeTab("five")
                this.setState({
                  selectedTab:"five"
                })
              // this.props.history.push('/myself')
            }}
            data-seed="logId1"
          >
           <div>13212</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
  
}

  
export default withRouter(connect(mapState,mapDispatch)(TabBarContainer))
