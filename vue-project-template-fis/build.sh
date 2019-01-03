#! /bin/bash

echo "npm run build"

dirName="xxx"

node -v

rm -rf output

npm install

npm rebuild node-sass

ls -al

npm run build

mkdir output

cd output

cp -r ../dist ./

mv dist ${dirName}

tar -czf ${dirName}.tar.gz ${dirName}

rm -rf ${dirName}

echo "build success"