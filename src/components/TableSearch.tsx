import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full flex md:w-auto md:flex items-center gap-4 rounded-lg shadow text-xs ring-[1.5px] ring-gray-400 p-2">
        <Image src="/search.png" alt="" height={14} width={14}/>
        <input type="text" placeholder="Search from table..." className="w-[200px] bg-transparent outline-none"/>
      </div>
  )
}

export default TableSearch