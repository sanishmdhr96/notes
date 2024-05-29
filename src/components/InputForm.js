import React from "react"

const InputForm = ({ sanish, sanishSetter, addToSanish }) => {

    return (
        <div>
            {/* Form */}
            <form>
                {/* Create Input */}
                <input
                    type='text'
                    id='note'
                    onChange={(e) => {
                        sanishSetter(e.target.value)
                    }}
                    value={sanish}
                />
                {/* Submit button */}
                <button
                    onClick={addToSanish}
                >Submit</button>
            </form>
        </div>
    )
}


export default InputForm

