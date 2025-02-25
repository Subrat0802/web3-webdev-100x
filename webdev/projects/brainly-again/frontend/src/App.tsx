import {PlusIcon} from "./icons/Plusicon";
import './App.css'
import Button from './components/ui/Button'
import { Shareicon } from "./icons/Shareicon";

function App() {


  return (
    <>
      <div className='flex gap-4 m-2'>
        <Button startIcon={<PlusIcon size={'md'}/>} varient={'secondary'} size={'md'} text={'Add Brainly'} />
        <Button startIcon={<Shareicon size={'md'}/>} varient={'primary'} size={'md'} text={"Share Brainly"} />
      </div>
    </>
  )
}

export default App
