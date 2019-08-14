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

      it(`has default witdh and height`, () => {
        const { container } = render(<Icon />);
        expect(container.firstChild.getAttribute(`width`)).toEqual(`32`);
        expect(container.firstChild.getAttribute(`height`)).toEqual(`32`);
      });

      it(`scales the width and height when the scale prop is set to a numeric value`, () => {
        const { container } = render(<Icon scale={2} />);
        expect(container.firstChild.getAttribute(`width`)).toEqual(`64`);
        expect(container.firstChild.getAttribute(`height`)).toEqual(`64`);
      });
    });
  });
});
