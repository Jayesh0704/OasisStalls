import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MenuCard = ({ menuData,postData }) => {
     console.log(menuData);
    console.log(postData);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                  
                    <h2 className="card-title"> {name} </h2>
                    
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <Button onClick={handleShow}>
                  Show more
                </Button>
                
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
          
                  
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;