import { fireEvent, getNodeText, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { PropsWithChildren } from 'react'

const wrapper = ({ children }: PropsWithChildren<unknown>) => <>{children}</>

// see: https://testing-library.com/docs/react-testing-library/setup/#custom-render
const customRender = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper, ...options })
}

export { customRender as render, screen, getNodeText, waitFor, fireEvent, userEvent }
