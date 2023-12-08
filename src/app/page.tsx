import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full w-full flex'>
      <div className="flex flex-col pl-[3rem] w-1/2">
        <p className="flex mt-auto text-[5em]">Route 11</p>
        <p className="flex md:text-xl">Take your taste to the road</p>
        <button className="flex mt-[2rem] px-3 bg-red-300 w-[13rem] mb-auto">Button</button>
      </div>
    </div>
  )
}
