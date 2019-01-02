import styled from 'styled-components'

import borders from 'components/styled/border'
import right from "../assets/images/right.png"

import ellipsis from "../components/styled/ellipsis"
const Listheader = borders({
  component:styled.div`
    height:.44rem;
    display:flex;
    align-items:center;
    padding:0 .15rem;
    background:white;
    position:relative;
    z-index:3;
    img{
      width:.2rem;
      height:.2rem;
      opacity:0.3;
    }
    div{
      flex:1;
      background:rgb(235, 235, 228);
      margin:0 .15rem;
      display:flex;
      border-radius:.03rem;
      >i{
        margin:0 .1rem;
      }
      >input{
        flex:1;
        border:none;
        background:rgb(235, 235, 228);
        border-radius:.03rem;
      }
    }
    >span{
      width:.2rem;
      height:.2rem;
      background:url(${right}) no-repeat
    }
  `,
  border:"0 0 1px 0"
})

const Scroll  = styled.div`
  height:100%;
  overflow-y:scroll;
  padding-bottom:.87rem;
`
const Guessitem = styled.div`
  position:relative;
  z-index:2;
  ul{
      height:.43rem;
      background:#f0eff5;
      display:flex;
      align-items:center;
      justify-content:space-around;
      .active{
        color:#ff6900;
      }
      li{
          font-size:.13rem;
          .down-label{
            margin-left:.05rem;
            display:inline-block;
            background: transparent;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid #909090;
          }
      }
  }
`

const Guessitemlist = styled.div`
  height:1.46rem;
  padding:.15rem .1rem .1rem .15rem;
  background:white;
  margin-top:.15rem;
  div{
    height:100%;
    display:flex;
    img{
      width:.7rem;
      height:.7rem;
      margin-right:.15rem;
    }
    .main{
      flex:1;
      background:white;
      display:flex;
      flex-direction:column;
      >p{
        height:.3rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }
      .company{
        height:.24rem;
        >span{
          border:1px solid #fce9c1;
          color:#f0b348;
          font-size:.12rem;
          transform:scale(.9);
          border-radius: 1px;
          height:.2rem;
          text-align:center;
        }
        span:first-child{
          margin-right:.05rem;
        }
      }
      .shop-tags-add{
        height:.2rem;
        overflow: hidden;
        width:100%;
        i{
          /* display:inline-block; */
          height:100%;
          display:flex;
          span{
            /* display:inline-block; */
          font-size:.12rem;
          line-height:.2rem;
          height:100%;
          } 
          >em{
            display:inline-block;
            color:#999F;
            font-size:.12rem;
      
          }
        }
        
      }
    }
  } 
`
const Mainbottom = borders({
  component:styled.div`
    flex:1;
    font-size:.14rem;
    color:#ccc;
    span{
      color:black;
    }
  `,
  width:"1px 0 0 0" 
})

const Shopinfor = styled.div`
  height:.67rem;
  padding:.15rem .1rem .1rem .15rem;
  background:white;
  >div{
    height:100%;
    padding:0 0 0 .8rem;
    display:flex;
    flex-direction:column;
    .number{
      span{
        color:#f60;
        font-size:.12rem;
        transform:scale(0.9);
        margin-right:.05rem;
      }
      i{
        font-size:.12rem;
        color:#ccc;
        border-left:1px solid #ccc;
        padding-left:.05rem;
      }
    }
  }
`
const P = ellipsis({
  component:styled.p`
      margin-right:.4rem;
      height:.22rem;
      font-size:.12rem;
 
  `
  // width:"100%";

})

const Meng = styled.div`
  height:100%;
  width:100%;
  background:black;
  opacity:0.3;
  position:absolute;
`
const Place = styled.div`
  height:3.2rem;
  width:100%;
  position:absolute !important;
  top:.87rem;
  left:0;
  z-index:9999;
  display:flex;
  .active{
    color:#ff6900;
  }
  >.placeleft{
    width:1.5rem;
    height:100%;
    background:white;
    overflow-y:scroll;
    ul{
      width:100%;
      /* overflow-y:scroll; */
      li{
        border-bottom:1px solid #ccc;
        width:100%;
        height:.4rem;
        line-height:.4rem;
        padding-left:.25rem;
      }
    }
  }
  >.placeright{
      flex:1;
      background:#eee;
      padding-left:.2rem;
      overflow:scroll;
      ul{
        width:100%;
        li{
          width:100%;
          height:.4rem;
          line-height:.4rem;
          padding-left:.25rem;
      }
      }
    }


`
export {
    Listheader,
    Guessitem,
    Guessitemlist,
    Mainbottom,
    Shopinfor,
    P,
    Scroll,
    Meng,
    Place
}