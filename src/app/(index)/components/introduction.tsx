'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Introduction = () => {
  const ref = useScrollAnimations()

  useEffect(() => {
    const marquiseLeft = document.querySelector('.marquise-left')
    const marquiseRight = document.querySelector('.marquise-right')
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: marquiseLeft,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquiseLeft, {
          xPercent: 50,
          ease: 'linear',
        })
      gsap
        .timeline({
          scrollTrigger: {
            trigger: marquiseRight,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause reverse pause',
            scrub: true,
          },
        })
        .to(marquiseRight, {
          xPercent: -50,
          ease: 'linear',
        })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="mt-[12vw] md:mt-[150px]" id="introduction">
      <div>
        <p className="fade-up text-center font-gothic text-[min(6vw,32px)] font-semibold leading-loose">
          強力なセキュリティで
          <br className="md:hidden" />
          重要書類を安全に管理。
          <br />
          <span className="bg-[linear-gradient(to_top,_#F5CF06_40%,_transparent_40%)]">
            セキュリティ管理がNFTで変わる。
          </span>
        </p>
      </div>
      <div className="fade-down relative mt-[8vw] md:mt-[108px]">
        <div className="overflow-hidden">
          <p className="marquise-left mb-4 flex md:pl-[20%] lg:pl-[10%]">
            <img
              className="max-lg:w-[50vw] max-md:ml-[-10%] max-md:w-[60vw]"
              src="/assets/images/text-digital.png"
              alt=""
            />
          </p>
          <p className="marquise-right flex justify-end">
            <img
              className="max-lg:w-[75vw] max-md:mr-[-20%] max-md:w-[90vw]"
              src="/assets/images/text-document.png"
              alt=""
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduction
