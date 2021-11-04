interface Params {
  date?: Date,
  locale?: string
}

export default ({
  date = new Date(),
  locale = 'he-IL'
}: Params) : string => {

  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long'
  })
  
}