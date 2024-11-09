import React from 'react'
import { useRecoilValue } from 'recoil'
import { evenSelector } from '../store/atoms/counter'

const Selector = () => {
    const even = useRecoilValue(evenSelector)
  return (
    <div>
        {even ? <p>Even Number</p> : <p>odd number</p>}
    </div>
  )
}

export default Selector