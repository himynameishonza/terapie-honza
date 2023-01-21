import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [contactPreference, setContactPreference] = useState('email')

  return (
    <section className="flex min-h-screen items-center bg-indigo-50 p-8 md:p-16">
      <div className="m-auto w-full max-w-5xl  bg-white shadow-xl">
        <div className="grid grid-cols-2 items-center">
          <div className="relative aspect-video w-full">
            <Image
              src="/graphics/phone.jpg"
              width="707"
              height="1080"
              alt={''}
            />
          </div>

          <div className="space-y-5 p-12">
            <div className="space-y-3">
              <h1 className="font-redhat text-2xl font-bold tracking-wide text-indigo-500">
                Pošlete mi zprávu
              </h1>
              <p className="leading-7 text-slate-700">
                Máte dotaz na mou praxi, nebo si přejete objednat na sezení?
                Pošlete mi zprávu a odpovím, jak nejrychleji to bude možné.
              </p>
            </div>
            <fieldset className="flex flex-col gap-2">
              <label className="font-redhat text-sm font-bold tracking-wide">
                Jak si přejete být kontaktováni?
              </label>
              <div className="flex flex-row gap-8">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    id="contact-phone"
                    name="contact-preference"
                    onChange={() => setContactPreference('phone')}
                    checked={contactPreference === 'phone'}
                  />
                  Telefonicky
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    id="contact-email"
                    name="contact-preference"
                    onChange={() => setContactPreference('email')}
                    checked={contactPreference === 'email'}
                  />
                  Emailem
                </label>
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label className="font-redhat text-sm font-bold tracking-wide">
                {contactPreference === 'phone' ? 'Telefon' : 'Email'}
              </label>
              {contactPreference === 'phone' ? (
                <input
                  type="tel"
                  className="resize-none rounded-sm bg-indigo-50 py-2 px-3 font-redhat text-sm font-medium text-slate-700 outline-none ring-indigo-300 focus:ring-4"
                />
              ) : (
                <input
                  type="email"
                  className="resize-none rounded-sm bg-indigo-50 py-2 px-3 font-redhat text-sm font-medium text-slate-700 outline-none ring-indigo-300 focus:ring-4"
                />
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label className="font-redhat text-sm font-bold tracking-wide">
                S čím potřebujete pomoci?
              </label>
              <select className="resize-none rounded-sm bg-indigo-50 py-2 pl-3 font-redhat text-sm font-medium text-slate-700 outline-none ring-indigo-300 focus:ring-4">
                <option>Nevím přesně</option>
                <option>Stres</option>
                <option>Smutek</option>
                <option>Vztahy</option>
                <option>Deprese</option>
                <option>Seběvědomí</option>
              </select>
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label className="font-redhat text-sm font-bold tracking-wide">
                Zpráva
              </label>
              <textarea
                rows={4}
                className="resize-none rounded-sm bg-indigo-50 py-2 px-3 font-redhat text-sm font-medium text-slate-700 outline-none ring-indigo-300 focus:ring-4"
              />
            </fieldset>

            <button
              type="submit"
              className="rounded-sm bg-indigo-400 p-3 text-white outline-none ring-indigo-300 focus:ring-4"
            >
              Odeslat
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
