import { Button } from 'components/atoms/Button'
import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global-next'

function Home() {
  return (
    <div className="mx-auto flex max-w-5xl items-center gap-md">
      <Button>a button</Button>
      <Button intent="secondary" size="medium">
        another button
      </Button>
    </div>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
