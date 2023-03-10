# Lionode
Lionode includes everything you need to create a fully functional API server. So stop wasting hours downloading and assembling hundreds of packages — Use Lionode and be Lion from day one.

## Install
To run this project, install it locally using npm:
```
mkdir demo
cd demo
npm init -y
npm install lionode
mv node_modules/lionode/* ./
nodemon
```
## Usage
- Run node artisan to create controllers and models.
- Register your route in routes.

## List of supported relations
- hasOne
- belongsTo
- hasMany
- belongsToMany

## List of all functions
### Models
- .get([options]) → Promise<Collection>
- .first([options]) → Promise<Model>
- .select(columns) → model (this) / function is chainable
Knex where statements (see the Where statements section)
- .orderBy(column, [direction]) → model (this) / function is chainable Knex docs for orderBy
- .orderByRaw(sql) → model (this) / function is chainable Knex docs for orderByRaw
- .offset(value) / .skip → model (this) / function is chainable Knex docs for offset
- .limit(value) / .take → model (this) / function is chainable Knex docs for limit
- .with(withRelated, [signleRelationSubquery]) → model (this) / function is chainable
- .withSelect(relationName, columns, [subquery]) → model (this) / function is chainable
- .withCount(withRelated, [signleRelationSubquery]) → model (this) / function is chainable
- .has(relationName, [operator], [operand1], [operand2]) / .orHas → model (this) / function is chainable
 -.where(~mixed~) / .orWhere → model (this) / function is chainable (nested where support)
- .whereHas(relationName, [subquery], [operator], [operand1], [operand2]) / .orWhereHas → model (this) / function is chainable
- .destroyAll([options]) / .deleteAll → Promise<Model>
- .withDeleted() / .withTrashed → model (this) / function is chainable
- .fakeSync([options]) → Promise<Sync>
- .buildQuery([options]) → Promise<Sync>
- .useTableAlias(alias) → model (this) / function is chainable
Collection
- .add(data, [options]) → model | collection (this) / function is chainable
- .addMemo(data, [options]) → model | collection (this) / function is chainable
- .insert([ignoreDuplicates = false]) → Promise<collection> (Promise<this>)
- .insertBy(uniqueColumns, [selectColumns]) → Promise<collection> (Promise<this>)
- .replace() → Promise<collection> (Promise<this>)

# sportsdpl11
