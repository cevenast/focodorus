interface Category {
  name: string
  activeCategory: string
}

const Category = ({ name, activeCategory }:Category) => {
  return (
    <li className={`rounded-md mx-0.5 w-full ${activeCategory === name.toLowerCase() ? 'text-green-600 bg-neutral-700' : 'text-white bg-neutral-800'}`}>
      <button className='w-full h-full'>{name}</button>
    </li>
  )
}

export default Category