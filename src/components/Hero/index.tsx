import classnames from 'classnames'
import { useState } from 'react'
import { TiSocialLinkedin, TiSocialFacebook } from 'react-icons/ti'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { HiArrowLongDown } from 'react-icons/hi2'
import { CgMenuRight } from 'react-icons/cg'

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
    label: 'Pro odbornou věřejnost',
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

const BackgroundComp = () => {
  return (
    <>
      <img
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-white/80 backdrop-blur-3xl" />
    </>
  )
}

export default function Hero() {
  const [navOpened, setNavOpened] = useState(false)

  const itemClass =
    'rounded-sm px-3 py-2 text-stone-600 hover:text-stone-900 font-poppins text-[13px] uppercase tracking-wider font-[600] hover:underline underline-offset-4 decoration-4 hover:decoration-indigo-500 decoration-transparent transition-all'
  return (
    <section className="relative grid min-h-screen w-full grid-rows-[auto_1fr_auto] overflow-y-hidden bg-transparent">
      <BackgroundComp />
      <header className="flex items-center justify-between p-8 lg:px-16 lg:py-14">
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

      <main className="relative m-auto flex min-h-full w-full max-w-7xl items-center px-8">
        <div className="mt-50 absolute right-10 top-10 z-20 hidden h-[500px] w-[500px] translate-x-1/3 animate-move-x rounded-full bg-indigo-300 mix-blend-overlay lg:block lg:translate-x-0" />
        <div className="mt-50 absolute right-0 top-0 -z-10 hidden h-[650px] w-[650px] translate-x-1/4 animate-move-y rounded-full bg-indigo-400 lg:block lg:translate-x-0" />
        <div className="absolute right-0 top-0 z-10 hidden w-1/2 items-end bg-transparent lg:flex">
          <img src="/graphics/man.png" />
        </div>
        <div className="m-auto mb-0 w-full space-y-8 pt-24 text-center lg:mb-auto lg:max-w-7xl lg:pt-0 lg:text-left">
          <div className="m-auto max-w-lg space-y-6 lg:m-0">
            <h1>
              <span className="mb-4 flex items-center justify-center gap-3 font-poppins text-sm font-bold uppercase text-stone-500 lg:justify-start">
                <span className=" hidden h-0.5 w-8 bg-stone-400 lg:inline-block" />{' '}
                Dobrý den
              </span>
              <span className="font-merri text-4xl font-black text-stone-700 lg:text-5xl">
                Mé jméno je <span className="text-indigo-600">Honza</span>
              </span>
            </h1>
            <p className="font-open text-base font-normal leading-7 tracking-wide text-stone-600">
              Nabízím Vám odbornou pomoc a podporu při zvládání Vašich osobních
              obtíží. Mám za sebou přes deset let psychoterapeutické a
              poradenské praxe.
            </p>
          </div>
          <div className="m-auto aspect-square max-w-md overflow-hidden lg:hidden">
            <img src="/graphics/man.png" />
          </div>
        </div>
      </main>

      <footer className="z-30 hidden w-full items-center justify-between p-8 lg:flex lg:px-16 lg:py-14">
        <nav>
          <ul className="flex items-center">
            {socialNavItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="mx-2 flex justify-center rounded-full bg-stone-200 p-2 text-xl text-stone-700"
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
