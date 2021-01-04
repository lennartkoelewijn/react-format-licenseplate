import React, { useState } from 'react'

// Libraries
import ReactFormatLicenseplate from 'react-format-licenseplate'

const App = () => {
  const [licenseplate, setLicenseplate] = useState('')

  return (
    <ReactFormatLicenseplate 
      value={licenseplate}
      onChange={newValue => {
        setLicenseplate(newValue)
      }}
      selectOnClick={true}
    />
  )
}

export default App
