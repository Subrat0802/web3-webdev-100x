import { Video, Clock, IndianRupee, MessageSquare, BookOpen, CalendarDays } from 'lucide-react';
export const cards = [
    {
        id:100,
        title:"Career Guidance",
        description:"I'll give you advice to help with your career decisions.",
        subDiv: [
            {
                title:"Service type",
                subTitle: "1:1 call",
                icon:<Video size={18} className='text-blue-600'/>
            },
            {
                title:"Duration",
                subTitle: "30 min",
                icon:<Clock size={15} className='text-blue-600'/>
            },
            {
                title:"Amount",
                subTitle: "300",
                icon:<IndianRupee size={16} className='text-green-500'/>
            },
        ]
    },
    {
        id:101,
        title:"Resume Review",
        description:"I’ll refine your resume to land better opportunities.",
        subDiv: [
            {
                title: "Service type",
                subTitle: "Priority DM",
                icon: <MessageSquare size={18} className='text-blue-600' />
            },
            {
                title: "Replies",
                subTitle: "Within 1 day",
                icon: <Clock size={15} className='text-blue-600' />
            },
            {
                title: "Amount",
                subTitle: "₹100",
                icon: <IndianRupee size={16} className='text-green-500' />
            },
        ]
    },
    {
        id:102,
        title:"1 month career guidance full confidence",
        description:"2 x 1:1 call - Career guidance | 1 X Priority Dm - Resume review...",
        subDiv: [
            {
                title: "Service type",
                subTitle: "Package",
                icon: <BookOpen size={18} className='text-blue-600' />
            },
            {
                title: "Duration",
                subTitle: "1 Month",
                icon: <CalendarDays size={15} className='text-blue-600' />
            },
            {
                title: "Amount",
                subTitle: "₹1,000",
                icon: <IndianRupee size={16} className='text-green-500' />
            },
        ]
    },
    {
        id:103,
        title:"Interview tips and tricks advice",
        description:"I'll give you advice to help with your career decisions.",
        subDiv: [
            {
                title: "Service type",
                subTitle: "Webinar",
                icon: <Video size={18} className='text-blue-600' />
            },
            {
                title: "Date",
                subTitle: "On 28th Oct",
                icon: <CalendarDays size={15} className='text-blue-600' />
            },
            {
                title: "Amount",
                subTitle: "₹1,000",
                icon: <IndianRupee size={16} className='text-green-500' />
            },
        ]
    },
    {
        id:104,
        title:"SQL Basics Cheat Sheet",
        description:"I'll give you advice to help with your career decisions.",
        subDiv: [
            {
                title: "Service type",
                subTitle: "Digital Product",
                icon: <BookOpen size={18} className='text-blue-600' />
            },
            {
                title: "Format",
                subTitle: "PDF",
                icon: <MessageSquare size={15} className='text-blue-600' />
            },
            {
                title: "Amount",
                subTitle: "₹500",
                icon: <IndianRupee size={16} className='text-green-500' />
            },
        ]
    },
    {
        id:105,
        title:"Career Guidance",
        description:"I'll give you advice to help with your career decisions.",
        subDiv: [
            {
                title:"Service type",
                subTitle: "1:1 call",
                icon:<Video size={18} className='text-blue-600'/>
            },
            {
                title:"Duration",
                subTitle: "30 min",
                icon:<Clock size={15} className='text-blue-600'/>
            },
            {
                title:"Amount",
                subTitle: "300",
                icon:<IndianRupee size={16} className='text-green-500'/>
            },
        ]
    }
]