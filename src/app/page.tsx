import HexIsoLogo from './ui/icons/HexIsoLogo'

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between p-24'>
      <section className='w-screen lg:w-2/3 my-auto max-w-[1280px]'>
        <i className=' w-9/12 lg:w-1/2 block mx-auto'>
          <HexIsoLogo />
        </i>
        <h1 className='text-4xl md:text-7xl lg:text-5xl font-semibold text-center block pt-3 lg:pt-6'>
          Llega pronto...
        </h1>
      </section>
    </main>
  )
}
