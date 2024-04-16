export default function Loading() {
  return (
    <div className="flex animate-pulse flex-col items-center h-full justify-center space-x mt-2">
      <div className="w-[296px] lg:w-[400px] flex flex-col items-center gap-y-10">
        <div className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] bg-gray-300 rounded-full "></div>
        <div className=" bg-gray-300 h-6 rounded-md w-full "></div>
        <div className=" bg-gray-300 h-6 rounded-md w-full "></div>
        <div className=" bg-gray-300 h-6 rounded-md w-full "></div>
        <div className=" bg-gray-300 h-6 rounded-md w-full "></div>
      </div>
    </div>
  )
}