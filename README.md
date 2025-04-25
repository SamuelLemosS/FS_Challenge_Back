# FS_Challenge_Back

## Project setup
```
npm install
```
generate a Node.js Service Account Key ussing Firestrore. \
Rename key for serviceAccountKey.json and to place in root folder

### Compile the code
```
npm run build
```
### Run the code
```
npm run start
```
# Routes

## FindAll
method: Get \
path: /product

## Create
method: Post \
path: /product\
body(obligatorily):\
{
    "name":string,
    "price":number,
    "description":string
}

## Update
method: Put \
path: /product/:id

## Delete
method: Delete \
path: /product/:id

# Libraries
z, Router, cors, Firestore
