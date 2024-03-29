const User = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        id="ic_account_circle_24px"
        d="M14,2A12,12,0,1,0,26,14,12,12,0,0,0,14,2Zm0,3.6a3.6,3.6,0,1,1-3.6,3.6A3.6,3.6,0,0,1,14,5.6Zm0,17.04a8.641,8.641,0,0,1-7.2-3.864c.036-2.388,4.8-3.7,7.2-3.7s7.164,1.308,7.2,3.7A8.641,8.641,0,0,1,14,22.64Z"
        transform="translate(-2 -2)"
      />
    </svg>
  );
};

export default User;
