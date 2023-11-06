import React from "react"

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
