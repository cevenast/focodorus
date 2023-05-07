import SearchItem from './SearchItem'

interface SearchResults{
  results:resultsObject
  handleClick:Function
  activeCategory:string
}

interface resultsObject {
  albums: Array<resultObject>
  artists: Array<resultObject>
  playlists: Array<resultObject>
  tracks: Array<resultObject>
}

interface resultObject{
  images:Array<{url:string}>
  name: string
  id: string
  type: string
  info: string
  artists: Array<{name:string}>
  description: string
  album: {images:Array<any>}
}

const SearchResults = ({ results, handleClick, activeCategory }: SearchResults) => {

  const activeResults = (() => {
    if (activeCategory == 'track'){
      return results.tracks.map( result => 
        <SearchItem
          img={result.album.images[result.album.images.length-1]} 
          name={result.name} 
          id={result.id} 
          type={result.type}
          key={result.id} 
          info={result.artists.map(artist => artist.name).join(', ')}
        />)
    }
    else if (activeCategory == 'album'){
      return results.albums.map( result => 
        <SearchItem
          img={result.images[result.images.length-1]} 
          name={result.name} 
          id={result.id} 
          type={result.type}
          key={result.id} 
          info={`Album • ${result.artists.map(artist => artist.name).join(', ')}`}
        />)
    }
    else if (activeCategory == 'artist'){
      return results.artists.map( result => 
        <SearchItem
          img={result.images[result.images.length-1]} 
          name={result.name} 
          id={result.id} 
          type={result.type}
          key={result.id} 
          info="Artist"
        />)
    }
    else if (activeCategory == 'playlist'){
      return results.playlists.map( result => 
        <SearchItem
          img={result.images[result.images.length-1]} 
          name={result.name} 
          id={result.id} 
          type={result.type}
          key={result.id} 
          info={result.description}
        />)
    }
  })()
  
  return(
    <div className="pr-2 pt-2 border-t border-neutral-950">
      <ul className="h-[342px] rounded-b-lg px-2 overflow-y-auto overflow-x-hidden " onClick={e => handleClick(e)}>
        {activeResults}
      </ul>
    </div>
  )
}

export default SearchResults