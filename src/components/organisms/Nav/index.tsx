import cx from 'classcat'
import { ChangeEvent, memo } from 'react'
import { ThemeValue } from 'src/themes'

function NavContent() {
  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    if (!e.target.value) return

    const value = e.target.value as ThemeValue
    const documentElm = document.documentElement

    if (value === 'other') documentElm.classList.add('other')
    else documentElm.classList.remove('other')
  }

  return (
    <nav className="border-b border-gray-300 py-4 text-center">
      <div className="mx-auto max-w-xs">
        <label
          htmlFor="theme"
          className="block text-left text-sm font-medium text-gray-700"
        >
          Switch theme
        </label>

        <select
          onChange={handleSelect}
          name="theme"
          id="theme"
          defaultValue="default"
          className={cx([
            'mt-1 block w-full appearance-none rounded-md border border-gray-300 pl-3 pr-10 text-base sm:text-sm',
            'bg-down-arrow bg-[size:1.5rem_1.5rem] bg-[position:right_0.5rem_center] bg-no-repeat py-2',
            'focus:border-indigo-500 focus:outline-none focus:ring-indigo-500',
          ])}
        >
          <option value="other">Other Theme</option>
          <option value="default">Default Theme</option>
        </select>
      </div>
    </nav>
  )
}

export const Nav = memo(NavContent)
