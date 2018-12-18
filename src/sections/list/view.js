import React from 'react';
import { Link } from 'react-router-dom';

export default ({ entries, handleSearch }) => (
  <div>
    <Link to="/add">Add</Link>
    <form className="search">
      <input
        type="text"
        className="search-field"
        placeholder="Search live the ports list by title"
        onChange={e => handleSearch(e.target.value)}
      />
    </form>
    <div className="list">
      {entries.map(entry => (
        <div className="list-item" key={entry.id}>
          <div className="list-title">{entry.title}</div>
          <div className="list-desc">{entry.body}</div>
        </div>
      ))}
    </div>
  </div>
);
