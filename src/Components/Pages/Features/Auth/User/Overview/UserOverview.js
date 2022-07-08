import React from 'react';
import './UserOverview.css';
import BlankPanel from '../../../../../Templates/Panel/BlankPanel';
import { useSelector } from 'react-redux';
import Chart_Radar from '../../../../../Chart/Radar/Chart_Radar';
import Bar_Vertical from '../../../../../Chart/Bar/Bar_Vertical';
export default function UserOverview() {
  const user = useSelector((state) => state.User);
  const userData = {
    firstName: 'John',
    middleName: '',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    hireDate: '01/01/2015',
    dob: '01/01/1990',
    role: 'User',
    department: 'IT',
    employmentType: 'Full Time',
    shift: 'Day',
    position: 'Software Engineer',
  };

  const data = [
    {
      subject: 'Math',
      value: 100,
    },
    {
      subject: 'Chinese',
      value: 50,
    },
    {
      subject: 'English',
      value: 100,
    },
    {
      subject: 'Geography',
      value: 20,
    },
    {
      subject: 'Physics',
      value: 70,
    },
    {
      subject: 'History',
      value: 50,
    },
  ];

  const workingHourData = [
    {
      name: 'Monday',
      WorkingHour: 7.5,
    },
    {
      name: 'Tuesday',
      WorkingHour: 8,
    },
    {
      name: 'Wednesday',
      WorkingHour: 8.2,
    },
    {
      name: 'Thursday',
      WorkingHour: 7.1,
    },
    {
      name: 'Friday',
      WorkingHour: 7.4,
    },
    {
      name: 'Saturday',
      WorkingHour: 0,
    },
    {
      name: 'Sunday',
      WorkingHour: 0,
    },
  ];
  return (
    <div className="MainBodyContainer">
      <div className="GeneralInformationContainer">
        <BlankPanel className={'InformationContainer'}>
          <div className="Avatar">
            {userData.firstName.charAt(0) + userData.lastName.charAt(0)}
            <AvatarBackground role={user.userInfo.role + ' Shadow'} />
            <AvatarBackground role={user.userInfo.role} />
          </div>
          <div className="Information">
            <InformationItem label={'Full Name'} value={userData.firstName + ' ' + userData.lastName} />
            <InformationItem label={'Email'} value={userData.email} />
            <InformationItem label={'Phone'} value={userData.phone} />
            <InformationItem label={'Hire Date'} value={userData.hireDate} />
            <InformationItem label={'Date of Birth'} value={userData.dob} />
            <InformationItem label={'Department'} value={userData.department} />
            <InformationItem label={'Position'} value={userData.position} />
            <InformationItem label={'Employment Type'} value={userData.employmentType} />
            <InformationItem label={'Shift'} value={userData.shift} />
            <InformationItem label={'Address'} value={userData.address + ', ' + userData.city + ' ' + userData.state + ', ' + userData.zip} />
          </div>
        </BlankPanel>
        {/* <Bar_Vertical data={workingHourData} />
        <Chart_Radar data={data} /> */}
      </div>
    </div>
  );
}

function InformationItem({ ...props }) {
  return (
    <div className="InfoItem">
      <span className="Label">{props.label}: </span>
      <span className="Value">{props.value}</span>
    </div>
  );
}

function AvatarBackground({ ...props }) {
  return (
    <div className={'SVGIcon ' + props.role}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
      </svg>
    </div>
  );
}
