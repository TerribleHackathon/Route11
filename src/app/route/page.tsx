export default function Page() {
    return (

        <div className="h-screen w-screen flex flex-row">
            <div className="w-1/2 bg-white h-screen flex">
                <div className="flex flex-col m-auto">
                    <p className='flex text-2xl'>Landing page title</p>
                    <div className='flex text-xl w-[13rem] rounded-md mt-[0.8rem] h-[2.8rem] bg-green-500 hover:bg-green-400'>
                        <p className="flex text-white m-auto">button</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-gray-300 h-screen flex"></div>
        </div>
    )
}