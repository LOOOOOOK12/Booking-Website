import React from 'react'

function ContactsSection1() {
    return (
        <div className='py-20 px-16 flex flex-col gap-8 md:flex-row items-center justify-between'>
            <form className='flex flex-col gap-3 w-3/5'>
                <label  className='text-Rich-Black text-xl'>Enter Name:</label>
                <input type="text" className='p-2 bg-Puti border-Prussian-Blue border-2 rounded-md' />
                <label className='text-Rich-Black text-xl'>Enter Email:</label>
                <input type="email" className='p-2 bg-Puti border-Prussian-Blue border-2 rounded-md'/>
                <label className=' text-Rich-Black text-xl'>Send a Message:</label>
                <textarea disabled cols="30" rows="10" className='py-2 bg-Puti rounded-md border-Prussian-Blue border-2's/>
            </form>
            <div className='w-3/4'>
                <h1 className='mb-5 text-Rich-Black text-5xl font-semibold'>Message Us!</h1>
                <p className='text-Grey text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deleniti libero numquam nemo 
                    consequuntur delectus molestiae sunt impedit nisi. Hic, inventore explicabo asperiores eos odio maiores 
                    accusantium excepturi ab nihil.
                </p>
            </div>
        </div>
    )
}

export default ContactsSection1