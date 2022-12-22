import React, { useState, useCallback } from 'react'
import { DatePicker } from 'antd'
import { RangeValue } from 'rc-picker/lib/interface'

const { RangePicker } = DatePicker

const DEFAULT_RANGE: [string, string] = ['', '']

export const useRangePicker = () => {
  const [range, setRange] = useState(DEFAULT_RANGE)

  const onChange = useCallback(
    (values: RangeValue<moment.Moment>, formatString: [string, string]) => {
      setRange(values ? formatString : DEFAULT_RANGE)
    },
    [],
  )

  return {
    range,
    RangePicker: <RangePicker onChange={onChange} />,
  }
}
