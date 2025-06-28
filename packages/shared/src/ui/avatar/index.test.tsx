import { describe, it, expect } from 'vitest';
import * as components from './index';

describe('component exports', () => {
    it('should export Avatar', () => {
        expect(components.Avatar).toBeDefined();
    });

    it('should export AvatarGroup', () => {
        expect(components.AvatarGroup).toBeDefined();
    });
});
