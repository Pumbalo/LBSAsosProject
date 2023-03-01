const DownArrow = (props) => {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      id="icon_navigation_arrow_drop_down_24px"
      data-name="icon/navigation/arrow_drop_down_24px"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect id="Boundary" width="24" height="24" fill="none" />
      <path
        id="_Color"
        data-name=" ↳Color"
        d="M0,0,6.5,6,13,0Z"
        transform="translate(4.927 8.964)"
      />
    </svg>
  );
};

export default DownArrow;
