import SearchItem from './SearchItem'

interface SearchResults{
  results:Array<Object>
  handleClick:Function
}

const SearchResults = ({ results, handleClick }: SearchResults) => {

  const resultados = results.map(result => <SearchItem img={result.images[result.images.length-1]} name={result.name} key={result.id} id={result.id} type={result.type}/>)
  
  return(
    <ul className="pt-4 h-[355px] px-2 overflow-y-auto overflow-x-hidden" onClick={e => handleClick(e)}>
      {resultados}
    </ul>
  )
}

export default SearchResults