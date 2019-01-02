import styled from "styled-components"
const Homebox = styled.div`
  height:100%;
  .color{
    background:#ff6900;
  }
`
const Containerbox = styled.div`
  height:100%;
  overflow:hidden;
`
const Homeheader = styled.div`
  width:100%;
  height:.44rem;
  position:absolute;
  left:0;
  z-index:2;
  top:0; 
  display:flex;
  padding-top:.05rem;
  align-items:center;
  >div{
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  >div:nth-child(1),div:nth-child(3){
    width:.49rem;
    flex-direction:column;
    color:#fff;
    .iconfont{
      font-size:.18rem !important;
      width:.18rem;
      height:.18rem;
      &::before{
        font-size:.18rem;
      }
    }
    span{
      margin-top:.03rem;
      font-size:.11rem;
    }
  
  } 
  >div:nth-child(2){
    flex:1;
    background:#fff;
    height:.32rem;
    border-radius:.03rem;
    i{
      margin-right:.1rem;
    }
  }
  /* >div:nth-child(3){
    width:.49rem;
    height:100%;
    flex-direction:column;
  } */
`
const Container = styled.div`
  width:100%;
  height:100%;

`
const Swiper = styled.div`
  font-size:0;
  padding-bottom:53.333%;
  position:relative;
`
export {
    Homebox,
    Containerbox,
    Homeheader,
    Container,
    Swiper
}