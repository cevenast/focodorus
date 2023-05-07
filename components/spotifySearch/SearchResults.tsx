import SearchItem from './SearchItem'

const SearchResults = ({ results, handleClick, activeCategory }: SearchResults) => {

  const activeResults = (() => { // IIFE
    const resultType: 'tracks' | 'albums' | 'artists' | 'playlists' = activeCategory + 's'

    // The IIFE returns an array of <SearchItem> components.
    return results[resultType].map( result => {

      // The properties in ownProps are obtained differently for the different music categories
      const ownProps = {
        info: activeCategory == 'track' ? result.artists.map(artist => artist.name).join(', ') : // if 'track', else:
          activeCategory == 'album' ? `Album • ${result.artists.map(artist => artist.name).join(', ')}` : // if 'album', else:
          activeCategory == 'artist' ? "Artist" : result.description , // if 'artist', else: only playlist left
        // In img, only 'track' is obtained differently
        img: activeCategory == 'track' ? result.album.images[result.album.images.length-1] : result.images[result.images.length-1]
      }

      return <SearchItem // Every element in the <SearchItem> components array is composed of these properties.
          name={result.name} 
          id={result.id} 
          type={result.type}
          key={result.id}
          {...ownProps}
        />
    })
  })() // The function is immediately invoked and its value stored in activeResults
  
  return(
    <div className="pr-2 pt-2 border-t border-neutral-950">
      <ul className="h-[342px] rounded-b-lg px-2 overflow-y-auto overflow-x-hidden " onClick={e => handleClick(e)}>
        {activeResults}
      </ul>
    </div>
  )
}

export default SearchResults


// Interface definition

interface SearchResults{
  results:resultsObject
  handleClick:Function
  activeCategory: 'track' | 'album' |'artist' | 'playlist' 
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