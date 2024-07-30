import { describe, it } from "node:test";
import assert from "node:assert";
import { computeStrength } from "./game.js";

describe('computeStrength()', () => {
  it('devrait retourner 1 pour le niveau 1', () => {
    const result = computeStrength(1);
    assert.equal(result, 1);
  });

  it('devrait retourner 50 pour le niveau 50', () => {
    const result = computeStrength(50);
    assert.equal(result, 50);
  });

  it('devrait retourner 50 pour le niveau 51', () => {
    const result = computeStrength(51);
    assert.equal(result, 50);
  });

  it('devrait retourner 51 pour le niveau 52', () => {
    const result = computeStrength(52);
    assert.equal(result, 51);
  });

  it('devrait retourner 75 pour le niveau 100', () => {
    const result = computeStrength(100);
    assert.equal(result, 75);
  });

  it('devrait retourner 75 pour le niveau 101', () => {
    const result = computeStrength(101);
    assert.equal(result, 75);
  });

  it('devrait retourner 108 pour le niveau 200', () => {
    const result = computeStrength(200);
    assert.equal(result, 108);
  });

  it('devrait retourner 108 pour le niveau 201', () => {
    const result = computeStrength(201);
    assert.equal(result, 108);
  });

  it('devrait retourner 109 pour le niveau 205', () => {
    const result = computeStrength(205);
    assert.equal(result, 109);
  });

  it('devrait retourner 168 pour le niveau 500', () => {
    const result = computeStrength(500);
    assert.equal(result, 168);
  });

  it('devrait lancer une erreur pour le niveau 0', () => {
    assert.throws(() => computeStrength(0), {
      name: 'Error',
      message: 'Le niveau doit être un entier positif'
    });
  });
});
