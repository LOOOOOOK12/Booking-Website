import React from 'react'

function ContactsSection1() {
    return (
        <div className='py-20 px-16 flex flex-col gap-8 md:flex-row items-center justify-center'>
            <form className='flex flex-col'>
                <label  className='mb-3 text-Rich-Black'>Enter Name:</label>
                <input type="text" className='p-2 bg-Puti border-Prussian-Blue border-2' />
                <label className='mb-3 text-Rich-Black'>Enter Email:</label>
                <input type="email" className='p-2 bg-Puti border-Prussian-Blue border-2'/>
                <label className='mb-3  text-Rich-Black'>Send a Message:</label>
                <textarea disabled cols="30" rows="10" className='py-2 bg-Puti border-Prussian-Blue border-2's/>
            </form>
            <div className=''>
                <h1 className='mb-5 text-Rich-Black text-5xl font-semibold'>Message Us!</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae deleniti libero numquam nemo 
                    consequuntur delectus molestiae sunt impedit nisi. Hic, inventore explicabo asperiores eos odio maiores 
                    accusantium excepturi ab nihil.
                </p>
            </div>
        </div>
    )
}

export default ContactsSection1