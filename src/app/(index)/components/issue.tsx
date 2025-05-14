'use client'

import { BIZ_ANDROID, BIZ_IOS } from '@/config/constants'
import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Issue = () => {
  const ref = useScrollAnimations()
  return (
    <section
      ref={ref}
      className="relative mt-[32px] px-4 pb-[100px] pt-[60px] md:mt-[55px] md:pb-[180px] md:pt-[110px]"
    >
      <span className="absolute inset-0 -skew-y-[3.5deg] bg-[#0D0A8E]"></span>
      <div className="relative mx-auto w-full max-w-[1320px]">
        <Title sub={<span className="text-[#1E78FF]">Sample issue</span>}>
          <span className="text-white">
            簡単サンプル発行
            <span className="text-[8vw] md:text-[60px]">3</span>ステップ
          </span>
        </Title>
        <div className="mt-5 flex flex-wrap justify-center gap-6 md:gap-[30px]">
          <div className="fade-up w-[420px] rounded-[30px] bg-white px-5 pb-6 pt-8 md:px-7 md:pb-11 md:pt-[60px]">
            <div className="flex justify-center">
              <p className="text-center text-[17px] font-semibold md:text-[22px]">
                DIVER Bizアプリをインストール
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-[50px]">
              <figure>
                <img
                  className="max-md:w-[120px]"
                  src="/assets//images/logo-diver.png"
                  alt="DIVER Biz"
                />
              </figure>
              <div className="space-y-4 pt-5 md:pt-[30px]">
                <a
                  href={BIZ_IOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block duration-200 hover:opacity-75"
                >
                  <img
                    className="max-md:w-[180px]"
                    src="/assets/images/btn-appstore.png"
                    alt=""
                  />
                </a>
                <a
                  href={BIZ_ANDROID}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block duration-200 hover:opacity-75"
                >
                  <img
                    className="max-md:w-[180px]"
                    src="/assets/images/btn-googleplay.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="fade-up w-[420px] rounded-[30px] bg-white px-5 pb-6 pt-8 md:px-7 md:pb-11 md:pt-[60px]">
            <div className="flex justify-center">
              <p className="text-[17px] font-semibold md:text-[22px]">
                メールで証明書にしたい項目、内容を記載、ファイルを添付
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-[50px]">
              <figure>
                <img
                  className="max-md:w-[280px]"
                  src="/assets//images/img-issue-02.png"
                  alt="メールで証明書にしたい項目、内容を記載、ファイルを添付"
                />
              </figure>
            </div>
          </div>
          <div className="fade-up w-[420px] rounded-[30px] bg-white px-5 pb-6 pt-8 md:px-7 md:pb-11 md:pt-[60px]">
            <div className="flex items-center justify-center">
              <p className="text-[17px] font-semibold md:text-[22px]">
                発行されたNFTは指定いただいたDIVER Bizアプリで確認できる！
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-[50px]">
              <figure>
                <img
                  className="max-md:w-[280px]"
                  src="/assets//images/img-issue-03.png"
                  alt="発行されたNFTは指定いただいたDIVER Bizアプリで確認できる！"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Issue
