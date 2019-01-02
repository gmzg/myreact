const http = (
    { url,
      method="POST",
      body=null,
      headers,
})=>{
    return fetch(url,{
      method,
      body,
      headers,

    }).then(resolve => resolve.json())
    .then(result => result)
}
export default http