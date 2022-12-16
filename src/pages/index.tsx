import { Button } from 'components/atoms/Button'
import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global-next'

function Home() {
  return (
    <div className="mx-auto grid max-w-5xl justify-center gap-y-5">
      <div className="flex items-center gap-md">
        <Button>a small button</Button>
        <Button size="medium">a medium button</Button>
        <Button size="large">a large button</Button>
      </div>
      <div className=" flex items-center gap-md">
        <Button intent="secondary">a small button</Button>
        <Button intent="secondary" size="medium">
          a medium button
        </Button>
        <Button intent="secondary" size="large">
          a large button
        </Button>
      </div>
    </div>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
