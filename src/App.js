
import { useState } from 'react';
import './App.css';

function FlashcardApp() {
  const [entries, setEntries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([...entries, newEntry.trim()]);
      setNewEntry('');
      setCurrentIndex(entries.length);
    }
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev < entries.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 單字滑動字卡</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="貼上新單字內容..."
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addEntry}>
          新增
        </button>
      </div>
      {entries.length > 0 && (
        <div className="border rounded p-4 mb-4 whitespace-pre-wrap bg-white shadow">
          {entries[currentIndex]}
        </div>
      )}
      <div className="flex justify-between">
        <button onClick={prevCard} disabled={currentIndex === 0} className="text-blue-600 disabled:opacity-30">
          ← 上一張
        </button>
        <span>{entries.length > 0 ? `${currentIndex + 1} / ${entries.length}` : '尚無字卡'}</span>
        <button onClick={nextCard} disabled={currentIndex === entries.length - 1} className="text-blue-600 disabled:opacity-30">
          下一張 →
        </button>
      </div>
    </div>
  );
}

export default FlashcardApp;
