import * as React from "react"
function ProfileIcon(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width={30} height={30} rx={7} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_308_38777" transform="scale(.0004)" />
        </pattern>
        <image
          id="image0_308_38777"
          width={2560}
          height={2560}
        />
      </defs>
    </svg>
  )
}
export default ProfileIcon;