# decisions.md

> This document tracks design decisions and rationale for PitHub.

## Design Principles

* Simplicity first
* Scalability
* Separation of concerns

## Key Decisions

* Use Firebase for backend services
* Use React for frontend
* Use class-based content structure

## Implementation Log

### [Date] Decision Title

* Context:
* Decision:
* Reasoning:
* Tradeoffs:

---

## Notes

* Keep entries concise
* Update continuously

# !!! We should add whatever we work on here after we finish it. Like keep track of what user story we finished

For example:
### Kevin Dacanay - 4/8/26 - RC-004 
*- I implemented the login User API endpoints using Node.js to encapsulate the core user logic on the server side. I created GET and POST requests for userIDs so that usess can be retrieved from the database and new users can be registered efficiently. The GET endpoint lets the app fetch user details based on a unique identifier to make sure that client-side components can access up-to-date user information when needed. The POST endpoint handles user creation by validating incoming data, securely storing credentials, and returning appropriate success or error responses*