import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Posts = ({getter}) => {
    const query = useQuery({ queryKey: ['posts'], queryFn: getter, refetchInterval:10000 })

    if(query.isLoading) return <div>Loading....</div>

    if(query.error) return <div>Server error Error</div>

  return (
    <div>
      <ul>{query.data?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  )
}

export default Posts