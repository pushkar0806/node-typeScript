import * as winston from 'winston';
export const logger: any = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({ filename: 'combined.log' }),
      ],
});
