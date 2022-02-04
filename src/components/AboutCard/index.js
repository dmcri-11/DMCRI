import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AboutCard = ({ title, content, btnText }) => {
  return (
    <>
      <Card className="cardWidth aboutCard">
        <Card.Body>
          <Card.Title className="mx-20">{title}</Card.Title>
          <span className="line">.. </span>
          <Card.Text>{content}</Card.Text>
          <Button variant="primary" className="aboutButton" href="/about">
            {btnText}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutCard;
