import { Spinner } from "@material-tailwind/react"

const Loading = () => {
  return (
    <div className="flex items-end gap-8">
     
     <Spinner className="h-8 w-18 text-gray-400/50" />
      
    </div>
  )
}

export default Loading