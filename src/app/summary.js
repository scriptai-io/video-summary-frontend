"use client";

import { useState } from 'react';

export default function Home() {
    const [url, setUrl] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://videosummary_project.azurewebsites.net/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url }),
        });
        const data = await res.json();
        setSummary(data.summary);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Youtube URL"
                />
                <button type="submit">Summarize</button>
            </form>
            {summary && <div>{summary}</div>}
        </div>
    );
}