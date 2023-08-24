export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ 'webfontloader')

  webFontLoader.load({
    custom: {
      families: ['SpoqaHanSansNeo', 'NanumSquareNeo'],
      urls: ['/styles/font.css']
    }
  })
}
