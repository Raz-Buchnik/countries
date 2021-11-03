import express, { Request, Response, NextFunction } from 'express'
import { CastSuccess } from 'razaviv-common'
import { Country } from 'razaviv-countries-common'
import { create } from '../../services'

const createController = express.Router()

createController.post('/', async (req: Request<any, any, Country>, res: Response, next: NextFunction) => {
  try {
    
    res.json(
      new CastSuccess({
        data: await create({
          country_data: req.body,
          meta: {
            iat: new Date()
          }
        })
      })
    )

  } catch (err) {
    next(err)
  }
})

export { createController }
