import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
font-family: 'Mulish', sans-serif;


*,
*::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
  font-family: 'Mulish', sans-serif;
}

a {
  text-decoration: none;
  font-family: 'Mulish', sans-serif;
}

h1,
h2,
h3,p {
  font-family: 'Mulish', sans-serif;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Mulish', sans-serif;
}

html {

  scroll-behavior: smooth;
}

`