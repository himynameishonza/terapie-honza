import Image from 'next/image'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'
import { MdMedicalServices } from 'react-icons/md'
export default function Index() {
  return (
    <>
      <div className="h-auto min-h-screen w-full bg-sky-50">
        <div className=" m-auto grid h-screen grid-rows-[24px_auto_24px] gap-0 p-16">
          <header className="isolate z-20 flex items-center justify-between self-start">
            <div className="text-2xl font-bold">
              <span className="bg-transparent text-zinc-800">tvoje</span>
              <span className="text-sky-600">máma</span>
            </div>
            <nav>
              <ul className="flex gap-6 font-redhat text-xs">
                <li className="group">
                  <a
                    href="#"
                    className=" p-2 font-medium uppercase tracking-widest text-zinc-900 group-hover:text-sky-700"
                  >
                    O mně
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className=" p-2 font-medium uppercase tracking-widest text-zinc-900 group-hover:text-sky-700"
                  >
                    Ceník
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className=" p-2 font-medium uppercase tracking-widest text-zinc-900 group-hover:text-sky-700"
                  >
                    Pro odbornou veřejnost
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className=" p-2 font-medium uppercase tracking-widest text-zinc-900 group-hover:text-sky-700"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <div className="group">
              <a
                href="#"
                className="p-2 font-redhat text-xs font-medium uppercase tracking-widest text-zinc-900 group-hover:text-sky-700"
              >
                Kontakt
              </a>
            </div>
          </header>
          <main className="relative isolate z-20 m-auto flex w-full max-w-7xl items-center justify-start">
            <h1 className="space-y-3">
              <span className="text-black-500 ml-10 block font-merri text-3xl tracking-wide">
                Zdravím.
              </span>
              <span className="block space-y-2 font-merri text-5xl font-bold">
                <span className="block">
                  Jmenuji se <span className="text-sky-600">Honza</span>
                </span>

                <span className="block">
                  <span className="ml-12">a jsem Váš terapeut</span>
                </span>
              </span>
            </h1>
          </main>
          <footer className="isolate z-20 flex items-center justify-between self-end">
            <nav className="flex">
              <ul className="flex items-center gap-0 divide-x divide-slate-200 font-redhat text-xs">
                <li className="group">
                  <a
                    href="#"
                    className="mx-2 flex h-10 w-10 items-center justify-center rounded-full font-light uppercase tracking-widest text-zinc-500 transition-all group-hover:bg-zinc-100 group-hover:text-sky-900"
                  >
                    <RiFacebookFill className="text-xl" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="mx-2 flex h-10 w-10 items-center justify-center rounded-full font-light uppercase tracking-widest text-zinc-500 transition-all group-hover:bg-zinc-100 group-hover:text-sky-900"
                  >
                    <RiLinkedinFill className="text-xl" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="mx-2 flex h-10 w-10 items-center justify-center rounded-full font-light uppercase tracking-widest text-zinc-500 transition-all group-hover:bg-zinc-100 group-hover:text-sky-900"
                  >
                    <MdMedicalServices className="text-xl" />
                  </a>
                </li>
              </ul>
            </nav>
          </footer>

          <div className="absolute left-1/2 top-0 bottom-0 isolate z-10 mx-auto flex w-full max-w-7xl -translate-x-1/2 justify-end">
            <div className="absolute bottom-20 left-1/2 right-0 z-0 h-[600px] w-[600px] animate-move-x rounded-full bg-sky-200" />
            <div className="aspect-[147/200] scale-100">
              <Image
                src="/graphics/man.png"
                fill
                alt={''}
                className="h-full w-full"
              />
            </div>
            <div className="absolute bottom-20 left-1/2 z-0 mt-2 ml-10 h-[625px] w-[625px] animate-move-y rounded-full bg-sky-500 mix-blend-overlay" />
          </div>
        </div>
      </div>
      <div className="flex min-h-screen bg-white py-20">
        <div className="m-auto max-w-5xl p-4">
          <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-16">
            <div className="overflow-hidden">
              <div className="aspect-[3/4] rounded-md bg-black shadow-2xl"></div>
            </div>
            <div className="prose prose-lg">
              <h1 className="font-merri text-sky-900">O mně</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sed felis nec ipsum mattis laoreet sed at erat. Proin bibendum
                arcu sollicitudin efficitur pellentesque. Ut ac suscipit libero.
                Sed sit amet enim non est pretium aliquet quis quis ligula. In
                condimentum metus eget massa mattis dignissim. Integer pretium
                mattis quam aliquet placerat. Nulla ultrices, nunc nec consequat
                tincidunt, metus neque sagittis arcu, eget suscipit ligula
                mauris sagittis nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-sky-100 py-32 ">
        <div className="mx-auto w-full max-w-5xl space-y-8 p-4">
          <div className="prose prose-lg mx-auto mb-20 text-center">
            <h1 className="font-merri text-sky-900">Ceník</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              felis nec ipsum mattis laoreet sed at erat. Proin bibendum arcu
              sollicitudin efficitur pellentesque.
            </p>
          </div>
          <div className="m-auto grid max-w-lg gap-8 lg:max-w-full lg:grid-cols-3">
            <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-sky-300 bg-sky-50 py-8 text-slate-900 ring-8 ring-sky-200">
              <h2 className="font-merri text-2xl">Individuální terapie</h2>
              <p className="px-8 text-center text-sm">
                Curabitur lacinia vehicula aliquet. Pellentesque sed tristique
                justo. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas.
              </p>
              <hr className="my-2 w-full max-w-[50px] border-sky-600" />
              <h3 className="font-redhat text-xl font-bold text-sky-800">
                650 Kč / hod
              </h3>
            </div>
            <div className="flex -translate-y-8 flex-col items-center justify-between gap-4 rounded-xl border border-sky-300 bg-sky-50 py-8 text-slate-900 ring-8 ring-sky-200">
              <h2 className="font-merri text-2xl">Párová terapie</h2>
              <p className="px-8 text-center text-sm">
                Mauris id nunc eu tellus bibendum lacinia. Quisque euismod leo
                pretium quam faucibus, a sodales massa accumsan.
              </p>
              <hr className="my-2 w-full max-w-[50px] border-sky-600" />
              <h3 className="font-redhat text-xl font-bold text-sky-800">
                1000 Kč / hod
              </h3>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-sky-300 bg-sky-50 py-8 text-slate-900 ring-8 ring-sky-200">
              <h2 className="font-merri text-2xl">Supervize</h2>
              <p className="px-8 text-center text-sm">
                Morbi pharetra nisl vitae sollicitudin tristique. Donec
                fringilla nibh mattis, vulputate augue id, faucibus est. Quisque
                eu urna id orci rhoncus fringilla.
              </p>
              <hr className="my-2 w-full max-w-[50px] border-sky-600" />
              <h3 className="font-redhat text-xl font-bold text-sky-800">
                dle dohody
              </h3>
            </div>
          </div>
          <div className="p-4 text-center text-sky-800">
            <p>Přijímána je pouze hotovost, nebo platba převodem.</p>
            <p>
              V současné době nespolupracuji s žádnou zdravotní pojišťovnou.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
