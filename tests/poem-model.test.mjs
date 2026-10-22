import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizePoem, parsePoemInput, PoemValidationError } from '../src/lib/poem-model.ts';

const input = {
  title: ' A poem ', date: '2020-08-15', content: 'First line  \nSecond line\n', poemNumber: 1,
};

test('legacy records load with defaults, serializable IDs, and correct boolean values', () => {
  const poem = normalizePoem({ _id: { toString: () => 'abc' }, location: ' Unknown ', isFeatured: 'false' });
  assert.equal(poem._id, 'abc');
  assert.equal(poem.title, 'Untitled');
  assert.equal(poem.isFeatured, false);
  assert.equal(poem.location, undefined);
  assert.equal(poem.dedication, undefined);
  assert.deepEqual(poem.categories, []);
  assert.equal(normalizePoem({ _id: 'abc', isFeatured: 'true' }).isFeatured, true);
});

test('reading metadata preserves custom places and deduplicates valid category slugs', () => {
  const poem = normalizePoem({
    _id: 'abc', location: ' Another place ', dedication: ' For Jane ',
    categories: ['nature', 'nature', null, 'Invalid Slug', 'family'],
  });
  assert.equal(poem.location, 'Another place');
  assert.equal(poem.dedication, 'For Jane');
  assert.deepEqual(poem.categories, ['nature', 'family']);
});

test('writes trim metadata, preserve Markdown whitespace, and omit absent optional fields', () => {
  const poem = parsePoemInput({ ...input, _id: 'untrusted', extra: 'ignored' }, []);
  assert.equal(poem.title, 'A poem');
  assert.equal(poem.content, input.content);
  assert.equal(poem.isFeatured, false);
  assert.deepEqual(poem.categories, []);
  assert.equal('location' in poem, false);
  assert.equal('_id' in poem, false);
  assert.equal('extra' in poem, false);
});

test('writes allow places beyond suggestions and registered categories', () => {
  const poem = parsePoemInput({
    ...input, location: ' Elsewhere ', dedication: ' For Jane ', categories: ['nature', 'nature'],
  }, ['nature']);
  assert.equal(poem.location, 'Elsewhere');
  assert.equal(poem.dedication, 'For Jane');
  assert.deepEqual(poem.categories, ['nature']);
  assert.equal(parsePoemInput({ ...input, location: 'Unknown', dedication: ' ' }, []).location, undefined);
});

test('writes reject malformed fields and unregistered category slugs', () => {
  for (const value of [null, [], 'poem', { ...input, title: ' ' },
    { ...input, content: '' }, { ...input, date: 'not a date' },
    { ...input, poemNumber: 0 }, { ...input, poemNumber: 1.5 },
    { ...input, location: 1 }, { ...input, dedication: [] },
    { ...input, isFeatured: 'false' }, { ...input, categories: 'nature' },
    { ...input, categories: ['Nature'] }, { ...input, categories: ['unregistered'] },
  ]) {
    assert.throws(() => parsePoemInput(value, ['nature']), PoemValidationError);
  }
});
