## GraphQL & REST API & Nest.js & Clerk template

This repo contains both graphQL and REST API integrations. For use delete one of them.

Using graphQL
- Move current-user.decorator.ts and stop.service.ts to graphql-stop module
- Delete stop module

Using REST API
- In file current-user.decorator.ts delete line 7 and comment next line in
- In file app.module.ts comment lines 26-32 in
- Delete graphql-stop module