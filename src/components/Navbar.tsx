import Image from "next/image"
import { Sun } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-4 rounded-lg shadow text-xs ring-[1.5px] ring-gray-400 p-2">
        <Image src="/search.png" alt="" height={14} width={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] bg-transparent outline-none"/>
      </div>
      {/* ICONS & USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-gray-200 duration-300">
          <Image src="/message.png" alt="" width={20} height={20}/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative hover:bg-gray-200 duration-300">
          <Image src="/announcement.png" alt="" width={20} height={20}/>
          {/* NOTIFICATION ICON */}
          <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full flex items-center justify-center bg-purple-500 text-white text-[10px]">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Felipe Matthew</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full cursor-pointer" />
        <Sun width={20} height={20} className="cursor-pointer"/>
      </div>
    </div>
  )
}

export default Navbar