import React from 'react';
import "./developer.css";
const DeveloperCard = ({ developer }) => {
  return (
    <>
    <div className="content">
     <div className="imgBx">
      <img src={developer.image}  alt={developer.name} />
    </div>
     <div className="contentBx">
        <h3 >{developer.name}</h3>
        <h6>{developer.title}</h6>
     </div>
    </div>
<ul className="sci">
<li>
    <a href={developer.github} target="_blank"><img src="images/GitLogo.png" width="32px"></img></a>
</li>
<li>
    <a href={developer.linkedin} target="_blank"><img src="images/image 11.png" width="32px"></img></a>
</li>
</ul>
</>
  );
};

export default DeveloperCard;






