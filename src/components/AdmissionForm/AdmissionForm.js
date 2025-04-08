import React, { useState } from 'react';
import logoImage from '../../assets/icon1.png';
import './AdmissionForm.css';

const AdmissionForm = ({showForm = false, toggleForm = () => {}}) => {
  return (
      showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <button type='button'  className="close-btn" onClick={toggleForm}>×</button>
            
            <img src={logoImage} alt="Logo" className="form-logo" />

            <h2>Enroll Now/ Admission Enquiry</h2>
            <p>Please enter the following details so we cahttps://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.mdn get in touch you</p>

            <form>
        
            <label htmlFor="fullName">Enter your Full Name *</label>
              <input type="text" id="fullName" placeholder="eg: Riya Watwe" />

              <label htmlFor="fullName">Enter your Phone Number *</label>
              <input type="tel" placeholder="eg: +91 9146697550" />

              <label htmlFor="fullName">Enter Email ID *</label>
              <input type="email" placeholder="eg: xyz1234@gmail.com" />

              <label htmlFor="fullName">Enter City *</label>
              <input type="text" placeholder="eg: Pune, Maharashtra" />

              <label htmlFor="fullName">Select a course you&apos;re interested in *</label>
              <select>
                <option>BSc. Beauty & Wellness</option>
                <option>Diploma in Cosmetology</option>
                <option>Makeup Artistry</option>
              </select>

              <button type="submit" className="submit-btn">Submit Details</button>
            </form>
          </div>
        </div>
      )
  );
};

export default AdmissionForm;
