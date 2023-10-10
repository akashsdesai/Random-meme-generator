import React from 'react'
import "../styleFile/Content.css"
import memeSelect from "../images/select.jpg"


export default function Content() {
  const [meme, setMeme]=React.useState({
    topText:"",
    bottomText:"",
    url:memeSelect
  })

  const [allMemeImages, setAllMemeImages]=React.useState([])

  React.useEffect(()=>{
    const data=async()=>{
      try{
        const value= await fetch("https://api.imgflip.com/get_memes")
        const Val= await value.json()
        /* console.log(Val.data.memes) */
        setAllMemeImages(Val.data.memes)
      }catch(err){
        window.alert(err)
      }
    }
    data()
    return ()=>{
      /* No clean up function nedded for this useEffect 
      addec just to maintain syntax */
    }
  },[])

  function randomMeme(){
    setMeme((prevMeme)=>{
      const newUrl=allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url
      return{
        ...prevMeme,
        url:newUrl
      }
    })
  }
  /* console.log(allMemeImages) */
  function handleChange(event){
    const {name, value}=event.target
    setMeme(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
   function handleSubmit(event){
    event.preventDefault()
   }
  return (
    <main>
      <div className="form" >
        <div className="inputs">
          <input 
          type="text" 
          placeholder="Top Text"
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          />
          <input
           type="text" 
           placeholder="Bottom Text"
           name='bottomText'
           value={meme.bottomText}
           onChange={handleChange}
           />
        </div>
          <button onClick={randomMeme}>Get a new meme image 🖼️</button>
      </div>
      <div className='meme'>
        <img  src={meme.url} />
        <div className="top"><h1>{meme.topText}</h1></div>
        <div className="bottom"><h1>{meme.bottomText}</h1></div>
      </div>   
    </main>
  )
}