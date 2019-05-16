import { TabSeparator } from '../../lib/TabSeparator';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('TabSeparator', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabSeparator />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
