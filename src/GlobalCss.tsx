/* istanbul ignore file */
import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .page-title {
          font-size: 35px;
          font-weight: 600;
          border-bottom: 1px dashed black;
          margin: 10px;
        }
      }
    `}
  />
)
