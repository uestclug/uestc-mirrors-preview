# UESTC Mirrors Insider Preview

# This project is now moved to [GitLab](https://gitlab.com/uestclug/uestc-mirrors-preview)

## Info

This repo is the building version of UESTC Mirrors.

## Config Files

### Site Config

- `.env`: WIP

### Build Config

- `public/data/news.json`: News preview at the index page.
- `public/data/news/<id>.json`: Speicfic news item.
- `public/data/status.json`: Syncing status.

### Pre-generated Config

- `src/assets/data/dir.json`: Mirrors directory information.
- `src/assets/data/doc.json`: Mirrors usage and information documents.
- `src/assets/data/iso.json`: ISO download information.

## TODO

- [ ] More documents
- [x] ISO Download
- [ ] News View
- [ ] Status View
- [x] Autorefresh update time and status
- [x] Dist home view
- [ ] Mirror conf for different versions selection
- [X] Apply theme setting to local storage
- [ ] SEO optimize.
