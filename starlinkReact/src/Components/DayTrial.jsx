import React from 'react'

const DayTrial = () => {
  return (
    <section className="bg-trialEarthImg bg-fixed  md:bg-right bg-center bg-[auto_900px] bg-no-repeat bg-black text-white py-40">
      <div className="text-center m-auto">
        <h3 className="text-[3.188rem] font-bold">30 DAY TRIAL</h3>
        <p className="md:text-[1.563rem] text-[1rem] font-normal">
          If not satisfied, return Starlink for a full refund.
        </p>
        <div className="py-20">
          <h4 className="font-bold text-xm mr-[20%] py-2">Service Address</h4>
          <input
            className="font-bold text-xs py-4 pl-6 pr-40 rounded-[4px] text-white bg-[#ffffff26] border"
            type="TYPE AND SECLECT"
            placeholder="TYPE AND SECLECT"
          />
          <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] ml-3 md:mt-0 mt-5">
            ORDER NOW
          </button>
          <p className="font-bold text-xs py-8">
            <a href="">
              VIEW AVAILABILITY & SPEED MAPS
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default DayTrial
