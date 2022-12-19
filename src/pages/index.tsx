import { Button } from 'components/atoms/Button'
import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global-next'
import type { PropsWithChildren } from 'react'

function Home() {
  return (
    <div className="mx-auto grid max-w-5xl justify-center gap-y-10">
      <Components.Section label="Primary buttons:">
        <Button>small button</Button>
        <Button size="medium">medium button</Button>
        <Button size="large">large button</Button>
      </Components.Section>

      <Components.Section label="Secondary buttons:">
        <Button intent="secondary">small button</Button>
        <Button intent="secondary" size="medium">
          medium button
        </Button>
        <Button intent="secondary" size="large">
          large button
        </Button>
      </Components.Section>

      <Components.Section label="Disabled buttons:">
        <Button size="small" disabled>
          small primary
        </Button>
        <Button disabled intent="secondary" size="medium">
          medium secondary
        </Button>
      </Components.Section>
    </div>
  )
}

const Components = {
  Section: ({ children, label }: PropsWithChildren<{ label: string }>) => (
    <div>
      <p className="mb-2 text-2xl font-bold text-main-text">{label}</p>
      <div className="flex items-end gap-md">{children}</div>
    </div>
  ),
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
