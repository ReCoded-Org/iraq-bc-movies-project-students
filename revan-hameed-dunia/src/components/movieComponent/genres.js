import React from 'react'
import { Badge } from 'react-bootstrap'

export default function Ganres({genres}) {
    return (
        <>{genres&& genres.genres.map(g=><h3 key={g.id} className={'d-inline mx-2'}>
             <Badge variant="dark">{g.name}</Badge>
          </h3>)}</>
    )
}
