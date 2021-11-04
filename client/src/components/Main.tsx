import React, { useEffect } from 'react'
import { view } from '@risingstack/react-easy-state'
import { Grid, List, ListItem } from '@material-ui/core'
import { countries } from '../stores'
import { Header, AddCountry } from './'
import { CountryEntity } from 'razaviv-countries-common'

const MainWrapper = () => {

  useEffect(() => {
    (async () => {
      await countries.fetch()
    })()
  }, [])

  return !countries.loading ? (
    <React.Fragment>
      <Grid container spacing={3}>
        <Header />
        <Grid item xs={12} style={{marginTop: '70px'}}>
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

      <AddCountry />
    </React.Fragment>
  ) : (
    <h1>
      Loading...
    </h1>
  )
}

export default view(MainWrapper)
