import { Form, InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Badgee from './Badge'


function NewPostForm() {
  const [data,setData]=useState({title:"",content:"",price:""})
  const post=useSelector(state=>state.post.posts)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange=(e)=>{setData({...data,[e.target.name]:e.target.value})}
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(createPost(data))
    navigate('/')
  }
// console.log(data)
  return (
    <>
      <Button variant="info" onClick={handleShow}
       style={{margin:"10px 595px"}}>
        + new post
      </Button>

      <Modal 
         show={show} 
         onHide={handleClose} 
         style={{margin:"50px 0px"}} 
         onSubmit={handleSubmit}>

        <Modal.Header  style={{marginLeft:'130px',height:'100px'}} closeButton>
          <Badgee/>
        </Modal.Header>
        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" style={{heigth:'100px',width:'100px',margin:'10px'}}>Phone N°</InputGroup.Text>
        <Form.Control
        name="title"
          placeholder=""
          aria-describedby="basic-addon1"
          onChange={handleChange}
          value={data.title}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text style={{heigth:'100px',width:'100px',margin:'10px'}}>Description</InputGroup.Text>
        <Form.Control 
        as="textarea" 
        name="content"
        aria-label="With textarea" 
        placeholder="" 
        onChange={handleChange}
        value={data.content}
        />
      </InputGroup>
          
      <InputGroup className="mb-3">
        <InputGroup.Text style={{heigth:'100px',width:'100px',margin:'10px'}}>Prix</InputGroup.Text>
        <Form.Control 
        name="price"
        aria-label="Amount (to the nearest dollar)" 
        placeholder="" 
        onChange={handleChange}
        value={data.price}
        />
      </InputGroup>   

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control 
        type="file" 
        multiple size="sm" 
        style={{width:"100px",margin:"10px 200px"}}/>
      </Form.Group>

         <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Publier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewPostForm