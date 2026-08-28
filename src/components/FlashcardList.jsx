import React from 'react'

function FlashcardList({ cards, onDelete }) {
    if (cards.length === 0) {
        return (
            <main className="flashcard-contaniner">
                <p className="empty-title">No flashcards yet. Add a DSA concept from the sidebar!</p>
            </main>
        );
    }
    return (
        <main className="flashcard-container">
            <div className="cards-grid">
                {cards.map((card) => (
                    <div className="flashcard" key={card.id}>
                        <div className="card-header">
                            <h3>{card.title}</h3>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <span className={`badge ${card.difficulty ? card.difficulty.toLowerCase() : 'easy'}`}>
                                    {card.difficulty || 'Easy'}
                                </span>

                                <button
                                    onClick={() => onDelete(card.id)}
                                    style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#94a3b8', fontSize: '1rem', fontWeight: 'bold' }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <pre className="code-block">
                            <code>{card.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default FlashcardList;