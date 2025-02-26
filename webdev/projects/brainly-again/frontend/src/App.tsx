import { PlusIcon } from "./icons/Plusicon";
import './App.css'
import Button from './components/ui/Button'
import { Shareicon } from "./icons/Shareicon";
import Card from "./components/ui/Card";
import CreateContentModal from "./components/ui/CreateContentModal";
import { useState } from "react";
import Sidebar from "./components/ui/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='flex  '>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }}/>

        <div className="min-h-[100vh] w-[25%] border-r shadow-md border-gray-200">
          <Sidebar />
        </div>

        <div className="w-full">
          <div className="flex justify-end items-center p-4 gap-3 mb-3  w-full ">
            <Button onClick={() => setModalOpen(true)} startIcon={<PlusIcon size={'md'} />} varient={'primary'} size={'md'} text={'Add Content'} />
            <Button startIcon={<Shareicon size={'md'} />} varient={'secondary'} size={'md'} text={"Share Brain"} />

          </div>

          <div className="grid grid-cols-3 px-4 gap-4">
            <Card type="twitter" link={"https://twitter.com/ILA_NewsX/status/1894612148212432935"} title={"Important meme"} />
            <Card type="youtube" link={"https://www.youtube.com/watch?v=ivWJnB0NIyU"} title={"Youtube Imp"} />
            <Card type="twitter" link={"https://twitter.com/ILA_NewsX/status/1894612148212432935"} title={"Important meme"} />

          </div>

          
        </div>




      </div>
    </>
  )
}

export default App
