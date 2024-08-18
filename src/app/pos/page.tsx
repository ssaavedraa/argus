import { Button } from '@hex-shared-components/button'

export default function POSPage() {
  return (
    <main className='h-screen w-screen flex flex-row flex-nowrap'>
      <div className='w-4/5 max-h-screen overflow-y-auto flex flex-col'>
        <nav className=' sticky top-0'>
          <ul className='flex flex-row flex-nowrap gap-7 p-4 text-2xl'>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
            <li>Category 6</li>
          </ul>
          <div className='flex flex-row flex-nowrap items-center px-4'>
            <span className='inline-block'>Filter By Subcategory:</span>
            <ul className='flex flex-row flex-nowrap gap-4 p-2 text-sm'>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
              <li>Category 6</li>
            </ul>
          </div>
        </nav>
        <section className='p-4 h-full grid grid-cols-6 grid-rows-5 gap-4'>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
          <div className='w-full h-full bg-slate-600'></div>
        </section>
      </div>
      <div className='w-0 h-full border border-hex-150'></div>
      <aside className='w-1/5 h-full flex flex-col items-center'>
        <span className='text-2xl p-2'>Order #####</span>
        <ul className='gap-6 w-full inline-block'>
          <li className='w-full text-center inline-block'>Eat In</li>
          <li className='w-full text-center inline-block'>Takeaway</li>
        </ul>
        <hr className='border border-hex-150 w-full'></hr>
        <div className='flex flex-col w-full h-full p-2 gap-4'>
          <div className='h-[80px] w-full' />
          <div className='h-[80px] w-full' />
          <div className='h-[80px] w-full' />
        </div>
        <div className='w-full text-center flex flex-col p-2 gap-2'>
          <Button variant='primary'>Charge $20.000</Button>
          <Button variant='outline'>Save Draft</Button>
        </div>
      </aside>
    </main>
  )
}
3
1
