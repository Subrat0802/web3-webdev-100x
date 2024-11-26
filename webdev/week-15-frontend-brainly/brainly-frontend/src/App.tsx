import './App.css'
import Button from './components/ui/Button'
import PlusIcon from './icons/PlusIcon'
import ShareIcon from './icons/ShareIcon'

function App() {


  return (
    <>
      <Button
        
        startIcon={<PlusIcon size={"lg"}/>}
        size='md'
        text={"Add Content"}
        varient='primary'
      >
      </Button>   
      <Button
        startIcon={<ShareIcon size={"lg"}/>}
        size='md'
        text={"share"}
        varient='secondary'
      >
      </Button>  
       

    </>
  )
}

export default App
