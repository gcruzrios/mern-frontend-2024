import React from "react";
import AddUser from "./ModalAddUser";
import Paginator from "./Paginator";


import SearchNameUser from "./SearchNameUser";

import TablaUsers from "./TablaUsers";

const ListaUsers = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumb-main user-member justify-content-sm-between ">
          <SearchNameUser />
          <div className="action-btn">
            <a
              href="#"
              className="btn px-15 btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#new-member"
            >
              <i className="las la-plus fs-16"></i>Agregar Usuarios
            </a>
            <AddUser />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
           <TablaUsers/> 
           
        </div>
          
        </div>
      </div>
    </>
  );
};

export default ListaUsers;

