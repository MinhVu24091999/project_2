'use client'

import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Articles = [
  {
    title01: '/assets/images/case-txt-01.png',
    title02: '/assets/images/case-ttl-01.png',
    image: '/assets/images/case-01.jpg',
    text: (
      <>
        企業同士の取引において、契約書をNFT化することで、契約内容の改ざん防止、効率的なアクセス、取引の透明性が実現できます。
      </>
    ),
  },
  {
    title01: '/assets/images/case-txt-02.png',
    title02: '/assets/images/case-ttl-02.png',
    image: '/assets/images/case-02.jpg',
    text: (
      <>
        デジタルドキュメントのNFTとして発行することで、なりすましや改ざんの心配がなくなる。紙の書類を持ち歩く必要がなくなり、いつでも書類を必要な相手に提示できます。
      </>
    ),
  },
  {
    title01: '/assets/images/case-txt-03.png',
    title02: '/assets/images/case-ttl-03.png',
    image: '/assets/images/case-03.jpg',
    text: (
      <>
        管理者のみが中身を確認でき、いつ誰に転送をしたかなど全てが記録として残ります。NFTの情報は暗号化され保護されます。
      </>
    ),
  },
  {
    title01: '/assets/images/case-txt-04.png',
    title02: '/assets/images/case-ttl-04.png',
    image: '/assets/images/case-04.jpg',
    text: (
      <>
        弁護士事務所や法務部が顧客の法律文書をNFT化し、
        法律文書の安全な保管と共有により、重要な法的手続きが効率的に進められます。
      </>
    ),
  },
  {
    title01: '/assets/images/case-txt-05.png',
    title02: '/assets/images/case-ttl-05.png',
    image: '/assets/images/case-05.jpg',
    text: (
      <>
        著作権を持つデジタル作品（文章など）をデジタルドキュメントにし、その作品の所有権を明確にすることで、知的財産の侵害を防止します。
      </>
    ),
  },
]

const UseCase = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="mt-[110px] md:mt-[200px]">
      <Title sub="UseCase">使用事例</Title>
      <div className="mt-8 bg-black py-4 md:mt-16">
        <div className="mx-5 flex items-center justify-center gap-5 overflow-hidden max-md:flex-col md:mx-[5vmin] md:skew-x-[3deg]">
          {Articles.map((item, index) => (
            <div
              className="group relative h-[400px] [transition:all_1s_ease-in-out] md:h-[75vmin] md:flex-1 md:hover:flex-grow-[10]"
              key={index}
            >
              <img
                className="h-full w-full object-cover grayscale-[100%] filter filter [transition:all_1s_ease-in-out] max-md:grayscale-0 md:group-hover:grayscale-0"
                src={item.image}
              />
              <div className="absolute bottom-0 left-0 group-hover:bottom-4 max-md:w-full md:group-hover:w-full">
                <div className="flex h-[40px] w-full min-w-[320px] origin-[0%_0%] -rotate-90 items-center justify-center whitespace-nowrap bg-[rgba(13,_10,_142,_0.8)] text-center [transition:all_0.5s_ease-in-out]  max-md:rotate-0 max-md:px-5 md:group-hover:rotate-0 md:group-hover:-skew-x-3 md:group-hover:text-center">
                  <img
                    className="rotate-90 skew-x-[-3deg] max-md:hidden md:group-hover:hidden"
                    src={item.title01}
                    alt=""
                  />
                  <img
                    className="max-md:max-w-[100%] md:hidden md:group-hover:block"
                    src={item.title02}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center p-5 delay-500 duration-150 max-md:bg-black/80 md:pointer-events-none md:absolute md:translate-y-full md:p-[30px] md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:relative md:group-hover:translate-y-0 md:group-hover:bg-black/80 md:group-hover:opacity-100">
                  <p className="w-full max-w-[556px] font-gothic text-[14px] font-light text-white delay-500 duration-300 md:text-[18px] md:opacity-0 md:group-hover:opacity-100">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCase
