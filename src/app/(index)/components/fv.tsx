'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

const images = [
  '/assets/images/img-fv-01.png',
  '/assets/images/img-fv-02.png',
  '/assets/images/img-fv-03.png',
  '/assets/images/img-fv-04.png',
  '/assets/images/img-fv-05.png',
  '/assets/images/img-fv-01.png',
  '/assets/images/img-fv-02.png',
  '/assets/images/img-fv-03.png',
  '/assets/images/img-fv-04.png',
  '/assets/images/img-fv-05.png',
  '/assets/images/img-fv-01.png',
  '/assets/images/img-fv-02.png',
  '/assets/images/img-fv-03.png',
  '/assets/images/img-fv-04.png',
  '/assets/images/img-fv-05.png',
]

const FV = () => {
  useEffect(() => {
    const container = document.querySelector('.container-card')
    const robo = document.querySelector('.robo')
    const images = gsap.utils.toArray<HTMLElement>('.item')
    const animeWidth = gsap.utils.toArray<HTMLElement>('.anime-width')
    const imageSize = images.length
    const total = images.length
    const degree = 360 / total
    const rotations = [0, 23, 46, -46, -23]

    const containerHeight = container ? container.clientHeight : 0
    const containerWidth = container ? container.clientWidth : 0

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline()

      timeline.to(robo, { opacity: 1, duration: 1, scale: 1 }, 0)
      timeline.to(container, { opacity: 1, duration: 1 }, 1)

      images.forEach((image, index) => {
        const sign = Math.floor((index / 2) % 2) ? 1 : -1
        const value = Math.floor((index + 4) / 4) * 4
        const rotation = index > imageSize - 3 ? 0 : sign * value

        gsap.set(image, {
          rotation: rotation,
        })
        timeline.from(
          image,
          {
            x: () =>
              index % 2
                ? containerWidth + image.clientWidth * 4
                : -containerWidth - image.clientWidth * 4,
            y: () => containerHeight - image.clientHeight,
            rotation: index % 2 ? 200 : -200,
            scale: 4,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            delay: 0.15 * Math.floor(index / 2),
          },
          1.5
        )

        let rotationAngle = index * degree
        timeline.to(
          image,
          {
            scale: 1,
            duration: 0,
          },
          0.15 * (imageSize / 2 - 1) + 2.5
        )

        timeline.to(
          image,
          {
            transformOrigin: `center ${containerHeight * 1.3}px`,
            rotation:
              index > imageSize / 2
                ? -degree * (imageSize - index)
                : rotationAngle,
            duration: 1,
            ease: 'power1.out',
          },
          0.15 * (imageSize / 2 - 1) + 2.5
        )
        timeline.to(
          image,
          {
            transformOrigin: `center ${containerHeight * 1.3}px`,
            rotation: 0,
            scale: 0,
            duration: 1,
            ease: 'power1.out',
          },
          0.15 * (imageSize / 2 - 1) + 5.5
        )
      })
      animeWidth.forEach((span) => {
        timeline.to(span, {
          width: '100%',
          duration: 0.6,
          ease: 'power1.out',
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-x-clip px-2 pt-3 md:pt-5">
      <span className="absolute inset-x-0 top-0 h-[240px] w-full bg-[#0D0A8E] md:h-[410px]"></span>
      <div className="relative z-10 mx-auto h-[calc(360px_-_2vw)] w-full max-w-[1380px] rounded-[30px] bg-white [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)] sm:h-[560px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="robo w-[min(66vw,492px)] scale-0 opacity-0"
            src="/assets/images/robo.png"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center font-gothic text-[6.5vw] font-bold leading-tight md:text-[55px] lg:text-[82px]">
          <p>
            <span className="anime-width inline-block w-0 overflow-hidden whitespace-nowrap">
              この書面は永遠に風化しない
            </span>
            <br />
            <span className="anime-width inline-block w-0 overflow-hidden whitespace-nowrap">
              改ざん不能なNFT技術で
            </span>
            <br />
            <span className="anime-width inline-block w-0 overflow-hidden whitespace-nowrap">
              安心と信頼を
            </span>
          </p>
        </div>
      </div>
      <div className="container-card absolute bottom-10 left-0 z-10 h-[300px] w-[100vw] select-none opacity-0 md:bottom-0 md:h-[610px]">
        <div className="absolute left-2/4 h-[380px] -translate-x-1/2 select-none md:h-[690px]">
          <div className="flex origin-[center_100vh] rotate-[0] select-none">
            {images.map((src, index) => (
              <div
                className="item absolute -translate-x-1/2 cursor-pointer select-none"
                key={index}
              >
                <div className="relative block h-[194px] w-[140px] select-none overflow-hidden text-[#fff] md:h-[386px] md:w-[279px]">
                  <img
                    className="pointer-events-none absolute left-[0] top-[0] h-full w-full object-cover"
                    src={src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-20 -mt-10 flex items-center justify-center md:mt-16">
        <a
          href="#introduction"
          className="group flex aspect-square w-[64px] animate-[move-y_.5s_infinite_alternate_ease-in-out] items-center justify-center rounded-full border border-[#0D0A8E] duration-200 hover:bg-[#0D0A8E] hover:[box-shadow:0px_2px_10px_rgba(0,_0,_0,_0.5)] md:w-[100px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="28"
            viewBox="0 0 18 28"
            fill="none"
            className="relative z-20  h-[19px] w-[12px] md:h-[28px] md:w-[18px]"
          >
            <path
              d="M9 26.7131V1M1 19.2286L9 26.7796L17 19.2286"
              className="stroke-[#0D0A8E] duration-200 group-hover:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute inset-0 z-10 h-full w-full rounded-full duration-200 group-hover:scale-[2] group-hover:bg-[#0D0A8E] group-hover:opacity-0 group-hover:duration-500"></div>
        </a>
      </div>
    </section>
  )
}

export default FV
