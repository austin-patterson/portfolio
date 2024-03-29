#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# if first time running script
# git init
# git checkout -b light-mode

git add -A
git commit -m 'deploy light-mode'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:austin-patterson/austin-patterson.github.io.git light-mode

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:austin-patterson/austin-patterson.github.io.git light-mode:gh-pages

cd -