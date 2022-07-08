import React, { useEffect } from 'react';
import './Employees.css';
import BlankPanel from '../../../../Templates/Panel/BlankPanel';
import { EmployeesData } from '../../../../../Data/EmployeesData';
import { useState } from 'react';
import { Plaque } from '../../../../Templates/Plaque/Plaque';
import { useLayoutEffect } from 'react';
export default function Records() {
  const [employees, setEmployees] = useState(EmployeesData);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('first_name_az');
  const [updateList, setUpdateList] = useState(false);

  const Tasks = [
    {
      name: 'CAD',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Print',
      detail: {
        value: 300,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Therm',
      detail: {
        value: 400,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Laser',
      detail: {
        value: 500,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Mill',
      detail: {
        value: 600,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Tumble',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Inspect',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Packing',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
  ];

  useEffect(() => {
    SortEmployeesList();
    setUpdateList((value) => !value);
  }, [sortValue]);

  useEffect(() => {
    UpdateEmployeeList();
  }, [searchValue]);

  function UpdateEmployeeList() {
    const newEmployees = EmployeesData.filter((employee) => {
      return (
        employee.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.job_title.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setEmployees(newEmployees);
  }

  function SortEmployeesList() {
    if (sortValue === 'first_name_az') {
      setEmployees((list) => list.sort((a, b) => a.first_name.localeCompare(b.first_name)));
    }
    if (sortValue === 'first_name_za') {
      setEmployees((list) => list.sort((a, b) => b.first_name.localeCompare(a.first_name)));
    }
    if (sortValue === 'last_name_az') {
      setEmployees((list) => list.sort((a, b) => a.last_name.localeCompare(b.last_name)));
    }
    if (sortValue === 'last_name_za') {
      setEmployees((list) => list.sort((a, b) => b.last_name.localeCompare(a.last_name)));
    }
    if (sortValue === 'hire_date_latest') {
      setEmployees((list) => list.sort((a, b) => a.hire_date - b.hire_date));
    }
    if (sortValue === 'hire_date_oldest') {
      setEmployees((list) => list.sort((a, b) => b.hire_date - a.hire_date));
    }
  }

  return (
    <div className="MainBodyContainer">
      <div className="Header">
        Employee List {employees.length} {updateList}
      </div>
      <BlankPanel className="EmployeeContainer">
        <div className="ListController">
          <div className="Control">
            Search <input className="Input" type="text" onChange={(value) => setSearchValue(value.target.value)} />
          </div>
          <div className="Control">
            <div className="Sort">
              Sort By
              <select
                className="Input"
                onChange={(value) => {
                  setSortValue(value.target.value);
                }}
              >
                <option value="first_name_az">First Name A-Z</option>
                <option value="first_name_za">First Name Z-A</option>
                <option value="last_name_az">Last Name A-Z</option>
                <option value="last_name_za">Last Name Z-A</option>
                <option value="hire_date_latest">Hire Date Latest</option>
                <option value="hire_date_oldest">Hire Date Oldest</option>
              </select>
            </div>
            <div className="Filter">Filter</div>
          </div>
        </div>
        {/* <div className="ListHeader">
          <div className="Label Center">Photo</div>
          <div className="Label">First Name</div>
          <div className="Label">Last Name</div>
          <div className="Label">Email</div>
          <div className="Label">Phone</div>
          <div className="Label">Position</div>
          <div className="Label">Controller</div>
        </div> */}
        <div className="ListBody">
          {employees?.map((item, index) => {
            return <EmployeeItemStyle2 key={index} item={item} tasks={Tasks} />;
          })}
        </div>
      </BlankPanel>
    </div>
  );
}

function EmployeeItem({ item, ...props }) {
  return (
    <div className={'ListItem  ' + props.isOdd}>
      <div className="Detail Center">
        <Plaque>
          {item.first_name.charAt(0)} {item.last_name.charAt(0)}
        </Plaque>
      </div>
      <div className="Detail">{item.first_name}</div>
      <div className="Detail">{item.last_name}</div>
      <div className="Detail">{item.email}</div>
      <div className="Detail">{item.phone}</div>
      <div className="Detail">{item.job_title}</div>
      <div className="Detail">{item.hire_date}</div>
    </div>
  );
}

function EmployeeItemStyle2({ item, ...props }) {
  return (
    <div className={'ListItem'}>
      <div className="ItemLeft">
        <Plaque level={0} style="Style1">
          {item.first_name.charAt(0)} {item.last_name.charAt(0)}
        </Plaque>
      </div>
      <div className="ItemRight">
        <div className="S2">
          <div className="Name">
            <span>Name:</span> {item.first_name} {item.last_name}
          </div>
          <div className="Job">
            <span>Title:</span> {item.job_title}
          </div>
          <div className="Job">
            <span>Anniversary:</span> {item.hire_date}
          </div>
        </div>
        <div className="S3">
          {props.tasks.map((task, index) => {
            return (
              <div className="TaskItem">
                <div className="TaskName">{task.name}</div>
                <div className="Detail">
                  <div className="Section">{task.detail.value}</div>
                  <div className="Section">{task.detail.average} avg. per/hr</div>
                  <div className="Section">Goal: {task.detail.goal}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
