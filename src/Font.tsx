import { Global } from '@emotion/react'

export const Font = () => (
  <Global
    styles={`
     
      @font-face {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        src: url('/fonts/poppins-regular.ttf') format('ttf');
      }
      `}
  />
)
