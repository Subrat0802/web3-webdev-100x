import { PlusIcon } from "../icons/Plusicon";
import Button from '../components/ui/Button'
import { Shareicon } from "../icons/Shareicon";
import Card from "../components/ui/Card";
import CreateContentModal from "../components/ui/CreateContentModal";
import { useEffect, useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import axios from "axios";
import { BACKEND_URL } from "../config";


const Dashboard = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getAllCards() {
        setLoading(true)
        const response = await axios.get(BACKEND_URL + "/content", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        setLoading(false)

        setCardsData(response.data.data);

    }

    useEffect(() => {
        getAllCards();
    }, []);

    const [modalOpen, setModalOpen] = useState(false)


    if (loading) return <div className="w-screen h-screen flex justify-center items-center text-2xl font-bold">
        Loading...</div>

    return (
        <>
            <div className='flex  '>
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false)
                }} />

                <div className="min-h-[100vh] w-[25%] border-r shadow-md border-gray-200">
                    <Sidebar />
                </div>

                <div className="w-full">
                    <div className="flex justify-end items-center p-4 gap-3 mb-3  w-full ">
                        <Button onClick={() => setModalOpen(true)} startIcon={<PlusIcon size={'md'} />} varient={'primary'} size={'md'} text={'Add Content'} />
                        <Button startIcon={<Shareicon size={'md'} />} varient={'secondary'} size={'md'} text={"Share Brain"} />

                    </div>

                    <div className="grid grid-cols-3 px-4 gap-4">
                        {
                            cardsData.map((el, i) => (
                                <Card key={i} type={el?.type} link={el?.link} title={el?.title} />
                            ))
                        }

                        {/* <Card type="youtube" link={"https://www.youtube.com/watch?v=ivWJnB0NIyU"} title={"Youtube Imp"} />
                        <Card type="twitter" link={"https://twitter.com/ILA_NewsX/status/1894612148212432935"} title={"Important meme"} /> */}

                    </div>


                </div>




            </div>
        </>
    )
}

export default Dashboard