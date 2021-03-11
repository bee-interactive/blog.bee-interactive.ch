import Link from 'next/link'

function TailwindMark({ className }) {
  return (
    <img className={className} src="https://bee-interactive.ch/svg/symbol.svg" width="200" />
  )
}

function TailwindLogo({ className }) {
  return (
    <img className={className} src="https://bee-interactive.ch/svg/logo.svg" width="200" />
  )
}

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Bee Interactive Blog">
            <TailwindMark className="h-12 sm:hidden" />
            <TailwindLogo className="hidden sm:block h-24" />
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a href="https://bee-interactive.ch" className="font-medium text-gray-500 hover:text-gray-700">
          Bee Interactive &rarr;
        </a>
      </div>
    </header>
  )
}
