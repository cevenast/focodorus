import SearchItem from './SearchItem'

interface SearchResults{
  results:Array<resultObject>
  handleClick:Function
}

interface resultObject{
  images:Array<imgObject>
  name: string
  id: string
  type: string
}

interface imgObject {
  url:string
}

const SearchResults = ({ results, handleClick }: SearchResults) => {

  const listedResults = results.map(( result:resultObject ) => 
    <SearchItem 
      img={result.images[result.images.length-1]} 
      name={result.name} 
      id={result.id} 
      type={result.type}
      key={result.id} 
    />)
  
  return(
    <div className="pr-2 pt-2 border-t border-neutral-950">
      <ul className="h-[342px] rounded-b-lg px-2 overflow-y-auto overflow-x-hidden " onClick={e => handleClick(e)}>
        {listedResults}
      </ul>
    </div>
  )
}

export default SearchResults