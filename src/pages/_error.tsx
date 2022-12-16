import type { NextPage } from 'next'

type Props = {
  statusCode?: number
}

const Error: NextPage<Props, unknown> = ({ statusCode }) => {
  const content = (() => {
    if (statusCode === undefined) return 'An error occurred on the client'
    if (statusCode === 404) return 'Oops, missing page'
    else return `An error ${statusCode} occurred on the server`
  })()

  return <div className="flex h-full items-center justify-center">{content}</div>
}

Error.getInitialProps = ({ err, res }) => {
  const statusCode = (() => {
    if (err) return err.statusCode
    if (res) return res.statusCode
    else return 404
  })()

  return { statusCode }
}

export default Error
