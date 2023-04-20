import React from 'react';
import { facebook,instagram,twitter,linkedin } from "../../data/data";


const footer = () => {
  return (
    <section className='md:container container-sm flex justify-between md:flex-row flex-col-reverse md:items-start items-center md:!py-[50px] !py-[30px]'> 
        <div>
            <p>Copyright © 2020 Invoriem</p>
        </div>
        <div className='flex md:flex-row flex-col'>
            <div>info@invoriem.com</div>
            <div className="flex justify-between w-[150px] md:ml-16 md:my-0 my-7">
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
    </section>
  )
}

export default footer