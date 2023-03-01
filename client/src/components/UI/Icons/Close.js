const Close = (props) => {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      itemid={props.itemid}
      id="close"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        id="close-2"
        data-name="close"
        d="M6.8,4.91A1.337,1.337,0,0,0,4.91,6.8l7.718,7.718L4.91,22.237a1.337,1.337,0,0,0,1.89,1.89l7.718-7.718,7.718,7.718a1.337,1.337,0,0,0,1.89-1.89l-7.718-7.718L24.127,6.8a1.337,1.337,0,0,0-1.89-1.89l-7.718,7.718Z"
        transform="translate(-4.518 -4.518)"
      />
    </svg>
  );
};

export default Close;
