# position-tracking


**The use**: It can be used to assist your front-end development. It's simple and fast, you just need to follow the steps below.


Toolkit: Node.js | Express.js | Mocha | Chai | Istanbul

### Requirements ###

* **[Node.js 11.x](http://nodejs.org/en/)** :white_check_mark:
* **[MongoDB v4.0.12](https://www.npmjs.com/)** :white_check_mark:
* **[Npm 6.x](https://www.npmjs.com/)** :white_check_mark:

### Project Installation ###
1 - Install packages:
```console
user:~/position-tracking$ npm install
```
2 - Create MongoDB User:

```console
  use admin
  db.createUser(
    {
      user: "user",
      pwd: "user-password", 
      roles: [ { role: "userAdminAnyDatabase", db: "bookish-sniffle-db" }, "readWriteAnyDatabase" ]
    }
  )
```
3 - Start MongoDB:
```console
user:~/position-tracking$ sudo service mongod start
```
4 - Start api:
```console
user:~/position-tracking$ npm run dev
```
**Option: You can set the port after npm command:**
```console
user:~/position-tracking$ npm run dev 8080
```

### Promotion Routes ###
|   Action            | Required |  Method  | URL
|   ------------------|----------|----------|--------------
|   CREATE PROMOTION  |          | `POST`   | /api/v1/promotional-code/create
|   VALIDATE PROMOTION CODE |          | `POST`   | /api/v1/promotional-code/validate
|   GET MODEL TYPES          |   Auth   | `GET`    | /api/v1/promotional-code/get-model-types

* REQUEST
```
POST /api/v1/promotional-code/create
```
```json
{
  "code": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "isPercent": {
      "type": "Boolean",
      "required": true
  },
  "discount": {
      "type": "Number",
      "required": true
  },
  "expirationDate": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "isActive": {
      "type": "Boolean",
      "required": true
  }
}
```
* RESPONSE
```json
{
  "message": "Promotion code has been created."
}
```

* REQUEST
```
POST /api/v1/promotional-code/validate
```
```json
{
  "code": {
      "type": "String",
      "required": true,
      "enum": []
  }
}
```
* RESPONSE
```json
{
  "message": "Promotional code expired."
},
{
    "message": "Promotional code available."
}
```

* REQUEST
```
GET /api/v1/promotional-code/get-model-types

```
* RESPONSE
```json
{
    "code": {
        "type": "String",
        "required": true,
        "enum": []
    },
    "isPercent": {
        "type": "Boolean",
        "required": true
    },
    "discount": {
        "type": "Number",
        "required": true
    },
    "expirationDate": {
        "type": "String",
        "required": true,
        "enum": []
    },
    "isActive": {
        "type": "Boolean",
        "required": true
    }
}
```


### Driver Routes ###
|   Action            | Required |  Method  | URL
|   ------------------|----------|----------|--------------
|   REGISTER DRIVER   |          | `POST`   | /api/v1/driver/register
|   ADD DRIVER ACCOUNT|          | `POST`   | /api/v1/driver/bank/add-account
|   SET DRIVER LOCATION|         | `POST`   | /api/v1/driver/set-location
|   GET DRIVER LOCATION|         | `GET`    | /api/v1/driver/get-location
|   GET MODEL TYPES    |         | `GET`    | /api/v1/driver/get-model-types

* REQUEST
```
POST /api/v1/driver/register
```
```json
{
  "name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "vehicle": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "bank_accounts": {
      "type": "Array",
      "required": false
  },
  "isAvailable": {
      "type": "Boolean",
      "required": false
  },
  "location.lat": {
      "type": "Number",
      "required": true
  },
  "location.lng": {
      "type": "Number",
      "required": true
  },
  "routes": {
      "type": "Array",
      "required": false
  },
  "current_route": {
      "type": {
          "driver_id": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "vehicle": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "date": {
              "type": "Date",
              "required": true
          },
          "locations": {
              "type": "Array",
              "required": false
          }
      },
      "required": false
  }
}
```
* RESPONSE
```json
{
  "message": "Driver has been registered."
}
```

* REQUEST
```
POST /api/v1/driver/bank/add-account
```
```json
{
	"driver_name": {
    "type": "String",
    "required": true,
  },
	"bank_account": {
		"name": {
      "type": "String",
      "required": true,
    },
		"routing_number": {
      "type": "String",
      "required": true,
    },
		"account_number": {
      "type": "String",
      "required": true,
    },
		"tax_information": {
      "type": "String",
      "required": true,
      "enum": ["Tax0", "Tax1", "Tax2", "Tax3"]
    }
	}
}
```
* RESPONSE
```json
{
  "message": "Bank account added."
}
```

* REQUEST
```
POST /api/v1/driver/set-location
```
```json
{
	"id": {
    "type": "OjectID",
    "required": true,
  },
	"lat": {
    "type": "Number",
    "required": true,
  },
	"lng": {
    "type": "Number",
    "required": true,
  }
}
```
* RESPONSE
```json
{
  "lat": {
    "type": "Number",
    "required": true,
  },
	"lng": {
    "type": "Number",
    "required": true,
  }
}
```

* REQUEST
```
POST /api/v1/driver/get-location
```
```json
{
	"id": {
    "type": "OjectID",
    "required": true,
  }
}
```
* RESPONSE
```json
{
  "lat": {
    "type": "Number",
    "required": true,
  },
	"lng": {
    "type": "Number",
    "required": true,
  }
}
```

* REQUEST
```
GET /api/v1/driver/get-model-types
```
* RESPONSE
```json
{
  "name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "vehicle": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "bank_accounts": {
      "type": "Array",
      "required": false
  },
  "isAvailable": {
      "type": "Boolean",
      "required": false
  },
  "location.lat": {
      "type": "Number",
      "required": true
  },
  "location.lng": {
      "type": "Number",
      "required": true
  },
  "routes": {
      "type": "Array",
      "required": false
  },
  "current_route": {
      "type": {
          "driver_id": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "vehicle": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "date": {
              "type": "Date",
              "required": true
          },
          "locations": {
              "type": "Array",
              "required": false
          }
      },
      "required": false
  }
}
```

### Order Routes ###
|   Action            | Required |  Method  | URL
|   ------------------|----------|----------|--------------
|   CREATE ORDER      |          | `POST`   | /api/v1/order/create
|   GET MODEL TYPES   |          | `GET`    | /api/v1/order/get-model-types

* REQUEST
```
POST /api/v1/order/create
```
```json
{
  "plate.name": {
      "type": "Array",
      "required": true
  },
  "plate.price": {
      "type": "Number",
      "required": true
  },
  "destiny": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "chief.name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "chief.location": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "driver.name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "driver.vehicle": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "code": {
      "type": {
          "code": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "isPercent": {
              "type": "Boolean",
              "required": true
          },
          "discount": {
              "type": "Number",
              "required": true
          },
          "expirationDate": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "isActive": {
              "type": "Boolean",
              "required": true
          }
      },
      "required": false
  }
}
```
* RESPONSE
```json
{
  "message": "Order has been created.",
  "finalPrice": 10.5
}   
```
* REQUEST
```
GET /api/v1/order/get-model-types
```
* RESPONSE
```json
{
  "plate.name": {
      "type": "Array",
      "required": true
  },
  "plate.price": {
      "type": "Number",
      "required": true
  },
  "destiny": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "chief.name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "chief.location": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "driver.name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "driver.vehicle": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "code": {
      "type": {
          "code": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "isPercent": {
              "type": "Boolean",
              "required": true
          },
          "discount": {
              "type": "Number",
              "required": true
          },
          "expirationDate": {
              "type": "String",
              "required": true,
              "enum": []
          },
          "isActive": {
              "type": "Boolean",
              "required": true
          }
      },
      "required": false
  }
}
```

### Chief Routes ###
|   Action            | Required |  Method  | URL
|   ------------------|----------|----------|--------------
|   GET MODEL TYPES   |          | `GET`    | /api/v1/chief/get-model-types

* REQUEST
```
GET /api/v1/chief/get-model-types
```
* RESPONSE
```json
{
  "name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "plates": {
      "type": "Array",
      "required": false
  },
  "location": {
      "type": "String",
      "required": true,
      "enum": []
  }
}
```

### Plate Routes ###
|   Action            | Required |  Method  | URL
|   ------------------|----------|----------|--------------
|   GET MODEL TYPES   |          | `GET`    | /api/v1/plate/get-model-types

* REQUEST
```
GET /api/v1/plate/get-model-types
```
* RESPONSE
```json
{
  "name": {
      "type": "String",
      "required": true,
      "enum": []
  },
  "price": {
      "type": "Number",
      "required": false
  }
}
```

### Authors

* Thiago Luiz Pereira Nunes ([ThiagoLuizNunes](https://github.com/ThiagoLuizNunes)) thiagoluiz.dev@gmail.com

>Created By **[ThiagoLuizNunes](https://www.linkedin.com/in/thiago-luiz-507483112/)** 2019.

---
