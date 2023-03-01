const Cross = (props) => {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="21.223"
      height="21.223"
      viewBox="0 0 21.223 21.223"
    >
      <path
        id="delete_cross"
        d="M88.658,73.4,83.136,78.92,77.613,73.4A2.981,2.981,0,0,0,73.4,77.613l5.523,5.523L73.4,88.66a2.981,2.981,0,0,0,4.216,4.216l5.523-5.523,5.523,5.523a2.981,2.981,0,0,0,5.089-2.105,2.95,2.95,0,0,0-.873-2.105l-5.523-5.529,5.523-5.523A2.981,2.981,0,0,0,88.658,73.4Z"
        transform="translate(-72.525 -72.525)"
      />
    </svg>
  );
};

export default Cross;
