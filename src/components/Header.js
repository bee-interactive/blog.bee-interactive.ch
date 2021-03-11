import Link from 'next/link'

function TailwindMark({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 55 33">
      <path fill="#fff" d="M0 0h55v33H0z" />
      <path
        fill="#16BDCA"
        fillRule="evenodd"
        d="M27.5 0c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72 2.697 2.737 5.817 5.905 12.633 5.905 7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72C37.436 3.166 34.316 0 27.5 0zM13.75 16.5c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72C17.564 29.834 20.684 33 27.5 33c7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72-2.697-2.738-5.817-5.905-12.633-5.905z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function TailwindLogo({ className }) {
  return (
    <img src="https://bee-interactive.ch/svg/logo.svg" width="200" />
  )
}

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="Bee Interactive Blog">
            <TailwindMark className="h-6 sm:hidden" />
            <TailwindLogo className="hidden sm:block h-6" />
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
