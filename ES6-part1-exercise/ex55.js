let create_URL = (...url) => {
    return url.join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
}
console.log(create_URL('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));