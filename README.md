# portfolio-visualizer-vue-app
Portfolio Visualizer Web Application

## Development Set Up

#Steps
1. Install [Docker Compose](https://docs.docker.com/compose/install/) (Windows might just install Docker for Windows in its entirety)
2. Clone this repository `git clone https://github.com/jbuibuicactus/portfolio-visualizer-vue-app.git`
3. run `docker-compose build`
    - Should see some indication that the build completed successfully
4. run `docker-compose up` to start the application
    - Logs should be displayed, should see 3 services being deployed `db, api, and client`. Messages should be attached indicating all 3 services are running on ports `5432, 7070, 8080` respectively. 
    - In another shell, should see 3 containers running when you run `docker ps`
5. `Ctrl + c` should shut down development and `docker-compose down` will destroy the networks and containers. Just run `docker-compose up` again when wishing to redeploy. 
