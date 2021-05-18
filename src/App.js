import React from 'react'
import imageInSrc from './imageInSrc.jpg'
 const App = () => {
  return (
    <div>
      <div style={{border:'solid(1px)' , maxWidth:'100vw'}}>

<h1 class="title red">Your name here</h1>

<br />

<img src='./imageInPublic.jpeg' alt="img1" />

<br />

<img src={imageInSrc} alt="img2"/>

</div>

<video style = {{width:'320px' , height:'240px' }} controls>

<source src={<iframe width="560" height="315" src="https://www.youtube.com/embed/7fPXI_MnBOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} type="video/mp4" />

</video>
    </div>
  )
}
export default App