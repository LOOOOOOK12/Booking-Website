import React from 'react'
import computerSupport from '../../assets/Contacts/cs.png'
import Mechanical from '../../assets/Contacts/ms.png'
import Accounts from '../../assets/Contacts/cuss.png'

function ContactsSection2() {
    return (
        <div className='py-20 px-16 flex flex-col justify-between items-center gap-10 md:flex-row md:items-start'>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex justify-center gap-3 items-center'>
                    <img src={computerSupport} alt="Technical Support" />
                    <h1 className=' text-Rich-Black text-3xl font-semibold mb-5'>Technical Support</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>Machine Learning</p>
                    <p>Bard</p>
                    <p>Viktor</p>
                    <p>Jayce Lighthammer</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img src={Mechanical} alt="MEchanical Support" />
                    <h1 className=' text-Rich-Black text-3xl font-semibold mb-5'>Mechanical Support</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>John Doe</p>
                    <p>Lorem Ipsum</p>
                    <p>Michael Jackstone</p>
                    <p>Zac Tabudlo</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img src={Accounts} alt="Support" />
                    <h1 className=' text-Rich-Black text-3xl font-semibold mb-5'>Customer Support</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>Zyra Mae Dizon</p>
                    <p>Vel'koz</p>
                    <p>Poppy Gulaman</p>
                    <p>Bard Jhin</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsSection2