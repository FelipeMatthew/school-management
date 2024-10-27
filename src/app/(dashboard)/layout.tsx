import Menu from "@/src/components/Menu";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 dark:shadow">
      {/* LEFT - Sidebar */}
      <div className="w-[16%] md:w-[8%] lg:w-[20%] xl:w-[14%] p-4 bg-gray-100 dark:bg-gray-900">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-gray-900 dark:text-gray-100">
            Future School
          </span>
        </Link>
        <Menu />
      </div>
      
      {/* RIGHT - Main Content */}
      <div className="w-[84%] md:w-[92%] lg:w-[80%] xl:w-[86%] bg-[#F7F8FA] dark:bg-gray-950 overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
