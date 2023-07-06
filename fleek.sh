#!/usr/bin/env bash
cp env.example .env
echo "auto-install-peers=true" > .npmrc 
npm i --location=global npm 
npm i --location=global pnpm 
npm i --location=global serve
pnpm i 
pnpm fetch --prod 
pnpm install -r --offline --prod 
pnpm build
rm -rf node_modules