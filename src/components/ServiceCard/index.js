import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ServiceCard = ({ title, content, btnText, imageSource }) => {
  return (
    <>
      <Card className="cardWidth serviceCard">
        <div className="img-box">
          <Card.Img variant="top" src={imageSource} className="service" />
        </div>
        <Card.Body>
          <Card.Title className="mx-20">{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button variant="primary" className="aboutButton" href="/services">
            {btnText}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ServiceCard;
