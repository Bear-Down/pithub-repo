
# database.md

> This document describes the data model, storage structure, and relationships within PitHub.

## Overview

Firestore NoSQL database with collections. Since we are using NoSQL, we don't really need a detailed schema.

## Collections

### Users

```
{
  id,
  name,
  email,
  visibility,
  createdAt
}
```

### Classes

```
{
  id,
  ownerId,
  className,
  professorName,
  description,
  visibility,
  createdAt
}
```

### Videos

```
{
  id,
  classId,
  uploaderId,
  title,
  description (optional),
  videoUrl (which will be used to get video from firebase storage),
  thumbnailUrl,
  visibility,
  originalDate,
  createdAt
}

```

### Stars

```
{
  id,
  userId,
  targetType (class, video, user),
  targetId
}
```

## Notes

* We should use references to videos instead of embedding vidoes itself since they are big files
* Optimize queries and database schema for reads

