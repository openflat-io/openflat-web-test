# deploy.sh
# stop operation when an error occurs
set -e

# build
pnpm -F flat-web build:cn -m production  

# go to the target folder
cd dist

# commit to repo
git init
git add -A
git commit -m 'deploy'

# push to the target branch
git push -f git@github.com:openflat-io/openflat-web-test.git master:gh-pages

cd -