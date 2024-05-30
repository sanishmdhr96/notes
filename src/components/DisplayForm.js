import React from 'react'

function DisplayForm({ allNotes }) {
    return (
        <div>
            {/* 1. Add the list html */}
            <ul>
                {
                    allNotes.map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )
                }
            </ul>


            {/* 2. Send props from App.js to Display form */}

            {/* 3. Read the props and display the list */}

        </div>
    )
}

export default DisplayForm