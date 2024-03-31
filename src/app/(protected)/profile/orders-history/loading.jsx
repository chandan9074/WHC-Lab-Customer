'use client'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full rounded-md mx-auto mt-5 p-4 lg:py-12 lg:px-[58px]">
      <div className="flex animate-pulse flex-col items-center h-full justify-center space-x">
        <div className="flex flex-col-reverse gap-5 items-start lg:flex-row  lg:justify-between lg:items-center w-full">
          <div className="w-full lg:w-1/2 bg-gray-300 h-8 rounded-md "></div>
          <div className="w-full lg:w-1/2 bg-gray-300 h-8 rounded-md "></div>
        </div>
        <div className="flex flex-col w-full gap-10 mt-10 rounded-lg">
          <div className=" bg-gray-300 h-8 rounded-md "></div>
          <div className=" bg-gray-300 h-8 rounded-md "></div>
          <div className=" bg-gray-300 h-8 rounded-md "></div>
          <div className=" bg-gray-300 h-8 rounded-md "></div>
          <div className=" bg-gray-300 h-8 rounded-md "></div>
        </div>
      </div>
    </div>
  )
}