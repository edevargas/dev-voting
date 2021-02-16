# Dev Voting

This is a **JAMStack** project made in **NextJS** in order to test some concepts.
	

> If you want to **test** this application, go to
> https://dev-voting.vercel.app/ 	
> The credentials to **log in** are:
> 	username: **edevargas** 
> password: **111111**

	

# Glosary
	User: registered user
	Person: Famous person you can vote for
	JAMStack: Javascript API Markup

# Summary

- A registered user can vote a maximum of 3 times for one person 
- An unregistered person cannot vote.
- An API is exposed in */api* route. This API have the endpoints to make request about users (users registered), people (famous) and authentication.
- User votes are stored in the localstorage
- An user can log in and log out

# Project Structure

+ **components**
    + *Forms*: Some utilities for forms
    + *Home*: Components for Home page
    + *layouts*: reusable or common layouts
    + *LoginForm*: Login Form
    + *ui* : Custom UI components
+ **database**
    * *data*: dummy data for this example
    * *people*.ts: Methods that simulate calls to a REST service for people
    * *user*.ts: Methods that simulate calls to a REST service for users
+ **hooks**: common hooks
+ **pages**:
	+ *api/* Here are the services exposed for request about people, users and authentication
	+ *login/* This is the Login page with custom styles and separate state
	+ *index.page.tsx*: This is the Home page
+ **public**
	+ *images*: common images
+ **styles**
	+ *theme.tsx*: theme configuration
+ **util**: some utils functions

## why this approach?

>  Static is the new Dynamic
>  Guillermo Rach
>  
 -   Static is  **globally fast**. When you deploy, we can  _hoist_  all your static assets to a global CDN network. By removing the server from the equation, we can also maximize availability by reducing and even altogether eliminating cache misses.
-   Static is  **consistently fast**. It gives you "O(1)  [TTFB](https://en.wikipedia.org/wiki/Time_to_first_byte)", which is a fancy way of saying you get stable and predictable latency to the first byte of the screen. Always, because no code, servers, sockets, or databases are involved.
-   Static is  **always online**. This should  [not be surprising](https://twitter.com/rauchg/status/1210294503216578560), but servers frequently go down and  [involve complex rollout schemes](https://kccncna19.sched.com/event/Uads/the-gotchas-of-zero-downtime-traffic-w-kubernetes-leigh-capili-weaveworks)[[1]](https://rauchg.com/2020/2019-in-review#f1), while static files are trivially cacheable and simple to serve. The odds of you getting paged during the holidays because a "static asset can't be served from a CDN" are basically zero.
-   **Static Site Generation (SSG)**  can be thought of moving around the servers and taking them away from the hot path. Instead of putting a server in between the user's request and the response, we compute the response ahead of time.  
      
    This subtle shift pays back handsomely. One, anything that could go wrong, goes wrong at build time, maximizing  **availability**. Two, we compute once and re-use, minimizing  **database or API load**. Three, the resulting static HTML is  **fast**.
-   **Client-side  JS and  APIs**  that get executed later, once the static markup and code is downloaded and executed, allow for effectively infinite dynamism.  
      
    Pre-computing all pages is not always possible[[2]](https://rauchg.com/2020/2019-in-review#f2), nor desirable. For example, when dealing with data that is  _not_  shared between all users and we wouldn't want to cache at the edge[[3]](https://rauchg.com/2020/2019-in-review#f3).


Next.js is a comprehensive, hybrid framework, supporting the full spectrum of JAMstack with a  _per-page granularity_.

ROLE PROVIDED BY
+ J Client-side JS injected via React Hooks (state, event listeners, effects)

+ A API pages inside the  `pages/api`  directory.

+ M Pages with no data dependencies (like the simple example above) or pages with static data deps that trigger build-time static site generation.

>  Information extracted from.
[2019 in Review (rauchg.com)](https://rauchg.com/2020/2019-in-review#static-is-the-new-dynamic)
