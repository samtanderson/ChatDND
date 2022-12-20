const indexes = require('./indexes');
const abilityScores = require('../collections/abilityScores');
const alignments = require('../collections/alignments');
const backgrounds = require('../collections/backgrounds');
const classes = require('../collections/classes');
const conditions = require('../collections/conditions');
const damageTypes = require('../collections/damageTypes');
const equipment = require('../collections/equipment');
const equipmentCategories = require('../collections/equipmentCategories');
const feats = require('../collections/feats');
const features = require('../collections/features');
const languages = require('../collections/languages');
const levels = require('../collections/levels');
const magicItems = require('../collections/magicItems');
const magicSchools = require('../collections/magicSchools');
const monsters = require('../collections/monsters');
const proficiencies = require('../collections/proficiencies');
const races = require('../collections/races');
const rules = require('../collections/rules');
const ruleSections = require('../collections/ruleSections');
const skills = require('../collections/skills');
const spells = require('../collections/spells');
const subclasses = require('../collections/subclasses');
const subraces = require('../collections/subraces');
const traits = require('../collections/traits');
const weaponProperties = require('../collections/weaponProperties');

// We need a way to make sure this runs before all the other updates
// For now, commenting them out in bulk for the first run works well enough
indexes.buildIndexes( function(err, clt) {
    if (err) console.log(err);
    console.log('Finished building database indexes')

    abilityScores.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Ability Score Update')
    });

    alignments.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Alignments Update')
    });

    backgrounds.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Backgrounds Update')
    });

    classes.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Classes Update')
    });

    conditions.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Conditions Update')
    });

    damageTypes.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Damage Types Update')
    });

    equipment.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Equipment Update')
    });

    equipmentCategories.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Equipment Categories Update')
    });

    feats.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Feats Update')
    });

    features.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Features Update')
    });

    languages.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Languages Update')
    });
    
    levels.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Levels Update')
    });

    magicItems.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Magic Items Update')
    });

    magicSchools.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Magic Schools Update')
    });

    monsters.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Monsters Update')
    });

    proficiencies.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Proficiencies Update')
    });

    races.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Races Update')
    });

    rules.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Rules Update')
    });

    ruleSections.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Rule Sections Update')
    });

    skills.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Skills Update')
    });

    spells.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Spells Update')
    });

    subclasses.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Subclasses Update')
    });

    subraces.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Subraces Update')
    });

    traits.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Traits Update')
    });

    weaponProperties.Request( function(err, clt) {
        if (err) console.log(err);
        console.log('Finshed Weapon Properties Update')
    });
}); 
