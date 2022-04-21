import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slide from "react-reveal/Slide";

const AboutCard = ({ title, content, btnText }) => {
  return (
    <>
      <Slide bottom>
        <Card className="cardWidth aboutCard">
          <Card.Body>
            <Card.Title className="mx-20">{title}</Card.Title>
            <span className="line"> . </span>
            <Card.Text>{content}</Card.Text>
            <div className="d-flex justify-content-start">
              <Button variant="primary" className="aboutButton" href="/about">
                {btnText}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Slide>
    </>
  );
};

export default AboutCard;
