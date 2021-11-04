# Backend Assessment Elemes.id

Dibuat sebagai test pelamaran kerja dari Elemes.id. Project ini menggunakan JWT dengan refresh token dan access token. Selain itu, project ini sudah di-deploy di Heroku.

## Quick Start

Clone dulu repository ini, pada kali ini saya menggunakan `yarn`.

```bash
git clone https://github.com/idahdam/backend-elemes-assessment.git
```

lalu

```bash
yarn install
```

dan

```bash
yarn run dev
```

## Table of Contents

- [Features](#features)
- [Endpoint](#endpoint)
- [Environment Variables](#environment-variables)
- [Heroku Deployment Link](#heroku-deployment-link)
- [Misc](#misc)

## Features

- **Admin Endpoint**: CRUD Course, Delete user, Get statistics
- **User Endpoint**: Register, Get course, Get Detail course, sort course

## Endpoint

- **Auth Endpoint**
  `POST /v1/auth/register` - register\
  `POST /v1/auth/login` - login\
  `POST /v1/auth/refresh-tokens` - refresh auth tokens\
  `POST /v1/auth/forgot-password` - send reset password email\
  `POST /v1/auth/reset-password` - reset password\
  `POST /v1/auth/send-verification-email` - send verification email\
  `POST /v1/auth/verify-email` - verify email

- **Admin Endpoint**
  `GET /v1/course` - get courses\
  `GET /v1/category` - get categories\
  `GET /v1/course/:courseId` - get courses by Id\
  `GET /v1/category/:categoryId` - get categories\
  `GET /v1/category/all/statistics` - get course statistics\
  `GET /v1/category/:categoryId` - get categories\
  `GET /v1/course/sort/:base` - get sorted course, 1 (desc), -1 (asc), free (free)\
  `GET /v1/course/search/:search` - get search course, 1 (desc), -1 (asc), free (free)\
  `POST /v1/course` - create course\
  `POST /v1/upload/:courseId` - upload photo by courseId\
  `POST /v1/category` - create category\
  `PUT /v1/course/:courseId` - update courses by Id\
  `DELETE /v1/course/:courseId` - delete course by Id\
  `DELETE /v1/category/:categoryId` - delete category by Id\

- **User Endpoint**
  `GET /v1/course` - get courses\
  `GET /v1/category` - get categories\
  `GET /v1/course/:courseId` - get courses by Id\
  `GET /v1/category/:categoryId` - get categories\
  `GET /v1/category/:categoryId` - get categories\
  `GET /v1/course/sort/:base` - get sorted course, 1 (desc), -1 (asc), free (free)\
  `GET /v1/course/search/:search` - get search course, 1 (desc), -1 (asc), free (free)\

## Environment Variables

.env akan diberikan dalam bentuk lampiran dalam email.

## Heroku Deployment Link

Project ini sudah dideploy di heroku dengan link: https://backend-elemes-test.herokuapp.com/

## Misc

1. Akun yang digunakan (Admin dan User) dilampirkan dalam email
2. Cloudinary digunakan sebagai bucket untuk image.

Atas perhatiannya, saya ucapkan. Terima kasih.
