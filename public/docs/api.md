# api.md

> This document defines the API structure of PitHub and provides a complete, extensible map of all REST endpoints.

## Base URL

```
/api/v1
```

## Structure Principles

* RESTful design
* Resource-based routing
* Versioned endpoints
* Consistent request/response format

## Standard Response Format

```
{
  success: boolean,
  data: any,
  error: string | null
}
```

---

## User Endpoints

* GET /users/:id
* GET /users/:id/classes
* PATCH /users/:id

## Class Endpoints

* POST /classes
* GET /classes/:id
* GET /classes
* PATCH /classes/:id
* DELETE /classes/:id

## Video Endpoints

* POST /videos
* GET /videos/:id
* GET /classes/:id/videos
* DELETE /videos/:id

## Star Endpoints

* POST /stars
* DELETE /stars/:id
* GET /users/:id/stars

## Search Endpoints

* GET /search?q=

## Future Expansion

* /documents
* /notes
* /study group finder
