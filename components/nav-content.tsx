import Image from "next/image"
import Link from "next/link"

type NavContentProps = {
  compact?: boolean
}

export function NavContent({ compact = false }: NavContentProps) {
  const profileImageSize = compact ? 44 : 60

  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <div
          className={`${compact ? "h-12 w-12" : "h-16 w-16"} flex items-center justify-center rounded-full border-2 border-black`}
        >
          <Image
            src="/images/profil.png"
            alt="Triananda profile"
            width={profileImageSize}
            height={profileImageSize}
            sizes={compact ? "44px" : "60px"}
            className="rounded-full"
          />
        </div>
        <h2 className={`${compact ? "text-base" : "text-xl"} hidden font-bold sm:block`}>
          Triananda Fajar R.
        </h2>
      </Link>

      <div className="hidden items-center gap-8 text-[18px] font-bold md:flex">
        <Link href="/#services" className="hover:opacity-70">
          Services
        </Link>
        <Link href="/#portfolio" className="hover:opacity-70">
          Portfolio
        </Link>
        <Link href="/#testimonial" className="hover:opacity-70">
          Testimonial
        </Link>
      </div>

      <a
        href="https://www.upwork.com/freelancers/trianandafajar"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border-4 border-black bg-yellow-300 px-4 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 motion-reduce:transition-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:px-6 md:text-base"
      >
        Upwork
      </a>
    </>
  )
}
