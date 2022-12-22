import React, { useState, useCallback } from 'react'
import { Input } from 'antd'

const { Search } = Input

export const useSearch = () => {
  const [text, setText] = useState('')

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  return {
    text,
    Search: (
      <Search
        placeholder="Search"
        value={text}
        onChange={onChange}
        data-testid="search-input"
      />
    ),
  }
}
