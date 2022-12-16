import { Future, Result } from '@swan-io/boxed'

const get = <Res, Err>(url: string) =>
  Future.make<Result<Res, Err>>(resolve => {
    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => resolve(Result.Ok(json)))
      .catch(error => resolve(Result.Error(error)))

    return () => controller.abort()
  })

const post =
  <Data>(body: Data) =>
  <Res, Err>(url: string) =>
    Future.make<Result<Res, Err>>(resolve => {
      const controller = new AbortController()

      /* eslint-disable-next-line no-undef */
      const headers = new Headers({
        'Content-type': 'application/json; charset=UTF-8',
      })

      fetch(url, {
        signal: controller.signal,
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => resolve(Result.Ok(json)))
        .catch(error => resolve(Result.Error(error)))

      return () => controller.abort()
    })

// utils
function handleErrors<Err>(res: Response) {
  // https://bit.ly/2JVfEgv
  if (!res.ok)
    /* eslint-disable-next-line prefer-promise-reject-errors */
    return Promise.reject(res as unknown as Err)
  else return Promise.resolve(res)
}

export { get, post }
