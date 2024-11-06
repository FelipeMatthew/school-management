"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TableSearch = () => {
  const router = useRouter();

  // FUNC PARA PEGAR E PASSAR VIA PARAMETRO!
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex md:w-auto md:flex items-center gap-4 rounded-lg shadow text-xs ring-[1.5px] ring-gray-400 p-2"
    >
      <Image src="/search.png" alt="" height={14} width={14} />
      <input
        type="text"
        placeholder="Search from table..."
        className="w-[200px] bg-transparent outline-none"
      />
    </form>
  );
};

export default TableSearch;
