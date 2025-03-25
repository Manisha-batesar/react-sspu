import React from 'react';
import beautyIcon from '../assets/logo-1.png';
import geneticsIcon from '../assets/logo-2.png';
import schoolIcon from '../assets/logo-3.png';

const Courses = () => {
  return (
    <div>
    <div className="home">
      <div className="home-img">
        <img
          src="https://s3-alpha-sig.figma.com/img/8007/2042/7a26079240a11e703fda1e77f9ea0a0d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L0U0T4zUcGFt~A1FEUs9JViQMfH5m57GCoz9Ww~MxDTfUCyr3njYMou9bBJwo~5GTrdCKjLc-FnMFiv7~VzYBj1wLobmdNQIB0Jaq1m7Q~QqomkVkPuk7ecul00kOmozt5EWhlYwh7lpun4GprZR3r~-yiBKs3OE5uoTiDTQtBjytvgHG5PomBuLEWiII~Kg0QN89UsnbcDGtZjs-iCSV6icD6Fs-fW0QAX3ySQiMQYujhyiU6tVbEBgxh1Pj1GQ3Qsj6DoZ381CxBpgAQm8QVzsV5vtOGGmpigUiUIp6~LcPolr5qgQ1VtoYKITAU-omSrIT6du90rdkmt4c0GpwQ__"
          alt="" />

       { /* home content */ }
        <div className="home-content">
          <h2>Big Header Text About <br />Symbiosis <span>Lorem ipsum.</span></h2>
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Sed do<br /> eiusmod tempor incididunt ut labore<br />et dolore magna aliqua. </p>
          <button>Enroll now  <span>→</span></button>
        </div>
        </div>
        </div>


        <div className="courses">  

        <div className="cards">
          <div className="home-card">

            <h3>BSc. in Beauty &<br /> Wellness</h3>
            <p>Discover the art and science of beauty with the B.Sc. in Beauty and
              Wellness at Symbiosis Skills & Professional University. This industry-driven program offers
              hands-on training in cosmetology, skincare, wellness therapies, and salon management,
              preparing students for rewarding careers in the beauty, wellness, and skin care industries.</p>

            <img src={beautyIcon} alt="" />

          </div>

          <div className="home-card">

            <h3>BSc. in Nutritional Sciences & Diabetics</h3>
            <p>Kickstart your career in health and wellness with the
              B.Sc. in Nutritional Science and Dietetics at Symbiosis Skills & Professional University. This
              comprehensive program focuses on clinical nutrition, dietetics, sports nutrition, and public
              health, equipping students with the knowledge and practical skills to promote better health
              through nutrition.</p>

            <img src={geneticsIcon} alt="" />
          </div>

          <div className="home-card">

            <h3>MSc. in Nutritional<br /> Sciences & Diabetics</h3>
            <p>Advance your expertise with the M.Sc. in Nutritional
              Science and Dietetics at Symbiosis Skills & Professional University. This specialized program
              offers in-depth knowledge in clinical nutrition, nutrigenomics, sports nutrition, and public
              health, preparing students for impactful careers in healthcare, research, wellness, and the
              nutrition industry.</p>

            <img src={schoolIcon} alt="" />
          </div>

        </div>
        </div>
        </div>
     
   
  )
}

export default Courses