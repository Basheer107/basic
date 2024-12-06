import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Profile() {
    
 
    return (
        
        <Card style={{ width: '18rem', }} className='col-md-4'>
        <Card.Img variant="top"src="https://avatars.githubusercontent.com/u/182937907?v=4                    " />
        <Card.Body>
          <Card.Title>Basheer</Card.Title>
          <Card.Text>
            I am studing in BCA
          </Card.Text>
          <a variant="primary" href="https://github.com/Basheer107">open profile</a>
        </Card.Body>
      </Card>
      );
  }
  export default Profile