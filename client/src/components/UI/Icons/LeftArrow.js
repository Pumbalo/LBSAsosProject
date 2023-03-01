const LeftArrow = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={props.className}
      id="corner-up-left"
      xmlns="http://www.w3.org/2000/svg"
      width="24.344"
      height="22.822"
      viewBox="0 0 24.344 22.822"
    >
      <path
        id="corner-up-left-2"
        data-name="corner-up-left"
        d="M13.187,18.439l-1.875,1.883L2.839,11.885l8.437-8.474,1.883,1.875L8.141,10.325l13.692-.03a5.315,5.315,0,0,1,5.326,5.3l.023,10.629-2.657.006L24.5,15.6a2.657,2.657,0,0,0-2.663-2.652l-14.131.031Z"
        transform="translate(-2.839 -3.411)"
        fill="#6200ee"
      />
    </svg>
  );
};

export default LeftArrow;
