import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-62 xl:max-w-[320px]">Make your move, now!</h2>
          <p className="regular-16 text-gray-10"> Invest into a better and greater future</p>
          <div className="flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Contact Us"
           
              variant="btn_white"
              full
            />
            
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default GetApp