import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      featurename: "",
      description: "",
      dependency: "Y",
      dependencyfeaturename:"",
      phase:"",
      specificrequirement:"",
      fixedcustom:"",
      developmentowner:"Client Delivery",
      productmanager:"",
      storypoints:"",
      estimateconfidencescore:"",
      estimatedby:"",
      timeline:"",
      urltoADOTicket:"",
      inPxFRsheet:"",
      commentsassumptions:"",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.featurename && formState.description) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
        
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }} 
      onKeyDown={(e)=>{
        if (e.target.className === "modal-container") closeModal();
      }}
      role='presentation'
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="featurename">Feature Name</label>
            <input name="featurename" onChange={handleChange} value={formState.featurename} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dependency">Dependency? (Y/N)</label>
            <select
              name="dependency"
              onChange={handleChange}
              value={formState.dependency}
            >
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dependencyfeaturename">Dependency (Feature Name)</label>
            <input name="dependencyfeaturename" onChange={handleChange} value={formState.dependencyfeaturename} />
          </div>
          <div className="form-group">
            <label htmlFor="phase">Phase</label>
            <input name="phase" onChange={handleChange} value={formState.phase} />
          </div>
          <div className="form-group">
            <label htmlFor="specificrequirement">Specific Requirement in RFP? (Y/N)</label>
            <select
              name="specificrequirement"
              onChange={handleChange}
              value={formState.specificrequirement}
            >
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fixedcustom">Fixed/Custom</label>
            <select
              name="fixedcustom"
              onChange={handleChange}
              value={formState.fixedcustom}
            >
              <option value="Fixed">Fixed</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="developmentowner">Development Owner</label>
            <select
              name="developmentowner"
              onChange={handleChange}
              value={formState.developmentowner}
            >
              <option value="Y">Client Delivery</option>
              <option value="N">Product</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="productmanager">Product Manager</label>
            <input  name="productmanager" onChange={handleChange} value={formState.productmanager} />
          </div>
          <div className="form-group">
            <label htmlFor="storypoints">Story Points</label>
            <input type='number' name="storypoints" onChange={handleChange} value={formState.storypoints} />
          </div>
          <div className="form-group">
            <label htmlFor="estimateconfidencescore">Estimate Confidence Score</label>
            <input type='number' name="estimateconfidencescore" onChange={handleChange} value={formState.estimateconfidencescore} />
          </div>
          <div className="form-group">
            <label htmlFor="estimatedby">Estimated By</label>
            <input  name="estimatedby" onChange={handleChange} value={formState.estimatedby} />
          </div>
          <div className="form-group">
            <label htmlFor="timeline">Timeline</label>
            <input  name="timeline" onChange={handleChange} value={formState.timeline} />
          </div>
          <div className="form-group">
            <label htmlFor="urltoADOTicket">URL to ADO Ticket</label>
            <input  name="urltoADOTicket" onChange={handleChange} value={formState.urltoADOTicket} />
          </div>
          <div className="form-group">
            <label htmlFor="inPxFRsheet">In Px F&R sheet?</label>
            <input  name="inPxFRsheet" onChange={handleChange} value={formState.inPxFRsheet} />
          </div>
          <div className="form-group">
            <label htmlFor="commentsassumptions">Comments/Assumptions</label>
            <input  name="commentsassumptions" onChange={handleChange} value={formState.commentsassumptions} />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit} >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};