import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slide from "react-reveal/Slide";

const NoticeCard = () => {
  return (
    <>
      <Slide bottom>
        <Card className="cardWidth noticeCard">
          <Card.Body>
            <Card.Title className="mx-20">Notice Board</Card.Title>
            <span className="line">.</span>
            <Card.Text>Notices from Devdaha Medical College</Card.Text>
            <ul class="clearfix">
              <li>
                <a
                  href="https://drive.google.com/file/d/1L3jtTMhAXHiCcVk9W2VOdT-P5GKQK59x/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy Announcement for Staff Nurse, Lab Assistant, Lab and
                  Radio Technicians
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/19n0blqQg5PaqJLd-i5GXiNqCnu2DzRF3/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy for Medical Officer and Staff Nurse
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1IPGO4Ke_-N0nb5nv9djpGmEFn0f2Um0b/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy Announcement for Professor{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1DiXRr7CutNTHfAAt4l6yb7FswJV-NdHz/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  HA 3rd Year Result Published
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1dwCbG2_x1iUt69qe1uawBf3DYh2goV6f/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy Announcement for various posts
                </a>
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
      </Slide>
    </>
  );
};
export default NoticeCard;
