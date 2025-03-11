const TopSVG = ({ size = 64, color = "black" }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M32 2L16 18h10v15h12V18h10z" fill={color}></path>
      <path d="M32 62c-3.308 0-6-2.848-6-6.348v-9.307C26 42.848 28.692 40 32 40s6 2.848 6 6.346v9.307C38 59.152 35.308 62 32 62m0-18.617c-1.654 0-3 1.33-3 2.963v9.307c0 1.633 1.346 2.965 3 2.965s3-1.332 3-2.965v-9.307c0-1.633-1.346-2.963-3-2.963" fill={color}></path>
      <path d="M22 40H10v3h4.5v19h3V43H22z" fill={color}></path>
      <path d="M48 40h-6v22h3v-9.309h3c3.308 0 6-2.848 6-6.348C54 42.846 51.308 40 48 40m0 9.309h-3v-5.926h3c1.654 0 3 1.328 3 2.961s-1.346 2.965-3 2.965" fill={color}></path>
    </svg>
  );
};

export default TopSVG;
