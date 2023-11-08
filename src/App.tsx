import { ButtonLink } from './components/button-link'
import { mainLinks, socialLinks } from './data'

export default function App() {
  return (
    <main className="grid min-h-screen w-full place-items-center bg-teal-300 p-4">
      <div className="w-full max-w-md rounded-xl border-2 border-black bg-neutral-100 p-6 shadow-[5px_5px_black]">
        <div className="-mt-20">
          <img
            src="/me.webp"
            className="mx-auto aspect-square w-40 rounded-lg border-2 border-black object-cover shadow-[5px_5px_black]"
          />
          <h1 className="mt-4 text-center font-display text-2xl uppercase">
            Rahmat Sulistio
          </h1>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          {mainLinks.map(({ href, label, bg }) => (
            <ButtonLink
              key={href}
              href={href}
              bg={bg}
              target="_blank"
              className="text-center"
            >
              {label}
            </ButtonLink>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {socialLinks.map(({ href, icon, bg }) => (
            <ButtonLink
              key={href}
              href={href}
              bg={bg}
              shadow="sm"
              rounded="full"
              target="_blank"
              className="grid h-10 w-10 place-items-center p-0"
            >
              {icon}
            </ButtonLink>
          ))}
        </div>
      </div>
    </main>
  )
}
