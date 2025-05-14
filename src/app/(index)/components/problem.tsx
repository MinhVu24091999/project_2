'use client'

import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Articles = [
  {
    title: 'セキュリティ対策',
    image: '/assets/images/problem-01.png',
    text: (
      <>
        紙の書類は紛失や盗難のリスクが高い。PDFなどのデジタルデータは管理体制で流出のリスクもあります。
      </>
    ),
  },
  {
    title: '整理と管理',
    image: '/assets/images/problem-02.png',
    text: (
      <>書類の管理には物理的なスペースが必要で、時間もコストもかかります。</>
    ),
  },
  {
    title: '災害対策',
    image: '/assets/images/problem-03.png',
    text: (
      <>
        自然災害による被害から書類を守るのは困難です。高セキュリティのサーバーで管理する場合は費用が高くなる場合もあります。
      </>
    ),
  },
  {
    title: 'その他',
    image: '/assets/images/problem-04.png',
    text: <>アクセス制限や保管状態の確認など、日常管理が大変。</>,
  },
]

const Problem = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="mt-[12vw] px-4 md:mt-[140px]">
      <div className="mx-auto w-full max-w-[1000px]">
        <Title sub="Problem">従来の重要書類管理の問題</Title>
        <div className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:gap-10">
          {Articles.map((item, index) => (
            <div
              className="fade-up group flex flex-col items-center rounded-[30px] bg-white px-3 max-md:py-10 md:min-h-[450px] md:px-5 md:pt-[82px]"
              ref={ref}
              key={index}
            >
              <div className="flex w-full max-w-[321px] flex-col items-center gap-6 md:gap-8">
                <h5 className="text-center text-[16px] font-semibold md:text-[28px]">
                  {item.title}
                </h5>
                <figure className="">
                  <img
                    className="max-md:w-[80px]"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                <p className="text-[14px] md:text-[16px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
