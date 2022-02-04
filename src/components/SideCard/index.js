const SideCard = ({ title, founder, content }) => {
  return (
    <>
      <div class="sidecard py-30">
        <h3 class="h3-md steelblue-color">{title}</h3>
        {/* <span className="line">.</span> */}
        <span class="section-id ">
          <u>
            <a href="#" title="Know More About Upendra Devkota">
              {founder}
            </a>
          </u>{" "}
        </span>

        <p>{content}</p>
        <br />

        {/* <button type="button" class="aboutButton btn btn-primary">
          Read More
        </button> */}
      </div>
    </>
  );
};

export default SideCard;
