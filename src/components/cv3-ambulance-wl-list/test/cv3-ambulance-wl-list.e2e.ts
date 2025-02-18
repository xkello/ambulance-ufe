import { newE2EPage } from '@stencil/core/testing';

describe('cv3-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv3-ambulance-wl-list></cv3-ambulance-wl-list>');

    const element = await page.find('cv3-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
