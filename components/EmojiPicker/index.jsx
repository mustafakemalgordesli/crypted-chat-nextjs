"use client"

import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"

const index = ({onChange}) => {
  return (
    <div>
      <div tabIndex={0} className="mt-2 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <Picker
          data={data}
          onEmojiSelect={(e) => onChange(e.native)}
          />
          
        </div>
      </div>
    </div>
  )
}

export default index