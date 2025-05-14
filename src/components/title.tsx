import { ReactNode } from 'react'

export interface ButtonPropsType {
  sub: ReactNode
  children?: ReactNode
}

const Title = ({ sub, children }: ButtonPropsType) => {
  return (
    <div className="fade-up">
      <p className="text-center font-['Inter'] text-[4.5vw] font-semibold text-[#0D0A8E] md:text-[32px]">
        {sub}
      </p>
      {children && (
        <h3 className="text-center font-gothic text-[6.5vw] font-semibold md:text-[48px]">
          {children}
        </h3>
      )}
    </div>
  )
}

export default Title
