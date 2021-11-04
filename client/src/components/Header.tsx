import React from 'react'
import { view } from '@risingstack/react-easy-state'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { countries } from '../stores'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Wrapper = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{marginBottom: '70px'}}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Countries
          </Typography>
          <Button>Countries</Button>
          &nbsp;&middot;&nbsp;
          <Button>Map</Button>
          &nbsp;&middot;&nbsp;
          <Button onClick={countries.openAddSheet}>New Country</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default view(Wrapper)
