import { describe, it } from "node:test";
import assert from "node:assert";
import { toTitleCase } from "./toTitleCase.js";

describe('toTitleCase()', () => {
  
  it('Mot en minuscules', () => {
    const result = toTitleCase("oclock");
    assert.equal(result, "Oclock");
  });

  it('Mot avec des majuscules, minuscules et caractères spéciaux', () => {
    const result = toTitleCase("oCL0ck!");
    assert.equal(result, "Ocl0ck!");
  });

  it('Chaîne vide', () => {
    const result = toTitleCase("");
    assert.equal(result, "");
  });

  it('Phrase avec plusieurs mots', () => {
    const result = toTitleCase("Hello world");
    assert.equal(result, "Hello World");
  });

  it('Mots en majuscules', () => {
    const result = toTitleCase("BONJOUR MONDE");
    assert.equal(result, "Bonjour Monde");
  });

  it('Phrase avec caractères spéciaux', () => {
    const result = toTitleCase("Mais qu'est-ce qu'il se passe ici ?");
    assert.equal(result, "Mais Qu'est-ce Qu'il Se Passe Ici ?");
  });
});
