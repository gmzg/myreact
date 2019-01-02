import styled from "styled-components"
import borders from 'components/styled/border'
const Box = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
`
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
  `,
  border:"0 0 1px 0"
})

const Mainclass = styled.div`
  height:100%;
  background:green;
  display:flex;
  flex:1;
`
const Mainleft = styled.div`
  width:.76rem;
  height:100%;
  background:white;
  overflow:hidden;
  ul{
    width:100%;
    border-right:1px solid #ccc;
    padding-bottom:1rem;
    .heightcolor{
      color:#ff6900;
      border-left:2px solid #ff6900
    }
    li{
      width:100%;
      height:.32rem;
      text-align:center;
      line-height:.32rem;
      margin:.1rem 0;
    }
  }
`
export {
    Box,
    Listheader,
    Mainclass,
    Mainleft
}



