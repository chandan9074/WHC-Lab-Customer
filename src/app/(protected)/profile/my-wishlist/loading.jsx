export default function Loading() {
    return (
        <div className="w-full rounded-md mx-auto p-4 lg:py-6 lg:px-[58px]">
            <div className="flex animate-pulse flex-col items-center h-full justify-center space-x">
                <div className="flex flex-col w-full gap-10  rounded-lg">
                    <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                    <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                    <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                    <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                    <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                    <div className="bg-gray-300 lg:h-14 h-8 rounded-md "></div>
                </div>
            </div>
        </div>
    )
}