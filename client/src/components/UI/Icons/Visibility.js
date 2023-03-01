const Visibility = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={props.className}
      id="icon_action_visibility_24px"
      data-name="icon/action/visibility_24px"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect id="Boundary" width="24" height="24" fill="none" />
      <path
        id="_Color"
        data-name=" ↳Color"
        d="M11,15a11.731,11.731,0,0,1-6.726-2.1A11.837,11.837,0,0,1,0,7.5a11.818,11.818,0,0,1,22,0,11.836,11.836,0,0,1-4.273,5.4A11.731,11.731,0,0,1,11,15ZM11,2.5a5,5,0,1,0,5,5A5.005,5.005,0,0,0,11,2.5Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,11,10.5Z"
        transform="translate(1 4.5)"
      />
    </svg>
  );
};

export default Visibility;
