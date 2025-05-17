export const ProfileIcon = (props) => {
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
        <g fill="#fff" mask="url(#a)">
          <path d="M12 10.3c-2.1 0-3.8-1.7-3.8-3.8S9.9 2.7 12 2.7s3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8m0-5.6c-1 0-1.8.8-1.8 1.8S11 8.3 12 8.3s1.8-.8 1.8-1.8S13 4.7 12 4.7m2.4 6v.1L12 13.2l-2.4-2.4v-.1H4.2v10.6h2v-8.6h2.6l3.2 3.2 2.4-2.4.8-.8h2.6v8.6h2V10.7z" />
        </g>
      </g>
    </svg>
  );
};
