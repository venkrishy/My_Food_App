migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6mr9cfqmgasmf15");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6mr9cfqmgasmf15",
    "created": "2023-04-21 19:16:57.132Z",
    "updated": "2023-04-21 20:07:47.189Z",
    "name": "myapp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ndmrcggs",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
