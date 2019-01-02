import styled from 'styled-components'

import borders from 'components/styled/border'
const Guess = styled.div`
  width:100%;
  height:.45rem;
  padding-right:.2rem;
  position:relative;
  background:white;
  .position{
    position:fixed;
    top:0;
    left:0
  }
  >div{
    width:100%;
    overflow:hidden; 
  }
  ul{
    width:max-content;
    height:.45rem;
    padding-left:.2rem;
    padding-right:.2rem;
    display:flex;
    li{
      line-height:.45rem;
      margin-right:.27rem;
    }
    .active{
      border-bottom:.03rem solid #ff6900;
      color:#ff6900;
    }
  }
  /* ff6900 */
  span{
    display:block;
    width:.4rem;
    height:100%;
    right:0;
    top:0;
    position:absolute;
    text-align:center;
    vertical-align:middle;
    background:white;
    padding-top:.15rem;
    img{
      width:.1rem;
      height:.1rem;

    }
  }
`
 
const Listitem = borders({
  component:styled.div`
    height:1.35rem;
    padding:.15rem;
    background:white;
    display:${props=>props.active ? 'block' : 'none'}
    >.top{
      height:.87rem;
      display:flex;
      img{
        width:.8rem;
        height:.8rem;
      }
    }
    >.footer{
      height:.33rem;
      margin-left:.9rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .left{
        display:flex;
        align-items:center;
        img{
          width:.18rem;
          height:.18rem;

        } 
        p{
          font-weight:100;
          margin-left:.1rem;
        }
      } 
      .right{
         font-weight:100;
      }
    }
  `,
  width:'1px 0 0 0'
})

const Mainitem = borders({
  component:styled.div`
    flex:1;
    margin-left:.1rem;
    display:flex;
    flex-direction:column;
    p{
      height:.4rem;
      font-size:.15rem;

    }
    >span{
      height:.16rem;
      color:#ccc;
      font-size:.12rem;

    }
    div{
       display:flex;
       align-items:center;
       flex:1;
       >span{
         color:red;
         font-size:.14rem ;
       }
       em{
        display:none
       }
       .unit{
        color:red;
        font-size:.14rem ;
        display:block; 
       }
       /* .none{
         display:none
       } */
       i{
         display:none;
       }
      .priceMinus{
         background:#f3ab3c;
         color:white;
         font-size:.12rem;
         transform: scale(.8);
         display:block !important;
       }
    }

  `,
  width:'0 0 1px 0'
})
export {
    Guess,
    Listitem,
    Mainitem
}