import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import logo from '../components/logo.png'
import { loadPosts, deletePost } from '../redux/postSlice';
import { Card, ListGroup, Nav } from 'react-bootstrap';
import NewPostForm from '../components/Post/NewPostForm '
import Loading from '../components/Loading';
import ContactLogo from './ContactLogo.png'
import Logo from '../components/logo.png'

function LandPage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  return (
    <>
      {auth ? (
        <>

          <>
            <NewPostForm />
          </>
          <>
            <div className='postMap'>
              {posts.length > 0 ? posts.map((post =>

                <Card style={{ width: '18rem', float: 'left', margin: '20px 20px' }} key={post._id}>
                  <Card.Img variant='top' src={logo} style={{ width: '18rem' }} />
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>{post.content}</ListGroup.Item>
                      <ListGroup.Item style={{ fontSize: '25px', lineHeight: '25px' }}>${post.price}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                      <Nav.Link style={{ width: '50px', margin: '5px 10px' }}>
                        <img src={ContactLogo}
                          style={{ width: '50px', margin: '5px -10px' }} />
                      </Nav.Link> <h2 style={{ marginTop: '-55px', marginLeft: '80px' }}>{post.title}</h2>
                    </ListGroup.Item>
                  </Card.Body>
                </Card>))

                : <Loading />}
            </div>
          </>
        </>
      ) : (
        <>
          <img src={Logo} style={{ width: '700px', margin: '100px 300px' }}></img>
        </>
      )}
    </>
  );
}

export default LandPage;
