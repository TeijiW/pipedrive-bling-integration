# Pipedrive-Bling-Integration

### A Rest API to insert Pipedrive deals as orders on Bling

## Tips

-   Is mandatory set `MONGO_URL`, `BLING_KEY` and `PIPEDRIVE_KEY` on `.env` file (See `.env-example` file)
-   This API will insert only **deals with products**

## Routes

### **GET** `/opportunity`

Return all inserted opportunities

Response example

```json
[
    {
        "_id": "5f71e25e00260cf88b9fe00c",
        "total_value": 13675,
        "date": "2020-09-28"
    }
]
```

### **GET** `/sync`

Executes the "Sync" function, this function will insert all Pipedrive **deals with products** as orders on Bling

Response example

```json
{
    "message": "all deals were synchronized"
}
```
