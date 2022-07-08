import React, { useEffect } from 'react';
import './Resources.css';
import '../../../../../Styles/styles.css';
import { MdOpenInNew, MdInfo, MdCode, MdPlayCircle, MdArrowForward } from 'react-icons/md';
import wavingHand from '../../../../../Images/Waving.png';
import InfoPanel from '../../../../Templates/Panel/InfoPanel';
export default function Resources() {
  useEffect(() => {
    document.title = 'Resources';
  }, []);

  return (
    <div className="MainBodyContainer">
      <div className="Resources">
        <div className="Header">
          Welcome <img src={wavingHand} alt="" />
        </div>
        <div className="SubHeader">This is some important information that might be helpful for people to know about the organization, training, or other helpful things.</div>
        <a href="#" className="Link">
          SEE MORE ON THE BLOG <MdOpenInNew />
        </a>
        <div className="ResourcesBody">
          <div className="Left">
            <InfoPanel Icon={<MdInfo className="Icon" />} Color={'Purple'} Title={'Information'} Desc={'The best place to get started when you are looking for answers.'} />
            <InfoPanel Icon={<MdCode className="Icon" />} Color={'Yellow'} Title={'Analysis'} Desc={'Great for making informed decisions!'} />
            <InfoPanel Icon={<MdPlayCircle className="Icon" />} Color={'Blue'} Title={'Training'} Desc={'This is a great place to complete your training.'} />
            <InfoPanel Icon={<OrderManagementIcon className="Icon" />} Color={'Pink'} Title={'Blog'} Desc={'Discover important things about'} />
          </div>
          <div className="Right">
            <Hint />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hint() {
  return (
    <div className="Hint">
      <div className="Title">Did you know?</div>
      <div className="Description">More fun facts or links to helpful things that we may want the team to see.</div>
      <a href="#" className="Link">
        SEE OUR ROAD MAP <MdArrowForward />
      </a>
    </div>
  );
}

function OrderManagementIcon({ className }) {
  return (
    <svg
      class={'MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv ' + className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="HistoryEduIcon"
      width={'24px'}
      height={'24px'}
    >
      <path d="M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"></path>
    </svg>
  );
}
