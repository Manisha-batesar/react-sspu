import React from 'react'
import './AdmissionProcess.css';
import ApplicationProcess from './components/ApplicationProcess';

const AdmissionProcess = () => {
  const [activeButton, setActiveButton] = React.useState(0);
  return (
    <div className='mainContainer'>
      <h2>Admission Process & Requirements</h2>
      <div className='AdmissionProcessContainer'>

        {/* button */}
        <div className='AdmissionProcessContent'>
          <button type="button" className={`${activeButton === 0 ? 'active' : ''}`} onClick={() => {
            setActiveButton(0);
          }}>BSc. Beauty & Wellness</button>
          <button type="button" className={`${activeButton === 1 ? 'active' : ''}`} onClick={() => {
            setActiveButton(1);
          }}>BSc.Nutritional Sciences & Diabetics</button>
          <button type="button" className={`${activeButton === 2 ? 'active' : ''}`} onClick={() => {
            setActiveButton(2);
          }}>MSc.Nutritional Sciences & Diabetics</button>
        </div>

{activeButton === 0 ?  <ApplicationProcess /> : ''}
{activeButton === 1 ?  <ApplicationProcess title='second title'/> : ''}
{activeButton === 2 ?  <ApplicationProcess title='third title'/> : ''}
       
        
        



      </div>

    </div>

  )
}

export default AdmissionProcess