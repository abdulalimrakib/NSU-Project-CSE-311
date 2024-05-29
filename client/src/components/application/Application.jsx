import React from 'react'

const Application = () => {
    return (
        <div>
            <form action="" onSubmit={postData}>
                <p>Why you are suitable for this job: </p>
                <textarea
                    className="w-full"
                    name="message"
                    rows="20"
                    placeholder="Job Description"
                    onChange={handleChange}
                />

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Application