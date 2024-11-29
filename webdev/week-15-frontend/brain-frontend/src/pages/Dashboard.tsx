import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateCOntentModal'

import Plus from '../icons/plus'
import Share from '../icons/share'
import SideBar from '../components/SideBar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'


function Dashboard() {

    const [sharableBrain ,setSharableBrain] = useState("");

    console.log("sharableBrain", sharableBrain)

    const [modalOpen, setModalOpen] = useState(false)
    
    const {contents, refresh} = useContent();

    // console.log("final data", contents);

    useEffect(() => {
        refresh();
    }, [modalOpen])


    const shareBrain = async () => {
        const response = await axios.post(BACKEND_URL+"/api/v1/brain/share", {
            share:true
        },{
            headers:{
                "authorization":localStorage.getItem("jsonwebtoken")
            }
        })
        response?.data?.hash?.hash
        const shareUrl = `http://localhost:3000/api/v1/brain/${response?.data?.hash?.hash}`
        console.log(shareUrl)
        alert(shareUrl)
        
    }

    return (
        <div className=''>
            <div className=''>
                <SideBar />
            </div>

            <div className='ml-72 min-h-screen p-4 bg-gray-100'>
                <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />

                <div className='flex justify-end'>
                    <div >
                        <Button onClick={() => setModalOpen(!modalOpen)} varient="primary" text="Add Content" startIcon={<Plus />} loading={false} fullWidth={false} />
                    </div>
                    <div>
                        <Button onClick={shareBrain} varient="secondary" text="Share Brain" startIcon={<Share />} loading={false} fullWidth={false} />
                    </div>
                </div>


                <div className='flex flex-wrap'>
                    {
                        contents.map((el) => (
                            //@ts-ignore
                            <Card key={el._id} title={el.title} type={el.type} link={el.link}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
