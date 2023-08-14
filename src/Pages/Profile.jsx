import React, { useContext, useRef, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../Context/TaskContext';
import { dateFormat } from '../Helper';

function Profile(props) {
  const { option } = props;
  const { type, data }=option;
  const{profileList}=useContext(TaskContext);

  const closeButton = useRef(null); 
  const onProfile =()=>{
    Profile(data.id);
  };
  return(
    <div className="modal" tabIndex="-1" id="task-modal">
      <div className="modal-dialog">
        <div className="modal-content bg-primary">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeButton}
            ></button>
          </div>
<div className="modal-body text-white">

  type === "Profile" ?
  <div>
      <h5>{data.className}</h5>
     

      <div className="d-flex">
        <p>Modified On: {dateFormat(data.modifiedOn)}</p>
        <p className="ms-auto">Due Date: {dateFormat(data.duedate)}</p>
        
        
        
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
  
        





};

      export default Profile;