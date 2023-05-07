import { FormEvent, useState } from 'react'
import Categories from './Categories'
import SearchResults from './SearchResults'
import SearchForm from './SearchForm'
import CloseIcon from '@mui/icons-material/Close';
import spotifySearch from './spotifySearch'

const SearchMenu = ({ searchMenuVisible, setSearchMenuVisible, setPlayer }:SearchMenu) => {
  const [activeCategory, setActiveCategory] = useState('track')
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState({albums:[], artists:[], playlists:[], tracks:[]})

  // Change Search Category
  const handleCategoryClick = (e:MouseEvent) => {
    const target = e.target as HTMLElement | null
    if (target){
      const categoryName = target.innerText
      if (categoryName){
        setActiveCategory(categoryName.toLowerCase())
      }
    }
  }

  // Spotify Search
  const handleSearchSubmit = async (e:FormEvent) => {
    await spotifySearch(e, searchInput, activeCategory, results, setResults)
  }

  // Update Player
  const handleResultClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const listItem = target.closest('li');
    if (listItem) {
      const { id, dataset: { type } } = listItem 
      setPlayer({ type, id });
      setSearchMenuVisible(false);
      console.log(`id: ${id}, type: ${type}`);
    }
  }

  return(
    <div id="searchMenu" className={`${searchMenuVisible ? '' : 'hidden'} absolute top-0 w-[380px] h-[550px] pt-8 rounded-xl  bg-gradient-to-b from-neutral-700 from-0% to-neutral-900 to-15% text-white`}>
      <button className="absolute h-10 w-10 right-2 top-4 hover:text-neutral-400" onClick={() => setSearchMenuVisible(false)} >
        <CloseIcon color="inherit"/>
      </button>
      <h3 className="text-center text-3xl font-bold pb-8">Search</h3>
      <Categories activeCategory={activeCategory} handleCategoryClick={handleCategoryClick}/>
      <SearchForm handleSubmit={handleSearchSubmit} searchInput={searchInput} setSearchInput={setSearchInput} activeCategory={activeCategory}/>
      <SearchResults results={results} handleClick={handleResultClick} activeCategory={activeCategory}/>
    </div>
  )
}



interface SearchMenu {
  searchMenuVisible: boolean
  setSearchMenuVisible: Function
  setPlayer: Function
}

export default SearchMenu