import React from 'react'
import './AdmissionProcess.css';

const AdmissionProcess = () => {
  return (
    <div className='mainContainer'>
      <h2>Admission Process & Requirements</h2>
      <div className='AdmissionProcessContainer'>

        {/* button */}
        <div className='AdmissionProcessContent'>
          <button type="button">BSc. Beauty & Wellness</button>
          <button type="button">BSc.Nutritional Sciences & Diabetics</button>
          <button type="button">MSc.Nutritional Sciences & Diabetics</button>
        </div>

        {/* content */}
        <div className='Requirements'>
          <div className='EligibilityCriteria'>
            <h3>Eligibility Criteria</h3>
            <p>Passed 10+2 examination or equivalent course in any discipline from any recognized
              Board/ Council/ University. Candidates will be selected based on their performance in the selection process as set
              by SSPU.
              The final Merit list shall be prepared on the basis of marks obtained by the candidate in 12th.</p>
          </div>


          {/* form deadline */}

          <div className='form'>
            <button type='button' className='btnOne'>Apply Online<span>→</span></button>
            <button type='button' className='btnTwo'>Download document</button>
          </div>
        </div>
        <div className='lastDate'>
          <p>Application Deadline</p>
          <h1>30 May 2025, Saturday</h1>
        </div>

        {/* step to apply in university */}


        <div className='stepContainer'>
          <h2>Steps to Apply</h2>
        </div>
        <div className='allStepsContainer'>
          <hr />
          {/* step 1 */}
          <div className='allStep'>
            <button type='button' style={{ backgroundColor: "white", border: '2px solid red' }}>1</button>
            <h3>Step 1: Registration and Login with Apply Online <br />
              <span>Fill Application Form and upload necessary documents. </span></h3>
          </div>

          {/* step 2 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 2: Submission Online <br />
              <span>Pay Application Fees of Rs. 1500 or Rs. 1000 based on whichever is applicable.</span></h3>
          </div>

          {/* step 3 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 3: Multiple Modes of Payment <br />
              <span>Pay Application Fees of Rs. 1500 or Rs. 1000 based on whichever is applicable.</span></h3>
          </div>

          {/* step 4 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 4: Submit and Complete Application Form<br />
              <span>Complete the online application form  </span></h3>
          </div>

          {/* step 5 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 5: Bring Proper Documents<br />
              <span>Schedule and appear for a skill test and personal interview round.</span></h3>
          </div>

          {/* step 6 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 6: Provisional Admission Letter (Received on Mail)<br />
              <span>Incase the student is shortlisted recieves provisional admission letter on Registered ID.</span></h3>
          </div>

          {/* step 7 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 7: Merit List Declaration (Received on Mail)<br />
              <span>Inter Merit List will be declared and selected candidates will recieve official mail communication for completion of further admission formalities.</span></h3>
          </div>

          {/* step 8 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 8: Requisite Fee payment<br />
              <span>Admission confirmation by paying Requisite Fees and Document submission within stipulated time.</span></h3>
          </div>

          {/* step 9 */}
          <div className='allStep'>
            <button type='button'>.</button>
            <h3>Step 9: Orientation<br />
              <span>The candidates who have confirmed admission will have to join the orientation function and regular classes on notified dates.</span></h3>
          </div>
        </div>




      </div>

    </div>

  )
}

export default AdmissionProcess