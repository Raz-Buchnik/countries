import { Request, Response, NextFunction } from 'express'
import defaultLang from '../app/locales/en-US/translations.json'

//**********************************************************************************
// Descripition - MUST READ:
//**********************************************************************************

// Every request to the server is handled in the requested language sent by the applicant;
// as long as the language exists.
// The default is English: or en-US.
// Request language is sent via accept-language request header.
// for example: accept-language: he-IL, or en-US.
// Browsers ussualy detect the user's current locale via the navigator.language,
// unless configured different.
// Use case example: req.t['Hello'] will print Hello in the desired language.

// Define (and export) the Translation type
export type Translation = typeof defaultLang

// adds the "t" to the Express request object interface
// so TS will predict us when using req.t
declare global {
  namespace Express {
    export interface Request {
      t: Translation;
    }
  }
}

// The Express middleware
export const localeMiddleware = (localeHandler: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    // get accept language: he-IL, en-US ...etc
    const accept_language = req.headers['accept-language']
  
    // import the language object and assign to req.t
    req.t = await localeHandler(accept_language)
  
    next()
  
  }
}

// We try to import the desired language,
// if doesn't exist we take the default which is English (en-US).
export const localeHandler = async (accept_language: string): Promise<Translation> => {
  try {
    const { default: translations } = await import(`../app/locales/${accept_language}/translations.json`)
    return translations
  } catch (err) {
    const { default: translations } = await import(`../app/locales/en-US/translations.json`)
    return translations
  }
}