//oak is a popular http middleware
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
//import { router } from "./routes.ts";

const env = Deno.env.toObject()
const PORT = env.PORT || 4200
const HOST = env.HOST || '127.0.0.1'

const router = new Router()

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}...`)

await app.listen(`${HOST}:${PORT}`)

//start server by typing the below in the command line:
//deno run --allow-net --allow-env server.ts
