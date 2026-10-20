import { describe, expect, it } from 'vitest';
import { pairings } from '@/lib/catalog';

describe('Body oil pairings', () => {
  it('pairs Vanilla Bean with Unscented, Vanilla Bean and Brown Sugar Vanilla', () => {
    expect(pairings.find(pair => pair.oil === 'vanilla-bean-oil')?.butters).toEqual(['unscented', 'vanilla-bean', 'brown-sugar-vanilla']);
  });
  it('pairs Mahogany Teakwood only with Unscented and Mahogany Teakwood', () => {
    expect(pairings.find(pair => pair.oil === 'mahogany-teakwood-oil')?.butters).toEqual(['unscented', 'mahogany-teakwood']);
  });
  it('pairs Unscented oil with every body butter option', () => {
    expect(pairings.find(pair => pair.oil === 'unscented-oil')?.butters).toEqual(['brown-sugar-vanilla', 'mahogany-teakwood', 'vanilla-bean', 'unscented']);
  });
});
