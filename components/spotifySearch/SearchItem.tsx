import Image from "next/image"
interface SearchItem {
  img: imgObject
  name: string
  type: string
  id: string
  info: string
}

interface imgObject {
  url: string
}

const SearchItem = ({ img, name, type, id, info }:SearchItem) => {
  return (
    <li className="h-[51px] py-2 px-3 flex w-full rounded-md hover:bg-neutral-800" id={id} data-type={type}>
      <Image className="text-xs truncate" src={img === undefined ? '' : img.url} width={32} height={32} alt={name}/>
      <div className="flex flex-col pl-2 w-72">
        <h4 className="font-semibold truncate text-sm">{name}</h4>
        <span className="text-[0.637rem] text-gray-400 font-bold truncate">{info}</span>
      </div>
    </li>
  )
}

export default SearchItem