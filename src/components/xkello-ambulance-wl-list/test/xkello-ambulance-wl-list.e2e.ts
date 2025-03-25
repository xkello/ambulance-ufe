import { newE2EPage } from '@stencil/core/testing';

describe('xkello-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkello-ambulance-wl-list></xkello-ambulance-wl-list>');

    const element = await page.find('xkello-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
