function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="app-header">
      <h1>My <span>Snippets</span></h1>
      <input 
        type="text" 
        placeholder="Search concepts..." 
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
}

export default Header;