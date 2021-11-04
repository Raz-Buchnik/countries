interface Params {
  date?: Date
}

export default ({
  date = new Date()
}: Params) : string => {

  let d = new Date(date)

  let hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
  let minute = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()

  return `${hour}:${minute}`
  
}