export const BurgerIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#a)">
        <mask
          id="a"
          width="24"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path fill="#fff" d="M24 0H0v24h24z" />
        </mask>
        <g fill="#000" mask="url(#a)">
          <path d="M19.7 11H4.2v1.9h15.5zm0 5.3H7.8v1.9h11.9zm0-10.5H6.6v1.9h13.1z" />
        </g>
      </g>
    </svg>
  );
};
