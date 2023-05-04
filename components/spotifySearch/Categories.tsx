import Category from './Category'

interface Categories{
  activeCategory: string
  handleCategoryClick: Function
}

const Categories = ({ activeCategory, handleCategoryClick }: Categories) => {

  return(
    <ul className="w-full flex justify-around h-8 mb-6 px-1.5" onClick={(e) => handleCategoryClick(e)}>
      <Category name="Track" activeCategory={activeCategory}/>
      <Category name="Album" activeCategory={activeCategory}/>
      <Category name="Artist" activeCategory={activeCategory}/>
      <Category name="Playlist" activeCategory={activeCategory}/>
    </ul>
  )
}

export default Categories