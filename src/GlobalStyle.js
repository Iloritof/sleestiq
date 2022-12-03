import { createGlobalStyle } from 'styled-components';
// import bodybg from '/img/background-destination-desktop.jpg';

export const GlobalStyle = createGlobalStyle`
  /*------------------------------*/
  /* Custom Properties            */
  /*------------------------------*/

  :root {
    --maxWidth: 1400px;

    /* Colors */
    --clr-red: 0 100% 66%;
    --clr-blue: 200 38% 49%;
    --clr-white: 0 0% 100%;
    --clr-dark: 230 35% 7%;

    /* --cl-lightGrey: #aeaeae;
    --medGrey: #353535;
    --darkGrey: #1f1f1f; */

    /* font-size */
    --fs-900: clamp(5rem, 8vh + 1rem, 9.375rem);
    --fs-800: 6.25rem;
    --fs-700: 3.5rem;
    --fs-600: 2rem;
    --fs-500: 1.75rem;
    --fs-400: 1.25rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;

    /* font-family */
    --ff-serif: 'Bellefair', serif;
    --ff-sans-serif: 'Barlow', sans-serif;
    --ff-sans-cond: 'Barlow Condensed', sans-serif;

    --shadow: 0px 5px 20px #4d8dad88;
  }

  /*------------------------------*/
  /* Reset                        */
  /*------------------------------*/

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }
  
  body {
    font-family: var(--ff-sans-serif);
    font-size: var(--fs-400);
    background-color: hsl(var(--clr-dark));
    color: hsl(var(--clr-white));
    line-height: 1.5;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;

    display: grid;
    grid-template-rows: max-content, 1fr;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-weight: 400;
  }
  
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /*------------------------------*/
  /* Utillity Classes             */
  /*------------------------------*/

  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }

  .grid {
    display: grid;
    gap: var(--gap, 1rem);
  }

  .d-block {
    display: block;
  }

  .flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  .container {
    padding-inline: 2em;
    margin-inline: auto;
    max-width: var(--max-width);
  }

  .grid-container {
    display: grid;
    text-align: center;
    place-items: center;
    padding-inline: 1rem;
  }

  .grid-container  * {
    max-width: 50ch;
  }

  @media screen and (min-width: 62.5em) {
    .grid-container {
      text-align: left;
      column-gap: var(--gridcon-gap, 2rem);
      grid-template-columns: minmax(1rem, 1fr) minmax(0, 70rem) minmax(0, 70rem) minmax(1rem, 1fr);
    }
  
    .grid-container > *:first-child {
      grid-column: 2;
    }
  
    .grid-container > *:last-child {
      grid-column: 3;
    }

    .grid-container--home {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }
  }

  /* Screen reader */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  }

  /* Colors */

  .bg-dark { background-color: hsl(var(--clr-dark))}
  .bg-accent { background-color: hsl(var(--clr-light))}
  .bg-white { background-color: hsl(var(--clr-white))}

  .text-dark { color: hsl(var(--clr-dark))}
  .text-accent { color: hsl(var(--clr-light))}
  .text-white { color: hsl(var(--clr-white))}

  /* Typography */

  .ff-serif { font-family: var(--ff-serif); }
  .ff-sans-serif { font-family: var(--ff-sans-serif); }
  .ff-sans-cond { font-family: var(--ff-sans-cond); }

  .letter-spacing-1 { letter-spacing: 4.75px }
  .letter-spacing-2 { letter-spacing: 2.7px }
  .letter-spacing-3 { letter-spacing: 2.35px }

  .fs-900 { font-size: var(--fs-900) }
  .fs-800 { font-size: var(--fs-800) }
  .fs-700 { font-size: var(--fs-700) }
  .fs-600 { font-size: var(--fs-600) }
  .fs-500 { font-size: var(--fs-500) }
  .fs-400 { font-size: var(--fs-400) }
  .fs-300 { font-size: var(--fs-300) }
  .fs-200 { font-size: var(--fs-200) }

  .fs-900,
  .fs-800,
  .fs-700,
  .fs-600 {
    line-height: 1.1;
  }

  .numbered-title {
    font-family: var(--ff-sans-cond);
    font-size: var(--fs-500);
    text-transform: uppercase;
    letter-spacing: 4.75px;
  }

  .numbered-title > span {
    margin-right: .5em;
    font-weight: 700;
    color: hsl(var(--clr-white) / .25);
  }

  /*------------------------------*/
  /* Components                   */
  /*------------------------------*/

  /* Buttons */
  .btn {
    font-size: 2rem;
    position: relative;
    display: grid;
    z-index: 1;
    place-items: center;
    padding: 0 2em;
    aspect-ratio: 1;
    border-radius: 50%;
    text-decoration: none;
  }

  .btn::after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: hsl(var(--clr-white) / .15);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  .btn:hover::after,
  .btn:hover::after {
    transform: scale(1.5);
    opacity: 1;
  }

  /* Navigation Menu */
  .nav__menu {
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: hsl(var(--clr-dark) / 0.95);
  }

  @supports (backdrop-filter: blur(1.5rem)) {
    background-color: hsl(var(--clr-white) / 0.25);
    backdrop-filter: blur(1.5rem);
  }

  @media screen and (max-width: 62.5em) {
    .nav__menu {
      --underline-gap: .5rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      padding: min(20rem, 15vh) 2rem;
    }
  }

  .nav__menu a {
    text-decoration: none;
  }

  .nav__menu a > span {
    font-weight: 700;
    margin-right: .5em;
  }

  .tab-indicators > * > * {
    display: inline-block;
    cursor: pointer;
    border: 0;
    padding: var(--underline-gap, 1rem) 0 ;
    border-bottom: .2rem solid hsl(var(--clr-white) / 0);
  }

  .tab-indicators > * > *:hover,
  .tab-indicators > * > *:focus {
    border-color: hsl(var(--clr-white) / .5);
  }

  /* .tab-indicators > [aria-selected="true], */
  .tab-indicators  .active {
    border-color: hsl(var(--clr-white) / 1);
  }

  .tab-list {
    --gap: 2.5rem;
  }

  .dot-indicators > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 0.5em;
    aspect-ratio: 1;
    background-color: hsl(var(--clr-white) / .25);
  }

  .dot-indicators > *:hover,
  .dot-indicators > *:focus {
    background-color: hsl(var(--clr-white) / .5);
  }

  /* .dot-indicators > [aria-selected="true], */
  .dot-indicators > .active {
    background-color: hsl(var(--clr-white) / 1);
  }

  .num-indicators > * {
    cursor: pointer;
    border: 2px solid hsl(var(--clr-white) / .25);
    border-radius: 50%;
    padding: 0.5em;
    aspect-ratio: 1;
  }

  .num-indicators > *:hover,
  .num-indicators > *:focus {
    border-color: hsl(var(--clr-white) / .5);
  }

  /* .num-indicators > [aria-selected="true], */
  .num-indicators > .active {
    background-color: hsl(var(--clr-white) / 1);
    border-color: hsl(var(--clr-white) / 1);
  }

  /*------------------------------*/
  /* Page Specific                */
  /*------------------------------*/

  /* Home */

  .home {
    background-image: url(./img/background-destination-desktop.jpg);
  }
`;
