interface SearchItem {

}

const SearchItem = ({ img, name, type, id }:SearchItem) => {
  return (
    <li className="h-[51px] py-2 px-3 flex w-full rounded-md hover:bg-neutral-800" id={id} data-type={type}>
      <img className="block h-8 w-8" src={img === undefined ? '' : img.url}/>
      <div className="flex flex-col pl-2 w-72">
        <h4 className="font-semibold truncate text-sm">{name}</h4>
        <span className="text-[0.637rem] text-gray-400 font-bold">Paramore • japan</span>
      </div>
    </li>
  )
}

export default SearchItem