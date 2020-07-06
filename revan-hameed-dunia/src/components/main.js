import React from 'react'
import MovieCard from './moviecard'
// main should show the result 
export default function Main(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {props.movies.map((popular,i)=>(<MovieCard key={i} movies={popular}/>))}
                </div>
            </div>
        </div>
    )
}
