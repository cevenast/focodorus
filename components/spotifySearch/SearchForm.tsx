interface SearchForm {
  handleSubmit: Function
  searchInput: string
  setSearchInput:Function
  activeCategory: string
}

const SearchForm = ({ handleSubmit, searchInput, setSearchInput, activeCategory }: SearchForm) => {
  return(
    <form className="text-center mb-1" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="spotify-search" className="sr-only">Search</label>
      <input 
        type="text" 
        name='jajaja' 
        className="rounded-xl h-8 w-3/4 pl-4 text-black ring-none focus:outline-none" 
        placeholder={`Search ${activeCategory}`} 
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        autoComplete="off"/>
    </form>
  )
}

export default SearchForm