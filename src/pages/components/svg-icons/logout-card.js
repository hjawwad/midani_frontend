import * as React from "react";

function LogoutCard(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.333 5.67h13.334M4 11.003h1.333M7 11.003h2.667"
        stroke="gray"
        strokeWidth={1.2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.293 2.337H11.7c2.373 0 2.967.586 2.967 2.926v5.474c0 2.34-.594 2.926-2.96 2.926H4.293c-2.366.007-2.96-.58-2.96-2.92v-5.48c0-2.34.594-2.926 2.96-2.926z"
        stroke="gray"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LogoutCard;
