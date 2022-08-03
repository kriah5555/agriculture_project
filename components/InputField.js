import React from 'react'

export default function InputField() {
  const fields = [
    {type: "email", name: "email", required: true, label: "Email", autoComplete: "email"},
    {type: "date", name: "date", required: true, label: "Date"},
    {type: "text", name: "favorite_color", required: false, label: "Favorite color"},
]


  return (
    fields.map((field, i) => (
      <div key={i}>
      <label htmlFor={field.name}>{field.label}</label>
      <input type={field.type} autoComplete="email" name="email" required={true} className="flex"/>
    </div>
    ))

    

  )
}
