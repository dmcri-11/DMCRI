import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slide from "react-reveal/Slide";

const ServiceCard = ({ title, content, btnText, imageSource, services }) => {
  return (
    <>
      <Slide bottom>
        <Card className="cardWidth serviceCard">
          <div className="img-box">
            <Card.Img variant="top" src={imageSource} className="service" />
          </div>
          <Card.Body>
            <Card.Title className="mx-20">{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <div className="d-flex justify-content-end">
              <Button variant="primary" className="aboutButton" href={services}>
                {btnText}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Slide>
    </>
  );
};

export default ServiceCard;
