import { ChangeEvent, memo, useEffect, useState } from 'react'
import { applyTheme, ThemeValue } from 'src/theme'

function NavContent() {
  const [themeValue, setThemeValue] = useState<ThemeValue>('default')

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    if (!e.target.value) return
    setThemeValue(e.target.value as ThemeValue)
  }

  useEffect(() => {
    applyTheme(themeValue)
  }, [themeValue])

  return (
    <nav className="border-b border-gray-300 py-4 text-center">
      {/* <label htmlFor="theme">Choose a theme:</label> */}

      <select onChange={handleSelect} name="theme" id="theme" defaultValue={themeValue}>
        <option value="">--Please choose a theme--</option>
        <option value="other">Other Theme</option>
        <option value="default">Default Theme</option>
      </select>
    </nav>
  )
}

export const Nav = memo(NavContent)
