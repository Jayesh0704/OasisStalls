import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { useDisclosure,Text } from '@chakra-ui/react'
import Cardcomponent from "./Cardcomponent";

// <Button onClick={handleShow}>
// Show more
// </Button>
// <Modal show={show} onHide={handleClose}>
// <Modal.Header closeButton>
// <Modal.Title>Modal heading</Modal.Title>
// </Modal.Header>
// <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// <Modal.Footer>
// <Button variant="secondary" onClick={handleClose}>
// Close
// </Button>
// <Button variant="primary" onClick={handleClose}>
// Save Changes
// </Button>
// </Modal.Footer>
// </Modal>


const MenuCard = ({ menuData,postData }) => {
     console.log(menuData);
    console.log(postData);
    const { isOpen, onOpen, onClose } = useDisclosure()


  
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
            <Cardcomponent curElem={curElem}/>
             
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;