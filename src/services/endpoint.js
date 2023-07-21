const URL_BASE = "http://localhost:3000"

export const endpoints = {
    article: `${URL_BASE}/articles?_expand=author&_embed=comments&_embed=category_article`
}