const Trash = (props) => {
  return (
    <svg
      onClick={props.onClick}
      itemid={props.itemid}
      itemsize={props.itemsize}
      itemcolor={props.itemcolor}
      id="trash"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
    >
      <path
        id="Path_1347"
        data-name="Path 1347"
        d="M21.667,5.947V4.632A2.649,2.649,0,0,0,19,2H11A2.649,2.649,0,0,0,8.333,4.632V5.947h-4a1.316,1.316,0,1,0,0,2.632H5.667V23.053a3.974,3.974,0,0,0,4,3.947H20.333a3.974,3.974,0,0,0,4-3.947V8.579h1.333a1.316,1.316,0,1,0,0-2.632ZM19,4.632H11V5.947h8Zm2.667,3.947H8.333V23.053a1.325,1.325,0,0,0,1.333,1.316H20.333a1.325,1.325,0,0,0,1.333-1.316Z"
        transform="translate(-3 -2)"
        fill-rule="evenodd"
      />
      <path
        id="Path_1348"
        data-name="Path 1348"
        d="M9,9h2v8H9Z"
        transform="translate(-0.75 1.818)"
      />
      <path
        id="Path_1349"
        data-name="Path 1349"
        d="M13,9h2v8H13Z"
        transform="translate(0.75 1.818)"
      />
    </svg>
  );
};

export default Trash;
