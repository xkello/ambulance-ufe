import { newSpecPage } from '@stencil/core/testing';
import { Cv3AmbulanceWlApp } from '../cv3-ambulance-wl-app';

  describe('cv3-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [Cv3AmbulanceWlApp],
          html: `<cv3-ambulance-wl-app base-path="/"></cv3-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cv3-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [Cv3AmbulanceWlApp],
          html: `<cv3-ambulance-wl-app base-path="/ambulance-wl/"></cv3-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv3-ambulance-wl-list");
  });
});
