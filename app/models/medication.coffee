class Medication
  constructor: (@name, @desc) ->

  privateMethod = (test) =>
    test++

  publicMethod: (test) ->
    test--