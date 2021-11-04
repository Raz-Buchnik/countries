import express, { Request, Response, NextFunction } from 'express'
import { CastSuccess } from 'razaviv-common'
import { Country } from 'razaviv-countries-common'
import { update } from '../../services'
import { ObjectId } from 'mongodb'

const updateController = express.Router()

updateController.patch('/:_country', async (req: Request<{ _country: ObjectId }, any, Country>, res: Response, next: NextFunction) => {
  try {
    
    res.json(
      new CastSuccess(
        await update({
          country_data: req.body,
          _country: req.params._country
        })
      )
    )

  } catch (err) {
    next(err)
  }
})

export { updateController }
