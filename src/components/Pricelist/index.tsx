import { useState } from 'react'
import BackgroundComp from '../BackgroundComp'
import Image from 'next/image'
import classnames from 'classnames'
export default function Pricelist() {
  const tabs = [
    {
      title: 'Impressum',
      content: (
        <>
          {' '}
          <p>
            Zkušenosti jsem sbíral především v léčbě zaměřené na pomoc lidem
            užívajících návykové látky, od roku 2016 se již věnuji hlavně
            poskytování individuální terapie.
          </p>
          <p>
            Psychoterapii vnímám jako cestu k nalézání vnitřní svobody,
            otevřenosti, odvahy a většího pochopení a přijetí sebe sama i
            druhých. Osobně považuji za nesmírně důležité, aby potřebné změny a
            úlevy nedosahoval člověk pouze za zavřenými dveřmi terapeutické
            místnosti, ale aby si schopnost postavit se svým životním výzvám
            odnášel s sebou domů.
          </p>
          <p>
            Je mi jasné, že prožívání a osobní příběh každého člověka, který se
            odhodlá přijít na své první sezení, je jedinečný a proto se také
            každou terapii snažím „šít na míru“.
          </p>
          <p>Přeji Vám mnoho sil a držím palce.</p>
        </>
      ),
    },
    {
      title: 'Vzdělání',
      content: (
        <>
          <p>
            Jednooborová psychologie na Pražské vysoké škole psychosociálních
            studií, Sociální práce se zaměřením na komunikaci a aplikovanou
            psychoterapii na Pražské vysoké škole psychosociálních studií.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet libero faucibus, euismod nibh nec, molestie nunc. Nam eu
            risus a sem molestie faucibus non id risus.
          </p>
        </>
      ),
    },
    {
      title: 'Praxe',
      content: (
        <>
          <p>
            Aktuální supervizor psychoterapeutické praxe: Mgr. Bc. Michal
            Slaninka, Ph.D.
          </p>
          <h3 className="text-lg text-indigo-900">Kurzy a výcviky</h3>
          <ul className="list-none space-y-5 p-0 text-base">
            <li className="p-0">
              Daseinsanalytický výcvik v komunitní a skupinové psychoterapii
              akreditovaný pro zdravotnictví Českou lékařskou společností J. E.
              Purkyně (Mgr. Rut Dvořáková, Mgr. Petr Ptáček)
            </li>
            <li className="p-0">
              Daseinsanalytický výcvik v komunitní a skupinové psychoterapii
              akreditovaný pro zdravotnictví Českou lékařskou společností J. E.
              Purkyně (Mgr. Rut Dvořáková, Mgr. Petr Ptáček)
            </li>
            <li className="p-0">
              Daseinsanalytický výcvik v komunitní a skupinové psychoterapii
              akreditovaný pro zdravotnictví Českou lékařskou společností J. E.
              Purkyně (Mgr. Rut Dvořáková, Mgr. Petr Ptáček)
            </li>
          </ul>
          <h3 className="text-lg text-indigo-900">Praxe a stáže</h3>
          <ul className="list-none space-y-5 p-0 text-base">
            <li className="p-0">Od roku 2016 soukromá terapeutická praxe</li>
            <li className="p-0">
              <b>20XX - 20XX</b>: terapeut v Denním stacionáři <b>Sananim</b>{' '}
              pro drogově závislé
            </li>
            <li className="p-0">
              Skupinový terapeut <b>Denního stacionáře pro adolescenty</b> v
              Centru pro dorostovou a vývojovou psychiatrii při psychiatrické
              <b>klinice 1. lékařské fakulty UK</b>
            </li>
            <li className="p-0">
              Socioterapeut v <b>Novém Prostoru</b> a v pracovně-tréninkovém
              programu pro lidi s mentálním postižením v Kavárně Vesmírně
            </li>
          </ul>
        </>
      ),
    },
  ]
  const [activeTap, setActiveTab] = useState(0)

  return (
    <section className="relative min-h-screen w-full bg-transparent">
      <div className="m-auto grid min-h-screen w-full max-w-5xl grid-cols-2 gap-16 py-40">
        <div className="hidden w-full flex-grow-0 px-5 lg:block">
          <div className="sticky top-20 aspect-[3/4] rounded-l-3xl bg-slate-200/40 shadow-2xl shadow-indigo-500/20 ">
            <Image src="/graphics/man2.png" alt="" fill />
            <nav
              className="absolute top-0 -right-10 block h-full py-10"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
            >
              <ul className="flex w-full list-none items-center justify-start gap-0 font-open text-sm uppercase tracking-widest">
                {tabs.map((tabItem, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() => setActiveTab(index)}
                        className={classnames(
                          'inline-block cursor-pointer bg-transparent px-3 py-2 underline decoration-transparent decoration-4 underline-offset-8 transition-all hover:decoration-indigo-400',
                          index === activeTap &&
                            'font-bold underline decoration-indigo-400'
                        )}
                      >
                        {tabItem.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="max-w-md space-y-4 pt-20">
          <h1 className="font-merri text-4xl text-stone-900">O mně</h1>
          <div className="prose font-open">{tabs[activeTap].content}</div>
        </div>
      </div>
    </section>
  )
}
