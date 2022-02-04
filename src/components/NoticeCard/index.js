import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const NoticeCard = () => {
  return (
    <>
      <Card className="cardWidth noticeCard">
        <Card.Body>
          <Card.Title className="mx-20">Notice Board</Card.Title>
          <span className="line">.</span>
          <Card.Text>
            We notice you that color sit amet, consectetur adipiscing elit.
            Aliquet in aliquam est pharetra gravida. Elementum tortor pretium,
            diam risus mi. Senectus porttitor vivamus quis nisl, vul
          </Card.Text>
          <ul class="clearfix">
            <li>
              <a href="#">BPH VII Semester 074 Exam Routine -3rd Feb, 2022</a>
            </li>
            <li>
              <a href="#">MBBS II Year 073 Exam Result Published </a>
            </li>
            <li>
              <a href="#">BSC Nursing Ist Year 2077 Form Fillup Notice</a>
            </li>
            <li>
              <a href="#">BSC Nursing Ist Year 2077 Form Fillup Notice</a>
            </li>
            <li>
              <a href="#">BSC Nursing Ist Year 2077 Form Fillup Notice</a>
            </li>
          </ul>
          {/* <button className="noticeButton" href="/notice">
            View All
          </button> */}
          <Button variant="primary" className="noticeButton" href="/notice">
            View All
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default NoticeCard;
