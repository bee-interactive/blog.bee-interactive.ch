import Link from 'next/link'

function BeeMark({ className }) {
  return (
    <img className={className} src="https://bee-interactive.ch/svg/symbol.svg" alt="Bee Interactive Symbol" width="200" />
  )
}

function BeeLogo({ className }) {
  return (
    <img className={className} src="https://bee-interactive.ch/svg/logo.svg" alt="Bee Interactive Logo" width="200" />
  )
}

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Bee Interactive Blog">
            <BeeMark className="h-12 w-12 sm:hidden" />
            <BeeLogo className="hidden sm:block h-24" />
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a href="https://bee-interactive.ch" className="text-gray-500 hover:text-gray-700">
          Bee Interactive &rarr;
        </a>
      </div>
    </header>
  )
}
