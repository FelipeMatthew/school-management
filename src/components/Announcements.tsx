const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-blue-300/50 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between gap-1">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-lg px-1 py-1">
              2020-01-01
            </span>
          </div>
            <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-purple-300/50 rounded-lg p-4">
          <div className="flex items-center justify-between gap-1">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-lg px-1 py-1">
              2020-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-yellow-200/50 rounded-lg p-4">
          <div className="flex items-center justify-between gap-1">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-lg px-1 py-1">
              2020-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
