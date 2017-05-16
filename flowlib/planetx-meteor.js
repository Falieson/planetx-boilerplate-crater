declare module 'planetx-meteor' {
  /* Meteor Collections.Insert */
  declare type Insert = string

  /* Meteor Collections.Update */
  declare type numberAffected = number
  declare type Update = number
  /* Meteor Collections.Upsert */
  declare type Upsert = {|
    numberAffected: number,
    insertedId: string
  |}
}
