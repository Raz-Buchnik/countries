import React from 'react'
import { view } from '@risingstack/react-easy-state'
import { Box, Modal, Typography } from '@material-ui/core'
import { countries } from '../stores'

const AddCountry = () => {

  return (
    <Modal
      open={countries.add_sheet_opened}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        <Box>
          <Typography>
            Hello World
          </Typography>
        </Box>
    </Modal>
  )
}

export default view(AddCountry)
