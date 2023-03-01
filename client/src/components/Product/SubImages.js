import { Fragment } from "react";

const SubImages = (props) => {
  return (
    <Fragment>
      {props.media?.map((media) => (
        <img
          onClick={props.onClick}
          className={props.className}
          key={Math.random()}
          alt={`${media.type}`}
          src={`https://${media.url}`}
        />
      ))}
    </Fragment>
  );
};

export default SubImages;
