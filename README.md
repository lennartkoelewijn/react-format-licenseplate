# react-format-licenseplate

> Render input to format a licenseplate

[![NPM](https://img.shields.io/npm/v/react-format-licenseplate.svg)](https://www.npmjs.com/package/react-format-licenseplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-format-licenseplate
```

## Usage

```tsx
import React, { useState } from 'react'

// Libraries
import ReactLicenseplate from 'react-format-licenseplate'

const App = () => {
  const [licenseplate, setLicenseplate] = useState('')

  return (
    <ReactLicenseplate 
      value={licenseplate}
      onChange={newValue => {
        setLicenseplate(newValue)
      }}
      selectOnClick={true}
    />
  )
}

export default App
```

## Props

- `value` - value to store in state
- `onChange` - callback function for handling the changed input
- `selectOnClick` - true for selecting the text on focus and false for default behaviour

## Language support

At the moment only license plates from the Netherlands are supported, so this language is set by default

## License

MIT © [lennartkoelewijn](https://github.com/lennartkoelewijn)
