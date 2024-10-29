const Announcements = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Announcements</h1>
        <span className="text-xs text-gray-600 dark:text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-blue-500/20 dark:bg-blue-800/30 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between gap-1">
            <h2 className="font-medium text-gray-800 dark:text-gray-200">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-600 dark:text-green-300 bg-white dark:bg-gray-700 rounded-lg px-1 py-1">
              2020-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-purple-500/20 dark:bg-purple-800/30 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between gap-1">
            <h2 className="font-medium text-gray-800 dark:text-gray-200">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-600 dark:text-green-300 bg-white dark:bg-gray-700 rounded-lg px-1 py-1">
              2020-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-yellow-500/20 dark:bg-red-400/30 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between gap-1">
            <h2 className="font-medium text-gray-800 dark:text-gray-200">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-600 dark:text-green-300 bg-white dark:bg-gray-700 rounded-lg px-1 py-1">
              2020-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
