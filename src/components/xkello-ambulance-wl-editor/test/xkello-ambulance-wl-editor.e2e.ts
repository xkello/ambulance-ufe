import { newE2EPage } from '@stencil/core/testing';

describe('xkello-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkello-ambulance-wl-editor></xkello-ambulance-wl-editor>');

    const element = await page.find('xkello-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
