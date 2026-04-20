import Image from "next/image"
import Link from "next/link"

type NavContentProps = {
  compact?: boolean
}

export function NavContent({ compact = false }: NavContentProps) {
  const profileImageSize = compact ? 40 : 52

  return (
    <>
      <Link href="/" className="flex items-center gap-3">
        <div
          className={`${compact ? "h-10 w-10" : "h-12 w-12"} overflow-hidden rounded-full ring-1 ring-gray-200`}
        >
          <Image
            src="/images/profil.png"
            alt="Triananda profile"
            width={profileImageSize}
            height={profileImageSize}
            sizes={compact ? "40px" : "52px"}
            className="h-full w-full object-cover"
          />
        </div>
        <h2
          className={`${compact ? "text-sm" : "text-base"} hidden font-semibold tracking-tight text-gray-900 sm:block`}
        >
          Triananda Fajar R.
        </h2>
      </Link>

      <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
        <Link href="/#services" className="transition hover:text-gray-900">
          Services
        </Link>
        <Link href="/#portfolio" className="transition hover:text-gray-900">
          Portfolio
        </Link>
        <Link href="/#testimonial" className="transition hover:text-gray-900">
          Testimonial
        </Link>
      </div>

      <a
        href="https://www.upwork.com/freelancers/trianandafajar"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md md:px-6"
      >
        Hire on Upwork
      </a>
    </>
  )
}
