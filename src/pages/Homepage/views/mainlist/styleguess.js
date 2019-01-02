import styled from 'styled-components'

import borders from 'components/styled/border'
const Guessitem = styled.div`
  ul{
      height:.43rem;
      background:#f0eff5;
      display:flex;
      align-items:center;
      justify-content:space-around;
      margin-bottom:.2rem;
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
  border-bottom:.1rem solid #ccc;
  padding:.15rem .1rem .1rem .15rem;
  background:white;
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
          transform:scale(.9)
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
export {
  Guessitem,
  Guessitemlist,
  Mainbottom
}