<h1 align=center>noSql</h1>

# (installation)
- complete installation of mongodb compass

# (database creation)
- create database in mongodb compass
<h3 align= center>or</h3>

```sh

    use databaseName
```

# (CREATE COLLECTION (table))

```sh
    db.createCollection("tableName")

```

# (Update table)

```sh
    db.databaseName.updateOne({value1:"findBY"}, {$set:{valueChange:"ghsghgwxg"}})

```


 Base NOSQL:
 - Sont orientées documents JSON et pas normalisées.
 - Type: String, Integer, Float, Boolean, Date, Object, Array
 Avantages NOSQL
 Plus flexible que les base de données SQL. (LEs document ne sont pas obligé d'avoir tous les meme clé).
 Plus facile a utiliser.

 Operations:
 Créer une base de données: use nomDB
 Créer une collection db.createCollection("nom_collection")
 1. Créer des documents: db.collection.insert({champ:valeur})
 2. Mettre aa jour des documents: db.collection.updateOne ou db.collection.updateMany
 3. Lire un ou plusieurs document: db.collection.find().
 4. Supprimer un ou plusieur document: db.collection.deleteOne ou db.collection.Many
 Opérateurs:
 1. Comparaisons:
    1.1 $eq: Tester si une valeur est égale,
    1.2 $ne: Tester si une valeur n'est pas égale,
    1.3 $lte: Tester si une valeur (nombre) est inferieure ou égale
    1.4 $gte: Tester si une valeur (nombre) est inferieure ou égale,
 2. Logique: $and, $or
 3. Regex: $regex (Pour tester du texte avec des expression régulière)
 4. Element: $exists pour tester si un champ existe ou pas
 5. Tableau:
    5.1 $in: Tester si une de valeur est presente dans le tableau
    5.2 $nin: Tester si une de valeur est absente dans le tableau
    5.3 $all: Tester si toutes les valeurs sont présente dans le tableau
    5.4 $size: Tester si le tableau a une certaine taille.