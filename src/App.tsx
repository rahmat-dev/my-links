import { TypeAnimation } from 'react-type-animation'
import { ButtonLink } from './components/button-link'
import { mainLinks, socialLinks } from './data'

export default function App() {
  return (
    <div className="grid min-h-screen w-full place-items-center bg-teal-300 p-4">
      <div className="w-full max-w-md rounded-xl border-2 border-black bg-neutral-100 p-6 shadow-[5px_5px_black]">
        <header className="-mt-20 text-center">
          <img
            alt="photo profile"
            src="/me.webp"
            className="mx-auto aspect-square w-40 rounded-lg border-2 border-black object-cover shadow-[5px_5px_black]"
          />
          <h1 className="mt-4 font-display text-2xl uppercase">
            Rahmat Sulistio
          </h1>
          <TypeAnimation
            sequence={[
              'Freelance Developer',
              2000,
              'Full-Stack Developer',
              2000,
              'Web Developer',
              2000,
              'Mobile App Developer',
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-body text-lg font-medium text-slate-500"
          />
        </header>

        <main className="mt-10 flex flex-col items-center gap-5">
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
        </main>

        <footer className="mt-16 flex justify-center gap-4">
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
        </footer>
      </div>
    </div>
  )
}
