import cx from 'classcat'
import { ChangeEvent, memo } from 'react'
import { ThemeValue } from 'src/themes'
import { objectKeys } from 'utils/object'

function NavContent() {
  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    if (!e.target.value) return

    const value = e.target.value as ThemeValue
    const documentElm = document.documentElement
    const themeValues: Record<ThemeValue, ThemeValue> = {
      default: 'default',
      defaultDark: 'defaultDark',
      other: 'other',
    }

    objectKeys(themeValues).forEach(themeKey => {
      if (themeKey === value && value !== 'default') documentElm.classList.add(themeKey)
      else documentElm.classList.remove(themeKey)
    })
  }

  return (
    <nav className="border-b border-gray-300 py-4 text-center">
      <div className="mx-auto max-w-xs">
        <label
          htmlFor="theme"
          className="block text-left text-sm font-bold text-main-text"
        >
          Switch theme
        </label>

        <select
          onChange={handleSelect}
          name="theme"
          id="theme"
          defaultValue="default"
          className={cx([
            'mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-main-bg pl-3 pr-10 text-base text-main-text sm:text-sm',
            'bg-down-arrow bg-[size:1.5rem_1.5rem] bg-[position:right_0.5rem_center] bg-no-repeat py-2',
            'focus:border-indigo-500 focus:outline-none focus:ring-indigo-500',
          ])}
        >
          <option value="default">Default Theme</option>
          <option value="defaultDark">Default Dark Theme</option>
          <option value="other">Other Theme</option>
        </select>
      </div>
    </nav>
  )
}

export const Nav = memo(NavContent)
