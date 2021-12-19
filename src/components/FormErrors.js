import React from "react"

export default function FormErrors({formErrors}) {
  return (
    <div>
      {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName] > 0) {
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )
      }
        return ''
    })}
    </div>
  )
}

