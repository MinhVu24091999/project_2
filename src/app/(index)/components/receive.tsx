'use client'

import { LINE_URL, BIZ_ANDROID, BIZ_IOS } from '@/config/constants'
import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Receive = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="mt-20 px-4 md:mt-[155px]">
      <div className="relative mx-auto w-full max-w-[1210px]">
        <Title sub="Receive">デジタルをドキュメント受け取る準備</Title>
        <div className="my-8 flex flex-wrap justify-center gap-6 md:my-16 md:gap-[35px]">
          <div className="fade-up w-full max-w-[380px] rounded-[20px] bg-white px-5 py-6 [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:w-[380px] md:py-10">
            <div className="mx-auto w-full max-w-[300px] pb-5 md:pb-[27px]">
              <figure className="flex items-center justify-center">
                <img
                  className="max-md:w-[60px]"
                  src="/assets/images/receive-01.png"
                  alt=""
                />
              </figure>
              <h5 className="mt-5 text-center text-[20px] font-semibold md:mt-8 md:text-[28px]">
                アプリをダウンロード
              </h5>
              <p className="mt-3 text-[16px] font-light md:mt-4">
                DIVER Bizのアプリをスマートフォンへインストール
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 md:mt-10 md:gap-5">
                <figure>
                  <img src="/assets/images/logo-diver-2.png" alt="" />
                </figure>
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
          <div className="fade-up w-full max-w-[380px] rounded-[20px] bg-white px-5 pt-6 [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:w-[380px] md:pt-10">
            <div className="mx-auto w-full max-w-[300px]">
              <figure className="flex items-center justify-center">
                <img
                  className="max-md:w-[60px]"
                  src="/assets/images/receive-02.png"
                  alt=""
                />
              </figure>
              <h5 className="mt-5 text-center text-[20px] font-semibold md:mt-8 md:text-[28px]">
                新規アカウント作成
              </h5>
              <p className="mt-3 text-[16px] font-light md:mt-4">
                アプリで新規アカウントの作成を行ってください。
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 md:mt-10 md:gap-5">
                <figure>
                  <img src="/assets/images/img-receive-02.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="fade-up w-full max-w-[380px] rounded-[20px] bg-white px-5 py-6 [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] md:w-[380px] md:py-10">
            <div className="mx-auto w-full max-w-[300px] pb-5 md:pb-[27px]">
              <figure className="flex items-center justify-center">
                <img
                  className="max-md:w-[60px]"
                  src="/assets/images/receive-03.png"
                  alt=""
                />
              </figure>
              <h5 className="mt-5 text-center text-[20px] font-semibold md:mt-8 md:text-[28px]">
                安心サポート
              </h5>
              <p className="mt-3 text-[16px] font-light md:mt-4">
                ご不明点はお問い合わせよりご連絡ください。
              </p>
              <div className="mt-3 flex flex-col items-center justify-center gap-4 md:gap-5">
                <figure>
                  <img src="/assets/images/img-receive-03.png" alt="" />
                </figure>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block duration-200 hover:opacity-75"
                >
                  <img
                    className="max-md:w-[200px]"
                    src="/assets/images/img-receive-line.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-up mx-auto min-h-[428px] w-full max-w-[1000px] rounded-[30px] border border-[#0D0A8E] bg-[#F3F3F3] px-5 pb-10 pt-10 md:pt-[90px]">
          <div className="mx-auto flex w-full max-w-[896px] gap-6 max-md:flex-col max-md:items-center md:gap-8">
            <figure>
              <img
                className="max-md:w-[200px]"
                src="/assets/images/img-note.png"
                alt=""
              />
            </figure>
            <div className="w-full max-w-[566px] flex-1">
              <p className="border-b-2 border-[#0D0A8E] text-[20px] font-semibold md:text-[24px]">
                ご注意ください{' '}
                <span className="text-[15px] md:text-[18px]">
                  (法的に電子化できない契約書・書類)
                </span>
              </p>
              <ul className="list-disc space-y-1 pl-6 pt-4 text-[15px] font-light leading-loose md:text-[18px]">
                <li>定期借地契約（借地借家法22条） </li>
                <li>定期建物賃貸借契約（借地借家法38条1項） </li>
                <li>
                  投資信託契約の約款（投資信託及び投資法人に関する法律5条）
                </li>
                <li>
                  訪問販売、電話勧誘販売、連鎖販売、特定継続的役務提供、業務提供誘引販売取引における書面交付義務（特定商品取引法4条etc）{' '}
                </li>
              </ul>
              <p className="mt-3 text-center text-[13px] md:mt-5 md:text-[16px]">
                ※ご不明点は、
                <a
                  href={LINE_URL}
                  className="border-b-2 border-[#01B202] font-semibold text-[#01B202]"
                >
                  LINEよりお問い合わせ
                </a>
                ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Receive
