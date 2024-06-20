import React from "react";

const Calendar = () => {
  return (
    <div>
      <div className="dm-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">Calendario</h4>
                <div className="breadcrumb-action justify-content-center flex-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="uil uil-estate"></i>Inicio
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        calendario
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row calendar-grid justify-content-center">
            <div className="col-xxl-3 col-xl-5 col-md-6 col-sm-8">
              <div className="dm-calendar-left">
                <button
                  className="btn btn-primary btn-lg btn-create-event"
                  data-bs-toggle="modal"
                  data-bs-target="#c-event-modal"
                >
                  <img className="svg" src="/img/svg/plus.svg" alt="" />
                  Crear un nuevo Evento
                </button>
                <div className="card card-md mb-4">
                  <div className="card-body px-10">
                    <div className="date-picker">
                      <div className="date-picker__calendar"></div>
                      {/* <!-- ends: .date-picker__calendar --> */}
                    </div>
                  </div>
                </div>
                <div className="card card-md mb-4">
                  <div className="card-body">
                    <div className="draggable-events" id="draggable-events">
                      <div className="draggable-events__top d-flex justify-content-between">
                        <h6>Mis Calendarios</h6>
                        <a href="#">
                          <img className="svg" src="/img/svg/plus.svg" alt="" />
                        </a>
                      </div>
                      <ul className="draggable-event-list">
                        <li
                          className="draggable-event-list__single d-flex align-items-center"
                          data-className="primary"
                        >
                          <span className="badge-dot badge-primary"></span>
                          <span className="event-text">Eventos Internos</span>
                        </li>
                        {/* <!-- ends: .draggable-event-list__single --> */}
                        <li
                          className="draggable-event-list__single d-flex align-items-center"
                          data-className="secondary"
                        >
                          <span className="badge-dot badge-secondary"></span>
                          <span className="event-text">Giras </span>
                        </li>
                        {/* <!-- ends: .draggable-event-list__single --> */}
                        <li
                          className="draggable-event-list__single d-flex align-items-center"
                          data-className="success"
                        >
                          <span className="badge-dot badge-success"></span>
                          <span className="event-text">Reuniones de equipo</span>
                        </li>
                        {/* <!-- ends: .draggable-event-list__single --> */}
                        <li
                          className="draggable-event-list__single d-flex align-items-center"
                          data-className="primary"
                        >
                          <span className="badge-dot badge-primary"></span>
                          <span className="event-text">tareas</span>
                        </li>
                        {/* <!-- ends: .draggable-event-list__single --> */}
                        <li
                          className="draggable-event-list__single d-flex align-items-center"
                          data-className="warning"
                        >
                          <span className="badge-dot badge-warning"></span>
                          <span className="event-text">Actualizaciones de Proyectos</span>
                        </li>
                        {/* <!-- ends: .draggable-event-list__single --> */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- ends: .card --> */}
              </div>
            </div>
            {/* <!-- ends: .col-lg-3 --> */}
            <div className="col-xxl-9 col-xl-7">
              <div className="card card-default card-md mb-4">
                <div className="card-body">
                  <div id="full-calendar"></div>
                </div>
              </div>
              {/* <!-- ends: .card --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ends: .dm-page-content --> */}

      <div
        className="c-event-modal modal fade"
        id="c-event-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md c-event-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Crear Evento</h6>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="/img/svg/x.svg" alt="x" className="svg" />
              </button>
            </div>
            <div className="modal-body">
              <div className="c-event-form">
                <form action="#">
                  <div className="e-form-row d-flex">
                    <div className="e-form-row__left">
                      <label>Title</label>
                    </div>
                    <div className="e-form-row__right">
                      <input
                        type="text"
                        name="e-title"
                        placeholder="Weekly report meeting"
                        className="form-control form-control-md"
                      />
                    </div>
                  </div>
                  {/* <!-- ends: .e-form-row --> */}
                  <div className="e-form-row d-flex">
                    <div className="e-form-row__left">
                      <label>Tipo de Evento</label>
                    </div>
                    <div className="e-form-row__right">
                      <div className="radio-horizontal-list d-flex flex-wrap">
                        <div className="radio-theme-default custom-radio ">
                          <input
                            className="radio"
                            type="radio"
                            name="radio-e-type"
                            value="01"
                            id="radio-1"
                          />
                          <label for="radio-1">
                            <span className="radio-text">Evento</span>
                          </label>
                        </div>
                        <div className="radio-theme-default custom-radio ">
                          <input
                            className="radio"
                            type="radio"
                            name="radio-e-type"
                            value="02"
                            id="radio-2"
                          />
                          <label for="radio-2">
                            <span className="radio-text">Recordar</span>
                          </label>
                        </div>
                        <div className="radio-theme-default custom-radio ">
                          <input
                            className="radio"
                            type="radio"
                            name="radio-e-type"
                            value="03"
                            id="radio-3"
                          />
                          <label for="radio-3">
                            <span className="radio-text">Tarea</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ends: .e-form-row --> */}
                  <div className="e-form-row d-flex">
                    <div className="e-form-row__left">
                      <label>Inicio</label>
                    </div>
                    <div className="e-form-row__right d-flex">
                      <div className="input-container icon-left position-relative me-2">
                        <span className="input-icon icon-left">
                          <img
                            className="svg"
                            src="/img/svg/chevron-right.svg"
                            alt="chevron-right.svg"
                          >
                          </img>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="s-date"
                          placeholder="Select Date"
                        />
                      </div>
                      <div className="input-container icon-left position-relative">
                        <span className="input-icon icon-left">
                          <img
                            className="svg"
                            src="/img/svg/clock.svg"
                            alt="clock"
                          >
                          </img>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="s-time"
                          placeholder="Select Time"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- ends: .e-form-row --> */}
                  <div className="e-form-row d-flex">
                    <div className="e-form-row__left">
                      <label>Final</label>
                    </div>
                    <div className="e-form-row__right d-flex">
                      <div className="input-container icon-left position-relative me-2">
                        <span className="input-icon icon-left">
                          <img
                            className="svg"
                            src="/img/svg/chevron-right.svg"
                            alt="chevron-right.svg"
                          >
                          </img>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="e-date"
                          placeholder="Select Date"
                        />
                      </div>
                      <div className="input-container icon-left position-relative">
                        <span className="input-icon icon-left">
                          <img
                            className="svg"
                            src="/img/svg/clock.svg"
                            alt="clock"
                          >
                          </img>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="e-time"
                          placeholder="Select Time"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- ends: .e-form-row --> */}
                  <div className="e-form-row d-flex">
                    <div className="e-form-row__left">
                      <label>Description</label>
                    </div>
                    <div className="e-form-row__right">
                      <textarea
                        name="e-description"
                        className="form-control form-control-md"
                        placeholder="Add Description"
                      ></textarea>
                    </div>
                  </div>
                  {/* <!-- ends: .e-form-row --> */}
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-white btn-sm"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ends: .c-event-modal --> */}

      <div
        className="e-info-modal modal fade"
        id="e-info-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm e-info-dialog modal-dialog-centered"
          id="c-event"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header e-info-header bg-primary">
              <h6 className="modal-title e-info-title">Project Update</h6>
              <div className="e-info-action">
                <button className="btn-icon">
                  <img className="svg" src="/img/svg/edit.svg" alt="edit" ></img>
                </button>
                <button className="btn-icon">
                  <img className="svg" src="/img/svg/mail.svg" alt="mail"></img>
                </button>
                <button className="btn-icon">
                  <img className="svg" src="/img/svg/trash-2.svg" alt="trash" ></img>
                </button>
                <button
                  type="button"
                  className="btn-icon btn-closed"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="uil uil-times"></i>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <ul className="e-info-list">
                <li>
                  <img
                    className="svg"
                    src="/img/svg/chevron-right.svg"
                    alt="chevron-right.svg"
                  >
                                        
                  </img>
                  <span className="list-line">
                    <span className="list-label">Date :</span>
                    <span className="list-meta"> Thursday, January 23</span>
                  </span>
                </li>
                <li>
                  <img className="svg" src="/img/svg/clock.svg" alt="clock" ></img>
                  <span className="list-line">
                    <span className="list-label">Time :</span>
                    <span className="list-meta"> 23⋅5:00 – 6:00 am</span>
                  </span>
                </li>
                <li>
                  <img
                    className="svg"
                    src="/img/svg/align-left.svg"
                    alt="align-left"
                  ></img>
                  <span className="list-line">
                    <span className="list-text">
                      {" "}
                      Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                      diam consetetur sadipscing elitr sed diam
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ends: .e-info-modal --> */}
    </div>
  );
};

export default Calendar;
