import styled from 'styled-components'

import borders from "components/styled/border"
const Homeheader = borders({
    component:styled.div`
      width:100%;
      height:.44rem;
      background:white;
      display:flex;
      align-items:center;
      padding:0 .15rem;
      justify-content:space-between;
      >div{
          height:.32rem;
          background:#ddd;
          flex:1;
          display:flex;
          align-items:center;
          padding:0 .1rem;
          border-radius:.03rem;
          i{
              width:.16rem;
              height:.16rem;
              line-height:1;
              margin-right:.2rem;
          }
          input{
              border:none;
              background:#ddd;
              flex:1;
              height:.24rem;


          }
      }
      >span{
          width:.28rem;
          font-weight:bold;
          margin-left:.2rem;
      }

    `,
    width:"0 0 1px 0"
})

const Searchmain = styled.div`
  height:100%;
  background:white;
  padding:0 .15rem;
  padding-top:.22rem;
  .none{
      display:none;
  }
`
const Searchhot = styled.div`
  height:2.19rem;
  /* margin-top:.22rem; */
  h1{
      height:.27rem;
      margin:0 0 .1rem 0;
      font-size:.14rem;
      line-height:.27rem;
  }
  ul{
      width:100%;
      height:1.6rem;
      display:flex;
      flex-wrap:wrap;
      li{
          border-radius:.05rem;
          height:.28rem;
          padding:0 .05rem;
          text-align:center;
          line-height:.22rem;
          border:1px solid #ccc;
          margin-right:.15rem;
      }
  }
`

const Searchlistbox = styled.div`
  height:100%;
  ul{
      li{
          height:.4rem;
          line-height:.4rem;
      }
  }
`
const Searchlisttop = styled.div`
  height:.4rem;
  i{
      line-height:.4rem;
  }
`
export {
    Homeheader,
    Searchmain,
    Searchhot,
    Searchlistbox,
    Searchlisttop
}