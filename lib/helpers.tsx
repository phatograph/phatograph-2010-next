import get from 'lodash/get'
import entries from 'lodash/entries'
import nth from 'lodash/nth'

// @ts-ignore
import en from '@locales/en.yml'

// @ts-ignore
import th from '@locales/th.yml'

const locales = {
  en,
  th,
}

/*
 * Usage: t('user.title', {name: get(this.props, 'user.data.nickname')})
 */
export const t = (currentLocale, key, args = {}) => {
  try {
    const _key = `${currentLocale}.${key}`

    let text = get(locales, _key, _key)
    const argsEntries = entries(args)

    if (argsEntries.length) {
      text = argsEntries.reduce((result, current) => {
        const pattern = new RegExp(`%{${nth(current, 0)}}`, 'g')

        return result.replace(pattern, nth(current, 1) || '')
      }, text)
    }

    return text
  } catch (e) {
    console.log(e)
  }
}
