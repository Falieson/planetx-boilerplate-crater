Counter
======

Increment - Decrement
---------------------
dispatch("PX/COUNTER/INCREMENT")
  .throttle(250)
  .then() => dispatch("PX/COUNTER/UPDATE/ATTEMPT")
    .success() => dispatch("PX/COUNTER/UPDATE/SUCCESS")
    .catch() => dispatch("PX/COUNTER/UPDATE/ERROR")
