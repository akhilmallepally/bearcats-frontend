import Image from 'next/image'

const PostCard = () => {
  return (
    
      <div className=" card col-sm-3">

      <div className="container">
      <Image src="/pic.png" alt="me" width="200" height="250" />
        <h4>
          <b>Career Day</b>
          <hr></hr>
        </h4>
        <p>by Career Services </p>
        <p className ="venue">@Colden Hall </p>
        <p className ="date" >On 29th Feb 2022 </p>
      </div>
      </div>
    
  
  )
}

export default PostCard
