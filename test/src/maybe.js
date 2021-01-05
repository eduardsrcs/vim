module.exports = Maybe = value => ({
  // map :: (a -> b ) -> Maybe b
  map: fn => Maybe(fn(value)),

  // map :: (a -> b ) -> Maybe b
  ap: mfn => Maybe(mfn.value(value)),  
  get value() {
    return value
  }
})
