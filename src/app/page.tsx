import HexIsoLogo from './ui/icons/HexIsoLogo'

export default function Home() {
  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-between p-24'>
      <section className='w-2/3 my-auto'>
        <i className='w-1/2 block mx-auto'>
          <HexIsoLogo />
        </i>
        <h1 className='text-6xl font-semibold text-center block pt-8'>
          Llega pronto...
        </h1>
      </section>
    </main>
  )
}
