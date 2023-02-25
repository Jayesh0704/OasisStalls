  import React from 'react';
// import Topbar from './Topbar';
import './developer.css';
import Fade from 'react-reveal/Fade';
import DeveloperCard from './DeveloperCard';
import Topbar from './Topbar';
import Background from './Background';
const developers = [
  {
    id: 1,
    name: 'Jayesh  Harlalka',
    title: 'Full-Stack Developer',
   github:'https://github.com/Jayesh0704',
   linkedin:'https://www.linkedin.com/in/jayesh-harlalka-6b226221b/ ',
    image: "images/linkedInProfilepic.jpg",
  },

];



const Developers = () => {
    
    return (
        <div>
           <Topbar/>
           <Background/>
            <div className="devHead">
                <h1>Meet the developer</h1>
            </div>
            {developers.map(developer => (
            <div className="devContainer">
                <Fade>
               

                <div key={developer.id} className="devCard">

                <DeveloperCard developer={developer} />
                </div>   

              
                </Fade>
             
            </div>
            ))}
        </div>
    );
};

export default Developers;
