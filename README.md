# Next Prismic (Slice-Concept) Starter
### The approach to make a fully customizable web-app from a CMS

**Technologies:**

[![](https://img.shields.io/badge/NEXT%20-%23000000.svg?&style=flat&logo=next.js&logoColor=white)](https://nextjs.org)
[![](https://img.shields.io/badge/PRISMIC%20-%235163BA.svg?&style=flat&logo=prismic&logoColor=white)](https://prismic.io)
[![](https://img.shields.io/badge/TAILWIND%20-%2338B2AC.svg?&style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com) 

**Main Features:**

- RenderSlice: development is done per slice basis
- Custom Page: create a page directly and only from prismic
- Dynamic Layouting: create layout in prismic and apply it to custom page

**Extras:** Layout, Alert, Custom Link, Custom Image, SEOTags, useForm, Context setup

## Preview

Preview the example live on [Here](https://next-prismic-starter.errbint.net)

## Deploy your own

Deploy the example by clicking below

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/stackoverprof/next-prismic-starter)

## How to use

**IMPORTANT PRISMIC SETUP:**

1. Make a prismic repository
2. Make two **Repeatable** Custom Types : 
	- Pages (```pages```)
	- Layouts (```layouts```)
3. Find the JSON editor inside, paste the data below, and save
	- For ```pages``` :  [here](core/prismic/pages.model.json)
	- For ```layouts``` :  [here](core/prismic/layouts.model.json)
4. Begin with creating a document with the ```layouts``` and add a slice children position. 
(this is important as it is a coordinate of where the ```<main>``` tag will be among navbar and footer)
5. Finally you can now create document with ```pages``` and apply the layout made before
6. You can continue further development by doing it per slice basis:
	- Make a slice in prismic (e.g. Hero Landing ```hero-landing```)
	- Make the corresponding Slice document inside components/_slices  (e.g. HeroLanding.tsx)
	- Register the new HeroLanding.tsx in _slicelist.ts (import-export manager)
	- All Good! Code rightaway in HeroLanding.tsx (for example)



Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/)

Or simply short:
Just do 
```npm install```
and then 
```npm run dev```

## Contribute

Fork it first and you're ready to go.
Opened for any improvements or fixes
