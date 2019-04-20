import { Logger } from '@Config/Logging';
import * as express from 'express';
import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';

export const ErrorMessage = {
  INCORRECT_ARGUMENTS: 'You must supply all relevant arguments',
  DATABASE_ERROR: 'An error occurred with the database',
  EMAIL_ERROR: 'An error occurred with the email server',
  PERMISSION_ERROR: 'You do not have permission to perform that action',
  S3_ERROR: 'There was an error with the resume server',
  NO_ALIAS_EXISTS: 'Could not find event by that alias',
  NO_USER_EXISTS: 'Could not find a user by that identifier',
  NOT_ORGANISER: 'You are not an organiser of this event',
  NOT_SPONSOR: 'You are not a sponsor of this event',
  PHONE_NUMBER_INVALID: 'Your phone number must be exactly 10 digits',
  EMAIL_IN_USE: 'This email has already been used',
  USER_NOT_REGISTERED: 'This user is not registered for this event',
  USER_ALREADY_REGISTERED: 'This account has already registered for this '+
    'event',
  RESUME_UPDATE_ERROR: 'There was an error updating your resume',
  NO_STATUS_SENT: 'There was no status sent in the request',
  INSTITUTION_NOT_PROVIDED: 'You must provide a University or High School',
  INVALID_QUESTION_TYPE: 'The question type you provided is not supported',
  UNKNOWN_ERROR: 'Failed due to unknown error',
};

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: Error, request: express.Request, response: express.Response, next: (err?: any) => any) {
    Logger.error(error);
    next();
  }
}
