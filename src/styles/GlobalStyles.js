import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`


*,
*::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
  font-family: "Inter", sans-serif;
}

a {
  text-decoration: none;
  font-family: "Inter", sans-serif;
}

h1,
h2,
h3,
h4,
p {
  font-family: "Inter", sans-serif;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
}

html {
  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
}

`