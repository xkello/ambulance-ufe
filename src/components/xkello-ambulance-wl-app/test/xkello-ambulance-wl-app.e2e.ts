import { newE2EPage } from '@stencil/core/testing';

describe('xkello-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkello-ambulance-wl-app></xkello-ambulance-wl-app>');

    const element = await page.find('xkello-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
