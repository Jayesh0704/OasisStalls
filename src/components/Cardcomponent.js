import React,{useState} from 'react'
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
 
 
const Cardcomponent = ({curElem}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
  
  return (
    
    <div className="card-container" key={curElem.id}>
    <div className="card ">
      <div className="card-body">
        <span className="card-number card-circle subtle">{curElem.id}</span>
      
        <h2 className="card-title"> {curElem.name} </h2>
        
      </div>
      <img src={curElem.image} alt="images" className="card-media" />
     
      <span className="card-tag  subtle" onClick={onOpen} >View details</span>
      <Modal
      blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {curElem.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={18}>
         <div>
         <div  style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <img src={curElem.image} alt="images" className="card-media" />
         </div>
         <div style={{display:"block",fontFamily:"poppins",padding:"5%",fontSize:"1.4rem"}}>
         <div >Price: {curElem.price}</div>
         <div>Quantity remaining:{curElem.quantityleft}</div>
         </div>
         </div>
        </ModalBody>
         
        <ModalFooter >
          <p style={{fontFamily:"poppins",fontSize:"1.4rem",fontWeight:"700",width:"100%",textAlign:"center"}}>Head over NSS stalls to buy it!</p>
        </ModalFooter>
      </ModalContent>
    </Modal>  
      </div>
      </div>

  )
}

export default Cardcomponent