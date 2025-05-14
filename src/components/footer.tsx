'use client'

import { LINE_URL } from '@/config/constants'

const Footer = () => {
  return (
    <footer className="relative bg-[#010023]/[0.9] bg-[url('/assets/images/footer-deco.png')] bg-[center_top_110px] bg-no-repeat px-5 pb-10 max-xl:bg-contain md:px-10">
      <div className="mx-auto flex w-full max-w-[400px] flex-wrap items-center justify-center gap-5 pb-16 pt-[60px] md:max-w-[660px] md:justify-between md:pb-24 md:pt-[130px] lg:max-w-[1140px]">
        <div className="max-lg:w-full max-md:flex max-md:justify-center">
          <a href="/" className="duration-150 hover:opacity-75">
            <img src="/assets/images/logo-footer.png" alt="" />
          </a>
        </div>
        <ul className="mt-3 space-y-[20px] text-[15px] font-bold text-white md:space-y-[30px] md:text-[16px]">
          <li>
            <a href="/#faq" className="block duration-150 hover:opacity-75">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="https://world-scan-project.com/about-us/#overview"
              target="_blank"
              className="block duration-150 hover:opacity-75"
            >
              運営者
            </a>
          </li>
          <li>
            <a
              href="https://world-scan-project.com/privacy-policy/"
              target="_blank"
              className="block duration-150 hover:opacity-75"
            >
              プライバシーポリシー
            </a>
          </li>
        </ul>
        <div className="mt-3">
          <a
            href={LINE_URL}
            target="_blank"
            className="flex duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[240px]"
              src="/assets/images/btn-line-footer.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="text-center text-[13px] text-white md:text-[14px]">
        Copyright © デジタルドキュメント生産ロボ
      </div>
    </footer>
  )
}

export default Footer
