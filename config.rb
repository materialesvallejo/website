###
# General configuration
###

# DatoCMS Extension
activate :dato,
  domain: 'morning-mountain-8323.admin.datocms.com',
  token: 'caa4b8f93f5afe9453a37f15022b74ae227ce8e9f62814eb99',
  base_url: 'http://www.materialesvallejo.com'

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Localize site
activate :i18n

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
#
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }
