const dbconnect = require('./connection');

var db = dbconnect.getDb();

// Build our indexes before we do any inserts
module.exports = {
    buildIndexes: function () {
        console.log('Building database indexes')
        try {
            db.collection('abilityScores').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('alignments').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('backgrounds').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('classes').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('conditions').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('damageTypes').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('equipment').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('equipmentCategories').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('feats').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('features').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('languages').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('levels').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('magicItems').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('magicSchools').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('monsters').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('proficiencies').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('races').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('rules').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('ruleSections').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('skills').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('spells').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('subclasses').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('subraces').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('traits').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists

        try {
            db.collection('weaponProperties').createIndex({"index":1},{ unique: true } );
        } catch (e) { } // Index already exists
        console.log('Finished building database indexes')
    }
}