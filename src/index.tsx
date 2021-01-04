import * as React from 'react'

interface Props {
  type?: string
  className?: string
  value: string
  selectOnClick?: boolean
  onChange: (value: string) => void
  [key: string]: any
}

const ReactLicenseplate = ({
  type = 'text',
  value = '',
  className = '',
  selectOnClick = true,
  onChange,
  ...props
}: Props) => {
  function format(plate: string): string {
    const chars: Array<any> = plate.split('')
    let lastType: string = ''
    let newValue = ''

    chars.forEach((char: any) => {
      const currentType = isNaN(char) ? 'letter' : 'number'

      if (lastType !== '' && lastType !== currentType) {
        newValue += '-'
      }

      newValue += char

      lastType = currentType
    })

    const valueSplit = newValue.split('-')

    if (valueSplit.length === 1) {
      if (plate.length > 4) {
        newValue = `${plate.substring(0, 2)}-${plate.substring(
          2,
          4
        )}-${plate.substring(4, 6)}`
      } else if (plate.length > 2) {
        newValue = `${plate.substring(0, 2)}-${plate.substring(2, 4)}`
      }
    } else if (
      valueSplit.length === 2 &&
      newValue.length === 7 &&
      valueSplit[1].length === 4
    ) {
      newValue = `${plate.substring(0, 2)}-${plate.substring(
        2,
        4
      )}-${plate.substring(4, 6)}`
    }

    return newValue
  }

  return (
    <input
      type={type}
      className={className}
      value={format(value)}
      onChange={(event) => {
        const value = event.target.value.replace(/-/g, '')

        if (value.length <= 6) {
          onChange(value.toUpperCase())
        }
      }}
      {...props}
      onFocus={(event) => {
        if (selectOnClick) {
          event.target.select()
        }
      }}
    />
  )
}

export default ReactLicenseplate
