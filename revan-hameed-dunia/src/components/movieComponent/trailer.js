import React,{useState, useEffect} from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
export default function Trailer({trailer}) {
    const [triler, setTrailer] = useState([])
    console.log(trailer);
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${trailer}/videos?api_key=${atob(
            "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
          )}&language=en-US`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setTrailer(data.results[0])
        })
    },[])
    console.log(triler)
    return (
        <>{triler&&
        <div>
            <div style={{ width: 660, height: 'auto' }}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed type="video/mp4"  src={`https://www.youtube.com/embed/${triler.key}`}  />
                </ResponsiveEmbed>
            </div>
        </div>
}</>
    )
}
