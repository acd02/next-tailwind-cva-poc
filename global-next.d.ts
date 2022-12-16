import type { NextPage, PageConfig } from 'next'
import type { ReactElement } from 'react'

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement<T>) => ReactElement
}
