/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { usePageCtx } from './SiteLayout/context'
import faviconURL from '../utils/importFavicon'

function SEO({ description, lang, meta, title }) {
  const pageCtx = usePageCtx()

  const actualTitle = (() => {
    if (title) return title
    if (
      pageCtx.pageMeta.type === 'doc' ||
      pageCtx.pageMeta.type === 'dynamic-doc'
    )
      return pageCtx.pageMeta.zhName
    if (pageCtx.pageMeta.type === 'index-page') return 'index'
    return pageCtx.siteMeta.siteName || 'Console Components'
  })()

  const metaDescription = description || pageCtx.siteMeta.description
  const { siteName } = pageCtx.siteMeta

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={actualTitle}
      titleTemplate={`%s · ${siteName}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${faviconURL}` },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `zh`,
  meta: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
