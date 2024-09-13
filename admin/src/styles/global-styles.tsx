import { Global, css } from '@emotion/react'

/**
 * GlobalStyle
 * @constructor
 */
export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
          width: 100%;
        }

        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        #root {
          min-height: 100%;
          min-width: 100%;
        }

        p,
        label {
          font-family: Georgia, Times, 'Times New Roman', serif;
          line-height: 1.5em;
        }

        input,
        select {
          font-family: inherit;
          font-size: inherit;
        }
      `}
    />
  )
}
