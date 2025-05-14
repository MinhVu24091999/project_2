import type { Metadata } from 'next'

import { SITE_URL, OG } from '@/config/constants'
import FV from './components/fv'
import Introduction from './components/introduction'
import Problem from './components/problem'
import Solution from './components/solution'
import Plan from './components/plan'
import Receive from './components/receive'
import FAQ from './components/faq/faq'
import Issue from './components/issue'
import UseCase from './components/useCase'

export const metadata: Metadata = {
  openGraph: {
    ...OG,
    url: SITE_URL,
    type: 'website',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const IndexPage = () => {
  return (
    <main>
      <FV />
      <Introduction />
      <Problem />
      <Solution />
      <Issue />
      <UseCase />
      <Plan />
      <Receive />
      <FAQ />
    </main>
  )
}

export default IndexPage
