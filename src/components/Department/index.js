const Department = ({ title, imageSource }) => {
  return (
    <>
      <div class="inner-departments-blocks clearfix">
        <a href="#" title={title}>
          <img
            src={imageSource}
            alt={title}
            class="img-responsive"
            width="260"
            height="213"
          />
        </a>

        <h2>
          <a href="#">{title}</a>
        </h2>
      </div>
    </>
  );
};

export default Department;
