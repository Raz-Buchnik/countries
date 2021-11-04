import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { Button, Grid, List, ListItem, TextField } from '@material-ui/core'
import { countries } from '../stores'
import { Header } from './'
import { CountryEntity } from 'razaviv-countries-common'

const MainWrapper = () => {

  const changed = e => {
    const { name, value } = e.target
    if (name !== 'coord') {
      return countries.forms.create[name] = value
    }
    const [lat, lng] = value.split(",")
    countries.forms.create['coord'] = {
      lat,
      lng
    }
  }

  const saved = async () => {
    try {
      await countries.create()
    } catch (err) {
      console.log(`[err]:`, err)
    }
  }

  useEffect(() => {
    (async () => {
      await countries.fetch()
    })()
  }, [])

  return !countries.loading ? (
    <React.Fragment>
      <Grid container spacing={3}>
        <Header />

        a<br /> 
        <Grid item xs={12}>
          <TextField
            name="name"
            label="country name"
            variant="outlined"
            onChange={changed}
          />
          <TextField
            name="code"
            label="country code"
            variant="outlined"
            onChange={changed}
          />
          <TextField
            name="flag"
            label="country flag"
            variant="outlined"
            onChange={changed}
          />
          <TextField
            name="coord"
            label="country coord"
            variant="outlined"
            onChange={changed}
          />
          <Button
            variant="outlined"
            onClick={saved}>
            Save
          </Button>
        </Grid>

        <Grid item xs={12}>
          <List>
            {
              countries.data.map((country: CountryEntity, index: number) => {
                return (
                  <ListItem key={index}>
                    { country.name }&nbsp;&nbsp;
                    { country.code }&nbsp;&nbsp;
                    { country.flag }&nbsp;&nbsp;
                    { country.coord.lat }&nbsp;&nbsp;
                    { country.coord.lng }
                  </ListItem>
                )
              })
            }
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  ) : (
    <h1>
      Loading...
    </h1>
  )
}

export default view(MainWrapper)
