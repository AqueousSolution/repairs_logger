import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.js";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please Enter A Message and Tech" });
    } else {
      console.log("done");
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={e => {
                setTech(e.target.value);
              }}
            >
              <option value="" disabled>
                Select technician
              </option>
              <option value="Naira marley">Naira marley</option>
              <option value="Naira marley">Terry G</option>
              <option value="Naira marley">Wande coal</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => {
                    setAttention(!attention);
                  }}
                />
                <span>needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};
export default AddLogModal;
