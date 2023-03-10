import classnames from 'classnames'
import { useState } from 'react'
import { TiSocialLinkedin, TiSocialFacebook } from 'react-icons/ti'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { HiArrowLongDown } from 'react-icons/hi2'
import { CgMenuRight } from 'react-icons/cg'
import BackgroundComp from '../BackgroundComp'

const mainNavItems = [
  {
    label: 'O mně',
    href: '#',
  },
  {
    label: 'Ceník služeb',
    href: '#',
  },
  {
    label: 'Pro odbornou veřejnost',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
]

const socialNavItems = [
  {
    icon: <TiSocialLinkedin />,
    href: '#',
  },
  {
    icon: <TiSocialFacebook />,
    href: '#',
  },
  {
    icon: <MdOutlineMedicalServices />,
    href: '#',
  },
]

export default function Hero() {
  const [navOpened, setNavOpened] = useState(false)

  const itemClass =
    'rounded-sm px-3 py-2 text-stone-600 hover:text-stone-900 font-poppins text-[13px] uppercase tracking-wider font-[600] hover:underline underline-offset-4 decoration-4 hover:decoration-indigo-500 decoration-transparent transition-all'
  return (
    <section className="relative grid min-h-screen w-full grid-rows-[auto_1fr_auto] overflow-y-hidden bg-transparent">
      <header className="z-20 flex items-center justify-between p-8 lg:px-16 lg:py-14">
        <h1 className="font-open text-2xl font-black">
          <span className="text-slate-800">tvoje</span>
          <span className="text-indigo-500">máma</span>
        </h1>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4">
            {mainNavItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={itemClass} href={item.href}>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div>
          <a className={classnames(itemClass, 'hidden lg:block')} href="#">
            Kontakt
          </a>
          <a className={'block lg:hidden'} href="#">
            <CgMenuRight className="text-3xl" />
          </a>
        </div>
      </header>
      <div className="absolute left-1/2 bottom-0 z-10 hidden w-1/2 max-w-xl items-end bg-transparent pt-20 lg:block">
        <img src="/graphics/man2.png" className=" h-full max-h-screen" />
      </div>
      <main className="relative m-auto flex min-h-full w-full max-w-7xl items-end px-8 lg:items-center">
        <div className="mt-50 absolute top-10 isolate z-20 hidden h-[500px] w-[500px] translate-x-1/3 animate-move-x rounded-full bg-gradient-to-tl from-indigo-500 to-indigo-400 mix-blend-overlay lg:right-10 lg:block lg:translate-x-0" />
        <div className="mt-50 absolute top-0 -z-10 hidden h-[650px] w-[650px] translate-x-1/4 animate-move-y rounded-full bg-opacity-50 bg-gradient-to-tl from-indigo-300/60 to-indigo-400/0 lg:right-0 lg:block lg:translate-x-0" />
        <div className="mt-50 absolute top-0 -z-10 hidden h-[400px] w-[400px] translate-x-1/4 animate-move-x rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-400/20 lg:right-0 lg:block lg:translate-x-0" />
        <div className="mt-50 absolute top-20 -z-10 hidden h-[340px] w-[340px] translate-x-1/4 animate-move-y rounded-full bg-opacity-50 bg-gradient-to-l from-indigo-500 to-indigo-300 lg:right-32 lg:block lg:translate-x-0" />

        <div className="mx-auto mt-16 w-full space-y-8 text-center lg:m-auto lg:max-w-7xl lg:text-left">
          <div className="m-auto max-w-lg space-y-6 lg:m-0 lg:pl-10">
            <h1>
              <span className="mb-4 flex items-center justify-center gap-3 font-poppins text-sm font-bold uppercase text-stone-500 lg:justify-start">
                <span className=" hidden h-0.5 w-8 bg-stone-400 lg:inline-block" />{' '}
                Dobrý den
              </span>
              <span className="block font-merri text-4xl font-black leading-[1.3] text-stone-700 lg:text-5xl lg:leading-[1.5]">
                Jsem <span className="text-indigo-600">Honza</span>
                <br className="inline-block lg:hidden" /> a jsem{' '}
                <span className="lg:ml-4 lg:text-6xl">
                  Váš<span className="text-indigo-600"> terapeut.</span>
                </span>
              </span>
            </h1>
            <p className="font-open text-base font-normal leading-7 tracking-wide text-stone-600">
              Nabízím Vám odbornou pomoc a podporu při zvládání Vašich osobních
              obtíží. Mám za sebou přes deset let psychoterapeutické a
              poradenské praxe.
            </p>
          </div>
          <div className="mx-auto aspect-square max-w-md overflow-hidden lg:hidden">
            <img src="/graphics/man2_cut.png" />
          </div>
        </div>
      </main>
      <footer className="z-30 hidden w-full items-center justify-between p-8 lg:flex lg:px-16 lg:py-14">
        <nav>
          <ul className="flex items-center">
            {socialNavItems.map((item, index) => {
              return (
                <li key={index} className="group">
                  <a
                    className="mx-2 flex justify-center rounded-full border-2 border-indigo-500/10 p-2.5 text-xl text-indigo-500 ring-2 ring-indigo-100 transition-all group-hover:border-indigo-700 group-hover:bg-indigo-100 group-hover:text-indigo-900"
                    href={item.href}
                    key={index}
                  >
                    {item.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a className="relative cursor-pointer">
          <div className="absolute -translate-x-[5px] -translate-y-10 rotate-90 whitespace-nowrap font-poppins text-xs tracking-wider text-stone-600">
            O mně
          </div>
          <HiArrowLongDown className="text-3xl text-stone-400" />
        </a>
      </footer>
    </section>
  )
}
