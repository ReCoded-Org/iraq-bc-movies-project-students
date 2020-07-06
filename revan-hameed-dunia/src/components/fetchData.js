import React ,{useState, useEffect}from 'react'
import axios from '../../node_modules/axios'
// this component will fech Data it can be used everywhere inside the project
export default function FetchData(props) {
    //this function create the url to fetch
    const constructUrl = (path, query) => {
        const TMDB_BASE_URL = "https://api.themoviedb.org"
        return `${TMDB_BASE_URL}/${path}?api_key=${atob(`ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU=`)}
        ${query}`;
    }
    //useStata is used to check state changes
    const [data, setData] = useState([])
    console.log(constructUrl(props.path,props.query))
    // useEffect is a function in hook that will be called every time we render the component in this case every time when we call FetchData
    useEffect(()=>{
        fetch(constructUrl(props.path,props.query)).then(res =>res.json()).then(res=>{
        setData(res[props.dataType])
        console.log(data)
    }).catch(err=>{
              console.log(err)
          });
    },[])
    
    return (
        data
    )
}

