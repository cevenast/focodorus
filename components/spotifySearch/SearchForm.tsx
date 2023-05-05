import SearchIcon from '@mui/icons-material/Search';

interface SearchForm {
  handleSubmit: Function
  searchInput: string
  setSearchInput:Function
  activeCategory: string
}

const SearchForm = ({ handleSubmit, searchInput, setSearchInput, activeCategory }: SearchForm) => {
  return(
    <form className="relative text-center mb-4" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="spotify-search" className="sr-only">Search</label>
      <button type="submit" className="" >
        <SearchIcon className="absolute top-1 right-14 text-black"/>
      </button>
      
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