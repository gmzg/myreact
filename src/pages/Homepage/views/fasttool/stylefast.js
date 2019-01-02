import styled from 'styled-components'

import borders from 'components/styled/border'
const Title = borders({
  component:styled.h1`
    height:.4rem;
    padding-left:.15rem;
    line-height:.4rem;
    font-size:.16rem;
    font-weight:bold;
    background:white;
    margin:0
  `,
  width: "0 0 1px 0"
})

const List = styled.ul`
  height:1.64rem;
  display:flex;
  flex-wrap:wrap;
  background:white;
  padding-top:.15rem
  li{
      height:50%;
      width:20%;
      display:flex;
      align-items:center;
      flex-direction:column;
      img{
        width:.4rem;
        height:.4rem;
      }
      span{
        font-size:.12rem;
      }

  }
`
  

export {
    Title,
    List
}