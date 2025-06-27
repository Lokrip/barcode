import { describe, it, expect } from 'vitest';
import * as components from './index';

describe('component exports', () => {
    it('should export Avatar', () => {
        expect(components.Switch).toBeDefined();
    });

});
