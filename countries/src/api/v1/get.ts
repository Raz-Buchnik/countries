import express, { Request, Response, NextFunction } from 'express'
import { CastSuccess } from 'razaviv-common'
import { get } from '../../services'

const getController = express.Router()

getController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    res.json(
      new CastSuccess(
        await get()
      )
    )

  } catch (err) {
    next(err)
  }
})

export { getController }
