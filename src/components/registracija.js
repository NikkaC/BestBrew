import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/onas.css';

function Registracija() {
  return (
    <>
      <Container fluid>

        <p class=" text-center, fw-bold, glavnoText">REGISTRACIJA<br></br>
          </p>


        <Card>
          <Card.Body  style={ {color: "primary"} }>
            <Card.Text>
              BESTBREW
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Row>
          <Col>
            <Card body>

            </Card>


          </Col>
          <Col>
            <Card body>
              
            </Card>
          </Col>
        </Row>
      </Container>

    </>



  );
}

export default Registracija;
