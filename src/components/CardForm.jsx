import React, { useState } from 'react'

function CardForm({onAdd}) {
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [difficulty, setDifficulty] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === "" || code.trim() === "") return;

        onAdd({ title, code, difficulty });

        setTitle("");
        setCode("");
        setDifficulty("Easy");
    }
    return (
        <aside>
            <h2 className="form-title">New Flashcard</h2>
            <form onSubmit={handleSubmit} className="flashcard-form">
                <div className="input-group">
                    <label>Concept Title</label>
                    <input type="text" placeholder="e.g., Two Pointers Technique" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Code Snippet</label>
                    <textarea rows="5" placeholder="Write your JS or C++ code here..." value={code} onChange={e => setCode(e.target.value)}></textarea>
                </div>
                <div className="input-group">
                    <label>Difficulty</label>
                    <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Add Flashcard</button>
            </form>
        </aside>
    );
}

export default CardForm;