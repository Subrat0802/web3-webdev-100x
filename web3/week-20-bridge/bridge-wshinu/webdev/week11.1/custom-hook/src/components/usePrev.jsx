import React  from 'react'
import { usePrev } from '../hooks/use-prev'

const UsePrev = () => {
    const [state, setState] = React.useState(0);
    const prev  = usePrev(state);
  return (
    <div>
        <p>{state}</p>
        <button onClick={() => setState(state+1)}>Click me</button>
        <p>Prev value: {prev}</p>
    </div>
  )
}

export default UsePrev