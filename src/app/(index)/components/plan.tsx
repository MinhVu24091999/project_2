'use client'

import { LINE_URL } from '@/config/constants'
import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Plan = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="mt-[12vw] px-4 md:mt-[115px]">
      <div className="mx-auto w-full max-w-[1376px] rounded-[30px] border-[4px] border-[#0D0A8E] px-5 py-10 pb-[60px] md:border-[7px] md:px-9 md:py-16 md:pb-[105px]">
        <Title sub="Plan">
          デジタルドキュメント
          <br className="md:hidden" />
          生産ロボの稼働料金
        </Title>
        <div className="mt-5 flex flex-wrap justify-center gap-5 md:mt-7 md:gap-[30px]">
          <div className="fade-up relative w-[410px] rounded-[30px] bg-[#1E78FF] px-[15px] pb-5 pt-7 md:pb-[30px] md:pt-10">
            <div className="rounded-[28px] bg-white px-[15px] pb-5 pt-8 md:h-[300px] md:pb-[30px] md:pt-[45px]">
              <p className="border-b border-black text-center text-[20px] font-semibold md:text-[32px]">
                お試しプラン
              </p>
              <p className="mt-5 text-center text-[32px] font-semibold leading-none md:mt-[30px] md:text-[56px]">
                1<span className="text-[24px] md:text-[42px]">回</span>10
                <span className="text-[24px] md:text-[42px]">枚</span>無料
              </p>
              <p className="mt-4 text-center text-[13px] font-semibold leading-tight md:mt-12 md:text-[16px]">
                NFT化したドキュメントを <br />
                発行して確認したい
              </p>
            </div>
            <div className="flex justify-center pt-5 md:pt-[30px]">
              <a
                href={LINE_URL}
                className="relative flex h-[55px] w-[240px] items-center justify-center rounded-[10px] bg-[#F5CF06] text-[15px] font-semibold duration-200 hover:opacity-75 md:h-[70px] md:w-[270px] md:text-[18px]"
              >
                <span>お問い合わせください</span>
                <img
                  className="absolute right-0"
                  src="/assets/images/arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="fade-up relative w-[410px] rounded-[30px] bg-[#0D0A8E] px-[15px] pb-5 pt-7 md:pb-[30px] md:pt-10">
            <span className="absolute left-0 top-0">
              <img
                className="max-md:w-[160px]"
                src="/assets/images/img-ribbon.png"
                alt="迷ったらこれ！"
              />
            </span>
            <div className="rounded-[28px] bg-white px-[15px] pb-5 pt-8 md:h-[300px] md:pb-[30px] md:pt-[45px]">
              <p className="border-b border-black text-center text-[20px] font-semibold md:text-[32px]">
                Basicプラン
              </p>
              <p className="mt-5 text-center text-[32px] font-semibold leading-none md:mt-[30px] md:text-[56px]">
                <span className="text-[24px] md:text-[42px]">従業員</span>6~20名
                <br />
                <span className="text-[24px] md:text-[42px]">
                  程度の企業様向き
                </span>
              </p>
              <p className="mt-4 text-center text-[13px] font-semibold leading-tight md:mt-6 md:text-[16px]">
                ※10回作成○○円
              </p>
            </div>
            <div className="flex justify-center pt-5 md:pt-[30px]">
              <a
                href={LINE_URL}
                className="relative flex h-[55px] w-[240px] items-center justify-center rounded-[10px] bg-[#F5CF06] text-[15px] font-semibold duration-200 hover:opacity-75 md:h-[70px] md:w-[270px] md:text-[18px]"
              >
                <span>お問い合わせください</span>
                <img
                  className="absolute right-0"
                  src="/assets/images/arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="fade-up relative w-[410px] rounded-[30px] bg-[#6C0A8E] px-[15px] pb-5 pt-7 md:pb-[30px] md:pt-10">
            <div className="rounded-[28px] bg-white px-[15px] pb-5 pt-8 md:h-[300px] md:pb-[30px] md:pt-[45px]">
              <p className="border-b border-black text-center text-[20px] font-semibold md:text-[32px]">
                Enterpriseプラン
              </p>
              <p className="mt-5 text-center text-[32px] font-semibold leading-none md:mt-[30px] md:text-[56px]">
                <span className="text-[24px] md:text-[42px]">従業員</span>21名
                <br />
                <span className="text-[24px] md:text-[42px]">
                  以上の企業様向き
                </span>
              </p>
              <p className="mt-4 text-center text-[13px] font-semibold leading-tight md:mt-6 md:text-[16px]">
                ※10回作成○○円
              </p>
            </div>
            <div className="flex justify-center pt-5 md:pt-[30px]">
              <a
                href={LINE_URL}
                className="relative flex h-[55px] w-[240px] items-center justify-center rounded-[10px] bg-[#F5CF06] text-[15px] font-semibold duration-200 hover:opacity-75 md:h-[70px] md:w-[270px] md:text-[18px]"
              >
                <span>お問い合わせください</span>
                <img
                  className="absolute right-0"
                  src="/assets/images/arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan
