import Slide from "react-reveal/Slide";

const SideCard = ({
  title,
  founder,
  content,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
}) => {
  return (
    <>
      <div class="sidecard py-30">
        <h3 class="h3-md steelblue-color">{title}</h3>
        <span className="line">.</span>

        <Slide bottom>
          <span class="section-id ">
            <u>
              {/* <a href="#"> */}
              {founder}
              {/* </a> */}
            </u>
          </span>

          <p>{content}</p>
          <p>{content1}</p>
          <p>{content2}</p>
          <p>{content3}</p>
          <p>{content4}</p>
          <strong>
            <span>{content5}</span>
          </strong>
          <br />

          <span>{content6}</span>
        </Slide>
        <br />
      </div>
    </>
  );
};

export default SideCard;
