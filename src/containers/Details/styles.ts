import { css } from '@emotion/react'

export const contentContainer = css`
  padding: 10px;
  margin: 10px;
  border: 1px solid #d9d9d9;

  .field-title {
    display: inline-block;
    color: gray;
    margin-right: 5px;
  }

  .field-value {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .comments {
    font-weight: 700;
    margin-bottom: 15px;
  }
`

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
