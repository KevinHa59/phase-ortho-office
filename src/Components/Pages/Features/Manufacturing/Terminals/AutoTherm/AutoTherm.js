import React from 'react';
import '../../../../../../Styles/styles.css';
import './AutoTherm.css';
import BlankPanel from '../../../../../Templates/Panel/BlankPanel';
import ButtonStageItem from '../../../../../Templates/Controller/ButtonStageItem';
import ButtonItem from '../../../../../Templates/Controller/ButtonItem';
import Checkbox from '@mui/material/Checkbox';
import { MdSettings, MdEdit, MdDelete, MdOpenInNew } from 'react-icons/md';
export default function AutoTherm() {
  const Stages = ['Begin Task', 'Task In Progress', 'Task Complete'];
  return (
    <div className="MainBodyContainer">
      <div className="AutoTherm">
        <div className="Header">Thermoform</div>
        <div className="AutoThermBody">
          <div className="Left">
            <BlankPanel className="Overview">
              <OverviewItem title="customer" value="ORTHOFX" />
              <OverviewItem title="Due Date" value="June 6th 2022" />
              <OverviewItem title="SHIP DATE" value="(-2) June 4th 2022" />
              <OverviewItem title="PATIENT" value="Example" />
              <OverviewItem title="RX" value="0085673659475" />
              <OverviewItem title="REFERENCE" value="U|L1-14;U|LA" />
              <OverviewItem title="PRODUCT" value="Zendura" />
              <OverviewItem title="UNITS" value="30" />
              <ButtonStageItem Stages={Stages} currentStageIndex={0} />
            </BlankPanel>
            <BlankPanel className="OrderNotes">
              <div className="NoteHeader">ORDER NOTES</div>
              <div className="NoteList">
                <NoteDetail Poster="Melanie" At="1 Day ago" Detail="Note Detail 6" />
                <NoteDetail Poster="Melanie" At="1 Day ago" Detail="Note Detail 5" />
                <NoteDetail Poster="Melanie" At="2 Day ago" Detail="Note Detail 4" />
                <NoteDetail Poster="Melanie" At="3 Day ago" Detail="Note Detail 3" />
                <NoteDetail Poster="Melanie" At="4 Day ago" Detail="Note Detail 2" />
                <NoteDetail Poster="Melanie" At="5 Day ago" Detail="Note Detail 1" />
              </div>
            </BlankPanel>
            <BlankPanel className="ItemList">
              <ItemHeader />
              <ItemDetail Qty={28} ProductID="Z1" Description="OrthoFX Clear Aligner" />
              <ItemDetail Qty={2} ProductID="Z1AT" Description="Attachment Template" />
              <ItemDetail Qty={1} ProductID="Premium" Description="Premium Packaging" />
            </BlankPanel>
          </div>
          <div className="Right">
            <BlankPanel className="OrderInfo">
              <div className="Label">ORDER #</div>
              <div className="Value">48275</div>
              <a href="#" className="HistoryProduct">
                Production History <MdOpenInNew />
              </a>
            </BlankPanel>
            <BlankPanel className="OrderInfo">
              <div className="Label">OPEN FIX-IT TICKETS</div>
              <div className="TicketValue">#4276 U05-07</div>
              <a href="#" className="HistoryProduct">
                CNCR REPORT <MdOpenInNew />
              </a>
            </BlankPanel>
            <BlankPanel className="Support">
              <ButtonItem>Create Fix-It</ButtonItem>
              <ButtonItem>Call for Help</ButtonItem>
              <ButtonItem disabled={true}>Supervisor</ButtonItem>
            </BlankPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewItem({ ...props }) {
  return (
    <div className="Item">
      <div className="Title">{props.title.toUpperCase()}</div>
      <div className="Value">{props.value}</div>
    </div>
  );
}

function NoteDetail({ ...props }) {
  return (
    <div className="NoteDetail">
      <div className="Poster">
        {props.Poster} Last Update <strong>{props.At}</strong>
      </div>
      <div className="Description">{props.Detail}</div>
    </div>
  );
}

function ItemDetail({ ...props }) {
  return (
    <div className="ItemHeader">
      <div className="CheckBox">
        <Checkbox className="Icon" />
      </div>
      <div className="Title">{props.Qty}</div>
      <div className="Title">{props.ProductID}</div>
      <div className="Title">{props.Description}</div>
      <div className="Title">Material Type</div>
      <div className="Action">
        <MdEdit className="Icon" />
        <MdDelete className="Icon" />
      </div>
    </div>
  );
}

function ItemHeader() {
  return (
    <div className="ItemHeader">
      <div className="CheckBox">
        <Checkbox className="Icon" />
      </div>
      <div className="Title Header">Qty</div>
      <div className="Title Header">Product ID</div>
      <div className="Title Header">Description</div>
      <div className="Title Header">Material Type</div>
      <div className="Action">
        <MdSettings className="Icon" />
      </div>
    </div>
  );
}
