"use client";

import { useState } from 'react';

export default function Home() {
    const [url, setUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSummary('');
        
        const res = await fetch('https://videosummaryprojects.azurewebsites.net/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url }),
        });
        const data = await res.json();
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