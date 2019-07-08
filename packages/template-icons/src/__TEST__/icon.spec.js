import React from "react";
import { render } from "@testing-library/react";
import * as Icons from "../index.ts";

Object.entries(Icons).forEach(([name, Icon]) => {
  describe(`${name}`, () => {
    describe(`valid`, () => {
      it(`renders an svg element`, () => {
        const { container } = render(<Icon />);
        expect(container.firstChild.nodeName).toBe(`svg`);
      });

      it(`includes a custom class when passed in via the 'className' prop`, () => {
        const { container } = render(<Icon className="custom" />);
        expect(container.firstChild.classList.contains(`custom`)).toBeTruthy();
      });
    });
  });
});
