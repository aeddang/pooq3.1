export class TypeValidation {
  isNullValue (value) {
    if (value == null || value === 'undefined' || value === 'null') return true
    return false
  }

  getDataValue (value) {
    if (this.isNullValue(value)) return null
    return value
  }

  getBoolValue (value) {
    if (this.isNullValue(value)) return false
    if (value.toLowerCase() === 'y') return true
    return false
  }

  getStringValue (value, defaultValue = '') {
    if (this.isNullValue(value)) return defaultValue
    return String(value).replace('$O$', '')
  }

  getNumberValue (value, defaultValue = -1) {
    if (this.isNullValue(value)) return defaultValue
    return Number(value)
  }

  getArrayValue (value, key = 'list') {
    const data = this.getDataValue(value)
    if (this.isNullValue(data)) return []
    const datas = this.getDataValue(data[key])
    if (this.isNullValue(datas)) return []
    return datas
  }
}

export class Cookies {
  constructor (domain) {
    this.domain = domain
  }

  getItem (key) {
    if (!key) return null
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' +
      encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
  }

  setItem (key, value, expire = null, path = '/', secure = false) {
    if (!key || /^(?:expires|max-age|path|secure)$/i.test(key)) return false
    var datas = ''
    datas += encodeURIComponent(key)
    datas += '='
    datas += encodeURIComponent(value)
    if (expire) {
      switch (expire.constructor) {
        case String:
          datas += '; expires='
          datas += expire
          break
        case Date:
          datas += '; expires='
          datas += expire.toUTCString()
          break
        default:
          break
      }
    }
    datas += this.domain ? '; domain=' + this.domain : ''
    datas += path ? '; path=' + path : ''
    datas += secure ? '; secure=' + secure : ''
    document.cookie = datas
    return true
  }

  removeItem (key, path = '/') {
    if (!key) return false
    document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (this.domain ? '; domain=' + this.domain : '') + (path ? '; path=' + path : '')
    return true
  }

  hasItem (key) {
    if (!key) return false
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
  }

  clear () {
    const nameList = document.cookie
      .replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:=[^;]*)?;\s*/)

    nameList.forEach(name => {
      if (!/^_ga.*|^wcs.*|^usrID/gi.test(name)) {
        this.removeItem(decodeURIComponent(name), this.domain)
        this.removeItem(decodeURIComponent(name), this.domain, '/')
      }
    })
  }
}
