interface OptionCategoriesInterface {
  activeCategory: 'timer' | 'sound'
  setActiveCategory: Function
}
const OptionCategories = ({ activeCategory, setActiveCategory }:OptionCategoriesInterface) => {
  const isActive = (name:string) => activeCategory === name
  
  const handleClick = (e:React.MouseEvent) => {
    setActiveCategory((e.target as HTMLElement).innerText.toLowerCase())
  }

  return (
    <div className="flex justify-around bg-neutral-950 pt-8">
      <button onClick={handleClick} className={`inline-block ${isActive('timer') ? 'bg-neutral-900' : ''} py-2 w-1/3 h-full`}>Timer</button>
      <button onClick={handleClick} className={`inline-block ${isActive('sound') ? 'bg-neutral-900' : ''} py-2 w-1/3 h-full`}>Sound</button>
      <button className='w-1/3'>Theme 3</button>
    </div>
  )
}

export default OptionCategories