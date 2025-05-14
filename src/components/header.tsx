'use client'

import { LINE_URL } from '@/config/constants'

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-5 bg-[#0D0A8E] p-5 md:p-[30px]">
      <a href="/" className="duration-200 hover:opacity-75">
        <img
          src="/assets/images/logo.png"
          alt="デジタルドキュメント生産ロボ"
          className="h-6 w-[280px] sm:w-auto"
        />
      </a>
      <a
        href={LINE_URL}
        className="hidden duration-200 hover:opacity-75 sm:block"
        target="_blank"
      >
        <img src="/assets/images/btn-line.png" alt="LINEでお問い合わせ" />
      </a>
    </header>
  )
}

export default Header
