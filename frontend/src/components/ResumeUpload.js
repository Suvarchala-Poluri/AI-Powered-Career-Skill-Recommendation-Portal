import React, { useState } from 'react';

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append('resume', file);

        const response = await fetch('http://127.0.0.1:5000/analyze', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        setResult(data);
    };

    return (
        <div>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={handleUpload}>
                Upload Resume
            </button>

            {result && (
                <div>

                    <h2>Skills Found:</h2>

                    <ul>
                        {result.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    <h2>
                        Recommended Role:
                        {result.recommended_role}
                    </h2>

                </div>
            )}

        </div>
    );
}

export default ResumeUpload;
