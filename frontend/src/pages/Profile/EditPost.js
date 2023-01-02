import { Form, InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myPosts,updatePost } from "../../redux/postSlice";
import editicon from '../editicon.png'
import Badgee from '../../components/Post/Badge2'


function EditPost(post) {
    const [data, setData] = useState({ title: "", content: "", price: "" })
    // const post = useSelector(state => state.post.posts)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => { setData({ ...data, [e.target.name]: e.target.value }) }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(updatePost(data))
    // }
    // console.log(data)
    useEffect(() => {
        dispatch(myPosts())
      }, [dispatch])



    return (
        <>
            {/* <Button variant="info" onClick={handleShow}
       style={{margin:"10px 595px"}}>
        Edit
      </Button> */}

            <Button variant="secondary"
                style={{ width: '40px', height: '40px', margin: '5px 15px', marginTop: '-70px', marginLeft: "150px" }}
                onClick={handleShow}
            >
                <img src={editicon}
                    style={{ width: '50px', margin: '0px -20px', marginTop: '-12px', marginLeft: "-20px" }} />
            </Button>{' '}

            <Modal
                show={show}
                onHide={handleClose}
                style={{ margin: "50px 0px" }}
                // onSubmit={handleSubmit}
                >

                <Modal.Header style={{ marginLeft: '130px', height: '100px' }} closeButton>
                    <Badgee />
                </Modal.Header>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1" style={{ heigth: '100px', width: '100px', margin: '10px' }}>Phone N°</InputGroup.Text>
                    <Form.Control
                        name="title"
                        placeholder="Edit Phone N°"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> handleChange(e)}
                        value={data.title}
                        
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text style={{ heigth: '100px', width: '100px', margin: '10px' }}>Description</InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        name="content"
                        aria-label="With textarea"
                        placeholder="Edit description"
                        onChange={(e)=> handleChange(e)}
                        value={data.content}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text style={{ heigth: '100px', width: '100px', margin: '10px' }}>Price</InputGroup.Text>
                    <Form.Control
                        name="price"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Edit price"
                        onChange={(e)=> handleChange(e)}
                        value={data.price}
                    />
                </InputGroup>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="file"
                        multiple size="sm"
                        style={{ width: "100px", margin: "10px 200px" }} />
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        annuler
                    </Button>
                    <Button variant="primary" 
                        onClick={()=> dispatch(updatePost({post,data}))}
                    >
                        Publier
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditPost