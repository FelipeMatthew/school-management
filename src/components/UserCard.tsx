import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-200 even:bg-blue-100 dark:odd:bg-purple-800 dark:even:bg-blue-700 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-green-500 font-medium">
          2024/24
        </span>
        <Image src="/more.png" alt="" height={20} width={20} />
      </div>
      <h1 className="text-2xl font-semibold py-4 text-gray-800 dark:text-gray-200">1234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500 dark:text-gray-400">{type}</h2>
    </div>
  );
};

export default UserCard;
