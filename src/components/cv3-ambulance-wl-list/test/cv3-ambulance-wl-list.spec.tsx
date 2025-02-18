import { newSpecPage } from '@stencil/core/testing';
import { Cv3AmbulanceWlList } from '../cv3-ambulance-wl-list';

describe('cv3-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv3AmbulanceWlList],
      html: `<cv3-ambulance-wl-list></cv3-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv3-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv3-ambulance-wl-list>
    `);
  });
});
