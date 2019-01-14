import app from "./app";
import * as winston from 'winston';

const PORT = 3000;

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
      ]
})

app.listen(PORT, () => {
    logger.info("Express server listening on port check " + PORT);
});
