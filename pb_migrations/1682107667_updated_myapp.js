migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6mr9cfqmgasmf15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xh5asmfe",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6mr9cfqmgasmf15")

  // remove
  collection.schema.removeField("xh5asmfe")

  return dao.saveCollection(collection)
})
