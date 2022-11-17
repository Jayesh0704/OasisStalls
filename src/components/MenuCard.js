import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { useDisclosure,Text } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
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
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                  
                    <h2 className="card-title"> {name} </h2>
                    
                  </div>
                  <img src={image} alt="images" className="card-media" />
                 
                  <span className="card-tag  subtle" onClick={onOpen}>Order Now</span>
                  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              "You can scroll the content behind the modal"
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              "Close"
            </Button>
            <Button variant='ghost'>"Secondary Action"</Button>
          </ModalFooter>
        </ModalContent>
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