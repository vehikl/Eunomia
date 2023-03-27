# Eunomia

## MVP
Simple voting app, that needs NO account, can hand link to users, and they
can vote in FPTP anonymously. 

New voting sessions can be dynamically created using a unique URL.

i.e. going to `eunomia.io/snickers` will start a new session, treating the
`/snickers` portion of the url as a unique identifier. Any options and the
results of voting will be stored under this url for a currently undefined
period of time.

There are no accounts or verification necessary to access any given url; 
someone can create a new session, share that link, and anyone can add options
and start/stop voting as they please. In the future, it might be worth
verifying that only one vote can be given to each person (verifying via a
cookie or something?).

## Todo

### - Setup Laravel Backend

Simple backend necessary to store the voting results long term.

### - Investigate Socket Connection

For updates on the voting state itself, we'll likely need to use some sort of
socket connection to update the voting options, results, and phase on each of
the users' machines. Looking into the mobtime implementation will help with this.

Look into:

[laravel-websockets](https://freek.dev/1228-introducing-laravel-websockets-an-easy-to-use-websocket-server-implemented-in-php)

[laravel-echo](https://www.npmjs.com/package/laravel-echo)